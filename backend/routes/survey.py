from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
import secrets
import string
from datetime import datetime

router = APIRouter()

# DB will be injected from main server
db = None

def set_db(database):
    global db
    db = database

class SurveySubmission(BaseModel):
    # Personal Info
    name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=10)
    email: Optional[EmailStr] = None
    age: int = Field(..., ge=13, le=100)
    gender: str = Field(..., pattern="^(male|female)$")
    location: str = Field(..., min_length=2)
    
    # Preferences & Problems
    perfumeQuality: str  # NEW: تركيبة أو أورجينال
    favoritePerfumes: str = Field(..., min_length=3)
    purchaseFrequency: str
    mainProblem: str = Field(..., min_length=10)
    priceRange: str
    perfumeType: str
    discoveryMethod: str
    wishList: str = Field(..., min_length=10)

def generate_discount_code():
    """Generate a unique discount code"""
    prefix = "ROUH"
    random_part = ''.join(secrets.choice(string.ascii_uppercase + string.digits) for _ in range(6))
    return f"{prefix}{random_part}"

@router.post("/submit")
async def submit_survey(submission: SurveySubmission):
    try:
        # Normalize phone number (remove spaces and special chars)
        phone_normalized = ''.join(filter(str.isdigit, submission.phone))
        
        # Check if phone number already used
        existing = await db.survey_responses.find_one({"phone_normalized": phone_normalized})
        
        if existing:
            return {
                "success": False,
                "message": "هذا الرقم حصل على الخصم مسبقاً. كل رقم يمكنه الحصول على الخصم مرة واحدة فقط."
            }
        
        # Generate unique discount code
        discount_code = generate_discount_code()
        
        # Prepare data for storage
        survey_data = submission.dict()
        survey_data['phone_normalized'] = phone_normalized
        survey_data['discountCode'] = discount_code
        survey_data['isUsed'] = False
        survey_data['createdAt'] = datetime.utcnow()
        survey_data['usedAt'] = None
        
        # Save to database
        result = await db.survey_responses.insert_one(survey_data)
        
        if result.inserted_id:
            return {
                "success": True,
                "discountCode": discount_code,
                "message": "تم حفظ بياناتك بنجاح"
            }
        else:
            raise Exception("Failed to save data")
            
    except Exception as e:
        print(f"Error in submit_survey: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="حدث خطأ أثناء حفظ البيانات. الرجاء المحاولة مرة أخرى."
        )

@router.get("/responses")
async def get_all_responses(limit: int = 100, skip: int = 0):
    """Get all survey responses (admin endpoint)"""
    try:
        responses = await db.survey_responses.find().sort("createdAt", -1).limit(limit).skip(skip).to_list(limit)
        
        # Convert ObjectId to string
        for response in responses:
            response['_id'] = str(response['_id'])
        
        total = await db.survey_responses.count_documents({})
        
        return {
            "success": True,
            "total": total,
            "data": responses
        }
    except Exception as e:
        print(f"Error in get_all_responses: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch responses")

@router.post("/mark-used/{discount_code}")
async def mark_discount_used(discount_code: str):
    """Mark a discount code as used"""
    try:
        result = await db.survey_responses.update_one(
            {"discountCode": discount_code},
            {"$set": {"isUsed": True, "usedAt": datetime.utcnow()}}
        )
        
        if result.modified_count > 0:
            return {"success": True, "message": "تم تحديث الكود بنجاح"}
        else:
            return {"success": False, "message": "الكود غير موجود"}
    except Exception as e:
        print(f"Error in mark_discount_used: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update discount code")

from fastapi import APIRouter
from models.schemas import PredictionRequest

router = APIRouter()

@router.post("/predict")

def predict(data: PredictionRequest):

    sqft = data.sqft
    bhk = data.bhk
    age = data.age
    metro = data.metro_distance

    predicted_price = (
        sqft * 8000
        + bhk * 500000
        - age * 20000
        - metro * 100000
    )

    return {
        "predicted_price": predicted_price
    }
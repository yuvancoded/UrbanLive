
from pydantic import BaseModel

class PriceRequest(BaseModel):
    location: str
    size: int
    bedrooms: int

class LocationRequest(BaseModel):

    lat: float
    lon: float


class PredictionRequest(BaseModel):

    sqft: float
    bhk: int
    age: float
    metro_distance: float
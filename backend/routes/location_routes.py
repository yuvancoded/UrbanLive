from fastapi import APIRouter
from models.schemas import LocationRequest

from services.weather_service import get_weather
from services.aqi_service import get_aqi
from services.livability_service import calculate_livability

router = APIRouter()

@router.post("/location-data")

def location_data(location: LocationRequest):

    lat = location.lat
    lon = location.lon

    weather = get_weather(lat, lon)

    aqi = get_aqi(lat, lon)

    livability = calculate_livability(
        aqi,
        weather["temperature"]
    )

    return {
        "weather": weather,
        "aqi": aqi,
        "livability": livability
    }
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services.weather_service import get_weather
from services.aqi_service import get_aqi
from services.livability_service import calculate_livability
from services.price_service import predict_price
from models.schemas import LocationRequest


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "UrbanLive API Running"}


@app.post("/location-data")
def get_location_data(location: LocationRequest):

    lat = location.lat
    lon = location.lon

    weather = get_weather(lat, lon)
    aqi = get_aqi(lat, lon)

    livability = calculate_livability(aqi, weather["temperature"])

    return {
        "weather": weather,
        "aqi": aqi,
        "livability": livability
    }


from models.schemas import PriceRequest

@app.post("/predict-price")
def get_price(data: dict):

    try:
        price = predict_price(
            data.get("location"),
            data.get("size"),
            data.get("bedrooms"),
            data.get("baths", 2)
        )

        return {"predicted_price": price}

    except Exception as e:
        return {"error": str(e)}

from services.chat_service import ask_urby

@app.post("/chat")
def chat(data: dict):

    user_msg = data.get("message")

    reply = ask_urby(user_msg)

    return {"reply": reply}
      
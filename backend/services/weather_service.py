import requests

API_KEY = "326e6f55526cea5d78daeda9b43a7262"

def get_weather(lat: float, lon: float):

    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric"

    response = requests.get(url)

    data = response.json()

    print("Weather API response:", data)

    try:

        weather_data = {
            "temperature": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "description": data["weather"][0]["description"],
            "wind_speed": data["wind"]["speed"]
        }

        return weather_data

    except Exception as e:

        print("Weather parsing error:", e)

        return {
            "temperature": None,
            "humidity": None,
            "description": "Weather unavailable",
            "wind_speed": None
        }
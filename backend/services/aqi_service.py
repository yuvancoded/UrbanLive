import requests

API_KEY = "326e6f55526cea5d78daeda9b43a7262"

def get_aqi(lat: float, lon: float):

    try:

        url = f"https://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_KEY}"

        response = requests.get(url)

        data = response.json()

        aqi_value = data["list"][0]["main"]["aqi"]

        return aqi_value

    except Exception as e:

        return None
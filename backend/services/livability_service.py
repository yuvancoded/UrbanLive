def calculate_livability(aqi, temperature):

    if aqi is None or temperature is None:
        return 0

    # AQI scoring
    aqi_score = max(0, 10 - (aqi * 2))

    # Temperature scoring
    if 20 <= temperature <= 30:
        temp_score = 10
    elif 15 <= temperature <= 35:
        temp_score = 7
    else:
        temp_score = 4

    livability = (aqi_score * 0.6) + (temp_score * 0.4)

    return round(livability, 2)
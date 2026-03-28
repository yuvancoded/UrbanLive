import pickle
import pandas as pd

# Load model + columns
with open("model.pkl", "rb") as f:
    model, columns = pickle.load(f)


def predict_price(location, size, bedrooms, baths=2):

    # Normalize location
    location = location.strip().lower()

    # Create input dict
    input_data = {col: 0 for col in columns}

    # Fill base features
    input_data['size'] = size
    input_data['beds'] = bedrooms
    input_data['baths'] = baths

    # Set correct city column
    city_col = f"city_{location}"
    if city_col in input_data:
        input_data[city_col] = 1

    # Convert to DataFrame
    input_df = pd.DataFrame([input_data])

    # Predict
    prediction = model.predict(input_df)[0]

    return round(prediction, 2)
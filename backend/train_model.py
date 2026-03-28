import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Load dataset
df = pd.read_csv("data/housing.csv")

# -------------------------------
# 🔥 CLEAN DATA
# -------------------------------

# Clean size (e.g. "1200 sqft" or "800-1200 sqft")
def clean_size(x):
    try:
        x = str(x).replace("sqft", "").strip()
        if "-" in x:
            a, b = x.split("-")
            return (float(a) + float(b)) / 2
        return float(x)
    except:
        return None

df['size'] = df['size'].apply(clean_size)

# Convert numeric columns
df['price'] = pd.to_numeric(df['price'], errors='coerce')
df['beds'] = pd.to_numeric(df['beds'], errors='coerce')
df['baths'] = pd.to_numeric(df['baths'], errors='coerce')

# Normalize city names
df['city'] = df['city'].astype(str).str.strip().str.lower()

# Drop invalid rows
df = df.dropna(subset=['size', 'beds', 'baths', 'price', 'city'])

# -------------------------------
# 🔥 ENCODE CITY
# -------------------------------
df = pd.get_dummies(df, columns=['city'])

# -------------------------------
# 🔥 FEATURES
# -------------------------------
feature_cols = ['size', 'beds', 'baths'] + [col for col in df.columns if col.startswith('city_')]

X = df[feature_cols]
y = df['price']

# -------------------------------
# 🔥 TRAIN MODEL
# -------------------------------
model = LinearRegression()
model.fit(X, y)

# -------------------------------
# 🔥 SAVE MODEL + COLUMNS
# -------------------------------
with open("model.pkl", "wb") as f:
    pickle.dump((model, feature_cols), f)

print("Model trained successfully ✅")
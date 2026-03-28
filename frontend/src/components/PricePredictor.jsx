import { useState } from "react";
import axios from "axios";

function PricePredictor() {
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [baths, setBaths] = useState("");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    try {
      setLoading(true);

      const res = await axios.post("http://127.0.0.1:8000/predict-price", {
        location,
        size: Number(size),
        bedrooms: Number(bedrooms),
        baths: Number(baths),
      });

      setPrice(res.data.predicted_price);
    } catch (err) {
      console.error(err);
      alert("Prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-6">

      <h2 className="text-xl font-semibold mb-4">
        💰 Price Prediction
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="City (e.g. bangalore)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />

        <input
          type="number"
          placeholder="Size (sqft)"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />

        <input
          type="number"
          placeholder="Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />

        <input
          type="number"
          placeholder="Baths"
          value={baths}
          onChange={(e) => setBaths(e.target.value)}
          className="p-2 rounded bg-gray-700"
        />

      </div>

      <button
        onClick={handlePredict}
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 p-2 rounded-lg"
      >
        {loading ? "Predicting..." : "Predict Price"}
      </button>

      {/* 🔥 OUTPUT */}
      {price && (
        <div className="mt-4 bg-green-600 p-3 rounded-lg text-center">
          Predicted Price: ₹ {price.toLocaleString("en-IN")}
        </div>
      )}

    </div>
  );
}

export default PricePredictor;
import { useState } from "react";
import API from "../api/api";

function PriceModal({ isOpen, onClose }) {

  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePredict = async () => {
    try {
      setLoading(true);

      const res = await API.post("/predict-price", {
        location,
        size: Number(size),
        bedrooms: Number(bedrooms)
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[400px]">

        <h2 className="text-xl mb-4">🏠 Predict Property Price</h2>

        {/* Inputs */}
        <input
          type="text"
          placeholder="City (e.g. Mumbai)"
          className="w-full mb-3 p-2 rounded bg-gray-800"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Size (sqft)"
          className="w-full mb-3 p-2 rounded bg-gray-800"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <input
          type="number"
          placeholder="Bedrooms (e.g. 2, 3)"
          className="w-full mb-4 p-2 rounded bg-gray-800"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex justify-between">

          <button
            onClick={handlePredict}
            className="bg-blue-500 px-4 py-2 rounded"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>

          <button
            onClick={onClose}
            className="bg-gray-600 px-4 py-2 rounded"
          >
            Close
          </button>

        </div>

        {/* Result */}
        {price && (
          <div className="mt-4 text-green-400 text-lg">
            💰 Estimated Price: ₹{price}
          </div>
        )}

      </div>

    </div>
  );
}

export default PriceModal;
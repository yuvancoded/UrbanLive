import { useState } from "react";

import Navbar from "../components/Navbar";
import MapComponent from "../components/MapComponent";
import WeatherCard from "../components/WeatherCard";
import AQICard from "../components/AQICard";
import LivabilityRadial from "../components/LivabilityRadial";
import PricePredictor from "../components/PricePredictor"; 

function Dashboard() {

  const [data, setData] = useState(null);

  const handleReset = () => {
    setData(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">

      <Navbar />

      {/* Reset Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleReset}
          disabled={!data}
          className={`px-4 py-2 rounded-lg transition ${
            data
              ? "bg-red-500 hover:bg-red-600"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Reset
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <WeatherCard data={data} />
        <AQICard data={data} />
        <LivabilityRadial data={data} />
      </div>

      

      {/* Map */}
      <MapComponent setData={setData} />

   {/* 🔥 NEW: Price Predictor */}
      <PricePredictor />

    </div>
  );
}

export default Dashboard;
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Explore() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "0a5c7905eefe45939f96129d30a6c018"; // replace later

  const fetchNews = async () => {
    try {
      const res = await axios.get(
       
`https://newsapi.org/v2/everything?q=real estate india OR property market india&sortBy=publishedAt&pageSize=12&apiKey=${API_KEY}`
      );

      setNews(res.data.articles || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNews();

    // 🔥 AUTO REFRESH EVERY 60s
    const interval = setInterval(fetchNews, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8">

      <Navbar />

      {/* HEADER */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Explore Market News</h1>
          <p className="text-gray-400">
            Live real estate updates across cities
          </p>
        </div>

        <button
          onClick={fetchNews}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Refresh
        </button>
      </div>

      {/* LOADING */}
      {loading && <p>Loading latest news...</p>}

      {/* NEWS GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {news.map((item, index) => (
          <div
            key={index}
            className="glass overflow-hidden hover:scale-105 transition"
          >

            {/* IMAGE */}
            <img
              src={item.urlToImage || "https://source.unsplash.com/400x200/?city"}
              className="w-full h-40 object-cover"
            />

            {/* CONTENT */}
            <div className="p-4">

              <h2 className="font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-400 mb-3">
                {item.description?.slice(0, 100)}...
              </p>

              {/* FOOTER */}
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span>{item.source?.name}</span>
                <span>
                  {new Date(item.publishedAt).toLocaleTimeString()}
                </span>
              </div>

              <a
                href={item.url}
                target="_blank"
                className="text-blue-400 text-sm"
              >
                Read more →
              </a>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Explore;
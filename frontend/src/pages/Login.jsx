import { useNavigate } from "react-router-dom";
import bgImage from "../assets/login-bg.jpg";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE (IMAGE + OVERLAY) */}
      <div
        className="hidden md:flex w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-blue-900/60"></div>

        {/* Branding Text */}
        <div className="relative z-10 flex flex-col justify-end p-10 text-white">
          <h1 className="text-4xl font-bold mb-3">UrbanLive</h1>
          <p className="text-gray-300 max-w-sm">
            Discover livability, real estate insights, and smarter investments —
            all in one place.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (LOGIN CARD) */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-[#0f172a]">

        <div className="w-[360px] p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl text-white transition-all duration-500 hover:scale-[1.02]">

          {/* Heading */}
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Welcome Back
          </h2>

          {/* Inputs */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-lg bg-gray-800/70 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Google Login Placeholder */}
          <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            Continue with Google
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-6">
            New here? <span className="text-blue-400 cursor-pointer">Sign up</span>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;
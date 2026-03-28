import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const active = (path) =>
    location.pathname === path ? "text-blue-400" : "text-gray-300";

  return (
    <div className="glass p-4 flex justify-between items-center mb-6">

      {/* LEFT */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center font-bold">
          U
        </div>
        <h1 className="text-lg font-semibold">UrbanLive</h1>
      </div>

      {/* CENTER NAV */}
      <div className="flex gap-8 text-sm font-medium">

        <span
          className={`cursor-pointer ${active("/dashboard")}`}
          onClick={() => navigate("/dashboard")}
        >
          Home
        </span>

        <span
          className={`cursor-pointer ${active("/explore")}`}
          onClick={() => navigate("/explore")}
        >
          Explore
        </span>

     

<span onClick={() => navigate("/chat")} className="cursor-pointer">
  Urby
</span>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <div className="cursor-pointer text-gray-300">🔔</div>

        {/* Chat shortcut */}
        <div className="cursor-pointer text-gray-300">💬</div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Welcome,User</span>
          <div className="w-8 h-8 bg-gray-500 rounded-full" />
        </div>

      </div>
    </div>
  );
}

export default Navbar;
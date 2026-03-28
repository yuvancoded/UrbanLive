import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Chat() {

  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi, I'm Urby. Ask me anything about real estate and livability." }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {

    if (!input) return;

    const userMsg = { role: "user", text: input };

    setMessages(prev => [...prev, userMsg]);

    setInput("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        message: input
      });

      const botMsg = { role: "bot", text: res.data.reply };

      setMessages(prev => [...prev, botMsg]);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen p-8">

      <Navbar />

      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Urby AI Assistant</h1>
        <p className="text-gray-400">
          Smart real estate and livability guidance
        </p>
      </div>

      {/* CHAT BOX */}
      <div className="glass max-w-3xl mx-auto p-6 h-[500px] flex flex-col">

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-3">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[75%] ${
                msg.role === "user"
                  ? "bg-blue-500 ml-auto"
                  : "bg-white/10"
              }`}
            >
              {msg.text}
            </div>
          ))}

        </div>

        {/* INPUT */}
        <div className="flex gap-2">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about areas, pricing, livability..."
            className="flex-1 p-3 bg-gray-800 rounded-lg"
          />

          <button
            onClick={sendMessage}
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 rounded-lg"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chat;
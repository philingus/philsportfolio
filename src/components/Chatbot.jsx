import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ChatIcon, XIcon } from "@heroicons/react/outline";

const apiKey = import.meta.env.VITE_CHATBOT_API_KEY;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_CHATBOT_API_KEY}`,
          },
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        sender: "bot",
      };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([
        ...messages,
        userMessage,
        { text: "Oops! Something went wrong.", sender: "bot" },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end">
      {/* Chatbot Toggle Button */}
      <motion.button
        className="p-3 bg-electric-purple text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-80 bg-tertiary shadow-xl rounded-xl p-4 mt-3"
        >
          <h2 className="text-white font-bold text-lg">AI Chatbot</h2>
          <div className="h-60 overflow-y-auto p-2 bg-primary rounded-md">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-md ${
                  msg.sender === "user"
                    ? "bg-electric-purple text-white text-right"
                    : "bg-gray-700 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-secondary">Thinking...</p>}
          </div>
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white rounded-md"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="p-2 bg-electric-purple text-white rounded-md"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;

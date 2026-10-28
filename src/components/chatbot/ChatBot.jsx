import React, { useEffect, useRef, useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi 👋 I am Shanto's AI assistant. Ask me about skills, projects, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);

  // keep the newest message in view
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat request failed (${response.status})`);
      }

      const data = await response.json();

      const aiMessage = {
        sender: "ai",
        text: data.reply || "Sorry, I couldn't respond.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-toggle-btn" onClick={toggleChat} aria-label="Toggle chat assistant">
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>AI Portfolio Assistant</h3>
            <button onClick={toggleChat} aria-label="Close chat">✖</button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "user" : "ai"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message ai typing">
                Typing...
              </div>
            )}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage} disabled={loading}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

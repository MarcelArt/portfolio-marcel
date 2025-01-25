import { useState } from 'react';
import { FaCheck, FaRobot } from 'react-icons/fa';

function ChatbotFAB() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        text: "This is a sample bot response. Let me know if you have more questions! 😊",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Widget */}
      {isChatOpen && (
        <div className="w-80 h-96 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-cyan-400 rounded-t-lg">
            <h2 className="text-lg font-bold text-gray-900">Chat with AI Bot</h2>
            
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-gray-700 p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                    message.sender === "user"
                      ? "bg-cyan-400 text-gray-900"
                      : "bg-gray-600 text-gray-300"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-gray-800 border-t border-gray-700 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-cyan-400 hover:bg-cyan-300 text-white font-bold px-4 py-2 rounded-lg"
            >
              <FaCheck size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-cyan-400 hover:bg-cyan-300 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
        aria-label="Chat with AI Bot"
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
}

export default ChatbotFAB;

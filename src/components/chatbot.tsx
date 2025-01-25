import { useState } from 'react';
import { FaCheck, FaRobot } from 'react-icons/fa';
import { chat, ChatMessageRole } from '../api/ollama';
import { useMutation } from '@tanstack/react-query';
import Markdown from 'react-markdown';

function ChatbotFAB() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ content: 'Hi there! How can I assist you today?', role: ChatMessageRole.ASSISTANT }]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    // Add user message
    const userMessage = { content: input, role: ChatMessageRole.USER };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    return chat([...messages, userMessage]);
  };

  const mutation = useMutation({
    mutationFn: handleSendMessage,
    onSuccess({ data }) {
      console.log('data :>> ', data);
      setMessages((prev) => [...prev, data.message]);
    },
  });

  console.log('messages :>> ', messages);
  return (
    <div className='fixed bottom-5 right-5 z-50'>
      {/* Chat Widget */}
      {isChatOpen && (
        <div className='w-2xl h-180 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col'>
          {/* Header */}
          <div className='flex justify-between items-center p-4 bg-cyan-400 rounded-t-lg'>
            <h2 className='text-lg font-bold text-gray-900'>Chat with AI Bot</h2>
          </div>

          {/* Messages */}
          <div className='flex-1 overflow-y-auto bg-gray-700 p-4 space-y-4'>
            {messages.map((message) => (
              <div
                // key={message.id}
                className={`flex ${message.role === ChatMessageRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-lg px-4 py-2 rounded-lg text-sm ${
                    message.role === ChatMessageRole.USER ? 'bg-cyan-400 text-gray-900 text-right' : 'bg-gray-600 text-gray-300 text-left'
                  }`}
                >
                  <Markdown>{message.content}</Markdown>
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className='p-3 bg-gray-800 border-t border-gray-700 flex items-center space-x-2'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Type your message...'
              className='flex-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-cyan-400 outline-none'
            />
            <button onClick={() => mutation.mutate()} className='bg-cyan-400 hover:bg-cyan-300 text-white font-bold px-4 py-2 rounded-lg'>
              <FaCheck size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className='bg-cyan-400 hover:bg-cyan-300 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-300'
        aria-label='Chat with AI Bot'
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
}

export default ChatbotFAB;

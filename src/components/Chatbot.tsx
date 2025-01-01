import { useState } from 'react';
import { ChatHeader } from './chat/ChatHeader';
import { ChatContainer } from './chat/ChatContainer';
import { chatSteps } from './chat/ChatSteps';

export const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[90vw] sm:w-[400px] md:w-[450px] animate-in slide-in-from-right-2 duration-200">
          <div className="bg-white rounded-lg shadow-2xl">
            <ChatHeader onClose={() => setIsOpen(false)} />
            <ChatContainer steps={chatSteps} />
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 hover:scale-110 transition-transform duration-300"
          aria-label="فتح المحادثة"
        >
          <img 
            src="/lovable-uploads/2928ea5d-0496-42fa-b4c6-b6440e96e0f4.png"
            alt="Chat Bot"
            className="w-[50px] h-[50px] rounded-full shadow-lg"
          />
        </button>
      )}
    </>
  );
};
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Check, CreditCard, MessageCircle, Phone, Upload, MessageSquare } from 'lucide-react';

interface ChatContainerProps {
  steps: any[];
}

const TypingComponent = () => (
  <div className="typing-animation flex gap-1 px-2 py-1">
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

const CustomOption = ({ option }: { option: { value: number; label: string; link?: string } }) => {
  const getIcon = (value: number) => {
    switch (value) {
      case 1:
        return <MessageCircle className="w-4 h-4" />;
      case 2:
        return <CreditCard className="w-4 h-4" />;
      case 3:
        return <MessageSquare className="w-4 h-4" />;
      case 4:
        return <Check className="w-4 h-4" />;
      case 5:
        return <Upload className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    if (option.link) {
      window.open(option.link, '_blank');
    }
  };

  return (
    <div 
      className="flex items-center gap-2 cursor-pointer"
      onClick={handleClick}
    >
      {getIcon(option.value)}
      <span style={{ fontFamily: 'Cairo, sans-serif' }}>{option.label}</span>
    </div>
  );
};

export const ChatContainer = ({ steps }: ChatContainerProps) => (
  <ChatBot
    steps={steps}
    headerTitle="Express Come"
    placeholder="اكتب رسالتك..."
    floating={true}
    style={{ 
      width: '100%',
      height: '500px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Cairo, sans-serif',
    }}
    bubbleStyle={{
      backgroundColor: '#FF7F00',
      color: 'white',
      borderRadius: '15px',
      padding: '10px 15px',
      marginBottom: '10px',
      maxWidth: '80%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      fontSize: '16px',
      fontFamily: 'Cairo, sans-serif',
    }}
    bubbleOptionStyle={{
      background: 'linear-gradient(135deg, #fff 0%, #f3f4f6 100%)',
      color: '#1A1F2C',
      borderRadius: '12px',
      padding: '12px 15px',
      marginBottom: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '16px',
      fontFamily: 'Cairo, sans-serif',
    }}
    customDelay={1000}
    optionBubbleColor="#FF7F00"
    optionFontColor="#ffffff"
    avatarStyle={{
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      border: '2px solid #FF7F00',
    }}
    botAvatar="/lovable-uploads/2928ea5d-0496-42fa-b4c6-b6440e96e0f4.png"
    userAvatar="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231A1F2C'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E"
    customStyle={{
      background: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '15px',
      fontFamily: 'Cairo, sans-serif',
    }}
    enableMobileAutoFocus={true}
    enableSmoothScroll={true}
    speechSynthesis={{ enable: false }}
    loadingComponent={<TypingComponent />}
    className="chat-message"
    customComponent={CustomOption}
  />
);
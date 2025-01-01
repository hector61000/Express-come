import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex justify-between items-center p-2 border-b bg-[#FF7F00]/80 backdrop-blur-sm text-white rounded-t-lg">
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
        aria-label="إغلاق المحادثة"
      >
        ✕
      </button>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <h3 className="font-bold text-[18px]" style={{ fontFamily: 'Cairo, sans-serif' }}>المطور الذكي</h3>
          <span className="text-[12px] text-white/80">Express Come</span>
        </div>
        <Avatar className="h-12 w-12 border-2 border-white">
          <AvatarImage src="/lovable-uploads/2928ea5d-0496-42fa-b4c6-b6440e96e0f4.png" alt="Bot Avatar" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
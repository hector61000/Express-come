import { Button } from "./ui/button";
import { Link } from "react-scroll";

export const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row md:justify-between items-center">
        <div className="mb-2 md:mb-0">
          <img 
            src="/lovable-uploads/bfc99d87-f65d-49dc-bb0b-6ca24c7f4ec9-removebg-preview.png" 
            alt="" 
            className="h-12 md:h-16 w-auto"
          />
        </div>
        <nav className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
          <Link 
            to="portfolio" 
            smooth={true} 
            className="text-gray-800 text-base md:text-lg hover:text-[#ff6b00] transition-colors duration-300 cursor-pointer"
          >
          </Link>
          <Link 
            to="pricing" 
            smooth={true} 
            className="text-gray-800 text-base md:text-lg hover:text-[#ff6b00] transition-colors duration-300 cursor-pointer"
          >
          </Link>
          <Button 
            onClick={onContactClick} 
            variant="default"
            className="bg-[#ff6b00] hover:bg-[#ff6b00]/90 text-white text-base md:text-lg px-4 md:px-6 py-1 md:py-2"
          >
            اتصل بنا
          </Button>
        </nav>
      </div>
    </header>
  );
};
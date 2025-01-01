export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Certificates Section */}
        <div className="flex justify-center gap-8 mb-8">
          <img 
            src="/lovable-uploads/0793a6d1-be09-4d11-acc0-0efff49df9c3.png" 
            alt="W3C Certificate" 
            className="h-20 w-auto hover:opacity-80 transition-opacity duration-300 backdrop-blur-sm bg-white/30 p-2 rounded-lg"
          />
          <img 
            src="/lovable-uploads/9f86fcef-9546-402d-9a5e-0b05e92a8458.png" 
            alt="100% Guarantee" 
            className="h-20 w-auto hover:opacity-80 transition-opacity duration-300 backdrop-blur-sm bg-white/30 p-2 rounded-lg"
          />
          <img 
            src="/lovable-uploads/6e3ce121-74eb-46b5-b4ef-a2b4686dc80f.png" 
            alt="SSL Secure" 
            className="h-20 w-auto hover:opacity-80 transition-opacity duration-300 backdrop-blur-sm bg-white/30 p-2 rounded-lg"
          />
        </div>
        
        <div className="text-center">
          <div className="text-xl font-bold mb-2">Express come</div>
          <div className="text-gray-400">© {new Date().getFullYear()} جميع الحقوق محفوظة</div>
        </div>
      </div>
    </footer>
  );
};
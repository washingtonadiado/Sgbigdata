import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const phoneNumber = "+254793859234";
  const message = "Hello! I'm interested in learning more about SG Big Data's services.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppChat;
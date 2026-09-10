"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* Messenger Button */}
      <a
        href="https://m.me/kennyluxury"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat qua Messenger"
        className="w-12 h-12 rounded-full bg-[#d2a679] hover:bg-[#c49767] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>

      {/* Zalo Button */}
      <a
        href="https://zalo.me/0906222222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat qua Zalo"
        className="w-12 h-12 rounded-full bg-[#d2a679] hover:bg-[#c49767] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 font-bold text-xs"
      >
        <span>Zalo</span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:0906222222"
        aria-label="Gọi điện Hotline"
        className="w-12 h-12 rounded-full bg-[#c8a97e] hover:bg-[#b89565] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}

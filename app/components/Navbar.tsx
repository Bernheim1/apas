"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50
        bg-brand-brown/95 backdrop-blur-sm
        border-b border-brand-cream/10
        transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between md:justify-between">
          
          {/* Logo */}
          <div className="relative h-10 w-[180px] flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/logo.png"
              alt="APAS Logo"
              fill
              priority
              className="object-contain scale-[1.05]"
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#catalogo"
              className="text-brand-cream hover:text-brand-yellow transition-colors font-race text-lg tracking-wider"
            >
              Catálogo
            </a>

            <a
              href="#como-colocar"
              className="text-brand-cream hover:text-brand-yellow transition-colors font-race text-lg tracking-wider"
            >
              Cómo Colocar
            </a>

            <a
              href="#contacto"
              className="bg-brand-yellow hover:bg-brand-red text-brand-brown hover:text-white
                px-8 py-3 rounded-[25px] transition-all
                font-race text-sm uppercase tracking-wider
                hover:scale-105"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

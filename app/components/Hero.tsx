"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = ["/hero/hero-1.jpg", "/hero/hero-2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1c1917]">
      {/* Imágenes de fondo con transición suave */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-2000 ${
            index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={img}
            alt="APAS Background"
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          {/* Overlay cálido */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917]/85 via-[#292524]/75 to-[#1c1917]/90"></div>
        </div>
      ))}

      {/* Textura sutil de papel vintage */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }}
      ></div>

      {/* Líneas decorativas sutiles */}
      <div className="absolute left-0 top-1/3 w-20 h-1 bg-brand-yellow/30 rounded-r-full animate-slide-in-left"></div>
      <div className="absolute right-0 top-1/3 w-20 h-1 bg-brand-red/30 rounded-l-full animate-slide-in-right"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Mensaje principal */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Logo con contenedor moderno */}
            <div className="mb-10">
              <div className="inline-block relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-gradient-to-br from-[#292524] to-[#1c1917] p-8 rounded-2xl border border-brand-yellow/20 shadow-2xl">
                  <Image
                    src="/logo.png"
                    alt="APAS"
                    width={380}
                    height={140}
                    priority
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Headline potente pero sobrio */}
            <div className="space-y-5">
              <h1 className="font-race text-5xl md:text-6xl lg:text-7xl text-brand-cream leading-[1.1] tracking-tight">
                Arte gráfico
                <br />
                <span className="text-brand-yellow">con identidad</span>
              </h1>
              
              {/* Línea decorativa */}
              <div className="flex items-center gap-2 w-fit">
                <div className="h-1 w-16 bg-brand-red rounded-full"></div>
                <div className="h-1 w-12 bg-brand-yellow rounded-full"></div>
                <div className="h-1 w-8 bg-brand-cream/50 rounded-full"></div>
              </div>
            </div>

            {/* Subtítulo evocador */}
            <p className="text-xl md:text-2xl text-brand-cream/85 font-light max-w-xl leading-relaxed">
              Cuadros y chapas decorativas con personalidad.
              <span className="block mt-3 text-brand-yellow/70 text-base">
                Diseño vintage actualizado para espacios con carácter.
              </span>
            </p>

            {/* Features compactos */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 bg-brand-cream/5 px-4 py-3 rounded-xl border border-brand-yellow/20 backdrop-blur-sm hover:bg-brand-cream/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center border border-brand-yellow/30">
                  <span className="text-brand-yellow text-lg">✓</span>
                </div>
                <span className="text-brand-cream/80 text-sm font-medium">
                  Diseño original
                </span>
              </div>
              
              <div className="flex items-center gap-3 bg-brand-cream/5 px-4 py-3 rounded-xl border border-brand-red/20 backdrop-blur-sm hover:bg-brand-cream/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-red/20 flex items-center justify-center border border-brand-red/30">
                  <span className="text-brand-red text-lg">★</span>
                </div>
                <span className="text-brand-cream/80 text-sm font-medium">
                  Estética única
                </span>
              </div>
              
              <div className="flex items-center gap-3 bg-brand-cream/5 px-4 py-3 rounded-xl border border-brand-yellow/20 backdrop-blur-sm hover:bg-brand-cream/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center border border-brand-yellow/30">
                  <span className="text-brand-yellow text-lg">◆</span>
                </div>
                <span className="text-brand-cream/80 text-sm font-medium">
                  Estilo atemporal
                </span>
              </div>
            </div>

            {/* CTAs modernos */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#catalogo"
                className="group relative px-8 py-4 bg-brand-yellow rounded-xl text-[#1c1917] font-race tracking-[0.2em] uppercase text-sm font-bold hover:bg-brand-red hover:text-white transition-all duration-500 shadow-xl hover:shadow-brand-yellow/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Ver Colección
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              <a
                href="#contacto"
                className="group px-8 py-4 bg-transparent rounded-xl border-2 border-brand-cream/30 text-brand-cream font-race tracking-[0.2em] uppercase text-sm font-bold hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-cream/5 transition-all duration-500 hover:scale-105"
              >
                Contacto
              </a>
            </div>

          </div>

          {/* Lado derecho - Cards info modernos */}
          <div className="hidden lg:grid grid-cols-2 gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            
            {/* Info Card 1 */}
            <div className="group bg-gradient-to-br from-brand-cream/95 to-brand-cream/90 p-7 rounded-2xl border-l-4 border-brand-red relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="font-race text-4xl text-brand-brown/40 mb-3">01</div>
                <div className="text-brand-brown font-bold uppercase tracking-wider text-sm mb-2">
                  Vintage
                </div>
                <p className="text-brand-brown/70 text-xs leading-relaxed">
                  Inspiración en el diseño clásico
                </p>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="group bg-gradient-to-br from-brand-cream/95 to-brand-cream/90 p-7 rounded-2xl border-l-4 border-brand-yellow relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 mt-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="font-race text-4xl text-brand-brown/40 mb-3">02</div>
                <div className="text-brand-brown font-bold uppercase tracking-wider text-sm mb-2">
                  Artesanal
                </div>
                <p className="text-brand-brown/70 text-xs leading-relaxed">
                  Cuidado en cada detalle
                </p>
              </div>
            </div>

            {/* Info Card 3 */}
            <div className="group bg-gradient-to-br from-brand-cream/95 to-brand-cream/90 p-7 rounded-2xl border-l-4 border-brand-yellow relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="font-race text-4xl text-brand-brown/40 mb-3">03</div>
                <div className="text-brand-brown font-bold uppercase tracking-wider text-sm mb-2">
                  Carácter
                </div>
                <p className="text-brand-brown/70 text-xs leading-relaxed">
                  Piezas que expresan personalidad
                </p>
              </div>
            </div>

            {/* Info Card 4 */}
            <div className="group bg-gradient-to-br from-brand-cream/95 to-brand-cream/90 p-7 rounded-2xl border-l-4 border-brand-red relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 mt-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-yellow/5 rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="font-race text-4xl text-brand-brown/40 mb-3">04</div>
                <div className="text-brand-brown font-bold uppercase tracking-wider text-sm mb-2">
                  Contemporáneo
                </div>
                <p className="text-brand-brown/70 text-xs leading-relaxed">
                  Retro con visión moderna
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Indicadores elegantes */}
        <div className="flex justify-center gap-3 mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentImage
                  ? "w-16 h-2 bg-brand-yellow shadow-lg shadow-brand-yellow/50"
                  : "w-8 h-2 bg-brand-cream/20 hover:bg-brand-cream/40"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
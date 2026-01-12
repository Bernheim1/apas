"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full bg-[#241917] dark:bg-[#1a1311] pt-15 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 py-4 lg:py-16 min-h-screen">
        {/* Grid principal: 2 columnas en desktop, 1 en mobile */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Columna izquierda: Contenido */}
          <div
            className={`space-y-3 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >

            {/* Headline principal */}
            <h1 className="font-race text-6xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] text-brand-cream dark:text-brand-cream leading-tight tracking-wide">
              no son chapas,
              <br />
              <span className="flex flex-col lg:flex-row text-brand-yellow items-center lg:items-center justify-center lg:justify-start gap-2 lg:gap-4 mt-4">
                <span className="w-full text-8xl lg:w-auto">son</span>
                <div className="relative h-20 w-full lg:h-[6.5rem] xl:h-[7.5rem] lg:w-[320px] xl:w-[370px] flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="APAS"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </span>
            </h1>

            {/* Bento Grid Mobile - después del headline */}
            <div
              className={`lg:hidden relative mt-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              {/* Bento Grid Mobile */}
              <div className="grid grid-cols-2 grid-rows-5 gap-3 h-[500px]">
                {/* Imagen 1 */}
                <div className="row-span-3 col-start-1">
                  <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-cream shadow-2xl group">
                    <Image
                      src="/cuadros/001.jpg"
                      alt="Cuadro decorativo vintage APAS"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="50vw"
                    />
                  </div>
                </div>

                {/* Imagen 2 */}
                <div className="row-span-2 col-start-2">
                  <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-yellow shadow-2xl group">
                    <Image
                      src="/cuadros/002.jpg"
                      alt="Chapa decorativa retro APAS"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="50vw"
                    />
                  </div>
                </div>

                {/* Imagen 3 */}
                <div className="row-span-2 col-start-1 row-start-4">
                  <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-red shadow-2xl group">
                    <Image
                      src="/cuadros/005.jpg"
                      alt="Arte gráfico personalizado APAS"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="50vw"
                    />
                  </div>
                </div>

                {/* Imagen 4 */}
                <div className="row-span-3 col-start-2 row-start-3">
                  <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-cream shadow-2xl group">
                    <Image
                      src="/cuadros/007.jpg"
                      alt="Diseño retro APAS"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="50vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 lg:gap-6">
              {/* Botón primario - Ver Catálogo */}
              <a
                href="#catalogo"
                className="group relative bg-brand-yellow hover:bg-brand-red text-brand-brown hover:text-white font-race tracking-wider py-4 px-8 lg:py-5 lg:px-12 rounded-[25px] transition-all duration-300 uppercase text-sm lg:text-base shadow-xl hover:shadow-2xl hover:scale-105 dark:shadow-brand-yellow/20"
              >
                <span className="flex items-center justify-center gap-2">
                  Ver Catálogo
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>

              {/* Botón secundario - Cómo Colocar */}
              <a
                href="#como-colocar"
                className="bg-transparent hover:bg-brand-cream/10 text-brand-cream border-2 border-brand-cream/30 hover:border-brand-yellow hover:text-brand-yellow font-race tracking-wider py-4 px-8 lg:py-5 lg:px-12 rounded-[25px] transition-all duration-300 uppercase text-sm lg:text-base hover:scale-105"
              >
                Cómo Colocarlas ?
              </a>
            </div>
          </div>

          {/* Columna derecha: Bento Grid - solo visible en desktop */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            {/* Columna derecha: Bento Grid Desktop */}
            <div className="grid grid-cols-2 grid-rows-5 gap-4 lg:gap-6 h-[600px]">
              {/* Imagen 1: Izquierda arriba - 3 filas (más grande) */}
              <div className="row-span-3 col-start-1">
                <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-cream shadow-2xl group">
                  <Image
                    src="/cuadros/001.jpg"
                    alt="Cuadro decorativo vintage APAS"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Imagen 2: Derecha arriba - 2 filas (pequeña) */}
              <div className="row-span-2 col-start-2">
                <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-yellow shadow-2xl group">
                  <Image
                    src="/cuadros/002.jpg"
                    alt="Chapa decorativa retro APAS"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Imagen 3: Izquierda abajo - 2 filas (pequeña) */}
              <div className="row-span-2 col-start-1 row-start-4">
                <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-red shadow-2xl group">
                  <Image
                    src="/cuadros/005.jpg"
                    alt="Arte gráfico personalizado APAS"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Imagen 4: Derecha abajo - 3 filas (más grande) */}
              <div className="row-span-3 col-start-2 row-start-3">
                <div className="relative h-full overflow-hidden rounded-[25px] border-4 border-brand-cream shadow-2xl group">
                  <Image
                    src="/cuadros/007.jpg"
                    alt="Diseño retro APAS"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Elemento decorativo de fondo */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
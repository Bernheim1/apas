"use client";

import Image from "next/image";

export default function Colocar() {
  const steps = [
    {
      number: 1,
      title: "Preparar el Soporte",
      description:
        "Selecciona la ubicación ideal y marca los puntos donde colocarás los soportes. Asegúrate de que la superficie esté limpia y nivelada para un resultado profesional.",
      image: "/como-colocar/soporte.png",
      bgColor: "bg-[#fbb110]", // Amarillo
      textColor: "text-[#241917]",
      border: "border border-default",
    },
    {
      number: 2,
      title: "Atornillar con Cuidado",
      description:
        "Fija los soportes a la pared usando los tornillos adecuados. Asegúrate de que queden bien sujetos y nivelados antes de proceder con el siguiente paso.",
      image: "/como-colocar/atornillar.png",
      bgColor: "bg-[#ff1333]", // Rojo
      textColor: "text-white",
      border: "", // Sin borde
    },
    {
      number: 3,
      title: "Colocar tu Obra",
      description:
        "Con cuidado, coloca tu obra de arte sobre los soportes. Ajusta la posición hasta conseguir el ángulo perfecto y disfruta de tu nueva decoración.",
      image: "/como-colocar/colocar.png",
      bgColor: "bg-[#faf0e4]", // Crema
      textColor: "text-[#241917]",
      border: "border border-default",
    },
  ];

  return (
    <section id="como-colocar" className="min-h-screen bg-[#241917] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
<div className="text-center mb-16">
  <div className="inline-block bg-brand-yellow px-6 md:px-12 py-6 md:py-8 rounded-[25px] shadow-xl">
    <h2 className="font-race text-4xl md:text-5xl lg:text-6xl text-brand-brown tracking-wider">
      cómo colocar
    </h2>
  </div>
  <p className="text-brand-cream/70 text-lg max-w-2xl mx-auto mt-8 font-rajdhani px-4">
    Sigue estos simples pasos para instalar tu obra de arte de manera
    segura y profesional
  </p>
</div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col ${step.bgColor} ${step.textColor} p-6 ${step.border} rounded-[25px] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              {/* Número del paso - TODOS MARRONES */}
              <div className="mb-4">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 bg-[#241917] text-[#faf0e4] font-race text-xl rounded-[25px] shadow-lg"
                >
                  {step.number}
                </span>
              </div>

              {/* Imagen */}
              <div className="relative w-full h-64 mb-6 rounded-[25px] overflow-hidden bg-white/10">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover rounded-[25px]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              {/* Contenido */}
              <div className="flex-grow flex flex-col">
                <h5 className="mb-4 text-2xl font-bold tracking-tight font-race">
                  {step.title}
                </h5>
                    <p className="mb-6 leading-relaxed flex-grow text-lg font-rajdhani font-normal tracking-wide">
                    {step.description}
                    </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-16">
          <p className="text-brand-cream/60 text-sm mb-4">
            ¿Necesitas ayuda con la instalación?
          </p>
          <button className="bg-brand-red hover:bg-brand-yellow text-white hover:text-brand-brown font-race tracking-wider py-3 px-8 rounded-[25px] transition-all duration-300 uppercase text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
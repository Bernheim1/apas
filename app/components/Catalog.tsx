"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

interface ImageMetadata {
  title: string;
  tags: string[];
  description: string;
  images?: string[];
}

interface CatalogProps {
  images: string[];
  metadata: Record<string, ImageMetadata>;
}

// Paleta de colores expandida basada en los colores de la marca
// Amarillo #fbb110, Rojo #ff1333, Marrón #241917, Crema #faf0e4
const tagColors = [
  "bg-[#fbb110] text-[#241917]", // Amarillo original
  "bg-[#ff1333] text-white", // Rojo original
  "bg-[#241917] text-[#faf0e4]", // Marrón original
  "bg-[#f59e0b] text-[#241917]", // Naranja/Ámbar (complementa amarillo)
  "bg-[#dc2626] text-white", // Rojo más oscuro
  "bg-[#7c2d12] text-[#faf0e4]", // Marrón rojizo
  "bg-[#ea580c] text-white", // Naranja intenso
  "bg-[#92400e] text-[#faf0e4]", // Marrón medio
  "bg-[#fcd34d] text-[#241917]", // Amarillo suave
  "bg-[#be123c] text-white", // Rosa oscuro (derivado del rojo)
];

function getTagColor(tag: string): string {
  const index = tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return tagColors[index % tagColors.length];
}

export default function Catalog({ images, metadata }: CatalogProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const getImageData = (img: string) => {
    return metadata[img] || {
      title: img.replace(/\.[^/.]+$/, ""),
      tags: [],
      description: "Obra original única",
    };
  };

  // Obtener todos los tags únicos
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    images.forEach((img) => {
      getImageData(img).tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [images, metadata]);

  // Filtrar imágenes por tags y búsqueda
  const filteredImages = useMemo(() => {
    let result = images;

    // Filtrar por tags
    if (selectedTags.length > 0) {
      result = result.filter((img) => {
        const imageTags = getImageData(img).tags;
        return selectedTags.every((tag) => imageTags.includes(tag));
      });
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((img) => {
        const data = getImageData(img);
        return (
          data.title.toLowerCase().includes(query) ||
          data.description.toLowerCase().includes(query)
        );
      });
    }

    return result;
  }, [images, selectedTags, searchQuery, metadata]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
  };

  return (
    <>
      <section id="catalogo" className="min-h-screen bg-brand-cream py-12 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header del catálogo */}
          <div className="text-center mb-12 md:mb-16">
            <div className="w-full md:inline-block bg-brand-brown px-6 md:px-12 py-4 md:py-6 rounded-[25px] shadow-xl">
              <h2 className="font-race text-3xl md:text-5xl lg:text-6xl text-brand-cream tracking-wider">
                catálogo
              </h2>
            </div>
          </div>

          {/* Buscador */}
          <div className="mb-2">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-3 items-center">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Buscar por título o descripción..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pr-12 rounded-[25px] border-2 border-brand-brown/20 focus:border-brand-yellow focus:outline-none bg-white text-brand-brown placeholder:text-brand-brown/40 transition-colors"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-6 h-6 text-brand-brown/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`px-6 py-4 rounded-[25px] border-2 transition-all duration-300 flex items-center gap-2 ${
                    showFilters
                      ? "bg-brand-yellow text-brand-brown border-brand-yellow"
                      : "bg-white text-brand-brown border-brand-brown/20 hover:border-brand-yellow"
                  }`}
                  title="Filtros"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div 
            className={`mb-12 overflow-hidden transition-all duration-500 ease-in-out ${
              showFilters ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ transformOrigin: 'top' }}
          >
            <div className={`transition-transform duration-500 ease-in-out ${
              showFilters ? 'translate-y-0 scale-y-100' : '-translate-y-4 scale-y-95'
            }`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <h3 className="font-race text-brand-brown text-xl tracking-wider">
                filtrar por categoría
              </h3>
              {(selectedTags.length > 0 || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-brand-red hover:text-brand-brown transition-colors text-sm font-medium underline"
                >
                  Limpiar todo
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-[25px] font-medium transition-all duration-300 transform hover:scale-105 ${
                      isSelected
                        ? `${getTagColor(tag)} shadow-lg ring-2 ring-brand-brown`
                        : "bg-white text-brand-brown/70 hover:bg-brand-brown/10 border border-brand-brown/20"
                    }`}
                  >
                    {tag}
                    {isSelected && " ✓"}
                  </button>
                );
              })}
            </div>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mb-6">
            <p className="text-brand-brown/60 text-sm">
              {filteredImages.length === images.length
                ? `Mostrando todas las apas (${images.length})`
                : `Mostrando ${filteredImages.length} de ${images.length} apas`}
            </p>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredImages.map((img, index) => {
              const imageData = getImageData(img);
              const originalIndex = images.indexOf(img);
              return (
                <div
                  key={img}
                  className="group relative flex flex-col"
                  onMouseEnter={() => setHoveredIndex(originalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card container - altura fija */}
                  <div
                    className="bg-white rounded-[25px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                    onClick={() => {
                      setSelectedImage(img);
                      setCarouselIndex(0);
                    }}
                  >
                    {/* Imagen del producto - altura fija */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream">
                      <Image
                        src={`/cuadros/${hoveredIndex === originalIndex && imageData.images && imageData.images.length > 0 ? imageData.images[0] : img}`}
                        alt={imageData.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Indicador sutil de hover - esquina superior derecha */}
                      <div
                        className={`absolute top-3 right-3 transition-all duration-300 ${
                          hoveredIndex === originalIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        }`}
                      >
                        <div className="bg-brand-yellow text-brand-brown p-2 rounded-[25px] shadow-lg">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Badge centrado con número */}
                    <div className="flex justify-center -mt-5 relative z-10">
                      <div className="bg-brand-red text-white font-race text-base px-6 py-2 rounded-[25px] shadow-lg border-4 border-white group-hover:bg-brand-yellow group-hover:text-brand-brown transition-all duration-300">
                        # {String(originalIndex + 1).padStart(3, "0")}
                      </div>
                    </div>

                    {/* Información del producto */}
                    <div className="p-5 flex-grow flex flex-col justify-center">
                      <p className="text-brand-brown/80 text-sm text-center leading-relaxed group-hover:text-brand-brown transition-colors duration-300">
                        {imageData.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mensaje si no hay resultados */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-brown/50 text-xl mb-4">
                No se encontraron apas con los criterios seleccionados
              </p>
              <button
                onClick={clearFilters}
                className="bg-brand-red hover:bg-brand-yellow text-white hover:text-brand-brown font-race tracking-wider py-3 px-6 rounded-[25px] transition-all duration-300 uppercase text-sm"
              >
                Limpiar Filtros
              </button>
            </div>
          )}

          {/* Mensaje si no hay imágenes */}
          {(!images || images.length === 0) && (
            <div className="text-center py-20">
              <p className="text-brand-brown/50 text-xl">
                No hay apas disponibles en este momento
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de vista detallada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-brand-brown/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-[25px] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 bg-brand-red hover:bg-brand-yellow text-white hover:text-brand-brown w-10 h-10 rounded-[25px] flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              ✕
            </button>

            {/* Contenido scrolleable */}
            <div className="overflow-y-auto">
              <div className="grid md:grid-cols-2">
                {/* Imagen ampliada con carrusel */}
                <div className="relative aspect-square md:aspect-auto md:min-h-[600px] bg-brand-cream">
                  {(() => {
                    const imageData = getImageData(selectedImage);
                    const allImages = [selectedImage, ...(imageData.images || [])];
                    const currentImage = allImages[carouselIndex];
                    
                    return (
                      <>
                        <Image
                          src={`/cuadros/${currentImage}`}
                          alt={imageData.title}
                          fill
                          className="object-contain p-4 md:p-8"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        
                        {/* Controles del carrusel */}
                        {allImages.length > 1 && (
                          <>
                            {/* Botón anterior */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
                              }}
                              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-brown/80 hover:bg-brand-yellow text-white hover:text-brand-brown w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            
                            {/* Botón siguiente */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCarouselIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
                              }}
                              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-brown/80 hover:bg-brand-yellow text-white hover:text-brand-brown w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10"
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            
                            {/* Indicadores */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                              {allImages.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCarouselIndex(idx);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    idx === carouselIndex
                                      ? "bg-brand-yellow w-6"
                                      : "bg-brand-brown/40 hover:bg-brand-brown/70"
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* Detalles */}
                <div className="p-6 md:p-12 flex flex-col justify-center bg-brand-cream">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-brand-red text-white font-race text-xl md:text-2xl px-8 py-3 rounded-[25px] shadow-lg">
                        # {String(images.indexOf(selectedImage) + 1).padStart(3, "0")}
                      </div>
                    </div>
                    <div className="h-1 w-[90%] mx-auto bg-brand-red mb-6 rounded-[25px]"></div>
                    <p className="text-brand-brown/80 text-base md:text-lg mb-6 leading-relaxed">
                      {getImageData(selectedImage).description}
                    </p>
                  </div>

                  {/* Todos los tags en el modal */}
                  {getImageData(selectedImage).tags.length > 0 && (
                    <div className="mb-6">
                      <p className="font-race text-brand-brown uppercase tracking-wider mb-3 text-sm">
                        Categorías
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {getImageData(selectedImage).tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs md:text-sm px-3 py-1.5 rounded-[25px] font-medium cursor-pointer hover:scale-105 transition-transform ${getTagColor(
                              tag
                            )}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedImage(null);
                              toggleTag(tag);
                            }}
                            title={`Filtrar por ${tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/541122677318?text=${encodeURIComponent(`Hola! Me interesa consultar sobre la APA #${String(images.indexOf(selectedImage) + 1).padStart(3, "0")}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-red hover:bg-brand-yellow text-white hover:text-brand-brown font-race tracking-wider py-3 md:py-4 px-6 md:px-8 rounded-[25px] transition-all duration-300 uppercase text-xs md:text-sm shadow-lg text-center block"
                  >
                    Consultar Disponibilidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
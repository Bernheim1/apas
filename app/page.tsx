import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Colocar from "./components/Colocar";
import Navbar from "./components/Navbar";
import fs from "fs";
import path from "path";

export default function Home() {
  // Cargar imágenes en el servidor
  const imagesDir = path.join(process.cwd(), "public/cuadros");
  const images = fs
    .readdirSync(imagesDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort(); // Ordenar por nombre

  // Cargar metadata desde JSON
  const metadataPath = path.join(process.cwd(), "public/catalog-config.json");
  let metadata = {};
  try {
    const metadataContent = fs.readFileSync(metadataPath, "utf-8");
    metadata = JSON.parse(metadataContent);
  } catch (error) {
    console.warn("No se pudo cargar catalog-config.json");
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Catalog images={images} metadata={metadata} />
      <Colocar />
    </>
  );
}
// src/app/components/ContentDashboard.tsx
import React from 'react';
import Image from 'next/image';

export default function ContentDashboard() {
  interface Product {
    img: string;
    title: string;
    desc: string;
    price: string;
  }
  
  // Datos de ejemplo para los productos (podrías obtenerlos de una API)
  const lineaBlanca = [
    { img: '/img/Refrigeradora-NoFrost.jpg', title: 'Refrigeradora No Frost 300L Inoxidable', desc: 'Acabado en acero inoxidable', price: 'S/ 1.499' },
    { img: '/img/Cocina a Gas.webp', title: 'Cocina a Gas 4 Hornillas', desc: 'Con horno eléctrico', price: 'S/ 1.049' },
    { img: '/img/Lavadora Automatica 12kg.jpeg', title: 'Lavadora Automática 12kg', desc: 'Con tecnología inverter', price: 'S/ 1.999' },
    { img: '/img/Secadora de Ropa Electrica.jpeg', title: 'Secadora de Ropa Eléctrica', desc: '8kg con Sensor de Humedad', price: 'S/ 899' },
    { img: '/img/Congeladora Horizontal 200L.jpeg', title: 'Congeladora Horizontal 200L', desc: 'Interior de aluminio texturizado', price: 'S/ 1.999' },
    { img: '/img/Microondas 30L.jpg', title: 'Horno Microondas 30L con Función Grill', desc: 'Interior de acero inoxidable', price: 'S/ 204' },
    { img: '/img/Lavavajillas Empotrable.jpeg', title: 'Lavavajillas Bosch Empotrable', desc: 'Interior en acero inoxidable', price: 'S/ 2.057' },
    { img: '/img/Campana extractora.jpg', title: 'Campana Extractora 60cm', desc: 'Con filtro de carbón activado', price: 'S/ 350' },
    { img: '/img/Cocina Empotrable.jpeg', title: 'Cocina Empotrable de Inducción', desc: 'Resistente al calor', price: 'S/ 2.319' },
    { img: '/img/Refrigeradora Side By Side.avif', title: 'Refrigeradora Side by Side', desc: '500L con Dispensador de Agua', price: 'S/ 2.250' },
    { img: '/img/Lavaseca LG 20kg Lavado.avif', title: 'Lavaseca LG 20kg Lavado', desc: 'Tambor de acero inoxidable', price: 'S/ 2.650' },
  ];

  const pequenosElectrodomesticos = [
      { img: '/img/Licuadora 1.5L.webp', title: 'Licuadora de 1.5L con Vaso de Vidrio', desc: 'Cuchillas de acero inoxidable', price: 'S/ 220.99' },
      { img: '/img/Batidora Inalambrica.webp', title: 'Batidora de Mano Inalámbrica', desc: 'Con vaso medidor', price: 'S/ 39.99' },
      { img: '/img/Tostadora de pan.webp', title: 'Tostadora de Pan 2 Rebanadas', desc: 'Incluye bandeja recogemigas', price: 'S/ 87.90' },
      { img: '/img/Cafetera Programable.jpeg', title: 'Cafetera Programable 12 Tazas', desc: 'Incluye jarra de vidrio', price: 'S/ 272.99' },
      { img: '/img/Freidora de Aire.webp', title: 'Freidora Eléctrica de Aire 3.5L', desc: 'Con panel digital táctil', price: 'S/ 359.99' },
      { img: '/img/Procesador de Alimentos.jpg', title: 'Procesador de Alimentos 600W', desc: 'Con cuchillas intercambiables', price: 'S/ 599.99' },
      { img: '/img/Plancha de Vapor.webp', title: 'Plancha a Vapor Vertical', desc: 'Tanque de agua desmontable', price: 'S/ 119.90' },
      { img: '/img/Exprimidor Citrico.webp', title: 'Exprimidor de Naranjas Eléctrico', desc: 'Con medidor y tapa protectora', price: 'S/ 129.90' },
      { img: '/img/Microondas 20L.webp', title: 'Horno Microondas de 20L', desc: 'Incluye plato giratorio', price: 'S/ 339.90' },
      { img: '/img/Aspiradora de Mano.jpeg', title: 'Aspiradora de Mano Inalámbrica', desc: 'Con cepillo multiusos', price: 'S/ 109.99' },
      { img: '/img/Hervidor de Agua Electrico.webp', title: 'Hervidor de Agua Eléctrico 1.7L', desc: 'Incluye filtro antisarro', price: 'S/ 79.90' },
  ];

  const electronica = [
      { img: '/img/Televisor Samsung Smart TV.webp', title: 'Smart TV 55" 4K-UHD con sistema Android', desc: 'Con control por voz', price: 'S/ 1.699' },
      { img: '/img/Laptop Core i5.jpg', title: 'Laptop Core i5 11va Gen con 8GB RAM', desc: 'Con Carga Rapida', price: 'S/ 2.399' },
      { img: '/img/Audifonos Inalambricos.webp', title: 'Audífonos Inalámbricos Bluetooth', desc: 'Sonido envolvente', price: 'S/ 129.90' },
      { img: '/img/Tablet 10\'\' 64GB.webp', title: 'Tablet 10" 64GB WiFi + Bluetooth', desc: 'Ideal para entretenimiento', price: 'S/ 489.00' },
      { img: '/img/Camara de Seguridad.webp', title: 'Cámara de Seguridad WiFi 360°', desc: 'Con visión nocturna', price: 'S/ 179.90' },
      { img: '/img/Mouse Inalambrico Recargable.webp', title: 'Mouse Inalámbrico Recargable', desc: 'Diseño ergonómico', price: 'S/ 49.90' },
      { img: '/img/Parlante Bluetooth Portatil.webp', title: 'Parlante Bluetooth Portátil con Sonido Envolvente', desc: 'Resistente al agua', price: 'S/ 99.90' },
      { img: '/img/Cargador Rapido USB.webp', title: 'Cargador Rápido USB-C 25W', desc: 'Compatible con samsung', price: 'S/ 59.90' },
      { img: '/img/Monitor LED 24\'\'.jpeg', title: 'Monitor LED 24" Full HD', desc: 'Ideal para oficina y estudio', price: 'S/ 449.90' },
      { img: '/img/Teclado Mecanico RGB Gamer.webp', title: 'Teclado Mecánico RGB Gamer', desc: 'Iluminación personalizable', price: 'S/ 189.90' },
      { img: '/img/Reloj Inteligente.avif', title: 'Reloj Inteligente Smartwatch', desc: 'Pasos, ritmo cardíaco y más', price: 'S/ 169.00' },
  ];

  // Componente reutilizable para el item de producto en carruseles horizontales
  const ProductItem = ({ img, title, desc, price }: { img: string, title: string, desc: string, price: string }) => (
    <div className="item-producto inline-block w-[230px] h-[400px] mr-[5px] bg-white p-[15px] border border-gray-300 align-top overflow-hidden hover:shadow-xl transition duration-500 ease-in-out rounded-md">
      <div className="relative w-full h-[180px] mb-3">
        <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-t-md" />
      </div>
      <p className="titulo-producto whitespace-normal break-words overflow-visible font-semibold h-[40px] leading-tight">{title}</p>
      <p className="descripcion-producto text-gray-500 text-sm mt-2 h-[22px]">{desc}</p>
      <p className="precio-producto text-red-600 mt-3 mb-1.5 font-bold">{price}</p>
      <button className="w-full bg-white text-red-700 rounded-full border border-red-700 mt-2.5 py-2 px-4 cursor-pointer hover:bg-red-800 hover:text-white transition duration-500 ease-in-out text-sm font-medium">
        AGREGAR
      </button>
    </div>
  );

  // Componente reutilizable para carruseles de productos
  const ProductCarousel = ({ title, products }: { title: string, products: Product [] }) => (
      <div className="mb-10">
          <h2 className="Productos px-5 text-2xl font-bold mb-3">{title}</h2>
          <div className="carrusel-productos w-full overflow-x-auto whitespace-nowrap px-5 pb-5 -mb-5"> {/* Padding bottom y margin bottom negativo para ocultar scrollbar visualmente si es necesario */}
              {products.map((product, index) => (
                  <ProductItem key={index} {...product} />
              ))}
          </div>
      </div>
  );


  return (
    <div className="container mx-auto px-4"> {/* Añadido un contenedor para centrar y padding */}

      {/* Contenedores de Ofertas */}
      <div className="contenedor-ofertas flex flex-col md:flex-row justify-around p-5 mt-5 gap-4">
        <div className="oferta-box w-full md:w-[50%] h-[220px] bg-white overflow-hidden rounded-lg relative shadow">
          <Image src="/img/ContenedorOfertas-Imagen1.webp" alt="Ofertas 1" layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
        <div className="oferta-box w-full md:w-[50%] h-[220px] bg-white overflow-hidden rounded-lg relative shadow">
          <Image src="/img/ContenedorOfertas-Imagen2.jpg" alt="Ofertas 2" layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
      </div>

      {/* Anuncio Delgado */}
      <div className="anuncio-delgado flex h-20 bg-yellow-500 text-center p-2.5 font-bold justify-center items-center mt-[30px] mb-5 rounded-md shadow">
        <h1 className="text-2xl md:text-3xl m-0 p-0 text-white">
          ¡Ofertas por tiempo limitado! <i className="fa-solid fa-clock ml-2"></i>
        </h1>
      </div>

      {/* Grid de productos en oferta */}
      <div className="grid-ofertas grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 overflow-hidden">
        <div className="producto h-[250px] bg-white text-center overflow-hidden rounded-lg shadow relative">
          <Image src="/img/Producto-Oferta1.PNG" alt="Oferta Producto 1" layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
        <div className="producto h-[250px] bg-white text-center overflow-hidden rounded-lg shadow relative">
          <Image src="/img/Producto-Oferta2.PNG" alt="Oferta Producto 2" layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
        <div className="producto h-[250px] bg-white text-center overflow-hidden rounded-lg shadow relative">
          <Image src="/img/Producto-Oferta3.PNG" alt="Oferta Producto 3" layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
      </div>

      {/* 2 Anuncios random */}
      <div className="anuncios-random flex flex-col md:flex-row justify-between p-5 mb-[30px] gap-4">
        <div className="anuncio w-full md:w-[50%] h-[225px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg shadow relative">
          <Image src="/img/Anuncio-bcp.jpg" alt="Anuncio BCP" layout="fill" objectFit="cover" id="Anuncio-BCP" className="rounded-lg"/>
        </div>
        <div className="anuncio w-full md:w-[50%] h-[225px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg shadow relative">
          {/* Ajuste para Rappi si es necesario, objectFit="contain" podría ser útil si la imagen tiene espacios */}
          <Image src="/img/Anuncio-Rappi.jpg" alt="Anuncio Rappi" layout="fill" objectFit="cover" id="Anuncio-Rappi" className="rounded-lg"/>
        </div>
      </div>

      {/* Carruseles de productos */}
      <ProductCarousel title="Electrodomésticos de línea blanca" products={lineaBlanca} />
      <ProductCarousel title="Electrodomésticos pequeños" products={pequenosElectrodomesticos} />
      <ProductCarousel title="Electrónica" products={electronica} />

    </div>
  );
}
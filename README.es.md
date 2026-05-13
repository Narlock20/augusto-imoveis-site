<div align="center">

*Read this document in other languages:*
[🇺🇸 English](README.en.md) | [🇧🇷 Português](README.md) | [🇪🇸 Español](README.es.md)

<br>

# 🏢 Augusto Imóveis - Plataforma Inmobiliaria JAMStack

Plataforma inmobiliaria de alto rendimiento desarrollada con generación estática, gestión de contenido headless y procesamiento dinámico de medios, enfocada en un rendimiento extremo y en la experiencia del usuario.

<br>

<img src="./README-assets/banner/real-estate-banner.png" alt="Project Banner" width="100%"/>

<br>
<br>

## 🔗 Live Preview

**[Acceder al Sitio](https://augusto-narloch-imoveis.vercel.app/)**

<br>

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 🎯 Sobre el Proyecto y Objetivos

Este proyecto fue desarrollado como una plataforma completa para el mercado inmobiliario, combinando una interfaz de usuario moderna con una robusta arquitectura back-end.

El objetivo principal fue resolver desafíos reales del sector: crear un catálogo de navegación ultrarrápida para clientes, facilitar la gestión de anuncios para los corredores a través de un panel de control (CMS) intuitivo y garantizar la protección de los derechos de autor del material fotográfico de forma 100% automatizada.

---

## ✨ Funcionalidades e Ingeniería (Key Features)

- **Arquitectura Headless:** Las propiedades, características y galerías se registran en la base de datos de **Sanity CMS** y se sirven vía API (GROQ).
- **Procesamiento Dinámico de Imágenes (Cloudinary):**
  - Generación automática de miniaturas optimizadas para la carga del mosaico.
  - Inyección dinámica de **marca de agua responsiva (10% del ancho relativo)** en imágenes de alta resolución vía URL (`fl_layer_apply,w_0.1,fl_relative`), protegiendo los derechos de autor sin distorsionar el diseño al hacer zoom.
- **Galería Interactiva (PhotoSwipe):** Extracción de metadatos originales (ancho/alto) directamente de la base de datos para evitar un *cropping* (recorte) no deseado en la vista expandida.
- **SSG (Static Site Generation):** Build pre-renderizado con **Astro**, garantizando velocidad extrema, navegación fluida y excelentes puntuaciones en Core Web Vitals.
- **SEO Dinámico:** Generación automática de Schema Markup (`RealEstateListing`) por propiedad.

---

## 📸 Interfaz del Proyecto

### Homepage Desktop
<img src="./README-assets/screenshots/homepage-desktop.png" width="100%"/>

---

### Homepage Mobile
<div align="center">
<img src="./README-assets/screenshots/homepage-mobile.png" width="35%"/>
</div>

---

### Property Cards & Galería
<img src="./README-assets/screenshots/property-cards.png" width="100%"/>

*(Para ver la galería completa y los detalles internos, revisa la pestaña de capturas de pantalla o accede al Live Preview).*

---

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)** - Framework SSG
- **[Sanity.io](https://www.sanity.io/)** - Headless CMS 
- **[Cloudinary](https://cloudinary.com/)** - CDN y manipulación de medios On-the-Fly
- **[PhotoSwipe](https://photoswipe.com/)** - Lightbox engine
- **[Vercel](https://vercel.com/)** - Alojamiento y CI/CD
- **HTML5 & CSS3** - Estructuración y estilización personalizada


---

## 📂 Estructura del Código

La arquitectura del proyecto separa claramente la interfaz de la lógica de consumo de datos:

```text
/
├── public/                 # Assets estáticos 
├── src/
│   ├── components/         # Componentes aislados (Cards, Header, Mosaico)
│   ├── lib/
│   │   ├── cloudinary.js   # Ingeniería de inyección de capas en la CDN
│   │   └── queries.js      # Consultas GROQ para peticiones en Sanity
│   ├── pages/
│   │   ├── [slug].astro    # Rutas dinámicas para renderizar las propiedades
│   │   └── index.astro     # Home page y catálogo
└── package.json

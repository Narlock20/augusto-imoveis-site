export const propertySlugsQuery = `
  *[_type == "property"] {
    "slug": slug.current
  }
`

// Query para a Página Inicial (Alimenta os ImovelCards)
export const allPropertiesQuery = `
  *[_type == "property"] {
    _id,
    title,
    "slug": slug.current,
    price,
    city,
    neighborhood,
    bedrooms,
    bathrooms,
    priceVenda,    // ADICIONE ESTA LINHA
    priceAluguel,  // ADICIONE ESTA LINHA
    suites,          // <- Adicionado
    area,
    amenities,       // <- Adicionado
    parkingSlots,
    propertyType,
    status,
    featured,        // <- Importante para separar os destaques na Home
    mainImage
  }
`;

// Query para a Página Individual do Imóvel ([slug].astro)
export const propertyBySlugQuery = `
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    price,
    city,
    neighborhood,
    bedrooms,
    bathrooms,
    suites,          // <- Adicionado
    parkingSlots,
    description,
    mainImage,
    gallery,
    status,
    area,
    amenities,       // <- Adicionado
    propertyType
  }
`;
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'property',
  title: 'Imóveis',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'status',
      title: 'Status do Imóvel',
      description: 'Selecione se o imóvel está disponível para Venda, Aluguel ou ambos.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Venda', value: 'venda' },
          { title: 'Aluguel', value: 'aluguel' }
        ],
        layout: 'grid' 
      },
      validation: Rule => Rule.required().min(1)
    }),

    // --- CAMPOS DE PREÇO DINÂMICOS ---

    defineField({
      name: 'priceVenda',
      title: 'Preço de Venda (Investimento)',
      type: 'number',
      hidden: ({ document }) => {
        const status = document?.status as string[] | undefined;
        return !status?.includes('venda');
      },
      validation: Rule => Rule.custom((value, context) => {
        const status = context.document?.status as string[] | undefined;
        if (status?.includes('venda') && !value) {
          return 'O preço de venda é obrigatório quando o status é Venda.'
        }
        return true
      })
    }),

    defineField({
      name: 'priceAluguel',
      title: 'Preço do Aluguel (Mensal)',
      type: 'number',
      hidden: ({ document }) => {
        const status = document?.status as string[] | undefined;
        return !status?.includes('aluguel');
      },
      validation: Rule => Rule.custom((value, context) => {
        const status = context.document?.status as string[] | undefined;
        if (status?.includes('aluguel') && !value) {
          return 'O preço do aluguel é obrigatório quando o status é Aluguel.'
        }
        return true
      })
    }),

    // Campo de backup (opcional) para compatibilidade com o que você já tinha
    defineField({
      name: 'price',
      title: 'Preço Base (Geral)',
      description: 'Use este campo apenas para referências gerais ou se o imóvel tiver um valor único.',
      type: 'number',
    }),
    // ---------------------------------

    defineField({
      name: 'city',
      title: 'Cidade',
      type: 'string',
      initialValue: 'Araucária',
      options: {
        list: [
          { title: 'Araucária', value: 'Araucária' },
          { title: 'Curitiba', value: 'Curitiba' },
          { title: 'Fazenda Rio Grande', value: 'Fazenda Rio Grande' },
          { title: 'Contenda', value: 'Contenda' },
          { title: 'São José dos Pinhais', value: 'São José dos Pinhais' },
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'featured',
      title: 'Destaque na Home?',
      type: 'boolean',
      initialValue: false
    }),

    defineField({
      name: 'mainImage',
      title: 'Foto de Capa',
      description: 'Esta imagem será usada nos cards e no topo da página.',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'gallery',
      title: 'Galeria de Fotos',
      description: 'Arraste várias fotos de uma vez ou segure Ctrl para selecionar várias na janela de arquivos.',
      type: 'array',
      of: [
        { 
          type: 'image', 
          options: { 
            hotspot: true,
            storeOriginalFilename: true 
          } 
        }
      ],
      options: {
        layout: 'grid' 
      }
    }),

    defineField({
      name: 'condoFee',
      title: 'Valor do Condomínio',
      type: 'number'
    }),

    defineField({
      name: 'neighborhood',
      title: 'Bairro',
      type: 'string'
    }),

    defineField({
        name: 'propertyType',
        title: 'Tipo do imóvel',
        type: 'string',
        options: {
          list: [
            { title: 'Casa', value: 'casa' },
            { title: 'Apartamento', value: 'apartamento' },
            { title: 'Terreno', value: 'terreno' },
            { title: 'Sobrado', value: 'sobrado' },
            { title: 'Comercial', value: 'comercial' }
          ]
        }
    }),

    defineField({
      name: 'area',
      title: 'Metragem (m²)',
      type: 'number'
    }),

    defineField({
      name: 'bedrooms',
      title: 'Número de Quartos',
      type: 'number'
    }),

    defineField({
      name: 'suites',
      title: 'Número de Suítes',
      type: 'number'
    }),

    defineField({
      name: 'bathrooms',
      title: 'Número de Banheiros',
      type: 'number'
    }),

    defineField({
      name: 'parkingSlots',
      title: 'Vagas de Garagem',
      type: 'number'
    }),

    defineField({
      name: 'amenities',
      title: 'Comodidades',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Churrasqueira', value: 'churrasqueira' },
          { title: 'Sacada', value: 'sacada' },
          { title: 'Piscina', value: 'piscina' },
          { title: 'Mobiliado', value: 'mobiliado' },
          { title: 'Portaria 24h', value: 'portaria' },
          { title: 'Quintal', value: 'quintal' },
          { title: 'Aquecimento a Gás', value: 'aquecimento_gas' }
        ],
        layout: 'tags'
      }
    }),

    defineField({
      name: 'description',
      title: 'Descrição Detalhada',
      type: 'text'
    })
  ]
})
import { defineCollection, z } from 'astro:content';

const fleet = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    year: z.number(),
    capacity: z.number(),
    standingCapacity: z.number().optional(),
    category: z.enum(['microbus', 'midibus', 'fullsize', 'luxury']),
    featured: z.boolean().default(false),
    coverImage: z.string(),
    gallery: z.array(z.string()).default([]),
    equipment: z.object({
      airConditioning: z.boolean().default(false),
      wifi: z.boolean().default(false),
      usb: z.boolean().default(false),
      toilet: z.boolean().default(false),
      tv: z.boolean().default(false),
      fridge: z.boolean().default(false),
      recliningSeats: z.boolean().default(false),
      safetyBelts: z.boolean().default(true),
      luggageCompartment: z.boolean().default(true),
    }),
    specs: z.object({
      length: z.number().optional(),
      enginePower: z.string().optional(),
      euroNorm: z.string().optional(),
      licenseClass: z.string().default('D'),
    }),
    priceFrom: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['tipy', 'novinky', 'bezpecnost', 'tips', 'news', 'safety']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readTime: z.number().default(5),
    lang: z.enum(['cs', 'en']),
    keywords: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { fleet, blog };

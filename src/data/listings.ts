export type Listing = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqm: number;
  photo: string;
  photos: string[];
  description: string;
  featured?: boolean;
};

/** Unsplash photo IDs picked for cohesive warm-tone luxury architecture aesthetic. */
export const listings: Listing[] = [
  {
    id: 'villa-osiris',
    name: 'Villa Osiris',
    location: 'Cap Ferrat, France',
    price: '€24,800,000',
    beds: 7,
    baths: 8,
    sqm: 1240,
    photo: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=1100&fit=crop&auto=format&q=80',
    photos: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=1100&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=1100&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=1100&fit=crop&auto=format&q=80'
    ],
    description:
      'A 1930s Riviera villa reimagined by architect Anne Lambert. Cliff-edge lap pool, seven suites, olive groves shaded by 200-year-old pines.',
    featured: true
  },
  {
    id: 'palazzo-tiepolo',
    name: 'Palazzo Tiepolo',
    location: 'Venice, Italy',
    price: '€18,500,000',
    beds: 5,
    baths: 6,
    sqm: 890,
    photo: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=1100&fit=crop&auto=format&q=80',
    photos: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=1100&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=1100&fit=crop&auto=format&q=80'
    ],
    description:
      'A Grand Canal palazzo with frescoed ceilings, three water frontages, and its own private moorage. Restoration completed 2022.'
  },
  {
    id: 'maison-solene',
    name: 'Maison Solène',
    location: 'Provence, France',
    price: '€6,200,000',
    beds: 6,
    baths: 5,
    sqm: 780,
    photo: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=1100&fit=crop&auto=format&q=80',
    photos: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&h=1100&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&h=1100&fit=crop&auto=format&q=80'
    ],
    description:
      'Restored 18th-century farmhouse on 12 hectares of Provençal lavender. Working vineyard and orangery, walking distance to the village square.'
  },
  {
    id: 'casa-alba',
    name: 'Casa Alba',
    location: 'Formentera, Spain',
    price: '€9,400,000',
    beds: 4,
    baths: 5,
    sqm: 620,
    photo: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1600&h=1100&fit=crop&auto=format&q=80',
    photos: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1600&h=1100&fit=crop&auto=format&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=1100&fit=crop&auto=format&q=80'
    ],
    description:
      'A whitewashed cliffside residence with 180-degree Mediterranean views. Terrace pool, guesthouse, and private path to a hidden cove.'
  }
];

/** Extra signature homes for the marquee — image-only, quick view. */
export const signatureImages = [
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=1000&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=1000&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=1000&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop&auto=format&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop&auto=format&q=80'
];

export type JournalEntry = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  cover: string;
};

export const journal: JournalEntry[] = [
  {
    category: 'Field notes',
    title: 'The quiet return of the Cap Ferrat villa',
    excerpt: 'For fifteen years the market wanted glass boxes on cliffs. It is beginning, quietly, to want something else.',
    date: 'March 2026',
    readingTime: '6 min read',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format&q=80'
  },
  {
    category: 'Craft',
    title: 'Why we still meet in the kitchen',
    excerpt: 'A home is not a spreadsheet. We think you learn more in twenty minutes at the kitchen table than in a stack of comparables.',
    date: 'January 2026',
    readingTime: '4 min read',
    cover: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=800&fit=crop&auto=format&q=80'
  },
  {
    category: 'Guide',
    title: 'A short primer on buying in Italy as a non-resident',
    excerpt: 'The codice fiscale, the notary, the escrow, the tax. What our clients wish someone had written down in one place.',
    date: 'November 2025',
    readingTime: '9 min read',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop&auto=format&q=80'
  }
];

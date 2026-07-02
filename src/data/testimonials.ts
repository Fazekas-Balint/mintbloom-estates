export type Testimonial = {
  quote: string;
  name: string;
  property: string;
  year: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Éloïse turned what could have been a difficult cross-border transaction into an unhurried, considered process. Two viewings, three months, and the keys were ours.',
    name: 'Louis & Amélie D.',
    property: 'Maison Solène, Provence',
    year: 2024
  },
  {
    quote:
      'The Mintbloom team knew every stone of the palazzo — its history, its restorations, its neighbours. When you buy a home like this, that context is the whole point.',
    name: 'The Aldworth family',
    property: 'Palazzo Tiepolo, Venice',
    year: 2023
  },
  {
    quote:
      'They said no to four properties they thought would not suit us before showing us the fifth. That discipline is why we came back a second time.',
    name: 'Anonymous, London',
    property: 'Casa Alba, Formentera',
    year: 2025
  }
];

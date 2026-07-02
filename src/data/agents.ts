export type Agent = {
  name: string;
  role: string;
  languages: string;
  focus: string;
  photo: string;
  phone: string;
};

export const agents: Agent[] = [
  {
    name: 'Éloïse Marchand',
    role: 'Founding Partner',
    languages: 'French · English · Italian',
    focus: 'Riviera villas and Parisian pied-à-terres',
    photo: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=750&fit=crop&crop=faces&auto=format&q=85',
    phone: '+33 4 93 55 10 20'
  },
  {
    name: 'Alessandro Conti',
    role: 'Partner, Italian portfolio',
    languages: 'Italian · English · French',
    focus: 'Venetian palazzi and Tuscan estates',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=faces&auto=format&q=85',
    phone: '+39 041 522 88 40'
  },
  {
    name: 'Marisol Vega',
    role: 'Partner, Iberian portfolio',
    languages: 'Spanish · English · Catalan',
    focus: 'Balearic seafronts and Andalucían fincas',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&crop=faces&auto=format&q=85',
    phone: '+34 971 39 88 12'
  },
  {
    name: 'Henry Osgood',
    role: 'Director, International clients',
    languages: 'English · German',
    focus: 'Cross-border acquisitions and structuring',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=750&fit=crop&crop=faces&auto=format&q=85',
    phone: '+44 20 7930 4400'
  }
];

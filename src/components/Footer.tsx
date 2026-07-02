const offices = [
  { city: 'Nice',   address: '27 Avenue Jean Médecin, 06000',      phone: '+33 4 93 55 10 20' },
  { city: 'Venice', address: 'Palazzo Cornaro, San Marco 4046, 30124', phone: '+39 041 522 88 40' },
  { city: 'London', address: '18 St James\'s Square, SW1Y 4LB',    phone: '+44 20 7930 4400' }
];

const columns = [
  {
    title: 'Portfolio',
    links: [
      { label: 'Current listings', href: '#listings' },
      { label: 'Signature homes',  href: '#' },
      { label: 'Discretely for sale', href: '#' },
      { label: 'Recently sold',    href: '#' }
    ]
  },
  {
    title: 'The house',
    links: [
      { label: 'Our story',       href: '#story' },
      { label: 'The team',        href: '#team' },
      { label: 'The journal',     href: '#journal' },
      { label: 'Careers',         href: '#' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-hairline pt-24 pb-10">
      <div className="mb-container">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3 text-ivory">
              <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden>
                <circle cx="16" cy="16" r="15" fill="none" stroke="#c9a961" strokeWidth="1.2" />
                <text x="16" y="21" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="16" fill="#c9a961">M</text>
              </svg>
              <span className="mb-serif text-2xl italic tracking-wide">Mintbloom Estates</span>
            </a>
            <p className="mt-6 text-ivory/70 leading-relaxed max-w-sm text-sm">
              A three-decade private brokerage across France, Italy, and Spain.
              Considered listings, unhurried counsel.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {['Instagram', 'The Journal', 'LinkedIn'].map((s) => (
                <a key={s} href="#" className="text-[0.72rem] uppercase tracking-[0.16em] text-ivory/60 hover:text-gold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <h4 className="mb-eyebrow">{c.title}</h4>
              <ul className="mt-6 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-ivory/80 hover:text-gold transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h4 className="mb-eyebrow">Offices</h4>
            <ul className="mt-6 space-y-6">
              {offices.map((o) => (
                <li key={o.city} className="text-sm">
                  <div className="mb-serif italic text-xl text-ivory">{o.city}</div>
                  <div className="mt-1 text-ivory/60 leading-relaxed">{o.address}</div>
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="mt-1 block font-mono text-xs text-ivory/70 hover:text-gold transition-colors">
                    {o.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© 1987–2026 Mintbloom Estates. All properties represented under an exclusive mandate.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ivory transition-colors">Privacy</a>
            <a href="#" className="hover:text-ivory transition-colors">Terms</a>
            <a href="#" className="hover:text-ivory transition-colors">Cookies</a>
            <span className="mb-serif italic text-gold">Membre FNAIM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

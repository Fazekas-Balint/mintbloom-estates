import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Portfolio',      href: '#listings' },
  { label: 'Story',          href: '#story' },
  { label: 'The team',       href: '#team' },
  { label: 'Journal',        href: '#journal' },
  { label: 'Contact',        href: '#contact' }
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 });
  else (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={[
          'fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,padding] duration-500',
          scrolled
            ? 'bg-canvas/80 backdrop-blur-md py-3'
            : 'bg-transparent py-6'
        ].join(' ')}
      >
        <div className="mb-container flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); scrollTo('#top'); }}
            className="flex items-center gap-3 text-ivory"
          >
            <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden>
              <circle cx="16" cy="16" r="15" fill="none" stroke="#c9a961" strokeWidth="1.2" />
              <text x="16" y="21" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="16" fill="#c9a961">M</text>
            </svg>
            <span className="mb-serif text-xl tracking-wide italic">Mintbloom</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="text-[0.72rem] uppercase tracking-[0.24em] text-ivory/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+33493551020" className="text-[0.72rem] tracking-[0.14em] text-ivory/60 hover:text-ivory transition-colors">
              +33 4 93 55 10 20
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="mb-btn-primary"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              Schedule viewing
            </a>
          </div>

          <button
            className="md:hidden grid h-10 w-10 place-items-center text-ivory"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-px w-6 bg-ivory transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-px w-6 bg-ivory transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-ivory transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-canvas"
          >
            <div className="mb-container pt-24 pb-12 flex flex-col h-full">
              <nav className="flex-1 flex flex-col gap-6 mt-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); setOpen(false); scrollTo(l.href); }}
                    className="mb-serif italic text-4xl text-ivory hover:text-gold transition-colors"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="border-t border-hairline pt-6 mt-6 flex flex-col gap-4">
                <a href="tel:+33493551020" className="text-sm text-ivory/70">+33 4 93 55 10 20</a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); setOpen(false); scrollTo('#contact'); }}
                  className="mb-btn-primary self-start"
                >
                  Schedule viewing
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

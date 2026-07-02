import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, inViewProps } from '../lib/motion';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const t = testimonials[i]!;

  return (
    <section className="py-28 md:py-40 bg-canvas-2">
      <div className="mb-container">
        <motion.div variants={fadeUp} {...inViewProps} className="max-w-3xl mx-auto text-center">
          <p className="mb-eyebrow">Clients, in their words</p>

          <div className="mt-8 min-h-[240px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-serif italic text-2xl md:text-4xl leading-[1.25]"
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.footer
              key={t.name + '_meta'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 flex items-center justify-center gap-3 text-sm text-ivory/70"
            >
              <span>{t.name}</span>
              <span className="h-px w-6 bg-ivory/20" />
              <span className="italic mb-serif text-gold">{t.property}</span>
              <span className="h-px w-6 bg-ivory/20" />
              <span>{t.year}</span>
            </motion.footer>
          </AnimatePresence>
        </motion.div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            onClick={() => setI((n) => (n - 1 + total) % total)}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ivory/70 hover:text-gold hover:border-gold transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={[
                  'h-px transition-all',
                  idx === i ? 'w-8 bg-gold' : 'w-4 bg-ivory/25 hover:bg-ivory/50'
                ].join(' ')}
              />
            ))}
          </div>
          <button
            onClick={() => setI((n) => (n + 1) % total)}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ivory/70 hover:text-gold hover:border-gold transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { fadeUp, imageReveal, staggerParent, inViewProps } from '../lib/motion';
import { listings } from '../data/listings';

export function FeaturedListings() {
  return (
    <section id="listings" className="py-28 md:py-40">
      <div className="mb-container">
        <motion.header
          variants={fadeUp}
          {...inViewProps}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <p className="mb-eyebrow">Portfolio · Spring 2026</p>
            <h2 className="mt-4 mb-serif text-4xl md:text-6xl leading-[1.05]">
              Four homes, four <em>stories</em>.
            </h2>
          </div>
          <p className="text-ivory/70 max-w-md leading-relaxed">
            A small book, opened often. We take on twelve to eighteen listings a year — never more.
          </p>
        </motion.header>

        <motion.div
          variants={staggerParent}
          {...inViewProps}
          className="grid gap-x-6 gap-y-16 md:grid-cols-2"
        >
          {listings.map((l, i) => (
            <motion.article
              key={l.id}
              variants={fadeUp}
              className={`group ${i % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <a href={`#${l.id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    variants={imageReveal}
                    src={l.photo}
                    alt={l.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-canvas/80 backdrop-blur-sm px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/85">Available</span>
                  </div>
                  {l.featured && (
                    <span className="absolute top-4 right-4 rounded-sm bg-gold px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.2em] font-medium text-canvas">
                      Signature
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-eyebrow">{l.location}</p>
                    <h3 className="mt-2 mb-serif italic text-3xl md:text-4xl leading-tight">
                      {l.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/50">Guide</div>
                    <div className="mt-2 mb-serif text-xl">{l.price}</div>
                  </div>
                </div>

                <p className="mt-4 max-w-lg text-ivory/70 leading-relaxed">
                  {l.description}
                </p>

                <div className="mt-6 flex items-center gap-6 text-[0.72rem] uppercase tracking-[0.16em] text-ivory/60">
                  <span>{l.beds} bed</span>
                  <span className="h-px w-4 bg-ivory/20" />
                  <span>{l.baths} bath</span>
                  <span className="h-px w-4 bg-ivory/20" />
                  <span>{l.sqm} m²</span>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...inViewProps}
          className="mt-20 flex justify-center"
        >
          <a href="#full-portfolio" className="mb-link-underline">
            View the entire portfolio
            <svg width="14" height="10" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M1 8h22M17 1l6 7-6 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { fadeUp, imageReveal, staggerParent, inViewProps } from '../lib/motion';
import { journal } from '../data/journal';

export function Journal() {
  return (
    <section id="journal" className="py-28 md:py-40">
      <div className="mb-container">
        <motion.header
          variants={fadeUp}
          {...inViewProps}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20"
        >
          <div>
            <p className="mb-eyebrow">The journal</p>
            <h2 className="mt-4 mb-serif text-4xl md:text-6xl leading-[1.05]">
              Field notes, <em>slowly</em>.
            </h2>
          </div>
          <a href="#archive" className="mb-link-underline shrink-0">
            All essays
            <svg width="14" height="10" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M1 8h22M17 1l6 7-6 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.header>

        <motion.div
          variants={staggerParent}
          {...inViewProps}
          className="grid gap-10 md:grid-cols-3"
        >
          {journal.map((j) => (
            <motion.article key={j.title} variants={fadeUp} className="group">
              <a href={`#${j.title}`} className="block">
                <div className="aspect-[3/2] overflow-hidden">
                  <motion.img
                    variants={imageReveal}
                    src={j.cover}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-ivory/50">
                    <span className="text-gold">{j.category}</span>
                    <span className="h-px w-4 bg-ivory/20" />
                    <span>{j.date}</span>
                  </div>
                  <h3 className="mt-3 mb-serif text-2xl leading-snug group-hover:text-gold transition-colors">
                    {j.title}
                  </h3>
                  <p className="mt-3 text-sm text-ivory/70 leading-relaxed">
                    {j.excerpt}
                  </p>
                  <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
                    {j.readingTime}
                  </p>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

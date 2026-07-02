import { motion } from 'framer-motion';
import { fadeUp, imageReveal, staggerParent, inViewProps } from '../lib/motion';
import { agents } from '../data/agents';

export function Team() {
  return (
    <section id="team" className="py-28 md:py-40 bg-canvas-2">
      <div className="mb-container">
        <motion.header
          variants={fadeUp}
          {...inViewProps}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <p className="mb-eyebrow">The team</p>
          <h2 className="mt-4 mb-serif text-4xl md:text-6xl leading-[1.05]">
            Four partners.
            <br />
            <em>One phone number</em> each.
          </h2>
          <p className="mt-6 text-ivory/70 leading-relaxed">
            Every listing has one partner attached to it — the one who saw the house, met the seller, and
            will personally answer when you call. Not a switchboard, not a queue.
          </p>
        </motion.header>

        <motion.div
          variants={staggerParent}
          {...inViewProps}
          className="grid gap-8 md:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {agents.map((a) => (
            <motion.article key={a.name} variants={fadeUp} className="group">
              <motion.div
                variants={imageReveal}
                className="relative aspect-[4/5] overflow-hidden bg-canvas-3"
              >
                <img
                  src={a.photo}
                  alt={a.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              </motion.div>

              <div className="mt-5">
                <h3 className="mb-serif italic text-2xl">{a.name}</h3>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-gold">
                  {a.role}
                </p>
                <p className="mt-4 text-sm text-ivory/70 leading-relaxed">
                  {a.focus}
                </p>
                <div className="mt-4 pt-4 border-t border-hairline space-y-1.5 text-xs text-ivory/60">
                  <div>{a.languages}</div>
                  <a href={`tel:${a.phone.replace(/\s/g, '')}`} className="block text-ivory hover:text-gold transition-colors font-mono tracking-tight">
                    {a.phone}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

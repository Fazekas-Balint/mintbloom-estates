import { motion } from 'framer-motion';
import { fadeUp, imageReveal, inViewProps } from '../lib/motion';

export function Story() {
  return (
    <section id="story" className="py-28 md:py-40 bg-canvas">
      <div className="mb-container">
        <div className="grid gap-14 md:grid-cols-12 items-center">
          <motion.div
            variants={imageReveal}
            {...inViewProps}
            className="md:col-span-6 aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=1500&fit=crop&auto=format&q=85"
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            {...inViewProps}
            className="md:col-span-6 md:pl-8 lg:pl-16"
          >
            <p className="mb-eyebrow">Our story</p>
            <h2 className="mt-4 mb-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A quiet trade,<br />practised carefully.
            </h2>

            <div className="mt-8 space-y-6 text-ivory/75 leading-relaxed text-base md:text-lg">
              <p>
                Éloïse Marchand founded Mintbloom in Nice in 1987 with three principles she still writes at the top
                of every case file: <em>know the house</em>, <em>know the buyer</em>, <em>never rush the meeting</em>.
              </p>
              <p>
                We are not an aggregator. We do not list a home we cannot show you round personally. In a given year
                we take on twelve to eighteen properties across France, Italy, and Spain — and turn down five times that.
              </p>
              <p>
                Every transaction closes with a bottle of wine at the kitchen table.
                That has not changed in thirty-eight years, and it is not about to.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
              {[
                { n: '38',  l: 'years of practice' },
                { n: '412', l: 'homes represented' },
                { n: '3',   l: 'countries, one office each' }
              ].map((s) => (
                <div key={s.l}>
                  <div className="mb-serif text-4xl md:text-5xl text-gold">{s.n}</div>
                  <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-ivory/60 leading-relaxed">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

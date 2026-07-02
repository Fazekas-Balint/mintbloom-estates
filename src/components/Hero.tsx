import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y     = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const fade  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-screen min-h-[720px] overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2200&h=1400&fit=crop&auto=format&q=85"
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-canvas/40 via-transparent to-canvas/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-canvas/40 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32"
      >
        <div className="mb-container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="mb-eyebrow"
          >
            Est. 1987 · Nice · Venice · London
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
            className="mt-6 mb-serif text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-4xl"
          >
            Where <em>chapters</em>
            <br />become homes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 1.25 }}
            className="mt-8 max-w-md text-ivory/75 leading-relaxed"
          >
            Mintbloom has represented singular homes on the Côte d'Azur and beyond
            for three decades. Private brokerage, discreet counsel, considered listings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#listings" className="mb-btn-primary">
              View the portfolio
            </a>
            <a href="#story" className="mb-btn-ghost">
              Our story
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-ivory/50">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="block h-6 w-px bg-gold"
        />
      </motion.div>
    </section>
  );
}

import { signatureImages } from '../data/listings';

/** Silent marquee of portrait images — a "wall of exceptional homes" between sections. */
export function Signature() {
  return (
    <section aria-hidden className="py-12 md:py-20 overflow-hidden bg-canvas-2">
      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="mb-marquee gap-6 pr-6">
          {[...signatureImages, ...signatureImages].map((src, i) => (
            <div key={i} className="shrink-0 h-80 md:h-[26rem] w-64 md:w-80 overflow-hidden">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

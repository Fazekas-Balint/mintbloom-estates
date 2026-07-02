import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, inViewProps } from '../lib/motion';
import { listings } from '../data/listings';

type FormState = {
  name: string;
  email: string;
  phone: string;
  property: string;
  when: string;
  message: string;
};

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  property: '',
  when: '',
  message: ''
};

export function ScheduleForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="mb-container">
        <div className="grid gap-14 md:grid-cols-12">
          <motion.div
            variants={fadeUp}
            {...inViewProps}
            className="md:col-span-5"
          >
            <p className="mb-eyebrow">Schedule a viewing</p>
            <h2 className="mt-4 mb-serif text-4xl md:text-6xl leading-[1.05]">
              A meeting, <em>not</em> a form.
            </h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              Tell us a little about what you are looking for, or which of the current listings caught your eye.
              A partner will be in touch within 24 hours to arrange a time.
            </p>

            <div className="mt-10 space-y-6 border-t border-hairline pt-8 text-sm">
              <div>
                <div className="mb-eyebrow">Head office</div>
                <p className="mt-3 text-ivory/80 leading-relaxed">
                  27 Avenue Jean Médecin<br />
                  06000 Nice, France
                </p>
              </div>
              <div>
                <div className="mb-eyebrow">Direct</div>
                <a href="tel:+33493551020" className="mt-3 block text-ivory hover:text-gold transition-colors font-mono text-base">
                  +33 4 93 55 10 20
                </a>
                <a href="mailto:hello@mintbloom.example" className="mt-1 block text-ivory hover:text-gold transition-colors font-mono text-base">
                  hello@mintbloom.example
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            {...inViewProps}
            className="md:col-span-7"
          >
            <div className="relative bg-canvas-2 p-8 md:p-12">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-12 text-center"
                  >
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold text-gold">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="mt-6 mb-serif text-3xl italic">
                      Thank you, {form.name.split(' ')[0] || 'we have your note'}.
                    </h3>
                    <p className="mt-4 text-ivory/70 max-w-md mx-auto leading-relaxed">
                      A partner will be in touch within 24 hours.
                      If it is more urgent, please call us at +33 4 93 55 10 20.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm(initial); }}
                      className="mt-8 mb-link-underline"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={submit}
                    className="grid gap-6 sm:grid-cols-2"
                  >
                    <Field label="Full name" required>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        type="text"
                        className="mb-input"
                      />
                    </Field>
                    <Field label="Email" required>
                      <input
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        type="email"
                        className="mb-input"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        type="tel"
                        className="mb-input"
                      />
                    </Field>
                    <Field label="Preferred date">
                      <input
                        value={form.when}
                        onChange={(e) => update('when', e.target.value)}
                        type="date"
                        className="mb-input"
                      />
                    </Field>
                    <Field label="Property of interest" span={2}>
                      <select
                        value={form.property}
                        onChange={(e) => update('property', e.target.value)}
                        className="mb-input appearance-none pr-10"
                      >
                        <option value="">Not sure yet — open to suggestions</option>
                        {listings.map((l) => (
                          <option key={l.id} value={l.id}>
                            {l.name} · {l.location}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Anything else we should know" span={2}>
                      <textarea
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        rows={4}
                        className="mb-input resize-none"
                      />
                    </Field>
                    <div className="sm:col-span-2 flex items-center justify-between pt-2">
                      <p className="text-xs text-ivory/50 max-w-xs leading-relaxed">
                        By sending, you agree to our discretionary handling of your enquiry.
                        We do not share details with third parties.
                      </p>
                      <button type="submit" className="mb-btn-primary">
                        Send enquiry
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .mb-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-hairline);
          color: var(--color-ivory);
          padding: 0.6rem 0;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.25s ease;
        }
        .mb-input:focus { border-bottom-color: var(--color-gold); }
        .mb-input::placeholder { color: var(--color-ivory-30); }
        .mb-input::-webkit-calendar-picker-indicator { filter: invert(0.7) sepia(1) saturate(3) hue-rotate(0deg); cursor: pointer; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  span,
  children
}: {
  label: string;
  required?: boolean;
  span?: 1 | 2;
  children: React.ReactNode;
}) {
  return (
    <label className={span === 2 ? 'sm:col-span-2' : ''}>
      <span className="block mb-eyebrow mb-2">
        {label}{required ? ' *' : ''}
      </span>
      {children}
    </label>
  );
}

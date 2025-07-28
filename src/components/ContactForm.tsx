import { useState } from "react";


const ContactForm = () => {
const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      // TODO: Wire this to your backend (/api/contact or serverless func)
      console.log('Pretend-send', data);
      await new Promise((res) => setTimeout(res, 600));
      setFormState('success');
      form.reset();
    } catch {
      setFormState('error');
    } finally {
      setTimeout(() => setFormState('idle'), 4000);
    }
  }

  return (

<section id="contact" className="mx-auto w-full max-w-3xl px-4 py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact</h2>
        <p className="mb-6 text-sm text-neutral-500">
          Tell us about your property and the type of shoot you need. We’ll reply ASAP.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black"
              placeholder="Tell us about the property, location, and what you’re looking for."
            />
          </div>

        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formState === 'submitting' ? 'Sending…' : 'Send'}
        </button>

        {formState === 'success' && (
          <p className="pt-2 text-sm text-green-600">Thanks! We’ll get back to you soon.</p>
        )}
        {formState === 'error' && (
          <p className="pt-2 text-sm text-red-600">Something went wrong. Please try again.</p>
        )}
        </form>

        <div className="mt-8 text-sm text-neutral-500">
          <p>Email: <a href="mailto:contact@example.com" className="underline">contact@example.com</a></p>
          <p>Phone: <a href="tel:+11234567890" className="underline">+1 (123) 456-7890</a></p>
        </div>
      </section>
    );
}

export default ContactForm;
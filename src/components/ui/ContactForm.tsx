export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xbdrlnrn"
      method="POST"
      className="w-full max-w-xl flex flex-col gap-4"
    >
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="rounded-md p-2 bg-black/60 text-white border border-white/20"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={5}
        className="rounded-md p-2 bg-black/60 text-white border border-white/20"
      />

      <button
        type="submit"
        className="rounded-lg bg-black px-4 py-2 text-white border border-gray-700"
      >
        Send message
      </button>
    </form>
  );
}

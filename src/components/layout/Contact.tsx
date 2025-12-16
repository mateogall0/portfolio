export default function Contact() {
  return (
    <section
      id="contact"
      className="glass w-full min-h-[400px] p-5 px-4 md:px-16 flex flex-col items-center gap-8 border-t-1 border-white/20"
    >
      <h3 className="text-2xl md:text-2xl font-bold text-center">
        Get in contact
      </h3>
      <div className="grid grid-cols-1 gap-8 items-stretch">
        <a
          href="/cv_en.pdf"
          download="Mateo Gallo CV.pdf"
          className="inline-block rounded-lg bg-black px-4 py-2 text-white"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

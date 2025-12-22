"use client";
import { MdEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import ContactForm from "@/components/ui/ContactForm"

export default function Contact() {
  return (
    <section
      id="contact"
      className="glass w-full min-h-[600px] p-5 px-4 md:px-16 flex flex-col items-center gap-8 border-t-1 border-white/20"
    >
      <h3 className="text-2xl md:text-2xl font-bold text-center">
        Get in touch with me
      </h3>
      <h4 className="text-[1.2rem] md:text-[1.2rem] font-bold text-center">
        Send me a message
      </h4>
      <ContactForm/>
      <h5 className=" font-bold text-center">
        Other means of communication
      </h5>

      <div className="grid grid-cols-2 gap-8 items-stretch text-center">
        <a
          href="/cv_en.pdf"
          download="Mateo Gallo CV.pdf"
          className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white border border-gray-700"
        >
          <FiDownload/> Download my CV
        </a>
        <a href="mailto:mateogesede@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white border border-gray-700"
        >
          <MdEmail/>Send me an email
        </a>
      </div>
    </section>
  );
}

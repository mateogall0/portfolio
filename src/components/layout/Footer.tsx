"use client";
import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 bg-black text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400 flex-shrink-0">
          © {new Date().getFullYear()} Mateo Gallo.
        </p>

        {/* Contact info / Social icons */}
        <address className="not-italic flex flex-row flex-wrap gap-4 text-white text-lg">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.href}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:text-gray-300 transition"
              >
                <Icon className="text-2xl" />
              </a>
            );
          })}
        </address>
      </div>
    </footer>
  );
}

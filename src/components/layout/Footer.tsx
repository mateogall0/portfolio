"use client";

import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 bg-black text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Mateo Gallo. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row gap-4 text-white text-lg">
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
        </div>
      </div>
    </footer>
  );
}

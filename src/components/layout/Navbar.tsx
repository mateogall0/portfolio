"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full flex justify-center">
      <nav className="w-full max-w-5xl border rounded-b-xl backdrop-blur supports-[backdrop-filter]:bg-black p-4 flex items-center justify-between overflow-visible">
        {/* Logo */}
        <div className="text-lg font-semibold">Mateo Gallo</div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="inline-block">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen((x) => !x)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
            <span className="block h-0.5 w-6 bg-black" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="w-full max-w-5xl border-x border-b p-4 md:hidden rounded-b-xl mt-[-1px]">
          <ul className="flex flex-col gap-4 text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

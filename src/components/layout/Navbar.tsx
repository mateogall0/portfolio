"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 w-full flex justify-center">
      <nav className="glass w-full max-w-5xl rounded-b-3xl p-4 flex items-center justify-between border border-white/20 border-t-0">
        {/* Logo */}
        <div className="text-lg font-semibold">Mateo Gallo</div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="inline-block justify-center text-center">
            {item.label}
          </a>
            </li>
        ))}
        </ul>
      </nav>

    </header>
  );
}

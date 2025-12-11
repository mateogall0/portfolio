"use client";
import Link from "next/link";
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
    <header className="w-full border-b backdrop-blur supports-[backdrop-filter]:bg-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        {/* Logo / Name */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Mateo Gallo
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm hover:text-neutral-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
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
        <div className="border-t p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block"
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

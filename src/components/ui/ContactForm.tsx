"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbdrlnrn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Show toast when status changes
  useEffect(() => {
    if (status) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2500);
      const clearStatus = setTimeout(() => setStatus(null), 3000);
      return () => {
        clearTimeout(timer);
        clearTimeout(clearStatus);
      };
    }
  }, [status]);

  return (
    <div className="w-full max-w-xl relative pb-10"> {/* extra bottom space */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          className="rounded-lg bg-black px-4 py-2 text-white border border-gray-700 cursor-pointer"
        >
          Send
        </button>
      </form>

      {/* Toast message */}
      {status && (
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 rounded-lg border text-sm font-medium transition-opacity duration-500 ${
            status === "success"
              ? "bg-green-900/90 border-green-500 text-green-100"
              : "bg-red-900/90 border-red-500 text-red-100"
          }`}
          style={{
            opacity: visible ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          {status === "success"
            ? "Your message was sent successfully!"
            : "Oops! Something went wrong. Please try again later."}
        </div>
      )}
    </div>
  );
}

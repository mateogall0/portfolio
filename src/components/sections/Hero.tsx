"use client";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-[50dvh] px-4 md:px-16 gap-8"
    >
      {/* Left: Image */}
      <div className="flex-shrink-0">
        <img
          src="/profile.jpg"
          alt="Mateo Gallo"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white"
        />
      </div>

      {/* Right: Text */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="md:text-3xl font-bold mb-4">
          Hi, I'm Mateo Gallo
        </h1>
        <h2 className="md:text-1xl font-bold mb-4">
          Software Developer
        </h2>
        <p className="text-lg md:text-1xl text-gray-300 mb-6">
          I design and build web applications, developer tools, and open-source projects.
        </p>
        <SocialLinks/>

      </div>
    </section>
  );
}

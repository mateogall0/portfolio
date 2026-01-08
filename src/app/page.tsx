import Hero from "@/components/sections/Hero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";


export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Hero/>
      <ProjectsGallery/>
      <Experience/>
      <Contact/>
    </>
  );
}

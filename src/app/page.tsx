import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Background from "@/components/layout/Background";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Background/>
        <Hero/>
        <ProjectsGallery/>
        <Experience/>
        <Contact/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}

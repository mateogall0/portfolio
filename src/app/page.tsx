import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import ProjectsGallery from "@/components/layout/ProjectsGallery";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero/>
        <ProjectsGallery/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}

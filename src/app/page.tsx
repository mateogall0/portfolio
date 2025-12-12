import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Hero/>
        {children}
      </body>
    </html>
  );
}

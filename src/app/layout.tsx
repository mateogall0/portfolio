import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata ={
  title: "Mateo Gallo – Software Developer",
  description:
    "Software developer building web applications, developer tools, and open-source projects.",

  authors: [{ name: "Mateo Gallo" }],
  creator: "Mateo Gallo",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Mateo Gallo – Software Developer",
    description:
      "Software developer building web applications and open-source projects.",
    type: "website",
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mateo Gallo",
              jobTitle: "Software Developer",
              url: "https://mateogall0.github.io/portfolio",
              sameAs: [
                "https://github.com/mateogall0",
                "https://www.linkedin.com/in/mateogallo/",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}

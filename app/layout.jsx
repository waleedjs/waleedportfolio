import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition"; // Ensure correct casing
import StairTranstion from "@/components/ui/StairTranstion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Head from 'next/head';

const Layout = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  </>
);

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Muhammad Waleed Zafar - Developer & Designer",
  description: "Portfolio of Muhammad Waleed Zafar - WordPress Developer & Designer specializing in WordPress, UI/UX, Shopify, Next.js, and React.",
  keywords: ["Muhammad Waleed Zafar", "WordPress Developer", "UI/UX Designer", "Shopify Developer", "Next.js", "React", "Portfolio", "Web Development", "E-commerce", "Front-end Developer"],
  authors: [{ name: "Muhammad Waleed Zafar" }],
  creator: "Muhammad Waleed Zafar",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "https://devwaleed.online",
  },
  openGraph: {
    title: "Muhammad Waleed Zafar - Developer & Designer",
    description: "Portfolio of Muhammad Waleed Zafar - WordPress Developer & Designer.",
    url: "https://devwaleed.online",
    siteName: "Muhammad Waleed Zafar Portfolio",
    images: [
      {
        url: "https://devwaleed.online/favicon.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Waleed Zafar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Waleed Zafar - Developer & Designer",
    description: "Portfolio of Muhammad Waleed Zafar - WordPress Developer & Designer.",
    images: ["https://devwaleed.online/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Waleed Zafar",
    "jobTitle": "WordPress Developer & UI/UX Designer",
    "url": "https://devwaleed.online",
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-waleed-zafar", // Add actual links if available
      "https://github.com/waleedzafar"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressCountry": "Pakistan"
    },
    "knowsAbout": [
      "WordPress Development",
      "Shopify Development",
      "UI/UX Design",
      "Next.js",
      "React.js",
      "Front-end Development"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTranstion />
        <PageTransition>{children}</PageTransition>
        {/* Floating download button */}
        <div className="fixed bottom-4 right-4 z-50">
          <Button asChild size="icon" className="rounded-full w-12 h-12">
            <a href="/waleed-zafar-resume.pdf" download>
              <FiDownload className="text-xl" />
            </a>
          </Button>
        </div>
      </body>
    </html>
  );
}

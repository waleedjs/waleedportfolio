import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition"; // Ensure correct casing
import StairTranstion from "@/components/ui/StairTranstion";

import Head from 'next/head';

const Layout = () => (
  <>
    <Head>
      <link rel="icon" href="/app/favicon.svg" type="image/svg+xml" />
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
  description: "Portfolio of Muhammad Waleed Zafar - WordPress Developer & Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTranstion />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

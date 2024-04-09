import type { Metadata } from "next";
import { Inter, Montserrat, Sofia } from "next/font/google";
import "./globals.css";
import ParticleCanvas from "@/components/home/Background";

import { Technologies } from "@/components/home/technologies";

const montserrat = Inter({ subsets: ["latin"] });

const sofia = Sofia({
  weight: ["400"],
  variable: "--sofia",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rashika Suresh",
  description: "Will transform your concepts to code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
      <body
        className={`${montserrat.className} ${sofia.variable} h-[100vh] w-full overflow-x-hidden`}
      >
        {/* <ParticleCanvas /> */}

        {children}
      </body>
    </html>
  );
}

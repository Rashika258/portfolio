import type { Metadata } from "next";
import { Inter, Sofia } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import MobileNavbar from "@/components/ui/mobile-navbar";

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
        <div className="flex h-full w-full flex-col overflow-x-hidden">
          <Navbar />
          {children}
          <MobileNavbar />
          <Footer />
        </div>
      </body>
    </html>
  );
}

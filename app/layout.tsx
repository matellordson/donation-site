import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/block/footer";
import Navbar from "@/components/block/navbar";
import { Toaster } from "@/components/ui/toaster";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${nunito.className} flex min-h-full flex-col antialiased`}
      >
        <Navbar className="flex-shrink-0" />
        <main className="flex-grow overflow-auto">
          {children}
          <Toaster />
        </main>
        <Footer className="flex-shrink-0" />
      </body>
    </html>
  );
}

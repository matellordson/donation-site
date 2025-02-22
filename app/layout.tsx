import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/block/footer";
import Navbar from "@/components/block/navbar";
import { Toaster } from "@/components/ui/sonner";
import MobileNavbar from "@/components/block/mobile-navbar";
import { ClerkProvider } from "@clerk/nextjs";
import SmartSupp from "./smart-supp";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J&H Foundation",
  description:
    "Support causes that matter—education, healthcare, disaster relief, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={`${nunito.className} flex min-h-full flex-col antialiased`}
        >
          <>
            <div className="">
              <MobileNavbar />
            </div>
          </>
          <main className="mt-4 flex-grow overflow-auto">
            {children}
            <Toaster />
          </main>
          <Footer />
          <SmartSupp />
        </body>
      </html>
    </ClerkProvider>
  );
}

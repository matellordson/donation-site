import Link from "next/link";
import { Facebook, Twitter, Instagram, Github, Zap } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-2">
      <footer className="mx-auto w-full max-w-sm rounded-xl bg-primary py-10 text-primary-foreground lg:max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
            <div className="flex items-center">
              <Image
                src={"/logo2.png"}
                alt="logo"
                height={90}
                width={90}
                className="relative right-4"
              />
              <div className="relative right-7">
                <h3 className="text-lg font-bold">J&H Foundation</h3>
                <p className="text-sm">
                  &copy; 2025 J&H Foundation. All rights reserved.
                </p>
              </div>
            </div>
            <nav className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
              <Link href="/" className="underline-offset-4 hover:underline">
                Home
              </Link>
              <Link
                href="/about-us"
                className="underline-offset-4 hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="underline-offset-4 hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href="/our-work"
                className="underline-offset-4 hover:underline"
              >
                Our Work
              </Link>
              <Link
                href="/partners"
                className="underline-offset-4 hover:underline"
              >
                Partnership
              </Link>
              <Link
                href="/Stories"
                className="underline-offset-4 hover:underline"
              >
                Stories
              </Link>
              <Link
                href="/terms"
                className="underline-offset-4 hover:underline"
              >
                Terms of Service
              </Link>
            </nav>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

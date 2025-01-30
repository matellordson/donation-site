import Link from "next/link";
import { Facebook, Twitter, Instagram, Github, Zap } from "lucide-react";

export default function Footer() {
  return (
    <div className="p-2">
      <footer className="footer-texture mx-auto w-full max-w-sm rounded-xl bg-primary py-10 text-primary-foreground lg:max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
            <div className="flex items-center">
              <Zap size={32} className="mr-3 text-primary-foreground" />
              <div>
                <h3 className="text-lg font-bold">J&H Foundation</h3>
                <p className="text-sm">
                  &copy; 2025 Your Company. All rights reserved.
                </p>
              </div>
            </div>
            <nav className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </nav>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

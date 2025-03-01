import { Button, buttonVariants } from "@/components/ui/button";
import { NavigationMenuDemo } from "./navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = async ({ className }: { className?: string }) => {
  return (
    <nav className="fixed inset-x-0 z-50 mx-auto hidden h-12 items-center justify-center bg-white/70 shadow-sm backdrop-blur-md lg:flex">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <Image src={"/logo.png"} alt="logo" height={90} width={90} />
                  <span className="text-lg font-bold text-gray-800">
                    J&H Foundation
                  </span>
                </a>
              </div>
              {/* <NavigationMenuDemo /> */}
              <div className="mt-auto p-6">hello</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

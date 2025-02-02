import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelTopClose, SquareChevronUp } from "lucide-react";
import { NavigationMenuDemo } from "./navigation-menu";
import { PopoverDemo } from "./nav-pop";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const Navbar = async ({ className }: { className?: string }) => {
  return (
    <nav className="fixed inset-x-0 z-50 mx-auto hidden h-12 items-center justify-center bg-white/70 shadow-sm backdrop-blur-md lg:flex">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="ml-2 text-lg font-bold text-gray-800">
                    J&H Foundation
                  </span>
                </a>
              </div>
              <NavigationMenuDemo />
              <div className="mt-auto p-6">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/billing">
                    <Button variant="outline" size={"sm"} className="w-full">
                      Billing
                    </Button>
                  </Link>
                  <Link href="/signout">
                    <Button
                      variant="outline"
                      size={"sm"}
                      className="w-full text-red-600 hover:bg-red-50 hover:text-red-700"
                    >
                      Sign out
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

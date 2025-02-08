"use client";

import type * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bolt, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverHeader, PopoverTitle } from "@/components/ui/popover";

const MobileNavbar = ({ className }: { className?: string }) => {
  return (
    <nav className="fixed inset-x-0 z-50 mx-auto h-16 bg-white/70 shadow-sm backdrop-blur-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
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
            </Link>
          </div>
          <div className="hidden lg:block">
            <NavigationMenuDemo />
          </div>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>open</SheetTrigger>
              <SheetContent></SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MobileNavItem = ({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    className={cn(
      "block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
      className,
    )}
  >
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <ChevronRight className="h-4 w-4 text-gray-500" />
    </div>
    {children && (
      <p className="mt-1 text-sm leading-6 text-gray-600">{children}</p>
    )}
  </a>
);

// const ProfileMenu = () => {
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="ghost" size="icon" className="rounded-full">
//           <Avatar>
//             <AvatarImage src="/generic-avatar.svg" alt="Profile" />
//             <AvatarFallback>
//               <svg
//                 className="h-full w-full text-gray-300"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 32 32"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M16 16C20.4183 16 24 12.4183 24 8C24 3.58172 20.4183 0 16 0C11.5817 0 8 3.58172 8 8C8 12.4183 11.5817 16 16 16Z"
//                   fill="currentColor"
//                 />
//                 <path
//                   d="M16 18C9.37258 18 4 23.3726 4 30C4 31.1046 4.89543 32 6 32H26C27.1046 32 28 31.1046 28 30C28 23.3726 22.6274 18 16 18Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </AvatarFallback>
//           </Avatar>
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-36" align="end">
//         <PopoverHeader>
//           <PopoverTitle className="pb-2 text-sm">Account Menu</PopoverTitle>
//         </PopoverHeader>
//         <div className="grid">
//           <div className="grid gap-y-2">
//             <Link href="/billing">
//               <Button
//                 variant="outline"
//                 size={"sm"}
//                 className="w-full justify-start"
//               >
//                 Billing
//               </Button>
//             </Link>
//             <Link href="/signout">
//               <Button
//                 variant="ghost"
//                 size={"sm"}
//                 className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
//               >
//                 Sign out
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// };

export default MobileNavbar;

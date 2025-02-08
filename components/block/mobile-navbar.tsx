"use client";

import type * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Bolt,
  ChevronRight,
  PanelTopClose,
  ArrowRight,
} from "lucide-react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

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
          <div className="hidden lg:block">
            <ProfileMenu />
          </div>
          <div className="flex items-center gap-x-2 lg:hidden">
            <ProfileMenu />
            <Drawer>
              <DrawerTrigger>
                <PanelTopClose />
              </DrawerTrigger>
              <DrawerContent className="flex h-[86vh] flex-col">
                <DrawerHeader className="flex-shrink-0 bg-white/70 backdrop-blur-md">
                  <DrawerTitle>
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
                  </DrawerTitle>
                  <DrawerDescription className="text-left">
                    <SignedIn>
                      <a href="https://billing.stripe.com/p/login/5kAcQzeiK1P3e1aaEE">
                        Go to Billings
                      </a>
                    </SignedIn>
                  </DrawerDescription>
                </DrawerHeader>
                <div className="flex-grow overflow-y-auto px-6 py-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="get-involved" className="border-none">
                      <AccordionTrigger className="py-5 hover:no-underline">
                        <span className="text-lg font-semibold">
                          Get involved
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <div className="flex flex-col space-y-4">
                          <Link
                            href="/"
                            className="flex flex-col space-y-2 rounded-md bg-muted p-4"
                          >
                            <Bolt className="h-6 w-6" />
                            <div className="text-lg font-medium">
                              J&H Foundation
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Donating is a powerful way to create change. Your
                              support brings hope and resources to those in
                              need, making a real difference in their lives.
                            </p>
                          </Link>
                          <MobileNavItem
                            href="/about-us"
                            label="About Us"
                            className="px-2"
                          >
                            Learn about our mission, values, and the change
                            we're creating together.
                          </MobileNavItem>
                          <MobileNavItem
                            href="/ways-to-give"
                            label="Ways to Give"
                            className="px-2"
                          >
                            Explore donation causes and make an impact
                          </MobileNavItem>
                          <MobileNavItem
                            href="/our-impact"
                            label="Our Impact"
                            className="px-2"
                          >
                            See the difference your donation makes in real-world
                            stories.
                          </MobileNavItem>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="overview" className="border-none">
                      <AccordionTrigger className="py-5 hover:no-underline">
                        <span className="text-lg font-semibold">Overview</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <div className="flex flex-col space-y-4">
                          <MobileNavItem
                            href="/about-us"
                            label="About Us"
                            className="px-2"
                          >
                            Discover our mission, values, and the team working
                            to create positive change in the world.
                          </MobileNavItem>
                          <MobileNavItem
                            href="/our-impact"
                            label="Our Impact"
                            className="px-2"
                          >
                            Explore the real difference your donations are
                            making in the lives of those we serve.
                          </MobileNavItem>
                          <MobileNavItem
                            href="/our-work"
                            label="Our Work"
                            className="px-2"
                          >
                            Learn about the programs and projects you're helping
                            fund to create lasting impact.
                          </MobileNavItem>
                          <MobileNavItem
                            href="/partners"
                            label="Partnership"
                            className="px-2"
                          >
                            Learn about the programs and projects you're helping
                            fund to create lasting impact.
                          </MobileNavItem>
                          <MobileNavItem
                            href="/stories"
                            label="Stories"
                            className="px-2"
                          >
                            Read powerful stories from individuals and
                            communities whose lives have been transformed.
                          </MobileNavItem>
                          <MobileNavItem
                            href="#"
                            label="Terms of Service"
                            className="px-2"
                          >
                            Understand the terms governing your use of our
                            website and donation process.
                          </MobileNavItem>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <MobileNavItem
                    href="/contact-us"
                    label="Contact Us"
                    className="px-2 py-5"
                  />
                  <MobileNavItem
                    href="/ways-to-give"
                    label="Donate"
                    className="px-2 py-5"
                  />
                </div>
              </DrawerContent>
            </Drawer>
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

const ProfileMenu = () => {
  return (
    <>
      <SignedOut>
        <Button variant={"link"}>
          <SignInButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default MobileNavbar;

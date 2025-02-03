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

const Navbar = ({ className }: { className?: string }) => {
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
          <div className="flex items-center space-x-4">
            <ProfileMenu />
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] p-0 sm:w-[400px]"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex-1 overflow-y-auto">
                      <div className="px-6 py-6">
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem
                            value="get-involved"
                            className="border-none"
                          >
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
                                    Donating is a powerful way to create change.
                                    Your support brings hope and resources to
                                    those in need, making a real difference in
                                    their lives.
                                  </p>
                                </Link>
                                <MobileNavItem
                                  href="/about-us"
                                  label="About Us"
                                >
                                  Learn about our mission, values, and the
                                  change we're creating together.
                                </MobileNavItem>
                                <MobileNavItem
                                  href="/ways-to-give"
                                  label="Ways to Give"
                                >
                                  Explore donation causes and make an impact
                                </MobileNavItem>
                                <MobileNavItem
                                  href="/our-impact"
                                  label="Our Impact"
                                >
                                  See the difference your donation makes in
                                  real-world stories.
                                </MobileNavItem>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem
                            value="overview"
                            className="border-none"
                          >
                            <AccordionTrigger className="py-5 hover:no-underline">
                              <span className="text-lg font-semibold">
                                Overview
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5">
                              <div className="flex flex-col space-y-4">
                                <MobileNavItem
                                  href="/about-us"
                                  label="About Us"
                                >
                                  Discover our mission, values, and the team
                                  working to create positive change in the
                                  world.
                                </MobileNavItem>
                                <MobileNavItem
                                  href="/our-impact"
                                  label="Our Impact"
                                >
                                  Explore the real difference your donations are
                                  making in the lives of those we serve.
                                </MobileNavItem>
                                <MobileNavItem
                                  href="/our-work"
                                  label="Our Work"
                                >
                                  Learn about the programs and projects you're
                                  helping fund to create lasting impact.
                                </MobileNavItem>
                                <MobileNavItem
                                  href="/partners"
                                  label="Partnership"
                                >
                                  Learn about the programs and projects you're
                                  helping fund to create lasting impact.
                                </MobileNavItem>
                                <MobileNavItem href="/stories" label="Stories">
                                  Read powerful stories from individuals and
                                  communities whose lives have been transformed.
                                </MobileNavItem>
                                <MobileNavItem
                                  href="#"
                                  label="Terms of Service"
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
                          className="py-5"
                        />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
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
  <Link
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
  </Link>
);

const ProfileMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="/generic-avatar.svg" alt="Profile" />
            <AvatarFallback>
              <svg
                className="h-full w-full text-gray-300"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16C20.4183 16 24 12.4183 24 8C24 3.58172 20.4183 0 16 0C11.5817 0 8 3.58172 8 8C8 12.4183 11.5817 16 16 16Z"
                  fill="currentColor"
                />
                <path
                  d="M16 18C9.37258 18 4 23.3726 4 30C4 31.1046 4.89543 32 6 32H26C27.1046 32 28 31.1046 28 30C28 23.3726 22.6274 18 16 18Z"
                  fill="currentColor"
                />
              </svg>
            </AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <PopoverHeader>
          <PopoverTitle>Account Menu</PopoverTitle>
        </PopoverHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Link href="/billing">
              <Button variant="ghost" className="w-full justify-start">
                Billing
              </Button>
            </Link>
            <Link href="/signout">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                Sign out
              </Button>
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Navbar;

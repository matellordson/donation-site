"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, Bolt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const getInvolved = [
  {
    title: "About Us",
    href: "/about-us",
    description:
      "Learn about our mission, values, and the change we're creating together.",
  },
  {
    title: "Ways to Give",
    href: "/ways-to-give",
    description: "Explore donation causes and make an impact.",
  },
  {
    title: "Our Impact",
    href: "/our-impact",
    description:
      "See the difference your donation makes in real-world stories.",
  },
];

const overview = [
  {
    title: "About Us",
    href: "/about-us",
    description:
      "Discover our mission, values, and the team working to create positive change in the world.",
  },
  {
    title: "Our Impact",
    href: "/our-impact",
    description:
      "Explore the real difference your donations are making in the lives of those we serve.",
  },
  {
    title: "Our Work",
    href: "/our-work",
    description:
      "Learn about the programs and projects you're helping fund to create lasting impact.",
  },
  {
    title: "Partnership",
    href: "/partners",
    description:
      "Learn about the programs and projects you're helping fund to create lasting impact.",
  },
  {
    title: "Stories",
    href: "/stories",
    description:
      "Read powerful stories from individuals and communities whose lives have been transformed.",
  },
  {
    title: "Terms of Service",
    href: "#",
    description:
      "Understand the terms governing your use of our website and donation process.",
  },
];

export function MobileNavigation() {
  const [open, setOpen] = React.useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = React.useState(false);
  const [overviewOpen, setOverviewOpen] = React.useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="z-50 h-10 w-10 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full p-0 sm:w-[350px]">
        <SheetHeader className="px-6 pt-6">
          <SheetTitle className="flex items-center">
            <Bolt className="mr-2 h-6 w-6" />
            <span className="text-lg font-bold">J&H Foundation</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-[calc(100vh-80px)] flex-col">
          <ScrollArea className="flex-grow">
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
                  >
                    Get involved
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${getInvolvedOpen ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {getInvolvedOpen && (
                    <div className="ml-4 mt-3 space-y-4">
                      {getInvolved.map((item) => (
                        <div key={item.title} className="space-y-1">
                          <Link
                            href={item.href}
                            className="block font-medium"
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => setOverviewOpen(!overviewOpen)}
                  >
                    Overview
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${overviewOpen ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {overviewOpen && (
                    <div className="ml-4 mt-3 space-y-4">
                      {overview.map((item) => (
                        <div key={item.title} className="space-y-1">
                          <Link
                            href={item.href}
                            className="block font-medium"
                            onClick={() => setOpen(false)}
                          >
                            {item.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    href="/contact-us"
                    className="block py-2 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="mt-auto p-6">
            <Separator className="mb-6" />
            <div className="grid grid-cols-2 gap-4">
              <Link href="/billing" onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full">
                  Billing
                </Button>
              </Link>
              <Link href="/signout" onClick={() => setOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  Sign out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

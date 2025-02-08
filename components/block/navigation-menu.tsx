"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Bolt } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const overview: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/about-us",
    description:
      "Discover our mission, values, and the team working to create positive change in the world.",
  },
  {
    title: "Our Impact",
    href: "/stories",
    description:
      "Explore the real difference your donations are making in the lives of those we serve.",
  },
  {
    title: "Our Work",
    href: "/our-work",
    description:
      "Learn about the programs and projects you’re helping fund to create lasting impact.",
  },
  {
    title: "Partnership",
    href: "/partners",
    description:
      "Learn about the programs and projects you’re helping fund to create lasting impact.",
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

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get involved</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild className="">
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Bolt className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      J&H Foundation
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Donating is a powerful way to create change. Your support
                      brings hope and resources to those in need, making a real
                      difference in their lives.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about-us" title="About Us">
                Learn about our mission, values, and the change we’re creating
                together.
              </ListItem>
              <ListItem href="/ways-to-give" title="Ways to Give">
                Explore donation causes and make an impact
              </ListItem>
              <ListItem href="/our-impact" title="Our Impact ">
                See the difference your donation makes in real-world stories.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {overview.map((overview) => (
                <ListItem
                  key={overview.title}
                  title={overview.title}
                  href={overview.href}
                >
                  {overview.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

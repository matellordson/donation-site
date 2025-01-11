import { GalleryVerticalEnd } from "lucide-react";

import { Pricing } from "./pricing";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Donate() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center justify-between gap-2">
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
            <span className="ml-2 text-xl font-bold text-gray-800">Logo</span>
          </Link>
          <Link
            href={""}
            className={` ${buttonVariants({ variant: "outline", size: "sm" })}`}
          >
            Billing
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full lg:max-w-sm">
            <Pricing />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/donate.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

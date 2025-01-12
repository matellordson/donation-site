import Link from "next/link";
import DonateButton from "./donate-button";

export default function Footer({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`max-w-mx-auto mx-auto h-full w-full max-w-sm px-3 py-3 lg:max-w-6xl lg:px-0 ${className}`}
    >
      <div className="w-full rounded-xl bg-primary p-5 text-primary-foreground lg:px-7 lg:py-5">
        <div className="">
          <div className="items-center justify-between space-y-5 lg:flex">
            <div className="flex-shrink-0 space-y-2">
              <Link href="/" className="flex items-center">
                <svg
                  className="h-8 w-8"
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
                <span className="ml-2 text-lg font-bold">J&H Foundation</span>
              </Link>
              <p className="text-xs">Your Compassion Can Rewrite a Story.</p>
            </div>
            <div className="flex items-center justify-start gap-x-5 lg:justify-center">
              <div className="flex flex-col text-xs">
                <Link href="/about-us" className="rounded-md py-1 lg:px-3">
                  About Us
                </Link>
                <Link href="/our-work" className="rounded-md py-1 lg:px-3">
                  Our Work
                </Link>
                <Link href="/ways-to-give" className="rounded-md py-1 lg:px-3">
                  Ways to Give
                </Link>
              </div>

              <div className="flex flex-col text-xs">
                <Link href="#" className="rounded-md px-3 py-1">
                  Our Impact
                </Link>
                <Link href="#" className="rounded-md px-3 py-1">
                  Contact Us
                </Link>
                <Link href="#" className="rounded-md px-3 py-1">
                  Partnership
                </Link>
              </div>

              <div className="flex flex-col text-xs">
                <Link href="#" className="rounded-md px-3 py-1">
                  X
                </Link>
                <Link href="#" className="rounded-md px-3 py-1">
                  Instagram
                </Link>
                <Link href="#" className="rounded-md px-3 py-1">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-5 border-emerald-900" />
          <div className="text-xs">
            <div className="items-center justify-between lg:flex">
              <p className="pb-2">
                &copy; {currentYear} Joy and Hope Foundation. All rights
                reserved.
              </p>
              <Link href={"#"} className="text-xs">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

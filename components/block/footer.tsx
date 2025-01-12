import Link from "next/link";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`max-w-mx-auto mx-auto h-full w-full max-w-sm px-3 py-3 lg:max-w-6xl lg:px-0 ${className}`}
    >
      <div className="w-full rounded-xl bg-primary p-5 text-primary-foreground">
        <div className="">
          <div className="flex items-center justify-between">
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
                <Link href="/about-us" className="rounded-md px-3 py-1">
                  About Us
                </Link>
                <Link href="/our-work" className="rounded-md px-3 py-1">
                  Our Work
                </Link>
                <Link href="/ways-to-give" className="rounded-md px-3 py-1">
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
        </div>
      </div>
    </footer>
  );
}

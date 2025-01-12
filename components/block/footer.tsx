import Link from "next/link";

export default function Footer({ className }: { className: string }) {
  return (
    <footer
      className={`max-w-mx-auto mx-auto h-full w-full max-w-sm px-3 py-3 lg:max-w-6xl lg:px-0 ${className}`}
    >
      <div className="h-20 w-full rounded-xl bg-primary p-5 text-primary-foreground">
        <div className="">
          <div className="flex-shrink-0">
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
              <span className="ml-2 text-xl font-bold">J&H Foundation</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

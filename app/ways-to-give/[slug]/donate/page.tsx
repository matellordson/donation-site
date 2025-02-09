import { Pricing } from "./pricing";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="mx-auto mt-14 grid min-h-svh max-w-sm lg:max-w-full lg:grid-cols-2">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full">
          <Pricing />
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

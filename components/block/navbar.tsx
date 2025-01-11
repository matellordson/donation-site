import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { SquareChevronUp } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import signout from "@/app/auth/actions";

const Navbar = async () => {
  const supabase = createClient().auth.getUser();

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex justify-center border border-muted bg-white/80 shadow-sm backdrop-blur-2xl">
      <nav className="mx-auto w-full max-w-sm lg:max-w-6xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
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
                  <span className="ml-2 text-xl font-bold text-gray-800">
                    J&H Foundation
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-3">
                  <Link
                    href="/about-us"
                    className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/ways-to-give"
                    className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                  >
                    Ways to Give
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                  >
                    Our Impact
                  </Link>
                  <Link
                    href="#"
                    className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                  >
                    Partnership
                  </Link>
                </div>
              </div>
              {!supabase ? (
                <Link
                  href={"/auth/login"}
                  className={`hidden md:inline-flex ${buttonVariants({ variant: "outline", size: "sm" })}`}
                >
                  Login
                </Link>
              ) : (
                <div className="flex gap-x-2">
                  <a
                    href={
                      "https://billing.stripe.com/p/login/test_5kA02r2Um2SqcyQbII"
                    }
                    className={`hidden md:inline-flex ${buttonVariants({ variant: "outline", size: "sm" })}`}
                  >
                    Billing
                  </a>
                  <Button
                    className="hidden text-gray-600 md:inline-flex"
                    variant={"ghost"}
                    size={"sm"}
                    formAction={signout}
                  >
                    Sign out
                  </Button>
                </div>
              )}
            </div>
            <Drawer>
              <DrawerTrigger className="lg:hidden">
                <SquareChevronUp className="text-gray-600" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <div className="flex flex-col items-baseline">
                    <Link href="/" className="flex items-center pb-3">
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
                      <span className="ml-2 text-xl font-bold text-gray-800">
                        J&H Foundation
                      </span>
                    </Link>
                    <Link
                      href="/about-us"
                      className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/services"
                      className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                    >
                      Our Work
                    </Link>
                    <Link
                      href="/ways-to-give"
                      className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                    >
                      Ways to Give
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                    >
                      Our Impact
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md px-3 py-2 font-bold text-gray-600 hover:text-primary"
                    >
                      Partnership
                    </Link>
                  </div>
                  <div className="flex flex-col gap-x-2">
                    {!supabase ? (
                      <Link
                        href={"/auth/login"}
                        className={`md:inline-flex ${buttonVariants({ variant: "outline" })}`}
                      >
                        Login
                      </Link>
                    ) : (
                      <>
                        <a
                          href={
                            "https://billing.stripe.com/p/login/test_5kA02r2Um2SqcyQbII"
                          }
                          className={`md:inline-flex ${buttonVariants({ variant: "outline" })}`}
                        >
                          Billing
                        </a>
                        <Button
                          className="text-gray-600 md:inline-flex"
                          variant={"ghost"}
                          size={"sm"}
                          formAction={signout}
                        >
                          Sign out
                        </Button>
                      </>
                    )}
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

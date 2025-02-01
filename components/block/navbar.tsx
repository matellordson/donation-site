import { Button, buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PanelTopClose, SquareChevronUp } from "lucide-react";
import { NavigationMenuDemo } from "./navigation-menu";
import { PopoverDemo } from "./nav-pop";

const Navbar = async ({ className }: { className?: string }) => {
  return (
    <nav className="fixed inset-x-0 z-50 mx-auto flex justify-center bg-white/70 shadow-md backdrop-blur-md">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
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
                </a>
              </div>
              <div className="hidden md:block">
                <NavigationMenuDemo />
              </div>
              <PopoverDemo />
            </div>
            <Drawer>
              <DrawerTrigger className="lg:hidden">
                <PanelTopClose className="text-gray-600" />
              </DrawerTrigger>
              <DrawerContent className="h-[97vh]">
                <DrawerHeader>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className="flex flex-col">
                  <a href={"#"} className="flex items-center pb-3">
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
                  </a>
                </div>
                <div className="flex flex-col gap-x-2">
                  {/* {!supabase ? (
                      <a
                        href={"/auth/login"}
                        className={`md:inline-flex ${buttonVariants({ variant: "outline" })}`}
                      >
                        Login
                      </a>
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
                    )} */}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

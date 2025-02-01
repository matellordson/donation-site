import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createClient } from "@/utils/supabase/client";
import signout from "@/app/auth/actions";
import { Banknote, CircleUserRound, LogOut, User } from "lucide-react";

export function PopoverDemo() {
  const supabase = createClient().auth.getUser();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link">
          <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-secondary p-4 shadow lg:flex">
            <CircleUserRound size={100} className="scale-150 text-primary" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="h-fit w-fit border bg-white p-1 backdrop-blur-xl">
        {!supabase ? (
          <a
            href={"/auth/login"}
            className={`hidden md:inline-flex ${buttonVariants({ variant: "outline", size: "sm" })}`}
          >
            Login
          </a>
        ) : (
          <div className="flex flex-col gap-x-2">
            <a
              href={"https://billing.stripe.com/p/login/5kAcQzeiK1P3e1aaEE"}
              className={`hidden md:inline-flex ${buttonVariants({ variant: "ghost", size: "sm" })}`}
            >
              Billing
              <Banknote />
            </a>
            <Button
              className="hidden text-gray-600 md:inline-flex"
              variant={"ghost"}
              size={"sm"}
              formAction={signout}
            >
              Sign out
              <LogOut />
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

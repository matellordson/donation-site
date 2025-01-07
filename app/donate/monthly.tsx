"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Pricing = {
  value: string;
  label: string;
};

const monthlyPricing: Pricing[] = [
  {
    label: "$200",
    value:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_bIY6rSgK23yEbyocMP"
        : "",
  },
  { label: "$300", value: "300" },
  { label: "$500", value: "500" },
  // { label: "$750", value: "#" },
  // { label: "$1,000", value: "#" },
  // { label: "$1,500", value: "#" },
  // { label: "$2,000", value: "#" },
  // { label: "$2,500", value: "#" },
  // { label: "$3,000", value: "#" },
  // { label: "$4,000", value: "#" },
  // { label: "$5,000", value: "#" },
  // { label: "$10,000", value: "#" },
  // { label: "$20,000", value: "#" },
  // { label: "$30,000", value: "#" },
  // { label: "$40,000", value: "#" },
  // { label: "$50,000", value: "#" },
  // { label: "$60,000", value: "#" },
  // { label: "$70,000", value: "#" },
  // { label: "$80,000", value: "#" },
  // { label: "$90,000", value: "#" },
  // { label: "$100K", value: "#" },
] as const;

export function MonthlySubscription() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Pricing | null>(
    null,
  );

  const [paymentLink, setPaymentLink] = React.useState<string>();

  return (
    <div className="w-full space-y-5 rounded-lg border p-5">
      <div className="">
        <div className="">
          <p className="text-xl font-semibold">Monthly donation</p>
          <p className="text-muted-foreground">Pick a monthly support level</p>
        </div>
      </div>
      <div className="">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-[45px] w-fit items-center justify-center font-semibold tracking-wide"
            >
              {selectedStatus ? (
                <p className="text-2xl font-bold lg:text-3xl">
                  {selectedStatus.label}
                </p>
              ) : (
                <p>Choose amount</p>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Search amount..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {monthlyPricing.map((donation) => (
                    <CommandItem
                      key={donation.value}
                      value={donation.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          monthlyPricing.find(
                            (priority) => priority.value === value,
                          ) || null,
                        );
                        setOpen(false);
                        setPaymentLink(donation.value);
                      }}
                    >
                      {donation.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Button
        variant={"emphasis"}
        size={"lg"}
        asChild
        className="cursor-pointer"
      >
        <a href={paymentLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="scale-125"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          Donate Now
        </a>
      </Button>
    </div>
  );
}

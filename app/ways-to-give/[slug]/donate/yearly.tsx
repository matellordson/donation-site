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
import DonateButton from "@/components/block/donate-button";
import { CircleDollarSign } from "lucide-react";

type Pricing = {
  value: string;
  label: string;
};

const yearlyPricing = [
  {
    label: "$200",
    value: "https://buy.stripe.com/test_eVa03ufFYfhmeKA5ko",
  },
  { label: "$300", value: "https://buy.stripe.com/9AQg1tbIyfS08gg7sw" },
  { label: "$500", value: "https://buy.stripe.com/aEU16z7sigW4fII8wE" },
  { label: "$750", value: "https://buy.stripe.com/5kA4iLbIy9tCeEE5ku" },
  { label: "$1,000", value: "https://buy.stripe.com/eVa6qT7sigW4cww4gs" },
  { label: "$1,500", value: "https://buy.stripe.com/dR67uX5kaeNWaoodR4" },
  { label: "$2,000", value: "https://buy.stripe.com/9AQ8z13c2eNW688cN1" },
  { label: "$2,500", value: "https://buy.stripe.com/dR6bLd4g6dJS8gg6oG" },
  { label: "$3,000", value: "https://buy.stripe.com/14k6qT3c221a0NOdRa" },
  { label: "$4,000", value: "https://buy.stripe.com/fZeg1t3c221aeEEaF0" },
  { label: "$5,000", value: "fkkf" },
  { label: "$10,000", value: "fkk" },
  { label: "$20,000", value: "di" },
  { label: "$30,000", value: "jr" },
  { label: "$40,000", value: "lk" },
  { label: "$50,000", value: "eej" },
  { label: "$60,000", value: "mbm" },
  { label: "$70,000", value: "fkkl" },
  { label: "$80,000", value: "etr" },
  { label: "$90,000", value: "gklg" },
  { label: "$100,000", value: "sjsj" },
];

export function YearlySubscription() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Pricing | null>(
    null,
  );

  const [paymentLink, setPaymentLink] = React.useState<string>("#");

  return (
    <div className="w-full space-y-5 rounded-lg border bg-accent p-5 text-accent-foreground">
      <div className="">
        <div className="">
          <p className="text-xl font-semibold">Yearly donation</p>
          <p className="text-muted-foreground">Pick a yearly support level</p>
        </div>
      </div>
      <div className="">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="w-fit items-center justify-center px-0 font-semibold tracking-wide"
            >
              {selectedStatus ? (
                <p className="text-2xl font-bold lg:text-3xl">
                  {selectedStatus.label}
                </p>
              ) : (
                <div className="flex items-center justify-center gap-x-1 rounded-xl border p-2 text-[15px]">
                  <CircleDollarSign className="scale-125" />{" "}
                  <p>Select amount</p>
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Search label..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {yearlyPricing.map((donation) => (
                    <CommandItem
                      key={donation.value}
                      value={donation.value}
                      onSelect={(value) => {
                        setSelectedStatus(
                          yearlyPricing.find(
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
      <DonateButton link={paymentLink}>Donate Now</DonateButton>
    </div>
  );
}

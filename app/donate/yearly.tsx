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
  { label: "$300", value: "300" },
  { label: "$500", value: "500" },
  //   { label: "$750", value: "#" },
  //   { label: "$1,000", value: "#" },
  //   { label: "$1,500", value: "#" },
  //   { label: "$2,000", value: "#" },
  //   { label: "$2,500", value: "#" },
  //   { label: "$3,000", value: "#" },
  //   { label: "$4,000", value: "#" },
  //   { label: "$5,000", value: "#" },
  //   { label: "$10,000", value: "#" },
  //   { label: "$20,000", value: "#" },
  //   { label: "$30,000", value: "#" },
  //   { label: "$40,000", value: "#" },
  //   { label: "$50,000", value: "#" },
  //   { label: "$60,000", value: "#" },
  //   { label: "$70,000", value: "#" },
  //   { label: "$80,000", value: "#" },
  //   { label: "$90,000", value: "#" },
  //   { label: "$100K", value: "#" },
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
                <div className="flex items-center justify-center gap-x-1 text-[15px]">
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
      <DonateButton link={paymentLink} />
    </div>
  );
}

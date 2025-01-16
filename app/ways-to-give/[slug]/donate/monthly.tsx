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

const monthlyPricing: Pricing[] = [
  {
    label: "$200",
    value: "https://buy.stripe.com/cN29D58wmaxGbssdQV",
  },
  { label: "$300", value: "https://buy.stripe.com/aEUaH9aEu7lubss6or" },
  { label: "$500", value: "https://buy.stripe.com/00gg1t13U49iaoobIP" },
  { label: "$750", value: "https://buy.stripe.com/fZebLd9Aq35ecwwcMV" },
  { label: "$1,000", value: "https://buy.stripe.com/28oaH9cMC9tC1RSaEP" },
  { label: "$1,500", value: "https://buy.stripe.com/28o2aD4g6bBK6884gt" },
  { label: "$2,000", value: "https://buy.stripe.com/9AQ8z13c2eNW688cN1" },
  { label: "$2,500", value: "https://buy.stripe.com/00g7uX3c2fS0cww28p" },
  { label: "$3,000", value: "https://buy.stripe.com/fZe2aD13U49iaoo6oH" },
  { label: "$4,000", value: "https://buy.stripe.com/14k02v13U49i1RS00l" },
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
] as const;

export function MonthlySubscription() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Pricing | null>(
    null,
  );

  const [paymentLink, setPaymentLink] = React.useState<string>("#");

  return (
    <div className="w-full space-y-5 rounded-lg border bg-accent p-5 text-accent-foreground">
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
      <DonateButton link={paymentLink}>Donate Now</DonateButton>
    </div>
  );
}

"use client";

import React, { FormEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ContactUsAction from "./action";

export function ApplyForm() {
  async function handleSubmit(formData: FormData) {
    await ContactUsAction(formData);
    new Promise((resolve) => setTimeout(resolve, 300));
    toast("Thank you for contacting us", {
      description: "We will get back to you with a response",
    });
  }
  return (
    <div className="mt-14 flex flex-col gap-6">
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" action={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Appeal for Donation</h1>
                <p className="text-xs text-muted-foreground">
                  Need suport? Apply for a donation today and get the help you
                  need!
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Cause</Label>
                <Input
                  name="cause"
                  type="text"
                  placeholder="Your donation cause here..."
                  required
                />
                <Label htmlFor="message">Amount</Label>
                <Input
                  name="amount"
                  type="number"
                  placeholder="Your donation amount ($)..."
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Appeal message here..."
                  required
                  className="min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full text-sm"
                variant={"emphasis"}
              >
                Send Appeal
              </Button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/contact-us.jpg"
              alt="Contact Us"
              className="absolute inset-0 h-full w-full object-cover opacity-80 grayscale dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

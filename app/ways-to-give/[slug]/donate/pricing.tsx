"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MonthlySubscription } from "./monthly";
import { YearlySubscription } from "./yearly";
import DonateButton from "@/components/block/donate-button";

const oneTimePayment =
  process.env.NODE_ENV === "development"
    ? "https://buy.stripe.com/test_aEU4jKeBU7OUauk001"
    : "https://buy.stripe.com/8wM16z6oedJS9kkbIK";

export function Pricing() {
  return (
    <div className="max-w-6xl px-3 lg:w-[450px] lg:px-0">
      <Card className="">
        <CardHeader className="mb-[-30px]">
          <CardTitle>Choose a donation plan</CardTitle>
          <CardDescription>
            Select a plan and make a difference.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 lg:p-3">
          <div className="container mx-auto px-4 py-8">
            <Tabs defaultValue="ones">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger value="ones">Single</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="ones" className="">
                <div className="w-full space-y-7 rounded-lg border bg-accent p-5 text-accent-foreground">
                  <div className="">
                    <p className="text-xl font-semibold">Donate once</p>
                    <p className="text-muted-foreground">
                      Make a one-time impact
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-2xl font-bold lg:text-3xl">
                      $200 ⎯ $10,000{" "}
                    </p>
                    <div className="">
                      <DonateButton link={oneTimePayment}>
                        Donate Now
                      </DonateButton>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="monthly">
                <MonthlySubscription />
              </TabsContent>
              <TabsContent value="yearly">
                <YearlySubscription />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

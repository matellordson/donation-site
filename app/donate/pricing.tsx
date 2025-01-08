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

const oneTimePayment =
  process.env.NODE_ENV === "development"
    ? "https://buy.stripe.com/test_aEU4jKeBU7OUauk001"
    : "https://buy.stripe.com/8wM16z6oedJS9kkbIK";

export function Pricing() {
  return (
    <div className="lg:w-[450px]">
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
                <div className="w-full space-y-7 rounded-lg border bg-accent p-5">
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
                      <Button variant={"emphasis"} size={"big"} asChild>
                        <a href={oneTimePayment}>
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="scale-125 text-rose-800"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg> */}
                          Donate Now
                        </a>
                      </Button>
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

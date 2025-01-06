import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Pricing() {
  return (
    <div className="">
      <Card className="">
        <CardHeader className="mb-[-30px]">
          <CardTitle>Choose a donation plan</CardTitle>
          <CardDescription>
            Select a plan and make a difference.
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto max-w-fit">
          <div className="container mx-auto px-4 py-8">
            <Tabs defaultValue="ones" className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger value="ones">Single</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="ones" className="">
                <div className="w-full space-y-7 rounded-lg border p-5">
                  <div className="">
                    <p className="text-xl font-semibold">Pay once</p>
                    <p className="text-xl text-muted-foreground">
                      make a one-time impact
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-2xl font-bold lg:text-3xl">
                      $200 ⎯ $10,000{" "}
                    </p>
                    <div className="">
                      <a href="https://buy.stripe.com/test_aEU4jKeBU7OUauk001">
                        <Button variant={"emphasis"} size={"lg"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="scale-125"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                          Donate Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="monthly"></TabsContent>
              <TabsContent value="yearly">Yearly tab</TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

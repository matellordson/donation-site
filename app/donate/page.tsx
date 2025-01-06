import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  return (
    <div className="mx-3">
      <Card className="mx-auto mt-20 max-w-xl">
        <CardHeader className="mb-[-30px]">
          <CardTitle>Choose a donation plan</CardTitle>
          <CardDescription>
            Choose a plan and make a difference.
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
                          Donate Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="monthly">Monthly tab</TabsContent>
              <TabsContent value="yearly">Yearly tab</TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

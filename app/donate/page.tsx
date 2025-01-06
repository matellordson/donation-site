import { TypographyH2 } from "@/components/typography/H2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Pricing() {
  return (
    <div className="mx-3">
      <Card className="mx-auto mt-20 max-w-xl">
        <CardHeader>
          <CardTitle>Choose your donation plan</CardTitle>
          <CardDescription>
            Choose a plan to make a lasting impact.
          </CardDescription>
        </CardHeader>
        <CardContent className="mx-auto max-w-fit">
          <Tabs defaultValue="ones" className="">
            <TabsList className="">
              <TabsTrigger value="ones">Single</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="ones">
              <Card>
                <CardHeader>
                  <CardTitle>Make a One-Time Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-2 space-y-2 lg:w-[500px]">
                    <p>Payments range from</p>
                    <TypographyH2>$200 - $10,000</TypographyH2>
                  </div>
                  <a href="https://buy.stripe.com/test_3cs17yeBU4CI5a03cc">
                    <Button size={"lg"} variant={"emphasis"}>
                      Donate now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monthly">Monthly tab</TabsContent>
            <TabsContent value="yearly">Yearly tab</TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

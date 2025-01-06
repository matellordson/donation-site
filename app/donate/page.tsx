import { TypographyH3 } from "@/components/typography/H3";
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
    <Card className="mx-auto mt-20 max-w-xl">
      <CardHeader>
        <CardTitle>Choose your payment plan</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </CardDescription>
      </CardHeader>
      <CardContent className="mx-auto max-w-fit">
        <Tabs defaultValue="ones" className="">
          <TabsList className="">
            <TabsTrigger value="ones">Ones</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent value="ones">
            <div className="w-[400px] bg-primary-foreground px-3 py-2">
              <TypographyH3>Donate just ones</TypographyH3>
            </div>
          </TabsContent>
          <TabsContent value="monthly">Monthly tab</TabsContent>
          <TabsContent value="yearly">Yearly tab</TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

import DonateButton from "@/components/block/donate-button";
import Image from "next/image";
import {
  CardContent,
  CardHeader,
  Card as Cards,
  CardTitle,
} from "@/components/ui/card";
import { Heart, PersonStanding, Sprout } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto mt-20 max-w-sm px-3 lg:max-w-7xl lg:px-0">
      {/* Banner */}
      <div className="relative flex h-[450px] w-full items-end justify-start overflow-hidden rounded-xl bg-gray-600 shadow-sm lg:h-[500px]">
        <Image
          src={"/banner.jpg"}
          className="absolute h-full w-full object-cover mix-blend-overlay grayscale"
          alt="donate"
          width={3000}
          height={430}
          priority
        />
        <div className="flex w-full flex-col items-start justify-center text-white drop-shadow-2xl lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-end gap-x-3 pl-3 lg:pl-5">
            <p className="relative top-1 p-0 text-[75px] font-bold tracking-tighter lg:top-10 lg:text-[150px]">
              Donate
            </p>
            <div className="text-[20px] font-semibold lg:text-[30px]">
              <p className="relative top-[-10px] tracking-tighter lg:top-[1px]">
                Help
              </p>
              <p className="relative top-[-20px] tracking-tighter lg:top-[-12px]">
                Others
              </p>
            </div>
          </div>
          <DonateButton
            className="relative bottom-[10px] ml-3 lg:bottom-[20px] lg:mr-5"
            link="/ways-to-give"
          >
            Start Donating
          </DonateButton>
        </div>
      </div>
      <hr className="mt-8 h-1 w-full border-2 border-dashed border-secondary" />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="mt-4">
      <p className="text-2xl font-bold capitalize">Unlock the Joy of Giving</p>
      <p className="text-muted-foreground">
        Giving spreads hope and changes lives. Every act of kindness matters!
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Cards className="bg-accent">
          <CardHeader className="space-y-3">
            <div className="h-fit w-fit rounded-full bg-secondary p-2">
              <Sprout className="text-accent-foreground" />
            </div>
            <CardTitle className="text-primary">Giving Changes Lives</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            Every donation, big or small, has the power to transform someone's
            life. Whether it's food, clothing, money, or time, your generosity
            can bring hope and joy to those in need.
          </CardContent>
        </Cards>
        <Cards className="bg-accent">
          <CardHeader className="space-y-3">
            <div className="h-fit w-fit rounded-full bg-secondary p-2">
              <Heart className="text-accent-foreground" />
            </div>
            <CardTitle className="text-primary">
              Donate, Inspire, Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="prose">
            Your act of giving doesn’t just help others—it inspires more
            kindness and creates a ripple effect of positive change. When you
            donate, you become part of something bigger, making a real impact in
            the world.
          </CardContent>
        </Cards>
        <Cards className="bg-accent">
          <CardHeader className="space-y-3">
            <div className="h-fit w-fit rounded-full bg-secondary p-2">
              <PersonStanding className="text-accent-foreground" />
            </div>
            <CardTitle className="text-primary">Be the Difference</CardTitle>
          </CardHeader>
          <CardContent className="prose">
            Change starts with you. Your willingness to give can mean shelter
            for the homeless, food for the hungry, or education for a child.
            Step forward and be the difference today!
          </CardContent>
        </Cards>
      </div>
    </div>
  );
}

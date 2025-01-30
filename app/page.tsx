import DonateButton from "@/components/block/donate-button";
import Image from "next/image";
import {
  CardContent,
  CardHeader,
  Card as Cards,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Heart, PersonStanding, Sprout } from "lucide-react";
import { sanityClient, urlFor } from "@/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import Autoplay from "embla-carousel-autoplay";

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
      <hr className="mt-8 h-1 w-full border-2 border-dashed border-secondary" />{" "}
      <Donate />
    </div>
  );
}

function Card() {
  return (
    <div className="mt-4">
      <p className="text-2xl font-bold capitalize">Unlock the Joy of Giving</p>
      <p className="text-muted-foreground">
        Giving spreads hope and changes lives. Every act of kindness matters!.
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

async function Donate() {
  interface donationTypes {
    title: string;
    overview: string;
    image: any;
    currentSlug: string;
    content: any[];
    raised: number;
    total: number;
    supporters: string;
  }
  async function getData() {
    const query = `
      *[_type == "donation-options"][0...9] | order(_createdAt asc) {
    title,
    overview,
    image,
      "currentSlug": slug.current,
      content,
      raised,
      total,
      supporters
  }`;
    const data = await sanityClient.fetch(query);

    return data;
  }

  const donationOptions: donationTypes[] = await getData();
  return (
    <div className="mt-4">
      <p className="flex items-center justify-between text-2xl font-bold capitalize">
        Urgent Donations
        <a
          href="/ways-to-give"
          className="flex items-center justify-start text-sm text-primary hover:underline"
        >
          See all <ArrowRight className="h-4" />
        </a>
      </p>
      <p className="text-muted-foreground">
        Your help is needed right now! A quick donation can make a big impact.{" "}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto mt-3 hidden w-64 max-w-sm lg:flex lg:w-full lg:max-w-6xl"
      >
        <CarouselContent>
          {donationOptions.map((option, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 hidden lg:block lg:basis-1/5"
            >
              <a
                href={`/ways-to-give/${option.currentSlug}`}
                key={option.title}
              >
                <div className="flex h-[230px] w-full flex-col items-center justify-between rounded border border-muted p-2 shadow-sm transition hover:bg-neutral-50 lg:h-[240px]">
                  <div className="h-[49%] w-full rounded bg-muted shadow-sm">
                    <Image
                      priority
                      src={urlFor(option.image).url()}
                      height={1000}
                      width={210}
                      alt={option.title}
                      className="h-full w-full rounded object-cover object-top opacity-90 shadow-sm grayscale"
                    />
                  </div>
                  <div className="h-[51%] w-full py-3">
                    <>
                      <p className="line-clamp-1 text-[11px] font-extrabold capitalize tracking-wide lg:text-sm">
                        {option.title}
                      </p>
                      <div className="line-clamp-2 h-[30px] overflow-hidden text-[11px] text-muted-foreground">
                        <p>{option.overview}</p>
                      </div>
                    </>
                    <div className="mt-2 space-y-px">
                      <p className="text-[11px] font-bold">
                        ${option.raised}
                        <span className="font-normal text-muted-foreground">
                          {" / "}${option.total}
                        </span>
                      </p>
                      <Progress value={(option.raised / option.total) * 100} />
                      <div className="flex flex-col">
                        <div className="h-1 w-2 bg-transparent"></div>
                        <div className="flex h-fit items-center gap-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3 text-pink-500"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>

                          <p className="text-[10px] text-muted-foreground">
                            {option.supporters} Supporters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto mt-3 w-64 max-w-sm lg:hidden lg:w-full lg:max-w-6xl"
      >
        <CarouselContent>
          {donationOptions.map((option, index) => (
            <CarouselItem key={index} className="basis-1/1 lg:basis-1/5">
              <a
                href={`/ways-to-give/${option.currentSlug}`}
                key={option.title}
              >
                <div className="flex h-[230px] w-64 flex-col items-center justify-between rounded border border-muted p-2 shadow-sm transition hover:bg-neutral-50 lg:h-[240px]">
                  <div className="h-[49%] w-full rounded bg-muted shadow-sm">
                    <Image
                      priority
                      src={urlFor(option.image).url()}
                      height={1000}
                      width={210}
                      alt={option.title}
                      className="h-full w-full rounded object-cover object-top opacity-90 shadow-sm grayscale"
                    />
                  </div>
                  <div className="h-[51%] w-full py-3">
                    <>
                      <p className="line-clamp-1 text-[11px] font-extrabold capitalize tracking-wide lg:text-sm">
                        {option.title}
                      </p>
                      <div className="line-clamp-2 h-[30px] overflow-hidden text-[11px] text-muted-foreground">
                        <p>{option.overview}</p>
                      </div>
                    </>
                    <div className="mt-2 space-y-px">
                      <p className="text-[11px] font-bold">
                        ${option.raised}
                        <span className="font-normal text-muted-foreground">
                          {" / "}${option.total}
                        </span>
                      </p>
                      <Progress value={(option.raised / option.total) * 100} />
                      <div className="flex flex-col">
                        <div className="h-1 w-2 bg-transparent"></div>
                        <div className="flex h-fit items-center gap-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3 text-pink-500"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>

                          <p className="text-[10px] text-muted-foreground">
                            {option.supporters} Supporters
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

import { Progress } from "@/components/ui/progress";
import { sanityClient, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 0;

export default async function waysToGive() {
  interface donationTypes {
    title: string;
    image: any;
    currentSlug: string;
    content: any[];
    raised: number;
    total: number;
    supporters: string;
  }
  async function getData() {
    const query = `
    *[_type == "donation-options"] | order(_createdAt desc) {
  title,
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
    <div className="mx-auto max-w-sm px-3 py-10 lg:max-w-5xl lg:px-0">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {donationOptions.map((option) => (
          <a href={`/ways-to-give/${option.currentSlug}`} key={option.title}>
            <div className="flex h-[275px] w-full flex-col items-center justify-between rounded border border-muted p-2 shadow-sm transition hover:bg-neutral-50 lg:h-[300px]">
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
                  <p className="line-clamp-2 text-[12px] font-bold tracking-wide lg:text-sm">
                    {option.title}
                  </p>
                  <div className="line-clamp-2 h-[30px] overflow-hidden text-[11px] text-muted-foreground">
                    <PortableText value={option.content} />
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
        ))}
      </div>
    </div>
  );
}

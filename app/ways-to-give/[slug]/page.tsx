import DonateButton from "@/components/block/donate-button";
import Navbar from "@/components/block/navbar";
import { Progress } from "@/components/ui/progress";
import { sanityClient, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

interface donationTypes {
  title: string;
  currentSlug: string;
  image: any;
  content: any[];
  raised: number;
  total: number;
  supporters: number;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const query = `*[_type == "donation-options" && slug.current == '${slug}'][0] {
  "currentSlug": slug.current,
    title,
    image,
    content,
    raised,
    total,
    supporters
}
`;
  const data: donationTypes = await sanityClient.fetch(query);

  if (!data?.title) {
    notFound();
  }
  return (
    <div className="">
      <div className="mx-auto mt-14 max-w-sm px-3 py-10 lg:max-w-2xl lg:px-0">
        <Image
          priority
          src={urlFor(data.image).url()}
          height={100}
          width={400}
          alt={data.title}
          className="h-[200px] w-full rounded-lg object-cover object-top opacity-90 grayscale lg:h-[300px]"
        />

        <div className="my-4 mt-4 space-y-2 rounded-xl bg-accent px-5 py-3 text-primary">
          <p className="pb-2 text-xl font-bold lg:text-2xl">{data.title}</p>
          <div className="space-y-1">
            <p className="text-[15px] font-bold">
              ${data.raised}
              <span className="font-normal text-emerald-900">
                {" / "}${data.total}
              </span>
            </p>
            <Progress
              className="h-3 max-w-xs shadow-sm"
              value={(data.raised / data.total) * 100}
            />
          </div>
          <div className="flex flex-col">
            <div className="h-1 w-2 bg-transparent"></div>
            <div className="flex h-fit items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 text-pink-500"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>

              <p className="text-[14px] text-emerald-900">
                {data.supporters} Supporters
              </p>
            </div>
          </div>
          <DonateButton className="w-32" link={`/ways-to-give/${slug}/donate`}>
            Donate
          </DonateButton>
        </div>
        <div className="prose py-3">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}

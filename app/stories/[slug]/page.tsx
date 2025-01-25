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

  const query = `*[_type == "stories" && slug.current == '${slug}'][0] {
  "currentSlug": slug.current,
    title,
    image,
    content,
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
        <div className="prose py-3">
          <p className="text-xl font-bold lg:text-xl">{data.title}</p>
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}

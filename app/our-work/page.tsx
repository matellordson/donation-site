import { sanityClient } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

interface type {
  content: any[];
  title: string;
}

export default async function OurWork() {
  const query = `*[_type == "about-us" && title == "work" ][0]{
    content,
}`;
  const data: type = await sanityClient.fetch(query);
  return (
    <div className="">
      <div className="lg: prose mx-auto mt-14 max-w-sm px-3 py-10 lg:max-w-4xl">
        <Image
          priority
          src="/our-work.jpg"
          height={1000}
          width={4000}
          alt="our work"
          className="h-[200px] w-full rounded-lg object-cover object-top opacity-90 lg:h-[400px]"
        />
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

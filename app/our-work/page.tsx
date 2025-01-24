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
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

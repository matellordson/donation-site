import Navbar from "@/components/block/navbar";
import { sanityClient, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

interface type {
  content: any[];
  title: string;
}

export default async function AboutUs() {
  const query = `*[_type == "about-us" && title == "about" ][0]{
    content,
}`;
  const data: type = await sanityClient.fetch(query);
  return (
    <div className="">
      <Navbar />
      <div className="prose mx-auto mt-14 max-w-sm px-3 py-10 lg:max-w-4xl">
        <Image
          priority
          src="/about-us.jpg"
          height={1000}
          width={4000}
          alt="about us"
          className="h-[200px] w-full rounded-lg object-cover object-center opacity-90 grayscale lg:h-[400px]"
        />
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

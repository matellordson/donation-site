import DonateButton from "@/components/block/donate-button";
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
    <div className="mt-14 flex flex-col items-center">
      <Image src={"/our-work.png"} alt="about-us" width={300} height={300} />
      <div className="lg: prose mx-auto max-w-sm px-3 py-10 lg:max-w-4xl">
        <PortableText value={data.content} />
        <DonateButton link="/ways-to-give" className="no-underline">
          Donate
        </DonateButton>
      </div>
    </div>
  );
}

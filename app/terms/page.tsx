import DonateButton from "@/components/block/donate-button";
// import Navbar from "@/components/block/navbar";
import { sanityClient, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

interface type {
  content: any[];
}

export default async function AboutUs() {
  const query = `*[_type == "terms" ][0]{
    content,
}`;
  const data: type = await sanityClient.fetch(query);
  return (
    <div className="mt-14 flex flex-col items-center">
      <Image src={"/terms.png"} alt="about-us" width={300} height={300} />
      <div className="prose mx-auto max-w-sm px-3 py-10 lg:max-w-4xl">
        <PortableText value={data.content} />
        <DonateButton link="/ways-to-give" className="no-underline">
          Donate
        </DonateButton>
      </div>
    </div>
  );
}

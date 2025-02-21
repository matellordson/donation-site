import { sanityClient } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const images = [
  {
    id: 10,
    src: "/partners/fedex.webp?height=400&width=400",
    alt: "Big Image 3",
  },
  {
    id: 2,
    src: "/partners/wells.png?height=200&width=200",
    alt: "Small Image 2",
  },
  {
    id: 7,
    src: "/partners/walmart.png?height=400&width=400",
    alt: "Big Image 2",
  },
  {
    id: 3,
    src: "/partners/capital.jpg?height=400&width=400",
    alt: "Big Image 1",
  },
  {
    id: 1,
    src: "/partners/chase.jpg?height=200&width=200",
    alt: "Small Image 1",
  },
  {
    id: 4,
    src: "/partners/micro.png?height=200&width=200",
    alt: "Small Image 3",
    size: "small",
  },
  {
    id: 5,
    src: "/partners/google.webp?height=200&width=200",
    alt: "Small Image 4",
  },

  {
    id: 9,
    src: "/partners/stripe.png?height=200&width=200",
    alt: "Small Image 7",
  },
  {
    id: 8,
    src: "/partners/target.png?height=200&width=200",
    alt: "Small Image 6",
  },

  {
    id: 11,
    src: "/partners/am.svg?height=400&width=400",
    alt: "Big Image 4",
  },
  {
    id: 6,
    src: "/partners/amazon.png?height=200&width=200",
    alt: "Small Image 5",
  },
  {
    id: 12,
    src: "/who.png?height=400&width=400",
    alt: "Big Image 8",
  },
];

interface type {
  content: any[];
}

export default async function WellArrangedImageGrid() {
  const query = `*[_type == "partners" ][0]{
      content,
  }`;
  const data: type = await sanityClient.fetch(query);
  console.log({ data });
  return (
    <div className="mx-auto mt-14 max-w-sm px-3 py-10 lg:max-w-5xl lg:px-0">
      <div className="mb-3 w-full">
        <p className="text-2xl font-bold capitalize">
          Supporting Through Partnerships
        </p>
        <p className="text-muted-foreground">Our Valued Corporate Supporters</p>
      </div>
      <Marquee>
        <div className="mt-5 flex justify-center gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative h-24 w-24 overflow-hidden rounded-md"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 96px) 100vw, 96px"
                className="object-contain p-2 grayscale transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </Marquee>
      <div className="prose">
        <PortableText value={data?.content} />
      </div>
    </div>
  );
}

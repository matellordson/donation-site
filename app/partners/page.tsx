import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/partners/chase.jpg?height=200&width=200",
    alt: "Small Image 1",
    size: "small",
  },
  {
    id: 2,
    src: "/partners/wells.png?height=200&width=200",
    alt: "Small Image 2",
    size: "small",
  },
  {
    id: 3,
    src: "/partners/capital.jpg?height=400&width=400",
    alt: "Big Image 1",
    size: "big",
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
    size: "small",
  },
  {
    id: 6,
    src: "/partners/amazon.png?height=200&width=200",
    alt: "Small Image 5",
    size: "small",
  },
  {
    id: 7,
    src: "/partners/walmart.png?height=400&width=400",
    alt: "Big Image 2",
    size: "big",
  },
  {
    id: 8,
    src: "/partners/target.png?height=200&width=200",
    alt: "Small Image 6",
    size: "small",
  },
  {
    id: 9,
    src: "/partners/stripe.png?height=200&width=200",
    alt: "Small Image 7",
    size: "small",
  },
  {
    id: 10,
    src: "/partners/fedex.webp?height=400&width=400",
    alt: "Big Image 3",
    size: "big",
  },
  {
    id: 11,
    src: "/partners/am.svg?height=400&width=400",
    alt: "Big Image 4",
    size: "big",
  },
];

export default function WellArrangedImageGrid() {
  return (
    <div className="mx-auto mt-14 max-w-sm px-3 py-10 lg:max-w-5xl lg:px-0">
      <div className="mb-3 w-full">
        <p className="text-2xl font-bold capitalize">
          Supporting Through Partnerships
        </p>
        <p className="text-muted-foreground">
          Our partners help us make a greater impact.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden border ${image.size === "big" ? "col-span-2 row-span-2" : ""}`}
          >
            <div className="pb-[100%]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="grayscale transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

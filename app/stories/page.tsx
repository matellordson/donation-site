import { sanityClient, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function Stories() {
  interface donationTypes {
    title: string;
    image: string;
    content: any[];
  }
  async function getData() {
    const query = `
    *[_type == "stories"] | order(_createdAt asc) {
    image,
    title,
    content
}`;
    const data = await sanityClient.fetch(query);

    return data;
  }
  const stories: donationTypes[] = await getData();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Line Separated Grid
      </h1>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2">
        {stories.map((story) => (
          <div
            key={story.title}
            className="mb-6 border-b border-gray-200 pb-6 last:mb-0 last:border-b-0 last:pb-0"
          >
            <div className="relative mb-4 h-48 w-full bg-muted">
              <Image
                src={urlFor(story.image).url()}
                alt={story.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md grayscale"
              />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              {story.title}
            </h2>
            <PortableText value={story.content} />
            {/* <Por className="text-gray-600">{story.content}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Progress } from "@/components/ui/progress";
import { sanityClient, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function Stories() {
  interface donationTypes {
    title: string;
    slug: string;
    content: any[];
    image: any;
  }
  async function getData() {
    const query = `
    *[_type == "stories"] | order(_createdAt asc) {
  title,
  image,
    "currentSlug": slug.current,
    content,
}`;
    const data = await sanityClient.fetch(query);

    return data;
  }

  const stories: donationTypes[] = await getData();

  return (
    <div className="">
      <div className="mx-auto mt-14 max-w-sm px-3 py-10 lg:max-w-5xl lg:px-0">
        <div className="mb-3 w-full">
          <p className="text-2xl font-bold capitalize">how you can help</p>
          <p className="text-muted-foreground">
            Choose a cause, donate, and change lives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {stories.map((story) => (
            <div
              key={story.title}
              className="flex h-[200px] w-full flex-col items-center justify-between rounded border border-muted p-2 shadow-sm transition hover:bg-neutral-50 lg:h-[205px]"
            >
              <div className="h-[49%] w-full rounded bg-muted shadow-sm">
                <Image
                  priority
                  src={urlFor(story.image).url()}
                  height={1000}
                  width={210}
                  alt={story.title}
                  className="h-full w-full rounded object-cover object-top opacity-90 shadow-sm grayscale"
                />
              </div>
              <div className="h-[51%] w-full py-3">
                <>
                  <Link href={"#"}>
                    <p className="line-clamp-1 text-[11px] font-extrabold capitalize tracking-wide hover:underline lg:text-sm">
                      {story.title}
                    </p>
                  </Link>
                  <div className="line-clamp-4 h-[60px] overflow-hidden text-[11px] text-muted-foreground">
                    <PortableText value={story.content} />
                  </div>
                </>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

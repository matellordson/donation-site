import { Progress } from "@/components/ui/progress";

export default function waysToGive() {
  const donationOptions = [
    {
      title: "Help Turky and Syria Earthquake Relief Fund",
      desc: "since 2006, SOIL has been working urban to provide basic aminities to those who suffer",
      raised: "$45,669",
      total: "$300,000",
      progress: 79,
      supporters: "45,000",
    },
    {
      title: "Help Poor Children with Cancer to Access Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt beatae sapiente necessitatibus laudantium qui similique laborum voluptatibus, et reiciendis consequatur nihil, alias reprehenderit itaque blanditiis illum dignissimos perspiciatis quo amet. Nemo culpa ea sequi, vel quae provident tempore quaerat omnis esse ipsa incidunt ipsum, facilis hic distinctio officia velit.",
      raised: "$2,669",
      total: "$1,000",
      progress: 60,
      supporters: "4,000",
    },
    {
      title: "Provide Gift and Food to 700 Street Children",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt beatae sapiente necessitatibus laudantium qui similique laborum voluptatibus, et reiciendis consequatur nihil, alias reprehenderit itaque blanditiis illum dignissimos perspiciatis quo amet. Nemo culpa ea sequi, vel quae provident tempore quaerat omnis esse ipsa incidunt ipsum, facilis hic distinctio officia velit.",
      raised: "$2,669",
      total: "$1,000",
      progress: 20,
      supporters: "1,000",
    },
  ];

  return (
    <div className="mx-auto max-w-sm px-3 py-10 lg:max-w-5xl lg:px-0">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {donationOptions.map((option) => (
          <div
            className="flex h-[300px] w-full flex-col items-center justify-between rounded border border-muted p-2 shadow-sm"
            key={option.title}
          >
            <div className="h-[49%] w-full rounded bg-muted shadow-sm"></div>
            <div className="h-[51%] w-full py-3">
              <>
                <p className="line-clamp-2 text-[12px] font-bold tracking-wide lg:text-sm">
                  {option.title}
                </p>
                <p className="line-clamp-2 text-[11px] text-muted-foreground">
                  {option.desc}
                </p>
              </>
              <div className="mt-2 space-y-px">
                <p className="text-[11px] font-bold">
                  {option.raised}
                  <span className="font-normal text-muted-foreground">
                    {" / "}
                    {option.total}
                  </span>
                </p>
                <Progress value={option.progress} />
                <div className="flex flex-col">
                  <div className="h-1 w-2 bg-transparent"></div>
                  <div className="flex h-fit items-center gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3 text-pink-500"
                    >
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                    <p className="text-[10px] text-muted-foreground">
                      {option.supporters} Supporters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

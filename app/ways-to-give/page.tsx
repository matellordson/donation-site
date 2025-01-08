export default function waysToGive() {
  const donationOptions = [
    {
      title: "Help Turky and Syria Earthquake Relief Fund",
      desc: "since 2006, SOIL has been working urban to provide basic aminities to those who suffer",
      raised: "$45,669",
      total: "$300,000",
      progress: "30%",
      supporters: "45,000",
    },
    {
      title: "Help Poor Children with Cancer to Access Treatment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt beatae sapiente necessitatibus laudantium qui similique laborum voluptatibus, et reiciendis consequatur nihil, alias reprehenderit itaque blanditiis illum dignissimos perspiciatis quo amet. Nemo culpa ea sequi, vel quae provident tempore quaerat omnis esse ipsa incidunt ipsum, facilis hic distinctio officia velit.",
      raised: "$2,669",
      total: "$1,000",
      progress: "60%",
      supporters: "4,000",
    },
    {
      title: "Provide Gift and Food to 700 Street Children",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt beatae sapiente necessitatibus laudantium qui similique laborum voluptatibus, et reiciendis consequatur nihil, alias reprehenderit itaque blanditiis illum dignissimos perspiciatis quo amet. Nemo culpa ea sequi, vel quae provident tempore quaerat omnis esse ipsa incidunt ipsum, facilis hic distinctio officia velit.",
      raised: "$2,669",
      total: "$1,000",
      progress: "60%",
      supporters: "4,000",
    },
  ];

  return (
    <div className="mx-auto max-w-sm px-3 py-10 lg:max-w-5xl lg:px-0">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {donationOptions.map((option) => (
          <div
            className="lg:[300px] flex h-[250px] w-full flex-col items-center justify-between rounded border border-muted p-2 shadow-sm lg:h-[300px]"
            key={option.title}
          >
            <div className="h-[40%] w-full rounded bg-muted shadow-sm"></div>
            <div className="h-[60%] w-full py-3">
              {/* truncate to only two line */}
              <p className="line-clamp-2 text-[11px] font-bold tracking-wide lg:text-sm">
                {option.title}
              </p>
              <p className="line-clamp-2 text-[11px] text-muted-foreground lg:text-sm">
                {option.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

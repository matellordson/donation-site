export default function waysToGive() {
  const donationOptions = [
    {
      title: "the poor",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt beatae sapiente necessitatibus laudantium qui similique laborum voluptatibus, et reiciendis consequatur nihil, alias reprehenderit itaque blanditiis illum dignissimos perspiciatis quo amet. Nemo culpa ea sequi, vel quae provident tempore quaerat omnis esse ipsa incidunt ipsum, facilis hic distinctio officia velit.",
      raised: "$45,669",
      total: "$300,000",
      progress: "30%",
      supporters: "45,000",
    },
    {
      title: "the needy",
      desc: "this people will die of hunger",
      raised: "$2,669",
      total: "$1,000",
      progress: "60%",
      supporters: "4,000",
    },
    {
      title: "the need",
      desc: "this people will die of hunger",
      raised: "$2,669",
      total: "$1,000",
      progress: "60%",
      supporters: "4,000",
    },
    {
      title: "the nee",
      desc: "this people will die of hunger",
      raised: "$2,669",
      total: "$1,000",
      progress: "60%",
      supporters: "4,000",
    },
    {
      title: "the ne",
      desc: "this people will die of hunger",
      raised: "$2,669",
      total: "$1,000",
      progress: "60%",
      supporters: "4,000",
    },
  ];

  return (
    <div className="mx-auto max-w-sm px-5 py-10 lg:max-w-5xl lg:px-0">
      {/* Mobile View */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
        {donationOptions.map((option) => (
          <div
            className="flex h-[300px] w-full flex-col items-center justify-between rounded border p-2"
            key={option.title}
          >
            <div className="h-[60%] w-full rounded bg-muted shadow-md"></div>
            <div className="h-[40%] w-full">
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

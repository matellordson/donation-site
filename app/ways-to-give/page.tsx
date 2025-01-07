export default function waysToGive() {
  const options = [
    {
      title: "the poor",
      desc: "please help this people",
    },
    {
      title: "the needy",
      desc: "this people will die of hunger",
    },
  ];

  return (
    <div className="">
      {options.map((list) => (
        <div key={list.title}>
          <p>{list.title}</p>
          <p>{list.desc}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

import { Button } from "../ui/button";

interface type {
  link: string;
  children: React.ReactNode;
}

export default function DonateButton({ link, children }: type) {
  return (
    <Button variant={"emphasis"} size={"big"} asChild>
      <a href={link}>{children}</a>
    </Button>
  );
}

import { Button } from "../ui/button";

interface type {
  link: string;
  children: React.ReactNode;
  className?: string;
}

export default function DonateButton({ link, children, className }: type) {
  return (
    <Button className={className} variant={"emphasis"} size={"big"} asChild>
      <a href={link}>{children}</a>
    </Button>
  );
}

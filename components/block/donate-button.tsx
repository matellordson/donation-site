import { Button } from "../ui/button";

export default function DonateButton({ link }: { link: string }) {
  return (
    <Button variant={"emphasis"} size={"big"} asChild>
      <a href={link}>Donate Now</a>
    </Button>
  );
}

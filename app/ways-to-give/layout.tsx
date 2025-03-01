import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate Now",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

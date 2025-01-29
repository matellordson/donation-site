import DonateButton from "@/components/block/donate-button";
import Image from "next/image";
// import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="mx-auto mt-20 max-w-7xl px-3 lg:px-0">
      <div className="relative flex h-[450px] w-full items-end justify-start overflow-hidden rounded-xl bg-gray-600 shadow-sm lg:h-[500px]">
        <Image
          src={"/banner.jpg"}
          className="absolute h-full w-full object-cover mix-blend-overlay grayscale"
          alt="donate"
          width={3000}
          height={430}
          priority
        />
        <div className="flex w-full flex-col items-start justify-center text-gray-50 drop-shadow-2xl lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-end gap-x-3 pl-3 lg:pl-5">
            <p className="relative top-1 p-0 text-[75px] font-bold tracking-tighter lg:top-10 lg:text-[150px]">
              Donate
            </p>
            <div className="text-[20px] font-semibold lg:text-[30px]">
              <p className="relative top-[-10px] tracking-tighter lg:top-[1px]">
                Help
              </p>
              <p className="relative top-[-20px] tracking-tighter lg:top-[-12px]">
                Others
              </p>
            </div>
          </div>
          <DonateButton
            className="relative bottom-[10px] ml-3 lg:bottom-[20px] lg:mr-5"
            link="/ways-to-give"
          >
            Start Donating
          </DonateButton>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return <div className=""></div>;
}

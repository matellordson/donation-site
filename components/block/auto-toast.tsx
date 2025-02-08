// "use client";

// import { useEffect, useState } from "react";
// import { useToast } from "@/hooks/use-toast";

// const INTERVALS = [2000, 4000, 7000];
// const TOASTS_PER_INTERVAL = 5;

// export default function AutoToast() {
//   const { toast } = useToast();
//   const [count, setCount] = useState(0);
//   const [intervalIndex, setIntervalIndex] = useState(0);

//   useEffect(() => {
//     const interval = INTERVALS[intervalIndex];
//     const timeoutId = setTimeout(() => {
//       setCount((prevCount) => prevCount + 1);
//       toast({
//         description: `This toast appears every ${interval / 1000} seconds!`,
//       });

//       if ((count + 1) % TOASTS_PER_INTERVAL === 0) {
//         setIntervalIndex((prevIndex) => (prevIndex + 1) % INTERVALS.length);
//       }
//     }, interval);

//     return () => clearTimeout(timeoutId);
//   }, [toast, count, intervalIndex]);

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
//       <h1 className="text-2xl font-bold">Auto Toast Demo</h1>
//       <p className="text-lg">Toasts generated: {count}</p>
//       <p className="text-md">
//         Current interval: {INTERVALS[intervalIndex] / 1000} seconds
//       </p>
//       <p className="text-sm text-gray-500">
//         Interval changes every {TOASTS_PER_INTERVAL} toasts
//       </p>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const INTERVALS = [2000, 4000, 7000];
const TOASTS_PER_INTERVAL = 5;

export default function AutoToast() {
  const { toast } = useToast();
  const [count, setCount] = useState(0);
  const [intervalIndex, setIntervalIndex] = useState(0);

  useEffect(() => {
    const interval = INTERVALS[intervalIndex];
    const timeoutId = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      toast({
        description: `This toast appears every ${interval / 1000} seconds!`,
        className:
          "bottom-1 right-0 flex fixed md:max-w-[420px] md:bottom-4 md:right-4",
      });

      if ((count + 1) % TOASTS_PER_INTERVAL === 0) {
        setIntervalIndex((prevIndex) => (prevIndex + 1) % INTERVALS.length);
      }
    }, interval);

    return () => clearTimeout(timeoutId);
  }, [toast, count, intervalIndex]);
}

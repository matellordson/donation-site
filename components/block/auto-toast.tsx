"use client";

import { useEffect, useCallback } from "react";
import { toast, Toaster } from "sonner";

const INTERVALS = [2000, 4000, 7000];
const AMOUNTS = [
  200, 250, 300, 400, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500,
  5000, 7500, 10000, 15000, 20000, 25000, 30000, 40000, 50000, 75000, 100000,
  150000, 200000, 250000, 500000, 1000000,
];

export default function AutoToast() {
  const getRandomInterval = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * INTERVALS.length);
    return INTERVALS[randomIndex];
  }, []);

  const getRandomAmount = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * AMOUNTS.length);
    return AMOUNTS[randomIndex];
  }, []);

  const formatCurrency = useCallback((amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }, []);

  useEffect(() => {
    const showRandomToast = () => {
      const interval = getRandomInterval();
      const amount = getRandomAmount();
      const formattedAmount = formatCurrency(amount);

      toast(
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <span className="mr-2">♥️</span>
            <span className="font-semibold">{formattedAmount} received</span>
          </div>
          <a href="/ways-to-give">
            <button
              onClick={() => {
                console.log(`Donate clicked for ${formattedAmount}`);
              }}
              className="rounded-xl bg-accent px-4 py-1 text-lg font-semibold text-primary"
            >
              Donate
            </button>
          </a>
        </div>,
        {
          duration: 4000,
        },
      );

      setTimeout(showRandomToast, interval);
    };

    showRandomToast();

    return () => {
      toast.dismiss();
    };
  }, [getRandomInterval, getRandomAmount, formatCurrency]);

  return (
    <Toaster
    // toastOptions={{
    //   style: {
    //     background: "white",
    //     color: "black",
    //     // borderRadius: "9999px", // This makes it fully rounded
    //     padding: "16px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     width: "100%",
    //     maxWidth: "400px",
    //   },
    // }}
    />
  );
}

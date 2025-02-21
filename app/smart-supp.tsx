"use client";

import { useEffect } from "react";
import { loadSmartsupp } from "./smart-supp-script";

export default function SmartSupp() {
  useEffect(() => {
    loadSmartsupp();
  }, []);

  return null;
}

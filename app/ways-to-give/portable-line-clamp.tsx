import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface PortableTextLineClampProps {
  value: PortableTextBlock[];
  lines?: number;
}

export function PortableTextLineClamp({
  value,
  lines = 3,
}: PortableTextLineClampProps) {
  const components: PortableTextComponents = {
    block: ({ children }) => <p className="line-clamp">{children}</p>,
  };

  return (
    <div
      className="portable-text-line-clamp"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      <PortableText value={value} components={components} />
    </div>
  );
}

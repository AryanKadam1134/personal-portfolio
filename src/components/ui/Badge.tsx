import React from "react";

export const Badge = ({ text }: { text: string }) => {
  return (
    <span className="px-2.5 py-1 text-xs text-white bg-white/10 border border-white/20 rounded-full">
      {text}
    </span>
  );
};

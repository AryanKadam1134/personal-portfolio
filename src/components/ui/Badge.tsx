export const Badge = ({ text }: { text: string }) => {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs text-white">
      {text}
    </span>
  );
};

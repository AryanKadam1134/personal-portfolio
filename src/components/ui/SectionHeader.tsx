import { cn } from "../../utils/cn";

export const SectionHeader = ({ heading }: { heading: string }) => {
  return (
    <div
      className={cn(
        "text-center text-4xl font-semibold text-white",
        "sm:text-5xl",
      )}
    >
      {heading}
    </div>
  );
};

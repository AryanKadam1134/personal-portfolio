import dayjs from "dayjs";

export const formatDate = (value: string | null) => {
  if (!value) return "Unknown";

  return dayjs(value).format("MMM DD, YYYY");
};

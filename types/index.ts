export type OpeningHours = {
  day: number; // 0 = Sunday … 6 = Saturday, same as Date.getDay()
  name: string;
  hours: { open: string; close: string } | null; // "10:00"; null = closed
};

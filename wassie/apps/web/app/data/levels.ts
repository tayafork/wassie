export type Level = {
  id: string;
  level: number;
  name: string;
  volume: number; // raw number, e.g. 500000
  rateMultiplier: number; // numeric multiplier
  daily: number; // daily xWASSIE produced (number)
};

export const LEVELS: Level[] = [
  { id: "level-1", level: 1, name: "Baby Wassie", volume: 500_000, rateMultiplier: 1, daily: 1_000 },
  { id: "level-2", level: 2, name: "Happy Wassie", volume: 5_000_000, rateMultiplier: 2, daily: 2_000 },
  { id: "level-3", level: 3, name: "Crypto Wassie", volume: 50_000_000, rateMultiplier: 5, daily: 5_000 },
  { id: "level-4", level: 4, name: "Legend Wassie", volume: 200_000_000, rateMultiplier: 10, daily: 10_000 },
  { id: "level-5", level: 5, name: "OG Wassie", volume: 2_000_000_000, rateMultiplier: 25, daily: 25_000 },
];

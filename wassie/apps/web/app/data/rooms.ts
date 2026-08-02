export type Room = {
  id: string;
  name: string;
  priceLabel: string; // display string like "FREE" or "0.001 ETH"
  priceEth?: number | null; // numeric ETH value when applicable
  bonusMultiplier: number;
  bonusLabel: string; // display string like "1x" or "1.5x"
};

export const ROOMS: Room[] = [
  { id: "room-fridge", name: "Fridge Room", priceLabel: "FREE", priceEth: null, bonusMultiplier: 1, bonusLabel: "1x" },
  { id: "room-trading", name: "Trading Cave", priceLabel: "0.0006 ETH", priceEth: 0.0006, bonusMultiplier: 1.2, bonusLabel: "1.2x" },
  { id: "room-moon", name: "Moon Lab", priceLabel: "0.001 ETH", priceEth: 0.001, bonusMultiplier: 1.5, bonusLabel: "1.5x" },
  { id: "room-palace", name: "Wassie Palace", priceLabel: "0.002 ETH", priceEth: 0.002, bonusMultiplier: 2, bonusLabel: "2x" },
  { id: "room-cosmic", name: "Cosmic Arena", priceLabel: "0.005 ETH", priceEth: 0.005, bonusMultiplier: 3, bonusLabel: "3x" },
];

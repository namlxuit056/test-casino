export type Game = {
  categories: string[];
  name: string;
  image: string;
  id: string;
  jackpot: number;
};

export type JackPot = {
  game: string;
  amount: number;
};

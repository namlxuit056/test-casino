import { Game, JackPot } from "../../types/game";

export async function fetchGameList() {
  try {
    const response = await fetch(
      "https://stage.whgstage.com/front-end-test/games.php"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    return data as Game[];
  } catch (error: any) {
    throw new Error(`Error fetching categories: ${error.message}`);
  }
}

export async function fetchJackpotList() {
  try {
    const response = await fetch(
      "https://stage.whgstage.com/front-end-test/jackpots.php"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch jackpot");
    }

    const data = await response.json();
    return data as JackPot[];
  } catch (error: any) {
    throw new Error(`Error fetching categories: ${error.message}`);
  }
}

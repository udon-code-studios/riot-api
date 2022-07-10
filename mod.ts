/**
 * Provides functions and response types to interact with the Riot API.
 *
 * @module
 */

export * as routes from "./api/routes.ts"; // routing value enums
export * as league from "./api/league/funcs.ts"; // LEAGUE-V4
export type { LeagueEntryDTO } from "./api/league/types.ts";
export * as summoner from "./api/summoner/funcs.ts"; // SUMMONER-V4
export type { SummonerDTO } from "./api/summoner/types.ts";

// define global interface
declare global {
  interface Window {
    RIOT_API_KEY: string | undefined;
  }
}

// get RIOT_API_KEY from env variable
window.RIOT_API_KEY = Deno.env.get("RIOT_API_KEY");
if (window.RIOT_API_KEY === undefined) {
  console.log("[ ERROR ]: RIOT_API_KEY env variable is not set. API calls will fail.");
}

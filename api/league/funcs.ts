import { Platform } from "../routes.ts";
import { LeagueEntryDTO } from "./types.ts";

/** Get league entries in all queues for a given summoner ID. */
export async function bySummonerId(
  summonerId: string,
  options: { region: Platform }
): Promise<{ status: number; leagueEntry?: LeagueEntryDTO }> {
  // make HTTP request
  const resp = await fetch(`https://${options.region}/league/v4/entries/by-summoner/${summonerId}`, {
    headers: { "X-Riot-Token": window.RIOT_API_KEY || "" },
  });

  // extract JSON on 200 status
  let leagueEntry: LeagueEntryDTO | undefined = undefined;
  if (resp.status === 200) {
    leagueEntry = await resp.json();
  }

  return { status: resp.status, leagueEntry: leagueEntry };
}

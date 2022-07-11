import { Platform } from "../routes.ts";
import { SummonerDTO } from "./types.ts";

/** Get a summoner by summoner name. */
export async function byName(
  name: string,
  options: { region: Platform }
): Promise<{ status: number; summoner?: SummonerDTO }> {
  // make HTTP request
  const resp = await fetch(`https://${options.region}/lol/summoner/v4/summoners/by-name/${name}`, {
    headers: { "X-Riot-Token": window.RIOT_API_KEY || "" },
  });

  // extract JSON on 200 status
  let summoner: SummonerDTO | undefined = undefined;
  if (resp.status === 200) {
    summoner = (await resp.json()) as SummonerDTO;
  }

  return { status: resp.status, summoner: summoner };
}

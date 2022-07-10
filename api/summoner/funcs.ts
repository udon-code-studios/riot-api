import { SummonerDTO } from "./types.ts";

/** Get a summoner by summoner name. */
export async function byName(
  name: string,
  options: { host: string }
): Promise<{ status: number; summoner?: SummonerDTO }> {
  const resp = await fetch(`https://${options.host}/lol/summoner/v4/summoners/by-name/${name}`, {
    headers: { "X-Riot-Token": window.RIOT_API_KEY || "" },
  });

  let summoner: SummonerDTO | undefined = undefined;
  if (resp.status === 200) {
    summoner = await resp.json();
  }

  return { status: resp.status, summoner: summoner };
}

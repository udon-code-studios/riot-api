import { Regional } from "../routes.ts";

/** Get a list of match ids by puuid. */
export async function byPuuid(
  puuid: string,
  options: {
    region: Regional;
    /** Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set. */
    startTime?: number;
    /** Epoch timestamp in seconds. */
    endTime?: number;
    /** Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters. */
    queue?: number;
    /** Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters. */
    type?: string;
    /** Defaults to 0. Start index. */
    start?: number;
    /** Defaults to 20. Valid values: 0 to 100. Number of match ids to return. */
    count?: number;
  }
): Promise<{ status: number; matches?: string[] }> {
  // build query string from options
  const queryString =
    (options.startTime ? `?startTime=${options.startTime}&` : "?") +
    (options.endTime ? `endTime=${options.endTime}&` : "") +
    (options.queue ? `queue=${options.queue}&` : "") +
    (options.type ? `type=${options.type}&` : "") +
    (options.start ? `start=${options.start}&` : "") +
    (options.count ? `count=${options.count}&` : "");

  // make HTTP request
  const resp = await fetch(`https://${options.region}/lol/match/v5/matches/by-puuid/${puuid}/ids${queryString}`, {
    headers: { "X-Riot-Token": window.RIOT_API_KEY || "" },
  });

  // extract JSON on 200 status
  let matches: string[] | undefined = undefined;
  if (resp.status === 200) {
    matches = (await resp.json()) as string[];
  }

  return { status: resp.status, matches };
}

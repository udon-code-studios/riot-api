/** Summoner Data Transfer Object from the SUMMONER-V4 Riot API */
export interface SummonerDTO {
  accountId: string; // Encrypted account ID. Max length 56 characters.
  profileIconId: number; // ID of the summoner icon associated with the summoner.
  revisionDate: number; // Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
  name: string; // Summoner name.
  id: string; // Encrypted summoner ID. Max length 63 characters.
  puuid: string; // Encrypted PUUID. Exact length of 78 characters.
  summonerLevel: number; // Summoner level associated with the summoner.
}

/** League Entry Data Transfer Object from the LEAGUE-V4 Riot API */
export interface LeagueEntryDTO {
  leagueId: string;
  summonerId: string; //	Player's encrypted summonerId.
  summonerName: string;
  queueType: string;
  tier: string;
  rank: string; //The player's division within a tier.
  leaguePoints: number;
  wins: number; //Winning team on Summoners Rift.
  losses: number; //Losing team on Summoners Rift.
  hotStreak: boolean;
  veteran: boolean;
  freshBlood: boolean;
  inactive: boolean;
  miniSeries: MiniSeriesDTO;
}

/** Mini Series Data Transfer Object from the LEAGUE-V4 Riot API */
interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number;
}

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

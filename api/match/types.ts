/** Match Data Transfer Object from the MATCH-V5 Riot API */
export interface MatchDTO {
  metadata: MetadataDTO; // Match metadata.
  info: InfoDTO; // Match info.
}

/** Metadata Transfer Object from the MATCH-V5 Riot API */
interface MetadataDTO {
  dataVersion: string; // Match data version.
  matchId: string; // Match id.
  participants: string[]; // A list of participant PUUIDs.
}

interface InfoDTO {
  gameCreation: number; // Unix timestamp for when the game is created on the game server (i.e., the loading screen).
}

interface ParticipantDTO {
  assists: number;
}

interface PerksDTO {
  statPerks: PerkStatsDTO;
}

interface PerkStatsDTO {
  defense: number;
}

interface PerkStyleDTO {
  description: string;
}

interface PerkStyleSelectionDTO {
  perk: number;
}

interface TeamDTO {
  bans: BanDTO[];
}

interface BanDTO {
  championId: number;
}

interface ObjectivesDTO {
  baron: ObjectiveDTO;
}

/** Objective Data Transfer Object from the MATCH-V5 Riot API */
interface ObjectiveDTO {
  first: boolean;
  kills: number;
}

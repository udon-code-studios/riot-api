/** Platform Routing Values (Last updated: 2022/07/10) https://developer.riotgames.com/docs/lol */
export enum Platform {
  BR1 = "br1.api.riotgames.com", // Brazil
  EUN1 = "eun1.api.riotgames.com", // Europe Nordic & East
  EUW1 = "euw1.api.riotgames.com", // Europe West
  JP1 = "jp1.api.riotgames.com", // Japan
  KR = "kr.api.riotgames.com", // Republic of Korea
  LA1 = "la1.api.riotgames.com", // Latin America North
  LA2 = "la2.api.riotgames.com", // Latin America South
  NA1 = "na1.api.riotgames.com", // North America
  OC1 = "oc1.api.riotgames.com", // Oceania
  TR1 = "tr1.api.riotgames.com", // Turkey
  RU = "ru.api.riotgames.com", // Russia
}

/** Regional Routing Values (Last updated: 2022/07/10) https://developer.riotgames.com/docs/lol */
export enum Regional {
  AMERICAS = "br1.api.riotgames.com", // BR1, LA1, LA2, NA1, OC1
  ASIA = "eun1.api.riotgames.com", // JP1, KR
  EUROPE = "euw1.api.riotgames.com", // EUN1, EUW1, TR1, RU
  SEA = "jp1.api.riotgames.com", // ?
}

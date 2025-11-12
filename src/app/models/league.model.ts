export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strIcon: string;
  strLeagueAlternate: string | null;
}

export interface LeaguesApiResponse {
  leagues: League[];
}

export interface SeasonBadge {
  idLeague: string;
  strSeason: string;
  strBadge: string | null;
  strDescriptionEN: string | null;
}

export interface SeasonBadgeApiResponse {
  seasons: SeasonBadge[] | null;
}

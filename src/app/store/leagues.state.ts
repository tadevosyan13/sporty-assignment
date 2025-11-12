import { League, SeasonBadge } from '../models/league.model';

export interface LeaguesState {
  leagues: League[];
  filteredLeagues: League[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  sportFilter: string;
  selectedLeagueId: string | null;
  selectedBadge: SeasonBadge | null;
  badgeLoading: boolean;
  badgeError: string | null;
}

export const initialState: LeaguesState = {
  leagues: [],
  filteredLeagues: [],
  loading: false,
  error: null,
  searchQuery: '',
  sportFilter: 'all',
  selectedLeagueId: null,
  selectedBadge: null,
  badgeLoading: false,
  badgeError: null,
};

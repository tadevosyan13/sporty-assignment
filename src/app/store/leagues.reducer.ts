import { createReducer, on } from '@ngrx/store';
import { initialState, LeaguesState } from './leagues.state';
import * as LeaguesActions from './leagues.actions';
import { League } from '../models/league.model';

function filterLeagues(
  leagues: League[],
  searchQuery: string,
  sportFilter: string
): League[] {
  let filtered = leagues;

  if (sportFilter && sportFilter !== 'all') {
    filtered = filtered.filter(
      league => league.strSport.toLowerCase() === sportFilter.toLowerCase()
    );
  }

  if (searchQuery && searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(league =>
      league.strLeague.toLowerCase().includes(query) ||
      (league.strLeagueAlternate?.toLowerCase().includes(query))
    );
  }

  return filtered;
}

export const leaguesReducer = createReducer(
  initialState,

  on(LeaguesActions.loadLeagues, (state): LeaguesState => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(LeaguesActions.loadLeaguesSuccess, (state, { leagues }): LeaguesState => {
    const filteredLeagues = filterLeagues(leagues, state.searchQuery, state.sportFilter);
    return {
      ...state,
      leagues,
      filteredLeagues,
      loading: false,
      error: null,
    };
  }),

  on(LeaguesActions.loadLeaguesFailure, (state, { error }): LeaguesState => ({
    ...state,
    loading: false,
    error,
  })),

  on(LeaguesActions.setSearchQuery, (state, { query }): LeaguesState => {
    const filteredLeagues = filterLeagues(state.leagues, query, state.sportFilter);
    return {
      ...state,
      searchQuery: query,
      filteredLeagues,
    };
  }),

  on(LeaguesActions.setSportFilter, (state, { sport }): LeaguesState => {
    const filteredLeagues = filterLeagues(state.leagues, state.searchQuery, sport);
    return {
      ...state,
      sportFilter: sport,
      filteredLeagues,
    };
  }),

  // Badge Actions
  on(LeaguesActions.loadBadge, (state, { leagueId }): LeaguesState => ({
    ...state,
    selectedLeagueId: leagueId,
    selectedBadge: null,
    badgeLoading: true,
    badgeError: null,
  })),

  on(LeaguesActions.loadBadgeSuccess, (state, { badge }): LeaguesState => ({
    ...state,
    selectedBadge: badge,
    badgeLoading: false,
    badgeError: null,
  })),

  on(LeaguesActions.loadBadgeFailure, (state, { error }): LeaguesState => ({
    ...state,
    badgeLoading: false,
    badgeError: error,
  })),

  on(LeaguesActions.closeBadgeModal, (state): LeaguesState => ({
    ...state,
    selectedLeagueId: null,
    selectedBadge: null,
    badgeLoading: false,
    badgeError: null,
  }))
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LeaguesState } from './leagues.state';

export const selectLeaguesState = createFeatureSelector<LeaguesState>('leagues');

export const selectAllLeagues = createSelector(
  selectLeaguesState,
  (state) => state.leagues
);

export const selectFilteredLeagues = createSelector(
  selectLeaguesState,
  (state) => state.filteredLeagues
);

export const selectLoading = createSelector(
  selectLeaguesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectLeaguesState,
  (state) => state.error
);

export const selectSearchQuery = createSelector(
  selectLeaguesState,
  (state) => state.searchQuery
);

export const selectSportFilter = createSelector(
  selectLeaguesState,
  (state) => state.sportFilter
);

export const selectAvailableSports = createSelector(
  selectAllLeagues,
  (leagues) => {
    const sports = new Set(leagues.map(league => league.strSport));
    return Array.from(sports).sort();
  }
);

export const selectSelectedLeagueId = createSelector(
  selectLeaguesState,
  (state) => state.selectedLeagueId
);

export const selectSelectedBadge = createSelector(
  selectLeaguesState,
  (state) => state.selectedBadge
);

export const selectBadgeLoading = createSelector(
  selectLeaguesState,
  (state) => state.badgeLoading
);

export const selectBadgeError = createSelector(
  selectLeaguesState,
  (state) => state.badgeError
);

export const selectShowBadgeModal = createSelector(
  selectSelectedLeagueId,
  (leagueId) => leagueId !== null
);

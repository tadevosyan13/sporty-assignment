import { createAction, props } from '@ngrx/store';
import { League, SeasonBadge } from '../models/league.model';

export const loadLeagues = createAction('[Leagues] Load Leagues');

export const loadLeaguesSuccess = createAction(
  '[Leagues] Load Leagues Success',
  props<{ leagues: League[] }>()
);

export const loadLeaguesFailure = createAction(
  '[Leagues] Load Leagues Failure',
  props<{ error: string }>()
);

export const setSearchQuery = createAction(
  '[Leagues] Set Search Query',
  props<{ query: string }>()
);

export const setSportFilter = createAction(
  '[Leagues] Set Sport Filter',
  props<{ sport: string }>()
);

export const setSortedList = createAction(
  '[Leagues] Set League Sorting',
  props<{ sport: string }>()
);

export const loadBadge = createAction(
  '[Badge] Load Badge',
  props<{ leagueId: string }>()
);

export const loadBadgeSuccess = createAction(
  '[Badge] Load Badge Success',
  props<{ leagueId: string; badge: SeasonBadge | null }>()
);

export const loadBadgeFailure = createAction(
  '[Badge] Load Badge Failure',
  props<{ leagueId: string; error: string }>()
);

export const closeBadgeModal = createAction('[Badge] Close Badge Modal');

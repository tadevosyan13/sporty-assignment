import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { LeaguesService } from '../services/leagues.service';
import * as LeaguesActions from './leagues.actions';

@Injectable()
export class LeaguesEffects {
  private actions$ = inject(Actions);
  private leaguesService = inject(LeaguesService);

  loadLeagues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeaguesActions.loadLeagues),
      switchMap(() =>
        this.leaguesService.getAllLeagues().pipe(
          map(leagues => LeaguesActions.loadLeaguesSuccess({ leagues })),
          catchError(error =>
            of(LeaguesActions.loadLeaguesFailure({
              error: error.message || 'Failed to load leagues'
            }))
          )
        )
      )
    )
  );

  loadBadge$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LeaguesActions.loadBadge),
      switchMap(({ leagueId }) =>
        this.leaguesService.getSeasonBadge(leagueId).pipe(
          map(badge => LeaguesActions.loadBadgeSuccess({ leagueId, badge })),
          catchError(error =>
            of(LeaguesActions.loadBadgeFailure({
              leagueId,
              error: error.message || 'Failed to load badge'
            }))
          )
        )
      )
    )
  );
}

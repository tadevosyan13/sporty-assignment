import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { LeaguesApiResponse, SeasonBadgeApiResponse, League, SeasonBadge } from '../models/league.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  private http = inject(HttpClient);

  private readonly API_BASE = 'https://www.thesportsdb.com/api/v1/json/3';
  private readonly ALL_LEAGUES_URL = `${this.API_BASE}/all_leagues.php`;
  private readonly SEASON_BADGE_URL = `${this.API_BASE}/search_all_seasons.php`;

  // Cache storage
  private leaguesCache$: Observable<League[]> | null = null;
  private badgeCache = new Map<string, Observable<SeasonBadge | null>>();

  getAllLeagues(): Observable<League[]> {
    if (!this.leaguesCache$) {
      this.leaguesCache$ = this.http.get<LeaguesApiResponse>(this.ALL_LEAGUES_URL).pipe(
        map(response => response.leagues || []),
        shareReplay(1)
      );
    }
    return this.leaguesCache$;
  }

  getSeasonBadge(leagueId: string): Observable<SeasonBadge | null> {
    if (!this.badgeCache.has(leagueId)) {
      const badge$ = this.http.get<SeasonBadgeApiResponse>(
        `${this.SEASON_BADGE_URL}?badge=1&id=${leagueId}`
      ).pipe(
        map(response => {
          if (response.seasons && response.seasons.length > 0) {
            return response.seasons[0];
          }
          return null;
        }),
        shareReplay(1)
      );

      this.badgeCache.set(leagueId, badge$);
    }

    return this.badgeCache.get(leagueId)!;
  }

  clearCache(): void {
    this.leaguesCache$ = null;
    this.badgeCache.clear();
  }
}

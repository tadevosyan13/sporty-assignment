import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { League } from '../../models/league.model';
import { loadBadge } from '../../store/leagues.actions';
import { selectFilteredLeagues, selectLoading, selectError } from '../../store/leagues.selectors';
import { LeagueCardComponent } from '../league-card/league-card.component';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [CommonModule, LeagueCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit {
  private store = inject(Store);

  leagues$!: Observable<League[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  ngOnInit(): void {
    this.leagues$ = this.store.select(selectFilteredLeagues);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  onLeagueClick(leagueId: string): void {
    this.store.dispatch(loadBadge({ leagueId }));
  }
}

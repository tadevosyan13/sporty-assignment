import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadLeagues } from './store/leagues.actions';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SportFilterComponent } from './components/sport-filter/sport-filter.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { BadgeModalComponent } from './components/badge-modal/badge-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    SportFilterComponent,
    LeagueListComponent,
    BadgeModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(loadLeagues());
  }
}

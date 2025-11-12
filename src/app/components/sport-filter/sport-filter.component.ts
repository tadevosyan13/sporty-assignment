import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setSportFilter } from '../../store/leagues.actions';
import { selectAvailableSports, selectSportFilter } from '../../store/leagues.selectors';

@Component({
  selector: 'app-sport-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'sport-filter.component.html',
  styleUrl: 'sport-filter.component.scss'
})
export class SportFilterComponent implements OnInit {
  private store = inject(Store);

  availableSports$!: Observable<string[]>;
  selectedSport$!: Observable<string>;

  ngOnInit(): void {
    this.availableSports$ = this.store.select(selectAvailableSports);
    this.selectedSport$ = this.store.select(selectSportFilter);
  }

  onSportChange(sport: string): void {
    this.store.dispatch(setSportFilter({ sport }));
  }
}

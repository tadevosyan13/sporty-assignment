import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setSearchQuery } from '../../store/leagues.actions';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'search-bar.component.html',
  styleUrl: 'search-bar.component.scss'
})
export class SearchBarComponent {
  private store = inject(Store);

  searchTerm = signal('');

  onSearchChange(value: string): void {
    this.store.dispatch(setSearchQuery({ query: value }));
  }

  clearSearch(): void {
    this.searchTerm.set('');
    this.store.dispatch(setSearchQuery({ query: '' }));
  }
}

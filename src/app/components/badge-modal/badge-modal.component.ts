import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { closeBadgeModal } from '../../store/leagues.actions';
import {
  selectShowBadgeModal,
  selectSelectedBadge,
  selectBadgeLoading,
  selectBadgeError
} from '../../store/leagues.selectors';
import { SeasonBadge } from '../../models/league.model';

@Component({
  selector: 'app-badge-modal',
  templateUrl: 'badge-modal.component.html',
  styleUrl: 'badge-modal.component.scss',
  imports: [CommonModule],
  standalone: true
})
export class BadgeModalComponent implements OnInit {
  private store = inject(Store);

  showModal$!: Observable<boolean>;
  badge$!: Observable<SeasonBadge | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  ngOnInit(): void {
    this.showModal$ = this.store.select(selectShowBadgeModal);
    this.badge$ = this.store.select(selectSelectedBadge);
    this.loading$ = this.store.select(selectBadgeLoading);
    this.error$ = this.store.select(selectBadgeError);
  }

  closeModal(): void {
    this.store.dispatch(closeBadgeModal());
  }
}

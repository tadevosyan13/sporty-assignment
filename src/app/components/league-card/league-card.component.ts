import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { League } from '../../models/league.model';

@Component({
  selector: 'app-league-card',
  templateUrl: './league-card.component.html',
  styleUrl: './league-card.component.scss',
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueCardComponent {
  @Input({ required: true }) league!: League;
  @Output() cardClick = new EventEmitter<string>();

  onCardClick(): void {
    this.cardClick.emit(this.league.idLeague);
  }
}

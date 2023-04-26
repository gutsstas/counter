import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { ICounter } from '../../models/interfaces.model';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() current!: Observable<ICounter>;

  subscription!: Subscription;

  changeCount(value: number) {
    this.counterService.putCurrentData(value);
    this.counterService.isVisible = false;
  }

  constructor(public counterService: CounterService) {}
}

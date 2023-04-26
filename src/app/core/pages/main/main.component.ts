import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public counterService: CounterService) {}
  ngOnInit(): void {
    this.counterService.getCurrentData();
  }
}

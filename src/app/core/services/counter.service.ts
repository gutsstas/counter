import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICounter } from '../models/interfaces.model';
import { URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  isVisible = false;
  currentData$!: Observable<ICounter>;
  constructor(private http: HttpClient) {}

  getCurrentData() {
    this.currentData$ = this.http.get<ICounter>(URL);
  }

  putCurrentData(num: number) {
    this.currentData$ = this.http.put<ICounter>(URL, {
      current: num,
    });
  }
}

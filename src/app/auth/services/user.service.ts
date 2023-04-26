import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KEY } from 'src/app/core/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userName = '';

  private statusBtn = new BehaviorSubject<boolean>(
    localStorage.getItem(KEY) ? true : false
  );

  currentStatus = this.statusBtn.asObservable();

  setStatus(value: boolean) {
    this.statusBtn.next(value);
  }

  logIn(login: string) {
    localStorage.setItem(KEY, `${login}`);
    this.userName = login;
    this.setStatus(true);
  }

  logOut() {
    localStorage.removeItem(KEY);
    this.userName = '';
    this.setStatus(false);
  }

  getUserName() {
    this.userName = localStorage.getItem(KEY) || '';
    return this.userName;
  }
}

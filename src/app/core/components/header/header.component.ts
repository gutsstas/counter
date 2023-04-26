import { Router } from '@angular/router';
import { UserService } from './../../../auth/services/user.service';
import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public userService: UserService,
    private router: Router,
    private counterService: CounterService
  ) {}

  clickLogOut(): void {
    this.userService.logOut();
    this.counterService.putCurrentData(0);
    setTimeout(() => {
      this.router.navigate(['/login']);
    });
  }

  clickLogIn(): void {
    this.router.navigate(['/login']);
  }
}

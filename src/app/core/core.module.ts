import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MainComponent } from './pages/main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    ModalComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, HttpClientModule],
  exports: [HeaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    CounterService,
  ],
})
export class CoreModule {}

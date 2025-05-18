import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    CommonModule,
    IonApp,
    IonRouterOutlet,
    HeaderComponent
  ],
})
export class AppComponent {
  constructor() {}
}
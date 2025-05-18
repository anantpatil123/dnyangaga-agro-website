import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent ,IonGrid ,IonRow,IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,CommonModule,IonGrid,IonRow,IonCol],
})
export class HomePage {
  constructor() {}
}

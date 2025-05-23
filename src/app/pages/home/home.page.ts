import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  IonContent ,IonGrid ,IonRow,IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports: [ IonContent,CommonModule,IonGrid,IonRow,IonCol],
})
export class HomePage {
  constructor() {}
}

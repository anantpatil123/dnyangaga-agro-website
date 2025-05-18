import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar,IonButtons,IonButton,IonMenuButton} from '@ionic/angular/standalone';
import { IonCol, IonGrid, IonRow,IonRouterLink } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, logoIonic, mail } from 'ionicons/icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports:[IonHeader, IonToolbar , IonGrid ,IonRow ,IonCol ,IonButtons ,IonButton ,IonMenuButton,IonRouterLink,RouterModule, IonIcon]
})
export class HeaderComponent  implements OnInit {
  email:string ="dnyangangaagroglobal@gmail.com"
  mobileNumber:string="+91 84079 53567"

  constructor() {

     addIcons({ mail,call });
   }

  ngOnInit() {}

}

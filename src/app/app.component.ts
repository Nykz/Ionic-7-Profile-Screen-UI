import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatboxEllipsesOutline, chatbubblesOutline, heartOutline, homeOutline, logOutOutline, notificationsOutline, optionsOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ 
      personOutline, 
      optionsOutline, 
      notificationsOutline, 
      logOutOutline, 
      chatbubblesOutline,
      heartOutline,
      homeOutline,
      chatboxEllipsesOutline
    });
  }
}

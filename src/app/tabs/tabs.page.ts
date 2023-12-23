import { Component } from '@angular/core';
// import { IonicModule } from '@ionic/angular';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  // imports: [IonicModule]
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class TabsPage {

  constructor() { }

}

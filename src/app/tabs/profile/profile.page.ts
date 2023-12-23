import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProfilePage implements OnInit {

  options: any[] = [];

  constructor() { 
  }

  ngOnInit() {
    console.log('profile ngoninit');
    this.options = [
      {title: 'Profile', icon: 'person-outline', color: 'primary'},
      {title: 'Chat', icon: 'chatbubbles-outline', color: 'primary'},
      {title: 'Wishlist', icon: 'heart-outline', color: 'primary'},
      {title: 'Settings', icon: 'options-outline', color: 'primary'},
      {title: 'Notifications', icon: 'notifications-outline', color: 'primary'},
      {title: 'Logout', icon: 'log-out-outline', color: 'secondary', background: 'primary'},
    ];
  }

  getRows() {
    const rows = [];
    for (let i = 0; i < this.options.length; i += 3) {
      rows.push(this.options.slice(i, i + 3));
    }
    return rows;
  }

}

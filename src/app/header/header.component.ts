import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileName: string = 'Admin'; 
  showLogoutPopup: boolean = false;

  constructor(private router: Router) {}
ngOnInit(): void {
  
}
  confirmLogout() {
    this.showLogoutPopup = true;
  }

  cancelLogout() {
    this.showLogoutPopup = false;
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }
  logout() {
    this.showLogoutPopup = false;
  }
}

import {Component} from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public currentProfile: string = 'User';
  constructor(private userService: UserService) {}
  switchUser() {
    this.userService.setUser();
    this.currentProfile = 'User';
  }
  switchAdmin() {
    this.userService.setAdmin();
    this.currentProfile = 'Admin';
  }
}

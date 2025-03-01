import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get imagePath() {
    return this.selectedUser.url;
  }

  onSelectUser(selectedUser: { name: string; url: string }) {
    alert('User selected: ' + selectedUser.name);
  }
}

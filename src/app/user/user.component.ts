import { Component, signal, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.name);
  }
}

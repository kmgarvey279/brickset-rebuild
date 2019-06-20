import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(private userService: UserService) { }

  submitForm(userName: string, userCountry: string) {
    var newUser: User = new User(userName, new Date(), userCountry);
    this.userService.addUser(newUser);
  }
}

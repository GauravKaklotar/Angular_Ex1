import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../interface/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UserService]
})
export class UsersComponent {
  allUsers!: IUser[];
  user!: IUser;
  
  users!:number;

  constructor(private userService: UserService){
    this.userService.getAllUsers().then((userList: IUser[]) => {
      this.allUsers = userList;
      console.log(this.allUsers);
    });
  }
}

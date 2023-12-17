import { Component } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [UserService]
})
export class UserDetailsComponent {
  user!: IUser;
  id!: number;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    try {
      this.userService.getUserById(this.id).then((user: IUser) => {
        this.user = user;
        console.log(this.user);
      });
    } catch (error) {
      console.error('Invalid or missing id', error);
    }
  }
}

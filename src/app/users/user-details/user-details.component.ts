import { Component, ViewChild } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  providers: [UserService],
})
export class UserDetailsComponent {
  user!: IUser;
  id!: number;

  @ViewChild('myForm') form!: NgForm;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    try {
      this.userService.getUserById(this.id).then((user: IUser) => {
        this.user = user;
        console.log(this.user);

        // set the values of form fields
        this.form.setValue({
          id: this.user.id,
          username: this.user.username,
          email: this.user.email,
          age: this.user.age,
          address: this.user.address,
          phone: this.user.phone,
        });
      });
    } catch (error) {
      console.error('Invalid or missing id', error);
    }
  }

  OnSubmit()
  {}
}

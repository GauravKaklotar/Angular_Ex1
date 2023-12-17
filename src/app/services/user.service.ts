import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  url: string = 'http://localhost:3000/users';

  async getAllUsers(): Promise<IUser[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getUserById(id: number): Promise<IUser> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
  }
}

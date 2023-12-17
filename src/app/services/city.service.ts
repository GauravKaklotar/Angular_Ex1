import { Injectable } from '@angular/core';
import { ICity } from '../interface/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  url: string = 'http://localhost:3000/cities';

  async getAllCities(): Promise<ICity[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCityById(id: number): Promise<ICity> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
  }
}

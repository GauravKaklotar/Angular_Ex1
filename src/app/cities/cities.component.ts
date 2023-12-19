import { Component } from '@angular/core';
import { CityService } from '../services/city.service';
import { ICity } from '../interface/city';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  providers: [CityService]
})
export class CitiesComponent {
  allCity!: ICity[];
  city!: ICity;
  Cities!:number;
  
  constructor(private cityService: CityService){
    this.cityService.getAllCities().then((cityList: ICity[]) => {
      this.allCity = cityList;
      console.log(this.allCity);
    });
  }
}

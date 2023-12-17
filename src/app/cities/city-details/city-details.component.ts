import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICity } from 'src/app/interface/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  providers: [CityService]
})
export class CityDetailsComponent {
  city!: ICity;
  id!: number;

  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    try {
      this.cityService.getCityById(this.id).then((city: ICity) => {
        this.city = city;
        console.log(this.city);
      });
    } catch (error) {
      console.error('Invalid or missing id', error);
    }
  }
}

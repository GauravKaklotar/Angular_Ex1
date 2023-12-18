import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('myForm') form!: NgForm;

  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    try {
      this.cityService.getCityById(this.id).then((city: ICity) => {
        this.city = city;
        console.log(this.city);

        // set the values of form fields
        this.form.setValue({
          id: this.city.id,
          name: this.city.name,
          country: this.city.country,
          population: this.city.population,
          area_sq_km: this.city.area_sq_km,
          latitude: this.city.latitude,
          longitude: this.city.longitude,
        });

      });
    } catch (error) {
      console.error('Invalid or missing id', error);
    }
  }

  OnSubmit()
  {}
}

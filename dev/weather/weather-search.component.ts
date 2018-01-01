import { WeatherItem } from './weather-item';
import { WeatherService } from './weather.service';
import { Component } from 'angular2/core';
import { ControlGroup } from 'angular2/common';
import { Subject } from 'rxjs/Subject';
import { OnInit } from 'angular2/src/core/linker/interfaces';

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search" >
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" (input)="onSearchLocation(input.value)" required #input>
                <button type="Submit">Add City</button>
            </form>
            <div>
                <span class="info">City found:</span> {{data.name}}
            </div>
        </section>
    `
})

export class WeatherSearchComponent implements OnInit{

    private searchStream = new Subject<string>();
    data: any = {};

    constructor(private _weatherService: WeatherService) {}

    onSubmit(form: ControlGroup){
        //console.log(form);
        this._weatherService.searchWeatherData(form.value.location)
        .subscribe(
            data => {
                const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                this._weatherService.addWeatherItem(weatherItem);
            }
        );
    }

    onSearchLocation(cityName: string){
        this.searchStream
        .next(cityName);
    }
    
    ngOnInit(){
        // this.searchStream
        // .subscribe(data => console.log(data))
        this.searchStream
            // .debounceTime(300)
            // .distinctUntilChanged()
            .switchMap((input:string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                data => console.log(data)
            );
        }

}
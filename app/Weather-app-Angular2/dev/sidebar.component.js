System.register(['./weather/weather.service', './profile.service', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var weather_service_1, profile_service_1, core_1;
    var SidebarComponent;
    return {
        setters:[
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_profileService, _weatherService) {
                    this._profileService = _profileService;
                    this._weatherService = _weatherService;
                }
                SidebarComponent.prototype.onSaveNew = function () {
                    var cities = this._weatherService.getWeatherItems().map(function (element) {
                        return element.cityName;
                    });
                    this._profileService.saveNewProfile(cities);
                };
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    console.log("click ala");
                    // this._weatherService.clearWeatherItems();
                    // for(let i=0; i<profile.cities.length; i++){
                    //     this._weatherService.searchWeatherData(profile.cities[i])
                    //     .retry()
                    //     .subscribe(
                    //         data =>{
                    //             const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    //             this._weatherService.addWeatherItem(weatherItem);
                    //         }
                    //     )
                    // }
                };
                SidebarComponent.prototype.ngOnInit = function () {
                    this.profiles = this._profileService.getProfiles();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n        <h3>Saved Profiles</h3>\n        <button (click)=\"onSaveNew()\">Save List to Profile</button>\n        <article class=\"profile\" *ngFor=\"#profile of profiles\" (click)=\"onLoadProfile(profile)\">\n            <h4>{{ profile.profileName }}</h4>\n            <p>Cities: {{ profile.cities.join(', ') }}</p>\n            <span class=\"delete\" (click)=\"onDeleteProfile($event, profile)\">X</span>\n        </article>\n    ",
                        styleUrls: ['src/css/sidebar.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUdJLDBCQUFvQixlQUErQixFQUFVLGVBQStCO29CQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFLLENBQUM7Z0JBRWxHLG9DQUFTLEdBQVQ7b0JBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBUyxPQUFvQjt3QkFDbkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6Qiw0Q0FBNEM7b0JBQzVDLDhDQUE4QztvQkFDOUMsZ0VBQWdFO29CQUNoRSxlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQiwyR0FBMkc7b0JBQzNHLGdFQUFnRTtvQkFDaEUsWUFBWTtvQkFDWixRQUFRO29CQUNSLElBQUk7Z0JBQ1IsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkE1Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGtiQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM5QixDQUFDOztvQ0FBQTtnQkFnQ0YsdUJBQUM7WUFBRCxDQTlCQSxBQThCQyxJQUFBO1lBOUJELCtDQThCQyxDQUFBIiwiZmlsZSI6IldlYXRoZXItYXBwLUFuZ3VsYXIyL2Rldi9zaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi8uLi8uLi9kZXYvd2VhdGhlci93ZWF0aGVyLWl0ZW0nO1xuaW1wb3J0IHsgV2VhdGhlckl0ZW0gfSBmcm9tICcuL3dlYXRoZXIvd2VhdGhlci1pdGVtJztcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDM+U2F2ZWQgUHJvZmlsZXM8L2gzPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblNhdmVOZXcoKVwiPlNhdmUgTGlzdCB0byBQcm9maWxlPC9idXR0b24+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicHJvZmlsZVwiICpuZ0Zvcj1cIiNwcm9maWxlIG9mIHByb2ZpbGVzXCIgKGNsaWNrKT1cIm9uTG9hZFByb2ZpbGUocHJvZmlsZSlcIj5cbiAgICAgICAgICAgIDxoND57eyBwcm9maWxlLnByb2ZpbGVOYW1lIH19PC9oND5cbiAgICAgICAgICAgIDxwPkNpdGllczoge3sgcHJvZmlsZS5jaXRpZXMuam9pbignLCAnKSB9fTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCIgKGNsaWNrKT1cIm9uRGVsZXRlUHJvZmlsZSgkZXZlbnQsIHByb2ZpbGUpXCI+WDwvc3Bhbj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2lkZWJhci5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHByb2ZpbGVzOiBQcm9maWxlW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wcm9maWxlU2VydmljZTogUHJvZmlsZVNlcnZpY2UsIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSl7ICAgfVxuXG4gICAgb25TYXZlTmV3KCl7XG4gICAgICAgIGNvbnN0IGNpdGllcyA9IHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXJJdGVtcygpLm1hcChmdW5jdGlvbihlbGVtZW50OiBXZWF0aGVySXRlbSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaXR5TmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnNhdmVOZXdQcm9maWxlKGNpdGllcyk7XG4gICAgfVxuXG4gICAgb25Mb2FkUHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGljayBhbGFcIik7XG4gICAgICAgIC8vIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmNsZWFyV2VhdGhlckl0ZW1zKCk7XG4gICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPHByb2ZpbGUuY2l0aWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy8gICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKHByb2ZpbGUuY2l0aWVzW2ldKVxuICAgICAgICAvLyAgICAgLnJldHJ5KClcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICAgICAgZGF0YSA9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgd2VhdGhlckl0ZW0gPSBuZXcgV2VhdGhlckl0ZW0oZGF0YS5uYW1lLCBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuYWRkV2VhdGhlckl0ZW0od2VhdGhlckl0ZW0pO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMucHJvZmlsZXMgPSB0aGlzLl9wcm9maWxlU2VydmljZS5nZXRQcm9maWxlcygpO1xuICAgIH1cbn0iXX0=

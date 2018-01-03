System.register(['./weather/weather-item', './weather/weather.service', './profile.service', 'angular2/core'], function(exports_1, context_1) {
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
    var weather_item_1, weather_service_1, profile_service_1, core_1;
    var SidebarComponent;
    return {
        setters:[
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
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
                    var _this = this;
                    console.log("click ala");
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherData(profile.cities[i])
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                            _this._weatherService.addWeatherItem(weatherItem);
                        });
                    }
                };
                SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
                    event.stopPropagation();
                    this._profileService.deleteProfile(profile);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUdJLDBCQUFvQixlQUErQixFQUFVLGVBQStCO29CQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFLLENBQUM7Z0JBRWxHLG9DQUFTLEdBQVQ7b0JBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBUyxPQUFvQjt3QkFDbkYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUFyQixpQkFhQztvQkFaRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN4RCxLQUFLLEVBQUU7NkJBQ1AsU0FBUyxDQUNOLFVBQUEsSUFBSTs0QkFDQSxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM1RixLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDckQsQ0FBQyxDQUNKLENBQUE7b0JBQ0wsQ0FBQztnQkFDTCxDQUFDO2dCQUVELDBDQUFlLEdBQWYsVUFBZ0IsS0FBSyxFQUFFLE9BQU87b0JBQzFCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQy9DLENBQUM7Z0JBRUQsbUNBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZELENBQUM7Z0JBakRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxrYkFRVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDbEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFDOUIsQ0FBQzs7b0NBQUE7Z0JBcUNGLHVCQUFDO1lBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtZQW5DRCwrQ0FtQ0MsQ0FBQSIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXItaXRlbSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci93ZWF0aGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc2lkZWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgzPlNhdmVkIFByb2ZpbGVzPC9oMz5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25TYXZlTmV3KClcIj5TYXZlIExpc3QgdG8gUHJvZmlsZTwvYnV0dG9uPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2ZpbGVcIiAqbmdGb3I9XCIjcHJvZmlsZSBvZiBwcm9maWxlc1wiIChjbGljayk9XCJvbkxvYWRQcm9maWxlKHByb2ZpbGUpXCI+XG4gICAgICAgICAgICA8aDQ+e3sgcHJvZmlsZS5wcm9maWxlTmFtZSB9fTwvaDQ+XG4gICAgICAgICAgICA8cD5DaXRpZXM6IHt7IHByb2ZpbGUuY2l0aWVzLmpvaW4oJywgJykgfX08L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZVwiIChjbGljayk9XCJvbkRlbGV0ZVByb2ZpbGUoJGV2ZW50LCBwcm9maWxlKVwiPlg8L3NwYW4+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL3NpZGViYXIuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbUHJvZmlsZVNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBwcm9maWxlczogUHJvZmlsZVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLCBwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpeyAgIH1cblxuICAgIG9uU2F2ZU5ldygpe1xuICAgICAgICBjb25zdCBjaXRpZXMgPSB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVySXRlbXMoKS5tYXAoZnVuY3Rpb24oZWxlbWVudDogV2VhdGhlckl0ZW0pe1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2l0eU5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9wcm9maWxlU2VydmljZS5zYXZlTmV3UHJvZmlsZShjaXRpZXMpO1xuICAgIH1cblxuICAgIG9uTG9hZFByb2ZpbGUocHJvZmlsZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgYWxhXCIpO1xuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5jbGVhcldlYXRoZXJJdGVtcygpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxwcm9maWxlLmNpdGllcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YShwcm9maWxlLmNpdGllc1tpXSlcbiAgICAgICAgICAgIC5yZXRyeSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJdGVtID0gbmV3IFdlYXRoZXJJdGVtKGRhdGEubmFtZSwgZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCBkYXRhLm1haW4udGVtcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlbGV0ZVByb2ZpbGUoZXZlbnQsIHByb2ZpbGUpe1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2UuZGVsZXRlUHJvZmlsZShwcm9maWxlKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMucHJvZmlsZXMgPSB0aGlzLl9wcm9maWxlU2VydmljZS5nZXRQcm9maWxlcygpO1xuICAgIH1cbn0iXX0=

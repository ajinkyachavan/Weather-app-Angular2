System.register(['./weather.data', 'angular2/core', 'rxjs/Observable', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var weather_data_1, core_1, Observable_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                }
                WeatherService.prototype.getWeatherItems = function () {
                    return weather_data_1.WEATHER_ITEMS;
                };
                WeatherService.prototype.addWeatherItem = function (weatherItem) {
                    weather_data_1.WEATHER_ITEMS.push(weatherItem);
                };
                WeatherService.prototype.searchWeatherData = function (cityName) {
                    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=e64336c97a9654e4e21d11324cb5d430&units=metric')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                WeatherService.prototype.clearWeatherItems = function () {
                    weather_data_1.WEATHER_ITEMS.splice(0);
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVJLHdCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUcsQ0FBQztnQkFFbkMsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx1Q0FBYyxHQUFkLFVBQWUsV0FBd0I7b0JBQ25DLDRCQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQixVQUFrQixRQUFnQjtvQkFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFHLFFBQVEsR0FBRyxzREFBc0QsQ0FBQzt5QkFDN0ksR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLFVBQUEsS0FBSzt3QkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7b0JBRXpDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsMENBQWlCLEdBQWpCO29CQUNJLDRCQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQXpCTDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkEwQmIscUJBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELDJDQXlCQyxDQUFBIiwiZmlsZSI6IldlYXRoZXItYXBwLUFuZ3VsYXIyL2Rldi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi93ZWF0aGVyLWl0ZW0nO1xuaW1wb3J0IHsgV0VBVEhFUl9JVEVNUyB9IGZyb20gJy4vd2VhdGhlci5kYXRhJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlcnZpY2VcbntcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG4gICAgZ2V0V2VhdGhlckl0ZW1zKCl7XG4gICAgICAgIHJldHVybiBXRUFUSEVSX0lURU1TO1xuICAgIH1cblxuICAgIGFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtOiBXZWF0aGVySXRlbSl7XG4gICAgICAgIFdFQVRIRVJfSVRFTVMucHVzaCh3ZWF0aGVySXRlbSk7XG4gICAgfVxuXG4gICAgc2VhcmNoV2VhdGhlckRhdGEoY2l0eU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPScgKyBjaXR5TmFtZSArICcmQVBQSUQ9ZTY0MzM2Yzk3YTk2NTRlNGUyMWQxMTMyNGNiNWQ0MzAmdW5pdHM9bWV0cmljJylcbiAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhcldlYXRoZXJJdGVtcygpe1xuICAgICAgICBXRUFUSEVSX0lURU1TLnNwbGljZSgwKTtcbiAgICB9XG59Il19

System.register(['./weather-item', './weather.service', 'angular2/core', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var weather_item_1, weather_service_1, core_1, Subject_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    //console.log(form);
                    this._weatherService.searchWeatherData(form.value.location)
                        .subscribe(function (data) {
                        var weatherItem = new weather_item_1.WeatherItem(data.name, data.weather[0].description, data.main.temp);
                        _this._weatherService.addWeatherItem(weatherItem);
                    });
                };
                WeatherSearchComponent.prototype.onSearchLocation = function (cityName) {
                    this.searchStream
                        .next(cityName);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.searchStream
                    // .subscribe(data => console.log(data))
                    this.searchStream
                        .switchMap(function (input) { return _this._weatherService.searchWeatherData(input); })
                        .subscribe(function (data) { return console.log(data); });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n        <section class=\"weather-search\" >\n            <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                <label for=\"city\">City</label>\n                <input ngControl=\"location\" type=\"text\" id=\"city\" (input)=\"onSearchLocation(input.value)\" required #input>\n                <button type=\"Submit\">Add City</button>\n            </form>\n            <div>\n                <span class=\"info\">City found:</span> {{data.name}}\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUtJLGdDQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUgzQyxpQkFBWSxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO29CQUM3QyxTQUFJLEdBQVEsRUFBRSxDQUFDO2dCQUV1QyxDQUFDO2dCQUV2RCx5Q0FBUSxHQUFSLFVBQVMsSUFBa0I7b0JBQTNCLGlCQVNDO29CQVJHLG9CQUFvQjtvQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzt5QkFDMUQsU0FBUyxDQUNOLFVBQUEsSUFBSTt3QkFDQSxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM1RixLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckQsQ0FBQyxDQUNKLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsUUFBZ0I7b0JBQzdCLElBQUksQ0FBQyxZQUFZO3lCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQseUNBQVEsR0FBUjtvQkFBQSxpQkFVSztvQkFURCxvQkFBb0I7b0JBQ3BCLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLFlBQVk7eUJBR1osU0FBUyxDQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQzt5QkFDMUUsU0FBUyxDQUNOLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FDNUIsQ0FBQztnQkFDTixDQUFDO2dCQWpEVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwwZkFXVDtxQkFDSixDQUFDOzswQ0FBQTtnQkFxQ0YsNkJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELDJEQW1DQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2VhdGhlckl0ZW0gfSBmcm9tICcuL3dlYXRoZXItaXRlbSc7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbEdyb3VwIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3dlYXRoZXItc2VhcmNoJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIndlYXRoZXItc2VhcmNoXCIgPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgKGlucHV0KT1cIm9uU2VhcmNoTG9jYXRpb24oaW5wdXQudmFsdWUpXCIgcmVxdWlyZWQgI2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cIlN1Ym1pdFwiPkFkZCBDaXR5PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb1wiPkNpdHkgZm91bmQ6PC9zcGFuPiB7e2RhdGEubmFtZX19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgcHJpdmF0ZSBzZWFyY2hTdHJlYW0gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gICAgZGF0YTogYW55ID0ge307XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHt9XG5cbiAgICBvblN1Ym1pdChmb3JtOiBDb250cm9sR3JvdXApe1xuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm0pO1xuICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyRGF0YShmb3JtLnZhbHVlLmxvY2F0aW9uKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VhdGhlckl0ZW0gPSBuZXcgV2VhdGhlckl0ZW0oZGF0YS5uYW1lLCBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWF0aGVyU2VydmljZS5hZGRXZWF0aGVySXRlbSh3ZWF0aGVySXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25TZWFyY2hMb2NhdGlvbihjaXR5TmFtZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5zZWFyY2hTdHJlYW1cbiAgICAgICAgLm5leHQoY2l0eU5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgICAvLyAuc3Vic2NyaWJlKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gICAgICAgIHRoaXMuc2VhcmNoU3RyZWFtXG4gICAgICAgICAgICAvLyAuZGVib3VuY2VUaW1lKDMwMClcbiAgICAgICAgICAgIC8vIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgICAgICAuc3dpdGNoTWFwKChpbnB1dDpzdHJpbmcpID0+IHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJEYXRhKGlucHV0KSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG59Il19

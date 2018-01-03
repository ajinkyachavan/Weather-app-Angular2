System.register(['./weather.service', "angular2/core", "./weather-item.component"], function(exports_1, context_1) {
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
    var weather_service_1, core_1, weather_item_component_1;
    var WeatherListComponent;
    return {
        setters:[
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n        <section class=\"weather-list\">\n            <weather-item *ngFor=\"#weatherItem of weatherItems\" [item]=\"weatherItem\"></weather-item>\n        </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFHSSw4QkFBb0IsZUFBK0I7b0JBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtnQkFFbkQsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDL0QsQ0FBQztnQkFsQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLGdMQUlUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDZDQUFvQixDQUFDO3FCQUNyQyxDQUFDOzt3Q0FBQTtnQkFZRiwyQkFBQztZQUFELENBWEEsQUFXQyxJQUFBO1lBWEQsdURBV0MsQ0FBQSIsImZpbGUiOiJXZWF0aGVyLWFwcC1Bbmd1bGFyMi9kZXYvd2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbmltcG9ydCB7IFdlYXRoZXJJdGVtIH0gZnJvbSAnLi93ZWF0aGVyLWl0ZW0nO1xuaW1wb3J0IHsgV0VBVEhFUl9JVEVNUyB9IGZyb20gJy4vd2VhdGhlci5kYXRhJztcblxuaW1wb3J0IHsgV2VhdGhlckl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW0uY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIndlYXRoZXItbGlzdFwiPlxuICAgICAgICAgICAgPHdlYXRoZXItaXRlbSAqbmdGb3I9XCIjd2VhdGhlckl0ZW0gb2Ygd2VhdGhlckl0ZW1zXCIgW2l0ZW1dPVwid2VhdGhlckl0ZW1cIj48L3dlYXRoZXItaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1dlYXRoZXJJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgd2VhdGhlckl0ZW1zOiBXZWF0aGVySXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiBhbnl7XG4gICAgICAgIHRoaXMud2VhdGhlckl0ZW1zID0gdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCk7XG4gICAgfVxuXG59ICJdfQ==

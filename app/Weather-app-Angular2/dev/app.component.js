System.register(['./sidebar.component', 'angular2/core', "./weather/weather-list.component", './weather/weather-search.component'], function(exports_1, context_1) {
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
    var sidebar_component_1, core_1, weather_list_component_1, weather_search_component_1;
    var AppComponent;
    return {
        setters:[
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_list_component_1_1) {
                weather_list_component_1 = weather_list_component_1_1;
            },
            function (weather_search_component_1_1) {
                weather_search_component_1 = weather_search_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n            <h1>Angular 2 Weather</h1>\n        </header>\n        <my-sidebar></my-sidebar>\n        <weather-search></weather-search>\n        <weather-list></weather-list>\n    ",
                        directives: [weather_list_component_1.WeatherListComponent, weather_search_component_1.WeatherSearchComponent, sidebar_component_1.SidebarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsME1BT1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsaURBQXNCLEVBQUUsb0NBQWdCLENBQUM7cUJBQy9FLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6IldlYXRoZXItYXBwLUFuZ3VsYXIyL2Rldi9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtXZWF0aGVyTGlzdENvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBXZWF0aGVyU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi93ZWF0aGVyL3dlYXRoZXItc2VhcmNoLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxPkFuZ3VsYXIgMiBXZWF0aGVyPC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxteS1zaWRlYmFyPjwvbXktc2lkZWJhcj5cbiAgICAgICAgPHdlYXRoZXItc2VhcmNoPjwvd2VhdGhlci1zZWFyY2g+XG4gICAgICAgIDx3ZWF0aGVyLWxpc3Q+PC93ZWF0aGVyLWxpc3Q+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbV2VhdGhlckxpc3RDb21wb25lbnQsIFdlYXRoZXJTZWFyY2hDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59Il19

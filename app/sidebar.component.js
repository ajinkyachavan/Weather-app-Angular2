System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                }
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n        <h3>Saved Profiles</h3>\n        <button (click)=\"onSaveNew()\">Save List to Profile</button>\n        <article class=\"profile\">\n            <h4>Profile Name</h4>\n            <p>Cities: NY</p>\n            <span class=\"delete\" (click)=\"onDeleteProfile($event)\">X</span>\n        </article>\n    ",
                        styleUrls: ['src/css/sidebar.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUFBO2dCQUVBLENBQUM7Z0JBaEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw0VEFRVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDckMsQ0FBQzs7b0NBQUE7Z0JBSUYsdUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELCtDQUVDLENBQUEiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDM+U2F2ZWQgUHJvZmlsZXM8L2gzPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblNhdmVOZXcoKVwiPlNhdmUgTGlzdCB0byBQcm9maWxlPC9idXR0b24+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgPGg0PlByb2ZpbGUgTmFtZTwvaDQ+XG4gICAgICAgICAgICA8cD5DaXRpZXM6IE5ZPC9wPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxldGVcIiAoY2xpY2spPVwib25EZWxldGVQcm9maWxlKCRldmVudClcIj5YPC9zcGFuPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy9zaWRlYmFyLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudHtcblxufSJdfQ==

System.register(['./profile'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var profile_1;
    var ProfileService;
    return {
        setters:[
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default Profile', ['New York', 'London', 'Berlin'])
                    ];
                }
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile' + this.profiles.length;
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                };
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUNZLGFBQVEsR0FBYzt3QkFDMUIsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDbkUsQ0FBQztnQkFXTixDQUFDO2dCQVRHLHVDQUFjLEdBQWQsVUFBZSxNQUFnQjtvQkFDM0IsSUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNyRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUNMLHFCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCwyQ0FjQyxDQUFBIiwiZmlsZSI6IldlYXRoZXItYXBwLUFuZ3VsYXIyL2Rldi9wcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlJztcblxuXG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZXtcbiAgICBwcml2YXRlIHByb2ZpbGVzOiBQcm9maWxlW10gPSBbXG4gICAgICAgIG5ldyBQcm9maWxlKCdEZWZhdWx0IFByb2ZpbGUnLCBbJ05ldyBZb3JrJywgJ0xvbmRvbicsICdCZXJsaW4nXSlcbiAgICBdO1xuXG4gICAgc2F2ZU5ld1Byb2ZpbGUoY2l0aWVzOiBzdHJpbmdbXSl7IFxuICAgICAgICBjb25zdCBwcm9maWxlTmFtZSA9ICdQcm9maWxlJyArIHRoaXMucHJvZmlsZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBwcm9maWxlID0gbmV3IFByb2ZpbGUocHJvZmlsZU5hbWUsIGNpdGllcyk7XG4gICAgICAgIHRoaXMucHJvZmlsZXMucHVzaChwcm9maWxlKTtcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlcztcbiAgICB9XG59Il19

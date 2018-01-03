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
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles.splice(this.profiles.indexOf(profile), 1);
                };
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUNZLGFBQVEsR0FBYzt3QkFDMUIsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDbkUsQ0FBQztnQkFlTixDQUFDO2dCQWJHLHVDQUFjLEdBQWQsVUFBZSxNQUFnQjtvQkFDM0IsSUFBTSxXQUFXLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUNyRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFPO29CQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDTCxxQkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQsMkNBa0JDLENBQUEiLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vcHJvZmlsZSc7XG5cblxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2V7XG4gICAgcHJpdmF0ZSBwcm9maWxlczogUHJvZmlsZVtdID0gW1xuICAgICAgICBuZXcgUHJvZmlsZSgnRGVmYXVsdCBQcm9maWxlJywgWydOZXcgWW9yaycsICdMb25kb24nLCAnQmVybGluJ10pXG4gICAgXTtcblxuICAgIHNhdmVOZXdQcm9maWxlKGNpdGllczogc3RyaW5nW10peyBcbiAgICAgICAgY29uc3QgcHJvZmlsZU5hbWUgPSAnUHJvZmlsZScgKyB0aGlzLnByb2ZpbGVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IG5ldyBQcm9maWxlKHByb2ZpbGVOYW1lLCBjaXRpZXMpO1xuICAgICAgICB0aGlzLnByb2ZpbGVzLnB1c2gocHJvZmlsZSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvZmlsZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZXM7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvZmlsZShwcm9maWxlKXtcbiAgICAgICAgdGhpcy5wcm9maWxlcy5zcGxpY2UodGhpcy5wcm9maWxlcy5pbmRleE9mKHByb2ZpbGUpLCAxKTtcbiAgICB9XG59Il19

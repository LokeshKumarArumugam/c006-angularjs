(function () {
    "use strict";

    angular.module("public").controller("SignUpController", SignUpController);

    SignUpController.$inject = ["$q", "UserService", "MenuService"];
    function SignUpController($q, UserService, MenuService) {
        var $ctrl = this;
        
        $ctrl.user = {};
        $ctrl.user.firstName = "";
        $ctrl.user.lastName = "";
        $ctrl.user.email = "";
        $ctrl.user.phoneNumber = "";
        $ctrl.user.favoriteDish = "";

        $ctrl.signUpForm = {};
        $ctrl.signUpForm.completed = false;

        $ctrl.validMenuItem = function(value) {
            var promise = $q(function(resolve, reject) {
                var promise = MenuService.getAllMenuItems();

                promise.then(function(result) {
                    var allMenuItems = [];
                    var arrays = _.map(result, function(value, key, list) {
                        return value.menu_items;
                    });
                    arrays.forEach(function(array) {
                        array.forEach(function(item) {
                            allMenuItems.push(item.short_name);
                        });
                    });
    
                    var valid = allMenuItems.findIndex(function(itemShortName) {
                        return (value === itemShortName);
                    }) !== -1;
    
                    if(valid) {
                        resolve(valid);
                    } else {
                        reject(valid);
                    }
                }).catch(function(error) {
                    reject(false);
                });
            });

            return promise;
        };

        $ctrl.submit = function() {
            UserService.saveUser($ctrl.user);
            $ctrl.signUpForm.completed = true;
        };
    };
})();

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
            return $q(function(resolve, reject) {
                var promise = MenuService.menuItemExists(value);

                promise.then(function(exists) {
                    if(exists) {
                        resolve(exists);
                    } else {
                        reject(exists);
                    }
                }).catch(function(error) {
                    reject(false);
                });
            });
        };

        $ctrl.submit = function() {
            UserService.saveUser($ctrl.user);
            $ctrl.signUpForm.completed = true;
        };
    };
})();

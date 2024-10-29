(function () {
    "use strict";

    angular.module("public").controller("MyInfoController", MyInfoController);

    MyInfoController.$inject = ["UserService", "favoriteDish"];
    function MyInfoController(UserService, favoriteDish) {
        var $ctrl = this;
        
        $ctrl.user = UserService.getUser();
        $ctrl.favoriteDishCategory = favoriteDish ? favoriteDish.category : null;
        $ctrl.favoriteDish = favoriteDish ? favoriteDish.item : null;

    };

})();
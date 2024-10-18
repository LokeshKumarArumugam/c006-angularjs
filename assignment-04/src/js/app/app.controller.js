/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("restaurantAppModule").controller("restaurantController", RestaurantController);

    RestaurantController.$inject = [
        "$scope"
    ];
    function RestaurantController(
        $scope
    ) {
        
        var $ctrl = this;

        $scope.appCtrl = $ctrl;

    };

})();
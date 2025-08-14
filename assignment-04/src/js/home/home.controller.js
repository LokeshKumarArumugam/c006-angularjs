/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("homeModule").controller("homeController", HomeController);

    HomeController.$inject = [ ];
    function HomeController() {
         
        var $ctrl = this;

        // local navigation
        $ctrl.navigation = {};
        $ctrl.navigation.home = "Home";
        $ctrl.navigation.menu = "Menu";
        $ctrl.navigation.categories = "Categories";
        $ctrl.navigation.items = "Items";
        $ctrl.navigation.item = "Item";

    };

})();
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
        $ctrl.nav = {};
        $ctrl.nav.home = "Home";
        $ctrl.nav.menu = "Menu";
        $ctrl.nav.categories = "Categories";
        $ctrl.nav.items = "Items";
        $ctrl.nav.item = "Item";

    };

})();
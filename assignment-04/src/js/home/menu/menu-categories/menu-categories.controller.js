/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("menuCategoriesModule")
    .controller("menuCategoriesController", MenuCategoriesController); 

    MenuCategoriesController.$inject = [
        "categories"
    ];
    function MenuCategoriesController(categories) {

        var $ctrl = this;

        // thead names
        $ctrl.serialNo = "S. No.";
        $ctrl.id = "ID";
        $ctrl.name = "Name";
        $ctrl.short_name = "Short Name";
        $ctrl.special_instructions = "Special Instructions";

        $ctrl.categories = categories;

    };

})();
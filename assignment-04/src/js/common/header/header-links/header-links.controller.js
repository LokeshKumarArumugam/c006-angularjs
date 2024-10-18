/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("headerLinksModule").controller("headerLinksController", HeaderLinksController);

    HeaderLinksController.$inject = [
        "_HOME_ROOT_URL", 
        "_MENU_CATEGORIES_ROOT_URL", 
        "_MENU_ITEMS_ROOT_URL", 
        "_ABOUT_ROOT_URL"
    ];
    function HeaderLinksController(
        _HOME_ROOT_URL, 
        _MENU_CATEGORIES_ROOT_URL, 
        _MENU_ITEMS_ROOT_URL, 
        _ABOUT_ROOT_URL
    ) {
         
        var $ctrl = this;

        // navigation links
        $ctrl.appUrl = _HOME_ROOT_URL;
        $ctrl.menuCategoriesUrl = _MENU_CATEGORIES_ROOT_URL;
        $ctrl.menuItemsUrl = _MENU_ITEMS_ROOT_URL;
        $ctrl.about = _ABOUT_ROOT_URL;

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("footerLinksModule").controller("footerLinksController", FooterLinksController);

    FooterLinksController.$inject = [
        "_HOME_ROOT_URL", 
        "_MENU_CATEGORIES_ROOT_URL", 
        "_MENU_ITEMS_ROOT_URL", 
        "_ABOUT_ROOT_URL"
    ];
    function FooterLinksController(
        _HOME_ROOT_URL, 
        _MENU_CATEGORIES_ROOT_URL, 
        _MENU_ITEMS_ROOT_URL,
        _ABOUT_ROOT_URL
    ) {
         
        var $ctrl = this;

        // application links
        $ctrl.homeUrl = _HOME_ROOT_URL;
        $ctrl.categoriesUrl = _MENU_CATEGORIES_ROOT_URL;
        $ctrl.itemsUrl = _MENU_ITEMS_ROOT_URL;
        $ctrl.aboutUrl = _ABOUT_ROOT_URL;

    };

})();
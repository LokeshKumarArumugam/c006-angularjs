/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("restaurantAppModule").config(routeConfiguration);
    
    routeConfiguration.$inject = [ 
        "$locationProvider", 
        "$stateProvider", 
        "$urlRouterProvider", 
        "_HOME_STATE_NAME", 
        "_HOME_URL", 
        "_HOME_TEMPLATE_URL", 
        "_HOME_CONTROLLER_NAME", 
        "_HOME_CONTROLLER_AS", 
        "_MENU_CATEGORIES_STATE_NAME", 
        "_MENU_CATEGORIES_URL", 
        "_MENU_CATEGORIES_TEMPLATE_URL", 
        "_MENU_CATEGORIES_CONTROLLER_NAME", 
        "_MENU_CATEGORIES_CONTROLLER_AS", 
        "_MENU_ITEMS_STATE_NAME", 
        "_MENU_ITEMS_URL", 
        "_MENU_ITEMS_TEMPLATE_URL", 
        "_MENU_ITEMS_CONTROLLER_NAME", 
        "_MENU_ITEMS_CONTROLLER_AS", 
        "_MENU_ITEM_STATE_NAME",  
        "_MENU_ITEM_URL", 
        "_MENU_ITEM_TEMPLATE_URL", 
        "_MENU_ITEM_CONTROLLER_NAME", 
        "_MENU_ITEM_CONTROLLER_AS", 
        "_ABOUT_STATE_NAME",  
        "_ABOUT_URL", 
        "_ABOUT_TEMPLATE_URL", 
        "_ABOUT_CONTROLLER_NAME", 
        "_ABOUT_CONTROLLER_AS", 
        "_ERROR_STATE_NAME", 
        "_ERROR_URL", 
        "_ERROR_TEMPLATE_URL", 
        "_ERROR_CONTROLLER_NAME", 
        "_ERROR_CONTROLLER_AS", 
        "_HTML5_ENABLED", 
        "_HASH_PREFIX"
    ];
    function routeConfiguration(
        $locationProvider, 
        $stateProvider, 
        $urlRouterProvider,
        _HOME_STATE_NAME, 
        _HOME_URL, 
        _HOME_TEMPLATE_URL, 
        _HOME_CONTROLLER_NAME, 
        _HOME_CONTROLLER_AS, 
        _MENU_CATEGORIES_STATE_NAME, 
        _MENU_CATEGORIES_URL, 
        _MENU_CATEGORIES_TEMPLATE_URL, 
        _MENU_CATEGORIES_CONTROLLER_NAME, 
        _MENU_CATEGORIES_CONTROLLER_AS, 
        _MENU_ITEMS_STATE_NAME, 
        _MENU_ITEMS_URL, 
        _MENU_ITEMS_TEMPLATE_URL, 
        _MENU_ITEMS_CONTROLLER_NAME, 
        _MENU_ITEMS_CONTROLLER_AS,
        _MENU_ITEM_STATE_NAME,  
        _MENU_ITEM_URL, 
        _MENU_ITEM_TEMPLATE_URL, 
        _MENU_ITEM_CONTROLLER_NAME, 
        _MENU_ITEM_CONTROLLER_AS, 
        _ABOUT_STATE_NAME,  
        _ABOUT_URL, 
        _ABOUT_TEMPLATE_URL, 
        _ABOUT_CONTROLLER_NAME, 
        _ABOUT_CONTROLLER_AS,  
        _ERROR_STATE_NAME, 
        _ERROR_URL, 
        _ERROR_TEMPLATE_URL, 
        _ERROR_CONTROLLER_NAME, 
        _ERROR_CONTROLLER_AS, 
        _HTML5_ENABLED, 
        _HASH_PREFIX
    ) {

        // routing
        // home
        $stateProvider.state(_HOME_STATE_NAME, {
            url: _HOME_URL, 
            templateUrl: _HOME_TEMPLATE_URL,
            controller: _HOME_CONTROLLER_NAME, 
            controllerAs: _HOME_CONTROLLER_AS
        });

        // menu categories
        $stateProvider.state(_MENU_CATEGORIES_STATE_NAME, {
            url: _MENU_CATEGORIES_URL, 
            templateUrl: _MENU_CATEGORIES_TEMPLATE_URL,
            controller: _MENU_CATEGORIES_CONTROLLER_NAME, 
            controllerAs: _MENU_CATEGORIES_CONTROLLER_AS, 
            resolve: {
                categories: [ "menuService", function(menuService) {
                    return menuService.getAllCategories();
                }]
            }
        });

        // menu items
        $stateProvider.state(_MENU_ITEMS_STATE_NAME, {
            url: _MENU_ITEMS_URL, 
            templateUrl: _MENU_ITEMS_TEMPLATE_URL,
            controller: _MENU_ITEMS_CONTROLLER_NAME, 
            controllerAs: _MENU_ITEMS_CONTROLLER_AS, 
            resolve: {
                items: [ "$stateParams", "menuService", function($stateParams, menuService) {
                    return menuService.getAllMenuItems($stateParams.categoryShortName);
                }]
            }
        });

        // menu item
        $stateProvider.state(_MENU_ITEM_STATE_NAME, {
            url: _MENU_ITEM_URL, 
            templateUrl: _MENU_ITEM_TEMPLATE_URL,
            controller: _MENU_ITEM_CONTROLLER_NAME, 
            controllerAs: _MENU_ITEM_CONTROLLER_AS
        });

        // about
        $stateProvider.state(_ABOUT_STATE_NAME, {
            url: _ABOUT_URL, 
            templateUrl: _ABOUT_TEMPLATE_URL,
            controller: _ABOUT_CONTROLLER_NAME, 
            controllerAs: _ABOUT_CONTROLLER_AS
        });

        // error
        $stateProvider.state(_ERROR_STATE_NAME, {
            url: _ERROR_URL,
            templateUrl: _ERROR_TEMPLATE_URL, 
            controller: _ERROR_CONTROLLER_NAME, 
            controllerAs: _ERROR_CONTROLLER_AS
        });

        $urlRouterProvider.otherwise(_ERROR_URL);
        
        // location
        $locationProvider.html5Mode(_HTML5_ENABLED);

        $locationProvider.hashPrefix(_HASH_PREFIX);

    };

})();
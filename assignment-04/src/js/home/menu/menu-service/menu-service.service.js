/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("menuServiceModule")
    .service("menuService", menuService);

    menuService.$inject = [ 
        "$http", 
        "errorServiceFactory", 
        "_HTTP_METHOD_GET", 
        "_HTTP_METHOD_POST", 
        "_HTTP_METHOD_PATCH", 
        "_HTTP_METHOD_PUT", 
        "_HTTP_METHOD_DELETE", 
        "_HTTP_METHOD_OPTIONS", 
        "_HTTP_METHOD_HEAD",  
        "_ROOT_API_PATH", 
        "_MENU_CATEGORIES_API_PATH", 
        "_MENU_ITEMS_API_PATH", 
        "_CATEGORY_SHORT_NAME_PATTERN"
    ];
    function menuService(
        $http, 
        errorServiceFactory, 
        _HTTP_METHOD_GET, 
        _HTTP_METHOD_POST, 
        _HTTP_METHOD_PATCH, 
        _HTTP_METHOD_PUT, 
        _HTTP_METHOD_DELETE, 
        _HTTP_METHOD_OPTIONS, 
        _HTTP_METHOD_HEAD, 
        _ROOT_API_PATH, 
        _MENU_CATEGORIES_API_PATH, 
        _MENU_ITEMS_API_PATH, 
        _CATEGORY_SHORT_NAME_PATTERN
    ) {

        var service = this;

        service.getAllCategories = function() {
            var request = {
                method: _HTTP_METHOD_GET,
                url: (_ROOT_API_PATH + _MENU_CATEGORIES_API_PATH)
            };

            return $http(request)
                .then(function success(response) {
                    return response.data;
                })
                .catch(function error(response) {
                    var errorService = errorServiceFactory.create(this, null);
                    return errorService.error(response.data);
                });
        };

        service.getAllMenuItems = function(categoryShortName) {
            var menuCategoryItemsPath = new String(_MENU_ITEMS_API_PATH);
            menuCategoryItemsPath = menuCategoryItemsPath.replace(_CATEGORY_SHORT_NAME_PATTERN, categoryShortName);
            var request = {
                method: _HTTP_METHOD_GET,
                url: (_ROOT_API_PATH + menuCategoryItemsPath)
            };

            return $http(request)
                .then(function success(response) {
                    return response.data;
                })
                .catch(function error(response) {
                    var errorService = errorServiceFactory.create(this, null);
                    return errorService.error(response.data);
                });
        };

        return service;

    };

})();
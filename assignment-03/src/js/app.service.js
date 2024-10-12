/**
 * Created by Lokesh Kumar Arumugam on 11/10/2024
 */
(function() {

    "use strict";

    angular.module("chineseMenuAppModule")
    .service("chineseMenuService", ChineseMenuService);

    ChineseMenuService.$inject = [
        "$q", 
        "$http", 
        "errorFactory", 
        "_api_base_path", 
        "_menu_items_path"
    ];
    function ChineseMenuService($q, $http, errorFactory, _api_base_path, _menu_items_path) {
        
        var service = this;

        service.getAllMenu = function() {

            return $http({
                method: "GET", 
                url: (_api_base_path + _menu_items_path)
            }).then(function success(response) {
                return response.data;
            }, function error(response) {
                var errorService = errorFactory.create(this, null);
                return errorService.error("Internal Server Error!");
            });

        };

        return service;

    };

})();
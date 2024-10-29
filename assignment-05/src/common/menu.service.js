(function () {
    "use strict";

    angular.module("common").service("MenuService", MenuService);

    MenuService.$inject = ["$http", "ApiPath"];
    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function() {
            return $http.get(ApiPath + "/categories.json").then(function (response) {
                return response.data;
            });
        };

        service.getMenuItems = function(category) {
            return $http.get(ApiPath + "/menu_items/" + category + ".json").then(function (response) {
                return response.data;
            });
        };

        service.getAllMenuItems = function(category) {
            return $http.get(ApiPath + "/menu_items.json").then(function (response) {
                return response.data;
            });
        };

        service.getMenuItem = function(menuItemShortName) {
            return $http.get(ApiPath + "/menu_items.json").then(function (response) {
                var menuItem = {};
                var result = response.data;

                _.each(result, function(category) {
                    _.each(category.menu_items, function(item) {
                        if(menuItemShortName === item.short_name) {
                            menuItem.category = category.category;
                            menuItem.item = item;
                        }
                    });
                });

                return menuItem;
            });
        };
    };
})();

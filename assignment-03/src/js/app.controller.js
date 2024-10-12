/**
 * Created by Lokesh Kumar Arumugam on 04/10/2024
 */
(function() {

    "use strict";

    angular.module("chineseMenuAppModule")
    .controller("chineseMenuAppController", ChineseMenuAppController)
    .controller("filteringMenuController", FilteringMenuController);

    ChineseMenuAppController.$inject = [
        "$scope"
    ];
    function ChineseMenuAppController($scope) {
        
        var $ctrl = this;

        $ctrl.activeTab = "menu";

        $ctrl.changeTab = function(tabName) {
            $ctrl.activeTab = tabName;
        };
        $ctrl.isActiveTab = function(tabName) {
            return ($ctrl.activeTab === tabName);
        }

        $scope.appCtrl = $ctrl;

    };

    FilteringMenuController.$inject = [
        "chineseMenuService"
    ];
    function FilteringMenuController(chineseMenuService) {
        
        var $ctrl = this;

        $ctrl.searchBtnName = "Narrow It Down For Me!";

        $ctrl.searchString = "";
        $ctrl.filteredMenu = [ ];

        $ctrl.getFilteredMenu = function() {
            return $ctrl.filteredMenu;
        };

        $ctrl.filterMenu = function(searchString) {
            
            var filteredMenuItems = [ ];

            if(searchString.length > 0) {
                var promise = chineseMenuService.getAllMenu();

                promise.then(function(result) {
                    var arrays = _.pluck(result, "menu_items");
                    
                    arrays.forEach(function(array) {
                        array.forEach(function(item) {
                            if(item.description.includes(searchString)) {
                                filteredMenuItems.push(item);
                            }
                        });
                    });
                }).catch(function(error) {
                    return error;
                });
            }

            $ctrl.filteredMenu = filteredMenuItems;
            
        };

        $ctrl.removeMenuItem = function(itemIndex) {

            $ctrl.filteredMenu.splice(itemIndex, 1);

        };

    };

})();
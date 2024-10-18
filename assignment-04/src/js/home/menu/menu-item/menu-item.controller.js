/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("menuItemsModule")
    .controller("menuItemController", MenuItemController); 

    MenuItemController.$inject = [
        "$state", 
        "$stateParams", 
        "items"
    ];
    function MenuItemController($state, $stateParams, items) {

        var $ctrl = this;

        // item names
        $ctrl.itemName = "Name";
        $ctrl.itemShortName = "Short Name";
        $ctrl.smallPortionName = "Small Qty";
        $ctrl.priceSmall = "Small Price";
        $ctrl.largePortionName = "Large Qty";
        $ctrl.priceLarge = "Large Price";
        $ctrl.description = "Description";

        $ctrl.emptyGone = "No Item found for the Menu Item Short Name!";
        $ctrl.searchBtnName = "Search";
        $ctrl.searchShortName = $stateParams.itemShortName;

        $ctrl.retrieveItem = function() {
            return (items === null) ? null : items.menu_items.find((item) => (item.short_name == $stateParams.itemShortName));
        };

        $ctrl.item = $ctrl.retrieveItem();

        $ctrl.searchMenuItem = function(searchShortName) {
            $state.go(
                $state.current, 
                { itemShortName: searchShortName }, 
                { reload: true }
            );
        };

        $ctrl.isEmptyMenuItem = function() {
            return ($ctrl.item === undefined || $ctrl.item === null);
        };

    };

})();
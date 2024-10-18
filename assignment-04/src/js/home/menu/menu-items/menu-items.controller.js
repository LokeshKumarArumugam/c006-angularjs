/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("menuItemsModule")
    .controller("menuItemsController", MenuItemsController); 

    MenuItemsController.$inject = [
        "$state", 
        "$stateParams", 
        "items"
    ];
    function MenuItemsController($state, $stateParams, items) {

        var $ctrl = this;

        // thead names
        $ctrl.serialNo = "S. No.";
        $ctrl.itemName = "Name";
        $ctrl.itemShortName = "Short Name";
        $ctrl.smallPortionName = "Small Qty";
        $ctrl.priceSmall = "Small Price";
        $ctrl.largePortionName = "Large Qty";
        $ctrl.priceLarge = "Large Price";
        $ctrl.description = "Description";

        $ctrl.emptyGone = "No Items found for the Menu Category!";
        $ctrl.searchBtnName = "Search";
        $ctrl.searchCategory = $stateParams.categoryShortName;

        $ctrl.items = (items === null) ? [ ] : items.menu_items ;

        $ctrl.searchMenuItems = function(searchCategory) {
            $state.go(
                $state.current, 
                { categoryShortName: searchCategory }, 
                { reload: true }
            );
        };

        $ctrl.isEmptyMenuItems = function() {
            return ($ctrl.items === undefined || $ctrl.items.length === 0);
        };

    };

})();
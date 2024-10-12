/**
 * Created by Lokesh Kumar Arumugam on 11/10/2024
 */
(function() {
    
    "use strict";

    angular.module("foundItemsModule")
    .controller("foundItemsController", FoundItemsController);

    FoundItemsController.$inject = [ ];
    function FoundItemsController() {

        var $ctrl = this;

        $ctrl.serialNo = "S. No.";
        $ctrl.itemName = "Name";
        $ctrl.itemShortName = "Short Name";
        $ctrl.smallPortionName = "Small Qty";
        $ctrl.priceSmall = "Small Price";
        $ctrl.largePortionName = "Large Qty";
        $ctrl.priceLarge = "Large Price";
        $ctrl.description = "Description";
        $ctrl.updates = "Updates";

        $ctrl.removeItemBtnName = "Don't want this one!";
        $ctrl.emptyGone = "Nothing found";

        $ctrl.isEmptyMenu = function() {
            return ($ctrl.items === undefined || $ctrl.items.length === 0);
        };

    };

})();


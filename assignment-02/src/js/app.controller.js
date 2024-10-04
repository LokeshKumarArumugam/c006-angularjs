/**
 * Created by Lokesh Kumar Arumugam on 04/10/2024
 */
(function() {

    "use strict";

    angular.module("shoppingListCheckOffAppModule")
    .controller("shoppingListCheckOffController", ShoppingListCheckOffController)
    .controller("toBuyController", ToBuyController)
    .controller("alreadyBoughtController", AlreadyBoughtController);

    ShoppingListCheckOffController.$inject = [
        "$scope"
    ];
    function ShoppingListCheckOffController($scope) {
        
        var $ctrl = this;

        $ctrl.activeTab = "cart";

        $ctrl.changeTab = function(tabName) {
            $ctrl.activeTab = tabName;
        };
        $ctrl.isActiveTab = function(tabName) {
            return ($ctrl.activeTab === tabName);
        }

        $scope.appCtrl = $ctrl;

    };

    ToBuyController.$inject = [
        "shoppingListCheckOffService"
    ];
    function ToBuyController(shoppingListCheckOffService) {
        
        var $ctrl = this;

        $ctrl.toBuyItems = shoppingListCheckOffService.getToBuyItems();
        $ctrl.emptyGone = "Everything is bought!";
        $ctrl.buy = function(itemName) {
            shoppingListCheckOffService.buy(itemName);
        };
        $ctrl.isEmptyBuyItems = function() {
            return shoppingListCheckOffService.isEmptyBuyItems();
        };

    };

    AlreadyBoughtController.$inject = [
        "shoppingListCheckOffService"
    ];
    function AlreadyBoughtController(shoppingListCheckOffService) {
        
        var $ctrl = this;

        $ctrl.alreadyBoughtItems = shoppingListCheckOffService.getAlreadyBoughtItems();
        $ctrl.emptyGone = "Nothing bought yet";
        $ctrl.isEmptyBoughtItems = function() {
            return shoppingListCheckOffService.isEmptyBoughtItems();
        };

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 04/10/2024
 */
(function() {

    "use strict";

    angular.module("shoppingListCheckOffAppModule")
    .service("shoppingListCheckOffService", ShoppingListCheckOffService);

    ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
        
        var service = this;
        var toBuyItems = [
            { name: "Cookie", quantity: 10 }, 
            { name: "Milk", quantity: 3 }, 
            { name: "Juice", quantity: 25 }, 
            { name: "Chocolate", quantity: 15 }, 
            { name: "Ice Cream", quantity: 8 }, 
            { name: "Biscuit", quantity: 50 },
            { name: "Purified Water", quantity: 100 }, 
            { name: "Bannana", quantity: 20 }, 
            { name: "Milkshake", quantity: 12 }, 
            { name: "Coffee", quantity: 6 }
        ];
        var alreadyBoughtItems = [];

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };

        service.buy = function(itemName) {
            var buyIndex = toBuyItems.findIndex((item) => (item.name === itemName));
            var buy = toBuyItems[buyIndex];
            
            toBuyItems.splice(buyIndex, 1);
            alreadyBoughtItems.push(buy);
        };

        service.isEmptyBuyItems = function() {
            return (toBuyItems && toBuyItems.length == 0);
        }

        service.isEmptyBoughtItems = function() {
            return (alreadyBoughtItems && alreadyBoughtItems.length == 0);
        }

        return service;

    };

})();
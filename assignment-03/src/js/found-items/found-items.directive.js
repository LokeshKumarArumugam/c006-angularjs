/**
 * Created by Lokesh Kumar Arumugam on 11/10/2024
 */
(function() {
    
    "use strict";

    angular.module("foundItemsModule")
    .directive("foundItems", FoundItemsDirective);

    FoundItemsDirective.$inject = [ ];
    function FoundItemsDirective() {

        var ddo = {

            restrict: "E", 
            replace: false, 
            templateUrl: "src/html/found-items/found-items.html", 
            scope: {
                items: "=foundItems",
                remove: "&onRemove"
            }, 
            controller: "foundItemsController", 
            controllerAs: "itemsCtrl", 
            bindToController: true

        };

        return ddo;

    };

})();


/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("aboutModule").controller("aboutController", AboutController);

    AboutController.$inject = [ ];
    function AboutController() {
         
        var $ctrl = this;

        $ctrl.copyright = "restaurant.org";

    };

})();
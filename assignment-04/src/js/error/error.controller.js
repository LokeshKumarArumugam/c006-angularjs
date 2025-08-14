/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("errorModule").controller("errorController", ErrorController);

    ErrorController.$inject = [
        "_NOT_FOUND_IMAGE_SOURCE"
    ];
    function ErrorController( 
        _NOT_FOUND_IMAGE_SOURCE
    ) {
         
        var $ctrl = this;

        // image links
        $ctrl.notFoundImageSource = _NOT_FOUND_IMAGE_SOURCE;

    };

})();
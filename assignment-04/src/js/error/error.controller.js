/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("errorModule").controller("errorController", ErrorController);

    ErrorController.$inject = [
        "_NOT_FOUND_IMG_SRC"
    ];
    function ErrorController( 
        _NOT_FOUND_IMG_SRC
    ) {
         
        var $ctrl = this;

        // image links
        $ctrl.notFoundImageSrc = _NOT_FOUND_IMG_SRC;

    };

})();
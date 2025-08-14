/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("headerBrandModule").controller("headerBrandController", HeaderBrandController);

    HeaderBrandController.$inject = [
        "_HOME_ROOT_URL", 
        "_BRAND_IMAGE_SOURCE"
    ];
    function HeaderBrandController(
        _HOME_ROOT_URL, 
        _BRAND_IMAGE_SOURCE
    ) {
         
        var $ctrl = this;

        // brand links
        $ctrl.appUrl = _HOME_ROOT_URL;
        // image links
        $ctrl.brandImageSource = _BRAND_IMAGE_SOURCE;

    };

})();
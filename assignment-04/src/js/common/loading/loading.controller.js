/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("loadingModule").controller("loadingController", LoadingController);

    LoadingController.$inject = [
        "$rootScope", 
        "_SPINNER_IMAGE_SOURCE", 
        "_LOADING_SPINNER_ACTIVATE_EVENT"
    ];
    function LoadingController($rootScope, _SPINNER_IMAGE_SOURCE, _LOADING_SPINNER_ACTIVATE_EVENT) {

        var $ctrl = this;
        var listener;

        $ctrl.$onInit = function() {
            $ctrl.show = false;
            $ctrl.spinnerImageSource = _SPINNER_IMAGE_SOURCE;
            listener = $rootScope.$on(_LOADING_SPINNER_ACTIVATE_EVENT, onSpinnerActivate);
        };
      
        $ctrl.$onDestroy = function() {
            listener();
        };
      
        function onSpinnerActivate(event, data) {
            $ctrl.show = data.on;
        };

    };

})();
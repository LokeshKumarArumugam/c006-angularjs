/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("loadingModule").controller("loadingController", LoadingController);

    LoadingController.$inject = [
        "$rootScope", 
        "_SPINNER_IMG_SRC", 
        "_LOADING_SPINNER_ACT_EVT"
    ];
    function LoadingController($rootScope, _SPINNER_IMG_SRC, _LOADING_SPINNER_ACT_EVT) {

        var $ctrl = this;
        var listener;

        $ctrl.$onInit = function() {
            $ctrl.show = false;
            $ctrl.spinnerImageSrc = _SPINNER_IMG_SRC;
            listener = $rootScope.$on(_LOADING_SPINNER_ACT_EVT, onSpinnerActivate);
        };
      
        $ctrl.$onDestroy = function() {
            listener();
        };
      
        function onSpinnerActivate(event, data) {
            $ctrl.show = data.on;
        };

    };

})();
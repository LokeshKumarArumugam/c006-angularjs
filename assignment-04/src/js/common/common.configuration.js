/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("commonModule").config(interceptorsConfiguration);

    interceptorsConfiguration.$inject = [
        "$httpProvider", 
        "_LOADING_INTERCEPTOR_NAME"
    ];
    function interceptorsConfiguration(
        $httpProvider, 
        _LOADING_INTERCEPTOR_NAME
    ) {
        $httpProvider.interceptors.push(_LOADING_INTERCEPTOR_NAME);
    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("commonModule").config(interceptorsConfig);

    interceptorsConfig.$inject = [
        "$httpProvider", 
        "_LOADING_INTERCEPTOR_NAME"
    ];
    function interceptorsConfig(
        $httpProvider, 
        _LOADING_INTERCEPTOR_NAME
    ) {
        $httpProvider.interceptors.push(_LOADING_INTERCEPTOR_NAME);
    };

})();
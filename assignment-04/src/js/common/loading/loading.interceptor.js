/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("loadingModule").factory("loadingInterceptor", LoadingHttpInterceptor);

    LoadingHttpInterceptor.$inject = [ 
        "$rootScope", 
        "$q", 
        "_LOADING_SPINNER_ACT_EVT"
    ];
    function LoadingHttpInterceptor(
        $rootScope, 
        $q, 
        _LOADING_SPINNER_ACT_EVT
    ) {

        var loadingCount = 0;

        var ddo = {

            request: function(config) {
                loadingCount++;
                if(loadingCount === 1) {
                    $rootScope.$broadcast(_LOADING_SPINNER_ACT_EVT, { on: true });
                }
        
                return config;
            },
        
            response: function(response) {
                loadingCount--;
                if(loadingCount === 0) {
                    $rootScope.$broadcast(_LOADING_SPINNER_ACT_EVT, { on: false });
                }

                return response;
            },
        
            responseError: function(response) {
                loadingCount--;
                if(loadingCount === 0) {
                    $rootScope.$broadcast(_LOADING_SPINNER_ACT_EVT, { on: false });
                }
        
                return $q.reject(response);
            }

        };
        
        return ddo;

    };

})();
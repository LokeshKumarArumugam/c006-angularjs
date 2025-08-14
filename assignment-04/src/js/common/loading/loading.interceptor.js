/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("loadingModule").factory("loadingInterceptor", LoadingHttpInterceptor);

    LoadingHttpInterceptor.$inject = [ 
        "$rootScope", 
        "$q", 
        "_LOADING_SPINNER_ACTIVATE_EVENT"
    ];
    function LoadingHttpInterceptor(
        $rootScope, 
        $q, 
        _LOADING_SPINNER_ACTIVATE_EVENT
    ) {

        var loadingCount = 0;

        var ddo = {

            request: function(configuration) {
                loadingCount++;
                if(loadingCount === 1) {
                    $rootScope.$broadcast(_LOADING_SPINNER_ACTIVATE_EVENT, { on: true });
                }
        
                return configuration;
            },
        
            response: function(response) {
                loadingCount--;
                if(loadingCount === 0) {
                    $rootScope.$broadcast(_LOADING_SPINNER_ACTIVATE_EVENT, { on: false });
                }

                return response;
            },
        
            responseError: function(response) {
                loadingCount--;
                if(loadingCount === 0) {
                    $rootScope.$broadcast(_LOADING_SPINNER_ACTIVATE_EVENT, { on: false });
                }
        
                return $q.reject(response);
            }

        };
        
        return ddo;

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("loadingModule")
    .directive("lkaLoading", LoadingComponent);

    LoadingComponent.$inject = [
        "_DIR_REST_ELEM", 
        "_DIR_REPLACE_FALSE",
        "_DIR_EMPTY_ISOLATED_SCOPE", 
        "_DIR_BIND_TO_CTRL", 
        "_LOADING_TEMPLATE_URL", 
        "_LOADING_CTRL_NAME", 
        "_LOADING_CONTROLLER_AS"
    ];
    function LoadingComponent(
        _DIR_REST_ELEM, 
        _DIR_REPLACE_FALSE,
        _DIR_EMPTY_ISOLATED_SCOPE, 
        _DIR_BIND_TO_CTRL, 
        _LOADING_TEMPLATE_URL, 
        _LOADING_CTRL_NAME, 
        _LOADING_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIR_REST_ELEM,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            bindToController: _DIR_BIND_TO_CTRL,
            templateUrl: _LOADING_TEMPLATE_URL, 
            controller: _LOADING_CTRL_NAME, 
            controllerAs: _LOADING_CONTROLLER_AS
        };

        return ddo;

    };

})();
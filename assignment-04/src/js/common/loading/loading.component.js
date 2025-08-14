/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("loadingModule")
    .directive("lkaLoading", LoadingComponent);

    LoadingComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE", 
        "_DIRECTIVE_BIND_TO_CONTROLLER", 
        "_LOADING_TEMPLATE_URL", 
        "_LOADING_CONTROLLER_NAME", 
        "_LOADING_CONTROLLER_AS"
    ];
    function LoadingComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _DIRECTIVE_BIND_TO_CONTROLLER, 
        _LOADING_TEMPLATE_URL, 
        _LOADING_CONTROLLER_NAME, 
        _LOADING_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            bindToController: _DIRECTIVE_BIND_TO_CONTROLLER,
            templateUrl: _LOADING_TEMPLATE_URL, 
            controller: _LOADING_CONTROLLER_NAME, 
            controllerAs: _LOADING_CONTROLLER_AS
        };

        return ddo;

    };

})();
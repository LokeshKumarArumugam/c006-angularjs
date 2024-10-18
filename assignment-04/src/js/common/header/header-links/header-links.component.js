/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("headerLinksModule")
    .directive("lkaHeaderLinks", HeaderLinksComponent);

    HeaderLinksComponent.$inject = [
        "_DIR_REST_ELEM", 
        "_DIR_REPLACE_FALSE",
        "_DIR_EMPTY_ISOLATED_SCOPE",  
        "_HEADER_LINKS_TEMPLATE_URL",
        "_HEADER_LINKS_CTRL_NAME",  
        "_HEADER_LINKS_CTRL_AS"
    ];
    function HeaderLinksComponent(
        _DIR_REST_ELEM, 
        _DIR_REPLACE_FALSE,
        _DIR_EMPTY_ISOLATED_SCOPE,
        _HEADER_LINKS_TEMPLATE_URL,
        _HEADER_LINKS_CTRL_NAME, 
        _HEADER_LINKS_CTRL_AS
    ) {

        var ddo = { 
            restrict: _DIR_REST_ELEM,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _HEADER_LINKS_TEMPLATE_URL, 
            controller: _HEADER_LINKS_CTRL_NAME, 
            controllerAs: _HEADER_LINKS_CTRL_AS
        };

        return ddo;

    };

})();
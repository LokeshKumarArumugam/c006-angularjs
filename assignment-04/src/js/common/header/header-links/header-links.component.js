/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("headerLinksModule")
    .directive("lkaHeaderLinks", HeaderLinksComponent);

    HeaderLinksComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE",  
        "_HEADER_LINKS_TEMPLATE_URL",
        "_HEADER_LINKS_CONTROLLER_NAME",  
        "_HEADER_LINKS_CONTROLLER_AS"
    ];
    function HeaderLinksComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE,
        _HEADER_LINKS_TEMPLATE_URL,
        _HEADER_LINKS_CONTROLLER_NAME, 
        _HEADER_LINKS_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _HEADER_LINKS_TEMPLATE_URL, 
            controller: _HEADER_LINKS_CONTROLLER_NAME, 
            controllerAs: _HEADER_LINKS_CONTROLLER_AS
        };

        return ddo;

    };

})();
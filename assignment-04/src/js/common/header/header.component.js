/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("headerModule")
    .directive("lkaHeader", HeaderComponent);

    HeaderComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE", 
        "_HEADER_TEMPLATE_URL"
    ];
    function HeaderComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _HEADER_TEMPLATE_URL
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _HEADER_TEMPLATE_URL
        };

        return ddo;

    };

})();
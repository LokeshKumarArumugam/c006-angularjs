/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("headerBrandModule")
    .directive("lkaHeaderBrand", HeaderBrandComponent);

    HeaderBrandComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE", 
        "_HEADER_BRAND_TEMPLATE_URL", 
        "_HEADER_BRAND_CONTROLLER_NAME", 
        "_HEADER_BRAND_CONTROLLER_AS"
    ];
    function HeaderBrandComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE,
        _HEADER_BRAND_TEMPLATE_URL, 
        _HEADER_BRAND_CONTROLLER_NAME, 
        _HEADER_BRAND_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _HEADER_BRAND_TEMPLATE_URL, 
            controller: _HEADER_BRAND_CONTROLLER_NAME, 
            controllerAs: _HEADER_BRAND_CONTROLLER_AS
        };

        return ddo;

    };

})();
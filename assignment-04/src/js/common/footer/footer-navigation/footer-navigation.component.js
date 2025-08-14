/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerNavigationModule")
    .directive("lkaFooterNavigation", FooterNavigationComponent);

    FooterNavigationComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE",
        "_FOOTER_NAV_TEMPLATE_URL"
    ];
    function FooterNavigationComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _FOOTER_NAV_TEMPLATE_URL
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _FOOTER_NAV_TEMPLATE_URL
        };

        return ddo;

    };

})();
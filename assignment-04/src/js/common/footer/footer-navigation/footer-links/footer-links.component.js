/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerLinksModule")
    .directive("lkaFooterLinks", FooterLinksComponent);

    FooterLinksComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE",
        "_FOOTER_LINKS_TEMPLATE_URL", 
        "_FOOTER_LINKS_CONTROLLER_NAME", 
        "_FOOTER_LINKS_CONTROLLER_AS"
    ];
    function FooterLinksComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _FOOTER_LINKS_TEMPLATE_URL, 
        _FOOTER_LINKS_CONTROLLER_NAME, 
        _FOOTER_LINKS_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _FOOTER_LINKS_TEMPLATE_URL, 
            controller: _FOOTER_LINKS_CONTROLLER_NAME, 
            controllerAs: _FOOTER_LINKS_CONTROLLER_AS
        };

        return ddo;

    };

})();
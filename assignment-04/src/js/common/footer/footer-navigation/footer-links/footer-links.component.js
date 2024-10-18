/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerLinksModule")
    .directive("lkaFooterLinks", FooterLinksComponent);

    FooterLinksComponent.$inject = [
        "_DIR_REST_ELEM", 
        "_DIR_REPLACE_FALSE",
        "_DIR_EMPTY_ISOLATED_SCOPE",
        "_FOOTER_LINKS_TEMPLATE_URL", 
        "_FOOTER_LINKS_CTRL_NAME", 
        "_FOOTER_LINKS_CTRL_AS"
    ];
    function FooterLinksComponent(
        _DIR_REST_ELEM, 
        _DIR_REPLACE_FALSE,
        _DIR_EMPTY_ISOLATED_SCOPE, 
        _FOOTER_LINKS_TEMPLATE_URL, 
        _FOOTER_LINKS_CTRL_NAME, 
        _FOOTER_LINKS_CTRL_AS
    ) {

        var ddo = { 
            restrict: _DIR_REST_ELEM,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _FOOTER_LINKS_TEMPLATE_URL, 
            controller: _FOOTER_LINKS_CTRL_NAME, 
            controllerAs: _FOOTER_LINKS_CTRL_AS
        };

        return ddo;

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerLocaleModule")
    .directive("lkaFooterLocale", FooterLastComponent);

    FooterLastComponent.$inject = [
        "_DIR_REST_ELEM", 
        "_DIR_REPLACE_FALSE",
        "_DIR_EMPTY_ISOLATED_SCOPE", 
        "_FOOTER_LOCALE_TEMPLATE_URL"
    ];
    function FooterLastComponent(
        _DIR_REST_ELEM, 
        _DIR_REPLACE_FALSE,
        _DIR_EMPTY_ISOLATED_SCOPE, 
        _FOOTER_LOCALE_TEMPLATE_URL
    ) {

        var ddo = { 
            restrict: _DIR_REST_ELEM,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _FOOTER_LOCALE_TEMPLATE_URL
        };

        return ddo;

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerSocialModule")
    .directive("lkaFooterSocial", FooterSocialComponent);

    FooterSocialComponent.$inject = [
        "_DIR_REST_ELEM", 
        "_DIR_REPLACE_FALSE",
        "_DIR_EMPTY_ISOLATED_SCOPE",
        "_FOOTER_SOCIAL_TEMPLATE_URL", 
        "_FOOTER_SOCIAL_CTRL_NAME", 
        "_FOOTER_SOCIAL_CTRL_AS"
    ];
    function FooterSocialComponent(
        _DIR_REST_ELEM, 
        _DIR_REPLACE_FALSE,
        _DIR_EMPTY_ISOLATED_SCOPE, 
        _FOOTER_SOCIAL_TEMPLATE_URL, 
        _FOOTER_SOCIAL_CTRL_NAME, 
        _FOOTER_SOCIAL_CTRL_AS
    ) {

        var ddo = { 
            restrict: _DIR_REST_ELEM,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _FOOTER_SOCIAL_TEMPLATE_URL, 
            controller: _FOOTER_SOCIAL_CTRL_NAME, 
            controllerAs: _FOOTER_SOCIAL_CTRL_AS
        };

        return ddo;

    };

})();
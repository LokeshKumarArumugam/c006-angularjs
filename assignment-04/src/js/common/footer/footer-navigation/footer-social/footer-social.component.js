/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerSocialModule")
    .directive("lkaFooterSocial", FooterSocialComponent);

    FooterSocialComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE",
        "_FOOTER_SOCIAL_TEMPLATE_URL", 
        "_FOOTER_SOCIAL_CONTROLLER_NAME", 
        "_FOOTER_SOCIAL_CONTROLLER_AS"
    ];
    function FooterSocialComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _FOOTER_SOCIAL_TEMPLATE_URL, 
        _FOOTER_SOCIAL_CONTROLLER_NAME, 
        _FOOTER_SOCIAL_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            templateUrl: _FOOTER_SOCIAL_TEMPLATE_URL, 
            controller: _FOOTER_SOCIAL_CONTROLLER_NAME, 
            controllerAs: _FOOTER_SOCIAL_CONTROLLER_AS
        };

        return ddo;

    };

})();
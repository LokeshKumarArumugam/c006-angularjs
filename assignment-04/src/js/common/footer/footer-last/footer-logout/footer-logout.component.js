/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerLogoutModule")
    .directive("lkaFooterLogout", FooterLastComponent);

    FooterLastComponent.$inject = [
        "_DIRECTIVE_RESTRICT_ELEMENT", 
        "_DIRECTIVE_REPLACE_FALSE",
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE", 
        "_DIRECTIVE_BIND_TO_CONTROLLER", 
        "_FOOTER_LOGOUT_TEMPLATE_URL", 
        "_FOOTER_LOGOUT_CONTROLLER_NAME", 
        "_FOOTER_LOGOUT_CONTROLLER_AS"
    ];
    function FooterLastComponent(
        _DIRECTIVE_RESTRICT_ELEMENT, 
        _DIRECTIVE_REPLACE_FALSE,
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _DIRECTIVE_BIND_TO_CONTROLLER, 
        _FOOTER_LOGOUT_TEMPLATE_URL, 
        _FOOTER_LOGOUT_CONTROLLER_NAME, 
        _FOOTER_LOGOUT_CONTROLLER_AS
    ) {

        var ddo = { 
            restrict: _DIRECTIVE_RESTRICT_ELEMENT,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            bindToController: _DIRECTIVE_BIND_TO_CONTROLLER,
            templateUrl: _FOOTER_LOGOUT_TEMPLATE_URL,
            controller: _FOOTER_LOGOUT_CONTROLLER_NAME,
            controllerAs: _FOOTER_LOGOUT_CONTROLLER_AS
        };

        return ddo;

    };

})();
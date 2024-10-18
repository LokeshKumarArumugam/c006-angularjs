/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("footerLogoutModule")
    .directive("lkaFooterLogout", FooterLastComponent);

    FooterLastComponent.$inject = [
        "_DIR_REST_ELEM", 
        "_DIR_REPLACE_FALSE",
        "_DIR_EMPTY_ISOLATED_SCOPE", 
        "_DIR_BIND_TO_CTRL", 
        "_FOOTER_LOGOUT_TEMPLATE_URL", 
        "_FOOTER_LOGOUT_CTRL_NAME", 
        "_FOOTER_LOGOUT_CTRL_AS"
    ];
    function FooterLastComponent(
        _DIR_REST_ELEM, 
        _DIR_REPLACE_FALSE,
        _DIR_EMPTY_ISOLATED_SCOPE, 
        _DIR_BIND_TO_CTRL, 
        _FOOTER_LOGOUT_TEMPLATE_URL, 
        _FOOTER_LOGOUT_CTRL_NAME, 
        _FOOTER_LOGOUT_CTRL_AS
    ) {

        var ddo = { 
            restrict: _DIR_REST_ELEM,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            bindToController: _DIR_BIND_TO_CTRL,
            templateUrl: _FOOTER_LOGOUT_TEMPLATE_URL,
            controller: _FOOTER_LOGOUT_CTRL_NAME,
            controllerAs: _FOOTER_LOGOUT_CTRL_AS
        };

        return ddo;

    };

})();
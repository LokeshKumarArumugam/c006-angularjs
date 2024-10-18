/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
 (function() {

    "use strict";

    angular.module("footerLogoutModule")
    .controller("footerLogoutController", FooterLogoutController);

    FooterLogoutController.$inject = [ ];
    function FooterLogoutController() {

        var $ctrl = this;

        // logout
        // check logout
        $ctrl.checkLogout = function(event) {
            var logout = confirm("Are you sure you want to logout?");
            
            if(!logout) {
                event.preventDefault();
            }
            
            return logout;
        };

    };

})();
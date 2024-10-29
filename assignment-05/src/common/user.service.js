(function () {
    "use strict";

    angular.module("common").service("UserService", UserService);

    UserService.$inject = [];
    function UserService() {
        var service = this;
        var user = null;

        service.getUser = function() {
            return user;
        };

        service.saveUser = function(userItem) {
            user = userItem;
        };
    };
})();

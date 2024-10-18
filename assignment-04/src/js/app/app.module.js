/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.lowercase = (text) => (text || "").toLowerCase();

    angular.module("restaurantAppModule", [
        "ngSanitize", 
        "ui.router",
        "commonModule", 
        "homeModule", 
        "menuModule", 
        "aboutModule", 
        "errorModule"
    ]);

})();


/**
 * Created by Lokesh Kumar Arumugam on 22/09/2024
 */
(function() {

    "use strict";

    angular.module("lunchCheckerAppModule").controller("lunchCheckerController", LunchCheckerController);

    LunchCheckerController.$inject = [
        "$scope"
    ];
    function LunchCheckerController($scope) {
        
        var $ctrl = this;

        var enjoy = "Enjoy!";
        var tooMuch = "Too much!";
        var invalidData = "Please enter data first";

        var lunchMenuSeperator = ",";
        var parseLunchMenu = null;
        var filterLunchMenu = null;

        var classAlert = "alert";
        var classAlertInfo = "alert-info";
        var classAlertDanger = "alert-danger";
        var classErrorMessage = "error-message";
        var classSuccessMessage = "success-message";
        var space = " ";
        var successMessageClass = classAlert + space + classAlertInfo + space + classSuccessMessage;
        var errorMessageClass = classAlert + space + classAlertDanger + space + classErrorMessage;

        $ctrl.messageClass = classAlert;

        $ctrl.messages = {};
        $ctrl.messages.placeholder = "List the comma separated dishes you usually have for lunch";
        $ctrl.messages.lunchMenu = ""; 
        $ctrl.messages.message = null;

        $ctrl.lunch = {}
        $ctrl.lunch.items = [];
        $ctrl.messageType = null;
        $ctrl.showMessage = false;

        $ctrl.checkIfTooMuch = function() {
            var length = null;

            if($ctrl.messages.lunchMenu.length === 0) {
                $ctrl.messages.message = invalidData;
                $ctrl.messageClass = errorMessageClass;
            } else {
                parseLunchMenu();
                length = $ctrl.lunch.items.length;

                if(length == 0) {
                    $ctrl.messages.message = invalidData;
                    $ctrl.messageClass = errorMessageClass;
                } else if(length <= 3) {
                    $ctrl.messages.message = enjoy;
                    $ctrl.messageClass = successMessageClass;
                } else {
                    $ctrl.messages.message = tooMuch;
                    $ctrl.messageClass = errorMessageClass;
                }
            }

            $ctrl.showMessage = true;
        };

        parseLunchMenu = function() {
            var array = $ctrl.messages.lunchMenu.split(lunchMenuSeperator);

            $ctrl.lunch.items = array.filter(filterLunchMenu);
        };

        filterLunchMenu = function(element) {
            return (element.trim().length !== 0);
        };

        $scope.ctrl = $ctrl;

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("restaurantAppModule")
    .directive("lkaNavigationActiveLink", navigationActiveLinkDirective);                               

    var stateReferenceEquals = function(stateReference, hypertextReference, parameterStart, slash) {
        var equals = true;

        stateReference = stateReference || "";
        hypertextReference = hypertextReference || "";

        var statePaths = stateReference.split(slash);
        var hypertextPaths = hypertextReference.split(slash);
        var stateLength = statePaths.length;
        var hypertextLength = hypertextPaths.length;

        equals = stateLength === hypertextLength;

        if(equals) {
            var currentState;
            var currentHypertext;
            var currentStateLength;
            var currentHypertextLength;
            var isParameter;

            for(var i = 0; i < stateLength; i++) {
                currentState = statePaths[i];
                currentHypertext = hypertextPaths[i];
                currentStateLength = currentState.length;
                currentHypertextLength = currentHypertext.length;
                isParameter = currentState[0] === parameterStart;

                if(currentStateLength === currentHypertextLength) {
                    for(var j = 0; j < currentStateLength; j++) {
                        if(currentState[j] !== currentHypertext[j] && !isParameter) {
                            equals = false;
                            break;
                        }
                    }
                } else if(!isParameter) {
                    equals = false;
                    break;
                }
            }
        }

        return equals;
    };

    navigationActiveLinkDirective.$inject = [
        "$state", 
        "_DIRECTIVE_RESTRICT_ATTRIBUTE", 
        "_DIRECTIVE_REPLACE_FALSE", 
        "_DIRECTIVE_EMPTY_ISOLATED_SCOPE", 
        "_SLASH",
        "_BASE_HASH_PATH", 
        "_HASH_PATH", 
        "_PARAMETER_START", 
        "_PARAMETER_END", 
        "_ANCHOR_TAG", 
        "_HREF_ATTRIBUTE", 
        "_ACTIVE_CSS_CLASS", 
        "_STATE_CHANGE_SUCCESS_EVENT"
    ];
    function navigationActiveLinkDirective(
        $state, 
        _DIRECTIVE_RESTRICT_ATTRIBUTE, 
        _DIRECTIVE_REPLACE_FALSE, 
        _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
        _SLASH, 
        _BASE_HASH_PATH, 
        _HASH_PATH,  
        _PARAMETER_START, 
        _PARAMETER_END, 
        _ANCHOR_TAG, 
        _HREF_ATTRIBUTE, 
        _ACTIVE_CSS_CLASS, 
        _STATE_CHANGE_SUCCESS_EVENT
    ) {
        
        var ddo = {

            restrict: _DIRECTIVE_RESTRICT_ATTRIBUTE,
            replace: _DIRECTIVE_REPLACE_FALSE,
            scope: _DIRECTIVE_EMPTY_ISOLATED_SCOPE, 
            link: function(scope, element, attributes, controller) {

                scope.$on(_STATE_CHANGE_SUCCESS_EVENT, function(event, data) {
                    
                    var stateReference = new String($state.$current.url.sourcePath);
                    var anchors = element.find(_ANCHOR_TAG);
                    stateReference = _BASE_HASH_PATH.concat(stateReference);

                    angular.forEach(anchors, function(anchor) {

                        var a = angular.element(anchor);
                        var navigationItem = a.parent();
                        var hypertextReference = a.attr(_HREF_ATTRIBUTE);
                        var equals = stateReferenceEquals(stateReference, hypertextReference, _PARAMETER_START, _SLASH);

                        if(equals) {
                            navigationItem.addClass(_ACTIVE_CSS_CLASS);
                        } else {
                            navigationItem.removeClass(_ACTIVE_CSS_CLASS);
                        };

                    });

                });

            }
            
        };

        return ddo;

    };

})();
/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("restaurantAppModule")
    .directive("lkaNavActiveLink", navActiveLinkDirective);                               

    var srefEquals = function(sref, href, paramStart, slash) {
        var equals = true;

        sref = sref || "";
        href = href || "";

        var srPaths = sref.split(slash);
        var hrPaths = href.split(slash);
        var srplen = srPaths.length;
        var hrplen = hrPaths.length;

        equals = srplen === hrplen;

        if(equals) {
            var srs;
            var hrs;
            var srslen;
            var hrslen;
            var isParameter;

            for(var i = 0; i < srplen; i++) {
                srs = srPaths[i];
                hrs = hrPaths[i];
                srslen = srs.length;
                hrslen = hrs.length;
                isParameter = srs[0] === paramStart;

                if(srslen === hrslen) {
                    for(var j = 0; j < srslen; j++) {
                        if(srs[j] !== hrs[j] && !isParameter) {
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

    navActiveLinkDirective.$inject = [
        "$state", 
        "_DIR_REST_ATTR", 
        "_DIR_REPLACE_FALSE", 
        "_DIR_EMPTY_ISOLATED_SCOPE", 
        "_SLASH",
        "_BASE_HASH_PATH", 
        "_HASH_PATH", 
        "_PARAM_START", 
        "_PARAM_END", 
        "_ANCHOR_TAG", 
        "_HREF_ATTR", 
        "_ACTIVE_CSS_CLASS", 
        "_STATE_CHG_SUC_EVT"
    ];
    function navActiveLinkDirective(
        $state, 
        _DIR_REST_ATTR, 
        _DIR_REPLACE_FALSE, 
        _DIR_EMPTY_ISOLATED_SCOPE, 
        _SLASH, 
        _BASE_HASH_PATH, 
        _HASH_PATH,  
        _PARAM_START, 
        _PARAM_END, 
        _ANCHOR_TAG, 
        _HREF_ATTR, 
        _ACTIVE_CSS_CLASS, 
        _STATE_CHG_SUC_EVT
    ) {
        
        var ddo = {

            restrict: _DIR_REST_ATTR,
            replace: _DIR_REPLACE_FALSE,
            scope: _DIR_EMPTY_ISOLATED_SCOPE, 
            link: function(scope, element, attrs, controller) {

                scope.$on(_STATE_CHG_SUC_EVT, function(event, data) {
                    
                    var sref = new String($state.$current.url.sourcePath);
                    var anchors = element.find(_ANCHOR_TAG);
                    sref = _BASE_HASH_PATH.concat(sref);

                    angular.forEach(anchors, function(anchor) {

                        var a = angular.element(anchor);
                        var navItem = a.parent();
                        var href = a.attr(_HREF_ATTR);
                        var equals = srefEquals(sref, href, _PARAM_START, _SLASH);

                        if(equals) {
                            navItem.addClass(_ACTIVE_CSS_CLASS);
                        } else {
                            navItem.removeClass(_ACTIVE_CSS_CLASS);
                        };

                    });

                });

            }
            
        };

        return ddo;

    };

})();
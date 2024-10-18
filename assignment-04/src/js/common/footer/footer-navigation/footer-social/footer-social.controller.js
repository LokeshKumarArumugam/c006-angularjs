/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {
    
    "use strict";

    angular.module("footerSocialModule").controller("footerSocialController", FooterSocialController);

    FooterSocialController.$inject = [
        "_OUR_FACEBOOK_URL", 
        "_OUR_TWITTER_URL", 
        "_OUR_GOOGLE_URL", 
        "_OUR_INSTAGRAM_URL", 
        "_OUR_LINKEDIN_URL", 
        "_OUR_GITHUB_URL"
    ];
    function FooterSocialController(
        _OUR_FACEBOOK_URL, 
        _OUR_TWITTER_URL, 
        _OUR_GOOGLE_URL, 
        _OUR_INSTAGRAM_URL, 
        _OUR_LINKEDIN_URL, 
        _OUR_GITHUB_URL
    ) {
         
        var $ctrl = this;

        // social links
        $ctrl.ourFacebookUrl = _OUR_FACEBOOK_URL;
        $ctrl.ourTwitterUrl = _OUR_TWITTER_URL;
        $ctrl.ourGoogleUrl = _OUR_GOOGLE_URL;
        $ctrl.ourInstagramrUrl = _OUR_INSTAGRAM_URL;
        $ctrl.ourLinkedInUrl = _OUR_LINKEDIN_URL;
        $ctrl.ourGithubUrl = _OUR_GITHUB_URL;

    };

})();
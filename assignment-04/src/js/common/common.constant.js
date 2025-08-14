/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    /** ========================================================
     *  CONSTANTS 
     *  ========================================================
     */ 

    // local variable (not angular constants)
    
    const SLASH = "/";
    const HASH = "#";
    const HASH_PREFIX = "!";
    const BASE_URL = SLASH + HASH + HASH_PREFIX;

    /* ==================== server constants =================== */

    // server path

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant
    const BASE_HASH_PATH = BASE_URL + SLASH;
    const OUR_FACEBOOK_URL = BASE_HASH_PATH;
    const OUR_TWITTER_URL = BASE_HASH_PATH;
    const OUR_GOOGLE_URL = BASE_HASH_PATH;
    const OUR_INSTAGRAM_URL = BASE_HASH_PATH;
    const OUR_LINKEDIN_URL = BASE_HASH_PATH;
    const OUR_GITHUB_URL = BASE_HASH_PATH;
    const HOME_ROOT_URL = BASE_URL + SLASH;
    const HOME_ROOT_PART_URL = BASE_URL;
    const MENU_CATEGORIES_ROOT_URL = HOME_ROOT_PART_URL + "/categories";
    const MENU_ITEMS_ROOT_URL = HOME_ROOT_PART_URL + "/categories/0/items";
    const ABOUT_ROOT_URL = HOME_ROOT_PART_URL + "/about";
    const BRAND_IMAGE_SOURCE = "src/image/app/logo.png";
    // controller
    const HEADER_BRAND_CONTROLLER_NAME = "headerBrandController";
    const HEADER_LINKS_CONTROLLER_NAME = "headerLinksController";
    const FOOTER_LINKS_CONTROLLER_NAME = "footerLinksController";
    const FOOTER_SOCIAL_CONTROLLER_NAME = "footerSocialController";
    const FOOTER_LOGOUT_CONTROLLER_NAME = "footerLogoutController";
    // service
    // factory
    const LOADING_INTERCEPTOR_NAME = "loadingInterceptor";
    // provider
    // directive
    const DIRECTIVE_RESTRICT_ATTRIBUTE = "A";
    const DIRECTIVE_RESTRICT_ELEMENT = "E";
    const DIRECTIVE_RESTRICT_ATTRIBUTE_AND_ELEMENT = "AE";
    const DIRECTIVE_REPLACE_FALSE = false;
    const DIRECTIVE_REPLACE_TRUE = true;
    const DIRECTIVE_EMPTY_ISOLATED_SCOPE = { };
    const DIRECTIVE_BIND_TO_CONTROLLER = true;
    const DIRECTIVE_NOT_BIND_TO_CONTROLLER = false;
    // routing 
    // component
    const COMPONENT_REPLACE_FALSE = false;
    const LOADING_TEMPLATE_URL = "src/html/common/loading/loading.html";
    const LOADING_CONTROLLER_NAME = "loadingController";
    const LOADING_CONTROLLER_AS = "loadingCtrl";
    const HEADER_TEMPLATE_URL = "src/html/common/header/header.html";
    const HEADER_BRAND_TEMPLATE_URL = "src/html/common/header/header-brand/header-brand.html";
    const HEADER_BRAND_CONTROLLER_AS = "brandCtrl";
    const HEADER_LINKS_TEMPLATE_URL = "src/html/common/header/header-links/header-links.html";
    const HEADER_LINKS_CONTROLLER_AS = "navLinksCtrl";
    const FOOTER_TEMPLATE_URL = "src/html/common/footer/footer.html";
    const FOOTER_NAV_TEMPLATE_URL = "src/html/common/footer/footer-navigation/footer-navigation.html";
    const FOOTER_LINKS_TEMPLATE_URL = "src/html/common/footer/footer-navigation/footer-links/footer-links.html";
    const FOOTER_LINKS_CONTROLLER_AS = "linksCtrl";
    const FOOTER_SOCIAL_TEMPLATE_URL = "src/html/common/footer/footer-navigation/footer-social/footer-social.html";
    const FOOTER_SOCIAL_CONTROLLER_AS = "socialCtrl";
    const FOOTER_LAST_TEMPLATE_URL = "src/html/common/footer/footer-last/footer-last.html";
    const FOOTER_LOCALE_TEMPLATE_URL = "src/html/common/footer/footer-last/footer-locale/footer-locale.html";
    const FOOTER_LOGOUT_TEMPLATE_URL = "src/html/common/footer/footer-last/footer-logout/footer-logout.html";
    const FOOTER_LOGOUT_CONTROLLER_AS = "logoutCtrl";

    /* ================ configuration constants ================ */

    // locale
    // location

    /* ===================== event constants ==================== */

    // locale
    // location
    // route
    // element
    const LOADING_SPINNER_ACTIVATE_EVENT = "spinner:activate";



    /** ========================================================
     *  ANGULAR CONSTANTS 
     *  ========================================================
     */ 

    angular.module("commonModule")

    /* ==================== server constants =================== */

    // server path

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant
    .constant("_BASE_HASH_PATH", BASE_HASH_PATH)
    .constant("_OUR_FACEBOOK_URL", OUR_FACEBOOK_URL)
    .constant("_OUR_TWITTER_URL", OUR_TWITTER_URL)
    .constant("_OUR_GOOGLE_URL", OUR_GOOGLE_URL)
    .constant("_OUR_INSTAGRAM_URL", OUR_INSTAGRAM_URL)
    .constant("_OUR_LINKEDIN_URL", OUR_LINKEDIN_URL)
    .constant("_OUR_GITHUB_URL", OUR_GITHUB_URL)
    .constant("_HOME_ROOT_URL", HOME_ROOT_URL)
    .constant("_MENU_CATEGORIES_ROOT_URL", MENU_CATEGORIES_ROOT_URL)
    .constant("_MENU_ITEMS_ROOT_URL", MENU_ITEMS_ROOT_URL)
    .constant("_ABOUT_ROOT_URL", ABOUT_ROOT_URL)
    .constant("_BRAND_IMAGE_SOURCE", BRAND_IMAGE_SOURCE)
    .constant("_MENU_CATEGORIES_ROOT_URL", MENU_CATEGORIES_ROOT_URL)
    .constant("_MENU_ITEMS_ROOT_URL", MENU_ITEMS_ROOT_URL)
    // controller
    .constant("_HEADER_BRAND_CONTROLLER_NAME", HEADER_BRAND_CONTROLLER_NAME)
    .constant("_HEADER_LINKS_CONTROLLER_NAME", HEADER_LINKS_CONTROLLER_NAME)
    .constant("_FOOTER_LINKS_CONTROLLER_NAME", FOOTER_LINKS_CONTROLLER_NAME)
    .constant("_FOOTER_SOCIAL_CONTROLLER_NAME", FOOTER_SOCIAL_CONTROLLER_NAME)
    .constant("_FOOTER_LOGOUT_CONTROLLER_NAME", FOOTER_LOGOUT_CONTROLLER_NAME)
    // service
    // factory
    .constant("_LOADING_INTERCEPTOR_NAME", LOADING_INTERCEPTOR_NAME)
    // provider
    // directive
    .constant("_DIRECTIVE_RESTRICT_ATTRIBUTE", DIRECTIVE_RESTRICT_ATTRIBUTE)
    .constant("_DIRECTIVE_RESTRICT_ELEMENT", DIRECTIVE_RESTRICT_ELEMENT)
    .constant("_DIRECTIVE_RESTRICT_ALL", DIRECTIVE_RESTRICT_ATTRIBUTE_AND_ELEMENT)
    .constant("_DIRECTIVE_REPLACE_FALSE", DIRECTIVE_REPLACE_FALSE)
    .constant("_DIRECTIVE_REPLACE_TRUE", DIRECTIVE_REPLACE_TRUE)
    .constant("_DIRECTIVE_EMPTY_ISOLATED_SCOPE", DIRECTIVE_EMPTY_ISOLATED_SCOPE)
    .constant("_DIRECTIVE_BIND_TO_CONTROLLER", DIRECTIVE_BIND_TO_CONTROLLER)
    .constant("_DIRECTIVE_NOT_BIND_TO_CONTROLLER", DIRECTIVE_NOT_BIND_TO_CONTROLLER)
    // component
    .constant("_COMPONENT_REPLACE_FALSE", COMPONENT_REPLACE_FALSE)
    .constant("_LOADING_TEMPLATE_URL", LOADING_TEMPLATE_URL)
    .constant("_LOADING_CONTROLLER_NAME", LOADING_CONTROLLER_NAME)
    .constant("_LOADING_CONTROLLER_AS", LOADING_CONTROLLER_AS)
    .constant("_HEADER_TEMPLATE_URL", HEADER_TEMPLATE_URL)
    .constant("_HEADER_BRAND_TEMPLATE_URL", HEADER_BRAND_TEMPLATE_URL)
    .constant("_HEADER_BRAND_CONTROLLER_AS", HEADER_BRAND_CONTROLLER_AS)
    .constant("_HEADER_LINKS_TEMPLATE_URL", HEADER_LINKS_TEMPLATE_URL)
    .constant("_HEADER_LINKS_CONTROLLER_AS", HEADER_LINKS_CONTROLLER_AS)
    .constant("_FOOTER_TEMPLATE_URL", FOOTER_TEMPLATE_URL)
    .constant("_FOOTER_NAV_TEMPLATE_URL", FOOTER_NAV_TEMPLATE_URL)
    .constant("_FOOTER_LINKS_TEMPLATE_URL", FOOTER_LINKS_TEMPLATE_URL)
    .constant("_FOOTER_LINKS_CONTROLLER_NAME", FOOTER_LINKS_CONTROLLER_NAME)
    .constant("_FOOTER_LINKS_CONTROLLER_AS", FOOTER_LINKS_CONTROLLER_AS)
    .constant("_FOOTER_SOCIAL_TEMPLATE_URL", FOOTER_SOCIAL_TEMPLATE_URL)
    .constant("_FOOTER_SOCIAL_CONTROLLER_NAME", FOOTER_SOCIAL_CONTROLLER_NAME)
    .constant("_FOOTER_SOCIAL_CONTROLLER_AS", FOOTER_SOCIAL_CONTROLLER_AS)
    .constant("_FOOTER_LAST_TEMPLATE_URL", FOOTER_LAST_TEMPLATE_URL)
    .constant("_FOOTER_LOCALE_TEMPLATE_URL", FOOTER_LOCALE_TEMPLATE_URL)
    .constant("_FOOTER_LOGOUT_TEMPLATE_URL", FOOTER_LOGOUT_TEMPLATE_URL)
    .constant("_FOOTER_LOGOUT_CONTROLLER_AS", FOOTER_LOGOUT_CONTROLLER_AS)
    // routing

    /* ================ configuration constants ================ */

    // locale
    // location
    
    /* ===================== event constants ==================== */

    // locale
    // location
    // route
    // element
    .constant("_LOADING_SPINNER_ACTIVATE_EVENT", LOADING_SPINNER_ACTIVATE_EVENT)

    /* ========================== end ========================== */
    ;

})();
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

    /* ==================== server constants =================== */

    // server path
    const ROOT_API_PATH = "https://coursera-jhu-default-rtdb.firebaseio.com";

    /* =================== service constants =================== */

    /* our service */
    // common
    const BASE_HASH_PATH = SLASH + HASH + HASH_PREFIX;
    const HASH_PATH = HASH + HASH_PREFIX;
    const PARAM_START = "{";
    const PARAM_END = "}";
    const ANCHOR_TAG = "a";
    const HREF_ATTRIBUTE = "href";
    const ACTIVE_CSS_CLASS = "active";
    // constant 
    const NOT_FOUND_IMAGE_SOURCE = "src/img/error/404-2.png";
    // controller
    // service
    const HTTP_METHOD_GET = "GET";
    const HTTP_METHOD_POST = "POST";
    const HTTP_METHOD_PATCH = "PATCH";
    const HTTP_METHOD_PUT = "PUT";
    const HTTP_METHOD_DELETE = "DELETE";
    const HTTP_METHOD_OPTIONS = "OPTIONS";
    const HTTP_METHOD_HEAD = "HEAD";
    // factory
    // provider
    // directive
    const DIRECTIVE_RESTRICT_ATTRIBUTE = "A";
    const DIRECTIVE_RESTRICT_ELEMENT = "E";
    const DIRECTIVE_RESTRICT_ATTRIBUTE_AND_ELEMENT = "AE";
    const DIRECTIVE_REPLACE_FALSE = false;
    const DIRECTIVE_REPLACE_TRUE = true;
    // component
    const COMPONENT_REPLACE_FALSE = false;
    // routing 
    // routing => app => home
    const HOME_STATE_NAME = "home";
    const HOME_URL = SLASH;
    const HOME_TEMPLATE_URL = "src/html/home/home.html";
    const HOME_CONTROLLER_NAME = "homeController";
    const HOME_CONTROLLER_AS = "homeCtrl";
    // routing => menu categories
    const MENU_CATEGORIES_STATE_NAME = "home.categories";
    const MENU_CATEGORIES_URL = "categories";
    const MENU_CATEGORIES_TEMPLATE_URL = "src/html/home/menu/menu-categories/menu-categories.html";
    const MENU_CATEGORIES_CONTROLLER_NAME = "menuCategoriesController";
    const MENU_CATEGORIES_CONTROLLER_AS = "categoriesCtrl";
    // routing => menu items
    const MENU_ITEMS_STATE_NAME = "home.items";
    const MENU_ITEMS_URL = "categories/{categoryShortName}/items";
    const MENU_ITEMS_TEMPLATE_URL = "src/html/home/menu/menu-items/menu-items.html";
    const MENU_ITEMS_CONTROLLER_NAME = "menuItemsController";
    const MENU_ITEMS_CONTROLLER_AS = "itemsCtrl";
    // routing => menu item
    const MENU_ITEM_STATE_NAME = "home.items.item";
    const MENU_ITEM_URL = "/{itemShortName}";
    const MENU_ITEM_TEMPLATE_URL = "src/html/home/menu/menu-item/menu-item.html";
    const MENU_ITEM_CONTROLLER_NAME = "menuItemController";
    const MENU_ITEM_CONTROLLER_AS = "itemCtrl";
    // routing => about
    const ABOUT_STATE_NAME = "about";
    const ABOUT_URL = "/about";
    const ABOUT_TEMPLATE_URL = "src/html/about/about.html";
    const ABOUT_CONTROLLER_NAME = "aboutController";
    const ABOUT_CONTROLLER_AS = "aboutCtrl";
    // routing => error
    const ERROR_STATE_NAME = "error";
    const ERROR_URL = "/error";
    const ERROR_TEMPLATE_URL = "src/html/error/error.html";
    const ERROR_CONTROLLER_NAME = "errorController";
    const ERROR_CONTROLLER_AS = "errorCtrl";

    /* ================ configuration constants ================ */

    // location
    const LOCATION_HTML5_ENABLED = false;
    const LOCATION_HASH_PREFIX = HASH_PREFIX;

    /* ===================== event constants ==================== */

    // route
    const ROUTE_CHANGE_SUCCESS_EVENT = "$routeChangeSuccess";
    // state
    const STATE_CHANGE_START_EVENT = "$stateChangeStart";
    const STATE_CHANGE_SUCCESS_EVENT = "$stateChangeSuccess";
    const STATE_CHANGE_ERROR_EVENT = "$stateChangeError";



    /** ========================================================
     *  ANGULAR CONSTANTS 
     *  ========================================================
     */ 

    angular.module("restaurantAppModule")

    /* ==================== server constants =================== */

    // server path
    .constant("_ROOT_API_PATH", ROOT_API_PATH)

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant
    .constant("_NOT_FOUND_IMG_SRC", NOT_FOUND_IMAGE_SOURCE)
    // controller
    .constant("_SLASH", SLASH)
    .constant("_BASE_HASH_PATH", BASE_HASH_PATH)
    .constant("_HASH_PATH", HASH_PATH)
    .constant("_PARAM_START", PARAM_START)
    .constant("_PARAM_END", PARAM_END)
    .constant("_ANCHOR_TAG", ANCHOR_TAG)
    .constant("_HREF_ATTR", HREF_ATTRIBUTE)
    .constant("_ACTIVE_CSS_CLASS", ACTIVE_CSS_CLASS)
    // service
    .constant("_HTTP_METHOD_GET", HTTP_METHOD_GET)
    .constant("_HTTP_METHOD_POST", HTTP_METHOD_POST)
    .constant("_HTTP_METHOD_PATCH", HTTP_METHOD_PATCH)
    .constant("_HTTP_METHOD_PUT", HTTP_METHOD_PUT)
    .constant("_HTTP_METHOD_DELETE", HTTP_METHOD_DELETE)
    .constant("_HTTP_METHOD_OPTIONS", HTTP_METHOD_OPTIONS)
    .constant("_HTTP_METHOD_HEAD", HTTP_METHOD_HEAD)
    // factory
    // provider
    // directive
    .constant("_DIR_REST_ATTR", DIRECTIVE_RESTRICT_ATTRIBUTE)
    .constant("_DIR_REST_ELEM", DIRECTIVE_RESTRICT_ELEMENT)
    .constant("_DIR_REST_ALL", DIRECTIVE_RESTRICT_ATTRIBUTE_AND_ELEMENT)
    .constant("_DIR_REPLACE_FALSE", DIRECTIVE_REPLACE_FALSE)
    .constant("_DIR_REPLACE_TRUE", DIRECTIVE_REPLACE_TRUE)
    // component
    .constant("_COMP_REPLACE_FALSE", COMPONENT_REPLACE_FALSE)
    // routing
    // routing => app => home
    .constant("_HOME_STATE_NAME", HOME_STATE_NAME)
    .constant("_HOME_URL", HOME_URL)
    .constant("_HOME_TEMPLATE_URL", HOME_TEMPLATE_URL)
    .constant("_HOME_CTRL_NAME", HOME_CONTROLLER_NAME)
    .constant("_HOME_CTRL_AS", HOME_CONTROLLER_AS)
    // routing => menu categories
    .constant("_MENU_CATEGORIES_STATE_NAME", MENU_CATEGORIES_STATE_NAME)
    .constant("_MENU_CATEGORIES_URL", MENU_CATEGORIES_URL)
    .constant("_MENU_CATEGORIES_TEMPLATE_URL", MENU_CATEGORIES_TEMPLATE_URL)
    .constant("_MENU_CATEGORIES_CTRL_NAME", MENU_CATEGORIES_CONTROLLER_NAME)
    .constant("_MENU_CATEGORIES_CTRL_AS", MENU_CATEGORIES_CONTROLLER_AS)
    // routing => menu items
    .constant("_MENU_ITEMS_STATE_NAME", MENU_ITEMS_STATE_NAME)
    .constant("_MENU_ITEMS_URL", MENU_ITEMS_URL)
    .constant("_MENU_ITEMS_TEMPLATE_URL", MENU_ITEMS_TEMPLATE_URL)
    .constant("_MENU_ITEMS_CTRL_NAME", MENU_ITEMS_CONTROLLER_NAME)
    .constant("_MENU_ITEMS_CTRL_AS", MENU_ITEMS_CONTROLLER_AS)
    // routing => menu item
    .constant("_MENU_ITEM_STATE_NAME", MENU_ITEM_STATE_NAME)
    .constant("_MENU_ITEM_URL", MENU_ITEM_URL)
    .constant("_MENU_ITEM_TEMPLATE_URL", MENU_ITEM_TEMPLATE_URL)
    .constant("_MENU_ITEM_CTRL_NAME", MENU_ITEM_CONTROLLER_NAME)
    .constant("_MENU_ITEM_CTRL_AS", MENU_ITEM_CONTROLLER_AS)
    // routing => about
    .constant("_ABOUT_STATE_NAME", ABOUT_STATE_NAME)
    .constant("_ABOUT_URL", ABOUT_URL)
    .constant("_ABOUT_TEMPLATE_URL", ABOUT_TEMPLATE_URL)
    .constant("_ABOUT_CTRL_NAME", ABOUT_CONTROLLER_NAME)
    .constant("_ABOUT_CTRL_AS", ABOUT_CONTROLLER_AS)
    // routing => error
    .constant("_ERROR_STATE_NAME", ERROR_STATE_NAME)
    .constant("_ERROR_URL", ERROR_URL)
    .constant("_ERROR_TEMPLATE_URL", ERROR_TEMPLATE_URL)
    .constant("_ERROR_CTRL_NAME", ERROR_CONTROLLER_NAME)
    .constant("_ERROR_CTRL_AS", ERROR_CONTROLLER_AS)

    /* ================ configuration constants ================ */

    // location
    .constant("_HTML5_ENABLED", LOCATION_HTML5_ENABLED)
    .constant("_HASH_PREFIX", LOCATION_HASH_PREFIX)
    
    /* ===================== event constants ==================== */

    // route
    .constant("_ROUTE_CHG_SUC_EVT", ROUTE_CHANGE_SUCCESS_EVENT)
    // state
    .constant("_STATE_CHG_START_EVT", STATE_CHANGE_START_EVENT)
    .constant("_STATE_CHG_SUC_EVT", STATE_CHANGE_SUCCESS_EVENT)
    .constant("_STATE_CHG_ERR_EVT", STATE_CHANGE_ERROR_EVENT)
    
    /* ========================== end ========================== */
    ;

})();
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
    // menu categories
    const MENU_CATEGORIES_API_PATH = "/categories.json";
    const MENU_ITEMS_API_PATH = "/menu_items/{category_short_name}.json";

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant
    const CATEGORY_SHORT_NAME_PATTERN = "{category_short_name}";
    // controller
    // service
    // factory
    // provider
    // directive
    // routing 

    /* ================ configuration constants ================ */

    // locale
    // location

    /* ===================== event constants ==================== */

    // locale
    // location
    // route
    // element



    /** ========================================================
     *  ANGULAR CONSTANTS 
     *  ========================================================
     */ 

    angular.module("menuModule")

    /* ==================== server constants =================== */

    // server path
    // menu categories
    .constant("_MENU_CATEGORIES_API_PATH", MENU_CATEGORIES_API_PATH)
    // menu items
    .constant("_MENU_ITEMS_API_PATH", MENU_ITEMS_API_PATH)

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant 
    .constant("_CATEGORY_SHORT_NAME_PATTERN", CATEGORY_SHORT_NAME_PATTERN)
    // controller
    // service
    // factory
    // provider
    // directive
    // routing

    /* ================ configuration constants ================ */

    // locale
    // location
    
    /* ===================== event constants ==================== */

    // locale
    // location
    // route
    // element

    /* ========================== end ========================== */
    ;

})();
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

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant
    const SPINNER_IMAGE_SOURCE = "img/spinner.svg";
    // controller
    // service
    // factory
    const LOADING_INTERCEPTOR_NAME = "loadingInterceptor";
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
    const LOADING_SPINNER_ACTIVATE_EVT = "spinner:activate";



    /** ========================================================
     *  ANGULAR CONSTANTS 
     *  ========================================================
     */ 

    angular.module("loadingModule")

    /* ==================== server constants =================== */

    // server path

    /* =================== service constants =================== */

    /* our service */
    // common
    // constant 
    .constant("_SPINNER_IMG_SRC", SPINNER_IMAGE_SOURCE)
    // controller
    // service
    // factory
    .constant("_LOADING_INTERCEPTOR_NAME", LOADING_INTERCEPTOR_NAME)
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
    .constant("_LOADING_SPINNER_ACT_EVT", LOADING_SPINNER_ACTIVATE_EVT)

    /* ========================== end ========================== */
    ;

})();
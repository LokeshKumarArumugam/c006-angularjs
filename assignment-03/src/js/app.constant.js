/**
 * Created by Lokesh Kumar Arumugam on 11/10/2024
 */
(function() {

    "use strict";

    angular.module("chineseMenuAppModule")
    .constant("_api_base_path", "https://coursera-jhu-default-rtdb.firebaseio.com")
    .constant("_categories_path", "/categories.json")
    .constant("_menu_items_path", "/menu_items.json");

})();
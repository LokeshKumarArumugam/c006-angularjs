describe("The menu service", function() {
    "use strict";

    var MenuService;
    var $httpBackend;
    var ApiPath;

    var menuItemsResponse = [ 
        {
            "description": "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
            "large_portion_name": "quart",
            "name": "Won Ton Soup with Chicken",
            "price_large": 5,
            "price_small": 2.55,
            "short_name": "A1",
            "small_portion_name": "pint"
          },
          {
            "description": "chicken broth with egg drop",
            "large_portion_name": "quart",
            "name": "Egg Drop Soup",
            "price_large": 4.5,
            "price_small": 2.25,
            "short_name": "A2",
            "small_portion_name": "pint"
          }
    ];
    var nonExistingMenuItemShortName = "A500";
    var existingMenuItemShortName = "A2";

    beforeEach(function() {
        // load module
        module("common");

        // load any dependencies
        inject(function($injector) {
            MenuService = $injector.get("MenuService");
            $httpBackend = $injector.get("$httpBackend");
            ApiPath = $injector.get("ApiPath");
        });
    });

    it("on performing menuItemExists() should return false if the favorite item doesn't exists in the menu", function() {
        var exists = null;

        $httpBackend.whenGET(ApiPath + "/menu_items.json").respond(menuItemsResponse);
        MenuService.menuItemExists(nonExistingMenuItemShortName).then(function(response) {
            exists = response.data;
        }).catch(function(error) {
            exists = error.data;
        }).finally(function() {
            expect(exists).toBe(false);
        });
    });

    it("on performing menuItemExists() should return true if the favorite item exists in the menu", function() {
        var exists = null;

        $httpBackend.whenGET(ApiPath + "/menu_items.json").respond(menuItemsResponse);
        MenuService.menuItemExists(existingMenuItemShortName).then(function(response) {
            exists = response.data;
        }).catch(function(error) {
            exists = error.data;
        }).finally(function() {
            expect(exists).toBe(true);
        });
    });
});
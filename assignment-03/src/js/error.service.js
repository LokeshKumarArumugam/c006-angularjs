/**
 * Created by Lokesh Kumar Arumugam on 11/10/2024
 */
(function() {

    "use strict";

    angular.module("chineseMenuAppModule")
    .factory("errorFactory", function() {
        
        return {

            // creates a new error context
            create: function(method, args) {

                var result = {

                    // initiates and returns the error context
                    error: function(message) {

                        this.errorContext.isError = true;

                        if(message.isError) {
                            this.errorContext.details.caller = message;
                        } else {
                            this.errorContext.details.message = message;
                        }

                        return this.errorContext;

                    },
                    errorContext: {
                        isError: false,
                        details: {},
                        log: function() {
                            if(this.isError) {
                                console.error(this.format());
                            }
                        },
                        // formats complete error details into a text string
                        format: function() {

                            var text = "";

                            if(this.details.caller) {
                                var text = this.details.caller.format();
                                text += "\nat: " + this.details.method + "(" + this.formatArguments() + ")";
                            } else if(this.details.method) {
                                text += "Error calling " + this.details.method + "(" + this.formatArguments() + "): " + this.details.message;
                            } else {
                                text += this.details.message;
                            }
                            
                            return text;

                        },
                        // formats function argument details into a text string
                        formatArguments: function() {

                            var params = "";
                            if(!this.details.args) {
                                return params;
                            }
                            
                            var length = this.details.args.length;
                            for(var i = 0; i < length; i++) {
                                var p = this.details.args[i];

                                if(p === undefined) {
                                    params += "undefined";
                                } else {
                                    if(p === null) {
                                        params += "null";
                                    } else {
                                        if(typeof(p) == "object") {
                                            params += "Object";
                                        } else {
                                            params += p;
                                        }
                                    }
                                }

                                if(i != (length - 1)) {
                                    params += ",";
                                }
                            }

                            return params;

                        }
                    }
                };

                if(method){
                    result.errorContext.details.method = method;
                }
                if(args){
                    result.errorContext.details.args = args;
                }

                return result;

            }

        }

    });

})();
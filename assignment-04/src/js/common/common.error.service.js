/**
 * Created by Lokesh Kumar Arumugam on 17/10/2024
 */
(function() {

    "use strict";

    angular.module("commonModule")
    .factory("errorServiceFactory", ErrorServiceFactory);

    function ErrorServiceFactory() {
        
        return {

            // creates a new error context
            create: function(method, args) {

                var result = {

                    // initiates and returns the error context
                    error: function(message) {

                        var errorService = this;

                        errorService.errorContext.isError = true;

                        if(message.isError) {
                            errorService.errorContext.details.caller = message;
                        } else {
                            errorService.errorContext.details.message = message;
                        }

                        return errorService.errorContext;

                    },
                    // the error context
                    errorContext: {
                        isError: false,
                        details: {},
                        log: function() {
                            var errorContext = this;

                            if(errorContext.isError) {
                                console.error(errorContext.format());
                            }
                        },
                        // formats complete error details into a text string
                        format: function() {

                            var errorContext = this;
                            var text = "";

                            if(errorContext.details.caller) {
                                var text = errorContext.details.caller.format();
                                text += "\n\tat: " + errorContext.details.method.__proto__.constructor.name + "(" + errorContext.formatArguments() + ")";
                            } else if(errorContext.details.method) {
                                text += "Error calling " + errorContext.details.method.__proto__.constructor.name + "(" + errorContext.formatArguments() + "): " + errorContext.details.message;
                            } else {
                                text += errorContext.details.message;
                            }
                            
                            return text;

                        },
                        // formats function argument details into a text string
                        formatArguments: function() {

                            var errorContext = this;
                            var params = "";
                            if(!errorContext.details.args) {
                                return params;
                            }
                            
                            var length = errorContext.details.args.length;
                            for(var i = 0; i < length; i++) {
                                var p = errorContext.details.args[i];

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
                                    params += ", ";
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

        };

    };

})();
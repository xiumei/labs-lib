/*global document, window, angular, define*/
define(['cookies', 'translate', 'translate-loader'], function () {
    "use strict";

    // Define the module
    var module = angular.module('ngLocalization', ['pascalprecht.translate', 'ngCookies']);

    module.config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: window.location.pathname + 'languages/messages_',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.preferredLanguage('en');
    });

    module.factory('Localization', function ($cookies) {
        var favoriteLanguage = $cookies.rh_locale;
        return {
            favoriteLanguage: favoriteLanguage
        };
    });

    return module;
});
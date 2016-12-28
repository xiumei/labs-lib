/*global require, window, define*/
(function () {
    "use strict";
    require.config({
        paths: {
            'cookies': window.location.pathname + 'bower_components/angular-cookies/angular-cookies.min',
            'translate': window.location.pathname + 'bower_components/angular-translate/angular-translate.min',
            'translate-loader': window.location.pathname + 'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
            'ui-bootstrap-customized': window.location.pathname + 'bower_components/labslib/labs-tooltips/ui-bootstrap-tpls-0.11.0-customized',

            'localization': window.location.pathname + 'bower_components/labslib/angular-localization/angular-localization',
            'angular-fixed-header-table': window.location.pathname + 'bower_components/labslib/angular-fixed-header-table/angular-fixed-header-table',
            'labs-compile': window.location.pathname + 'bower_components/labslib/labs-compile/labs-compile',
            'labs-download': window.location.pathname + 'bower_components/labslib/labs-download/labs-download',
            'labs-tooltips': window.location.pathname + 'bower_components/labslib/labs-tooltips/labs-tooltips',
            'labs-utils': window.location.pathname + 'bower_components/labslib/labs-utils/labs-utils'
        }
    });
}());
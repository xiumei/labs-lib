/*global require, window, define*/
(function () {
    "use strict";
    var base = window.location.pathname;
    var deps = [
        'bower_components/angular-cookies/angular-cookies.min',
        'bower_components/angular-translate/angular-translate.min',
        'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.min',
        'bower_components/labs-lib/labs-tooltips/ui-bootstrap-tpls-customized',

        'bower_components/labs-lib/angular-localization/angular-localization',
        'bower_components/labs-lib/angular-fixed-header-table/angular-fixed-header-table',
        'bower_components/labs-lib/labs-compile/labs-compile',
        'bower_components/labs-lib/labs-download/labs-download',
        'bower_components/labs-lib/labs-tooltips/labs-tooltips',
        'bower_components/labs-lib/labs-utils/labs-utils'
    ];
    var paths = {};
    deps.map(function (dep) {
        var pathArr = dep.split('/');
        var module = (pathArr[pathArr.length - 1].split('.'))[0];
        paths[module] = base + dep;
    });
    require.config({
        paths: paths,
        shim: {
            'angular-translate-loader-static-files': {
                deps: ['angular-translate']
            }
        }
    });
}());
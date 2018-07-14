/**
 * bootstraps angular onto the window.document node
 */
define([
    'require',
    'angular',
    'script',
], function (require, ng) {
    'use strict';

    require(['script!'], function (document) {
        ng.bootstrap(document, ['script']);
    });
});

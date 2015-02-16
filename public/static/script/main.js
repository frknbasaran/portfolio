requirejs.config({
    baseUrl: "static/script/libs",
    paths: {
        'app'       : '../app',
        'template'  : '../../templates',
        'view'      : '../app/views',
        'util'      : './utils',
        'model'     : '../app/models'
    },
    shim: {
        'jquery' : {
            exports : '$'
        },
        'underscore' : {
            exports : '_'
        },
        'backbone': {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        'i18next' : {
            deps: ['jquery'],
            exports: 'i18n'
        },
        'jquery.cookie' : {
            deps: ['jquery'],
            exports: '$'
        },
        'moment' : {
            exports: 'moment'
        },
        "jquery.ui": {
            deps: ['jquery'],
            exports: "$"
        },
        "jquery.easing": {
            deps: ['jquery'],
            exports: "$"
        },
        "notify": {
            deps: ['jquery'],
            exports: "$"
        }
    }
});

require(["app"]);
// Set the require.js configuration for your application.
require.config({

    deps: ["main"],

    baseUrl: "assets/js/app/",

    paths: {

        // app
        "main": "config/main",
        "app": "config/app",

        // base
        //"jquery": "vendor/jquery-2.1.4",
        "jquery": "vendor/zepto/zepto",
        "backbone": "vendor/base/backbone",
        "underscore": "vendor/base/underscore",
        "layoutmanager": "vendor/base/backbone.layoutmanager",

        // utils
        "inflateText": "vendor/inflateText",

        // tween
        "TweenLite": "vendor/greensock/TweenMax",
        "TimelineLite": "vendor/greensock/TimelineMax",


        // media
        "howler": "vendor/media/howler",
        "sha": "vendor/media/sha",
        // "jweixin": "http://res.wx.qq.com/open/js/jweixin-1.0.0.js",

    },

    shim: {

        "main": {
            deps: ["layoutmanager", "TimelineLite", "howler"],
            //deps : ["layoutmanager"],
        },

        "jquery": {
            exports: '$'
        },

        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        "underscore": {
            exports: '_'
        },

        "layoutmanager": {
            deps: ["backbone"],
            exports: "Backbone.LayoutManager"
        },

        "inflateText": {
            exports: 'inflateText'
        },

        // tween
        "TweenLite": {
            exports: "TweenLite"
        },

        "TimelineLite": {
            deps: ["TweenLite"],
            exports: "TimelineLite"
        },


    }
});
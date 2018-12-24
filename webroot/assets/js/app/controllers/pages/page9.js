// Page module
define(["app", "controllers/base/page"],

    function(app, BasePage) {

        var Page = {};

        Page.View = BasePage.View.extend({


            beforeRender: function() {

                var done = this.async();

                require(["vendor/zepto/zepto.html5Loader.min"],
                    function() {
                        done();
                    });
            },

            afterRender: function() {

                var context = this;
                var tl4 = new TimelineMax({});
                var tl3 = new TimelineMax({});
                for (var i = 1200; i < 1235; i++) {
                    updatePicScene(i);
                }
                setTimeout(function() {
                    // app.router.goto("page10");
                    tl4.fromTo(context.$(".wrapper"), 0.1, { scale: 1 }, { scale: 1.3, autoAlpha: 0.05, onComplete: $.proxy(context.zoonOn, this) });
                }, 2000)

                function updatePicScene(i) {
                    var t = 0.065;
                    tl3.to(context.$('.p9_video'), t, { onComplete: function() { context.$('.p9_video').attr("src", "assets/images/pageVideo/p12/P" + i + ".jpg?v=3") } });
                }
                var t2 = new TimelineLite();
                //字幕
                t2.to(context.$(".tvc3"), 1, { opacity: 1 }, "+=0.1");
                t2.to(context.$(".tvc3"), 1, { opacity: 0 }, "+=2.5");

            },
            zoonOn: function() {
                app.router.goto("page10");
            }

        });

        // Return the module for AMD compliance.
        return Page;

    });
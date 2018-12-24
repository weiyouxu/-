// Page module
define(["app", "controllers/base/page"],

    function(app, BasePage) {

        var Page = {};

        Page.View = BasePage.View.extend({


            beforeRender: function() {

                var done = this.async();

                require(["vendor/greensock/utils/SplitText.min"],
                    function() {
                        done();
                    });


            },



            afterRender: function() {

                var context = this;
                context.$(".p2-btn").click(function() {
                    var t2 = new TimelineLite();
                    t2.fromTo(context.$(".wrapper"), 0.1, { scale: 1 }, { scale: 5, autoAlpha: 0, onComplete: $.proxy(context.zoonOn, this) });
                    app.tracker.event('click', 'event', 'go');



                })

                var t1 = new TimelineLite();
                t1.fromTo(context.$(".bg1"), 0.5, { scale: 2 }, { scale: 1 });
                t1.from(context.$(".bg3"), 0.8, { yPercent: 200, autoAlpha: 0 });
                t1.fromTo(context.$(".p2-text1"), 0.8, { width: '0' }, { width: '35%' });
                t1.fromTo(context.$(".p2-text2"), 0.8, { width: '0' }, { width: '38%' });
                t1.fromTo(context.$(".p2-text3"), 0.8, { width: '0' }, { width: '50%' });
                // t1.fromTo(context.$(".p2-text4"), 0.8, { width: '0' }, { width: '38%' });
                // t1.fromTo(context.$(".p2-text5"), 0.8, { width: '0' }, { width: '38%' });
                t1.from(context.$(".p2-btn"), 0.5, { autoAlpha: 0 });
                t1.to($('.p2-btn'), 0.5, { display: 'block', autoAlpha: 0, ease: Elastic.easeInOut.config(2.5, 1.5), yoyo: true, repeat: 3 });
                // t1.fromTo(context.$(".wrapper"), 0.5, {scale:1},{scale:2,autoAlpha:0,onComplete :$.proxy(context.zoonOn, this)});
            },
            zoonOn: function() {
                app.router.goto("page3");

            }

        });

        // Return the module for AMD compliance.
        return Page;

    });
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
                // context.$(".wrapper").click(function(){
                //     app.router.goto("page2");
                // })

                var t1 = new TimelineLite();

                t1.from(context.$(".bg1"), 0.5, { autoAlpha: 0 });
                t1.fromTo(context.$(".niu"), 1, { scale: 0.3, top: "65%" }, { scale: 1, top: "81.42%" });
                t1.from(context.$(".bg2"), 2, { ease: Power0.easeNone, autoAlpha: 0, rotation: "-270deg", transformOrigin: "50% 50%" });
                t1.from(context.$(".bg3"), 2, { ease: Power0.easeNone, autoAlpha: 0, rotation: "270deg", transformOrigin: "50% 100%" }, "-=2");
                t1.from(context.$(".bg4-left,.bg4-right,.bg4"), 0.01, { autoAlpha: 0 });
                t1.fromTo(context.$(".bg4-left"), 1, { left: "0%" }, { left: "-50%" });
                t1.fromTo(context.$(".bg4-right"), 1, { left: "50%" }, { left: "100%" }, '-=1');
                t1.from(context.$(".text1,.text2,.text3,.text1-img,.text2-img,.text3-img"), 0.01, { autoAlpha: 0 });

                t1.fromTo(context.$(".text1"), 1, { left: "34%" }, { left: "70%" });
                t1.fromTo(context.$(".text2"), 1, { left: "14%" }, { left: "90%" });
                t1.fromTo(context.$(".text3"), 1, { left: "28%" }, { left: "80%" });
                t1.from(context.$(".text4"), 1,  { autoAlpha: 0 });
                t1.fromTo(context.$(".wrapper"), 0.1, { scale: 1 }, { scale: 2, autoAlpha: 0, onComplete: $.proxy(context.zoonOn, this) });
            },

            zoonOn: function() {
                app.router.goto("page2");

            }


        });

        // Return the module for AMD compliance.
        return Page;

    });
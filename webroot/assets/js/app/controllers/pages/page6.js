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
                //     app.router.goto("page7");
                // })
                var t1 = new TimelineLite();

                t1.fromTo(context.$(".fengche"), 2.5, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=2.2");
                t1.to(context.$(".xingleft"), 1.4, { right: "-39%", top: "-7.3%" }, "-=2.3");
                t1.fromTo(context.$(".xingleft"), 1, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=2.3");
                t1.to(context.$(".xingright"), 1.4, { right: "-40%", top: "-7.3%" }, "-=2.3");
                t1.fromTo(context.$(".xingright"), 1, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=2.3");
                t1.to(context.$(".naihuang"), 1.2, { right: "6%", top: "13.3%" }, "-=2.3");
                t1.to(context.$(".naibai"), 3.5, { right: "-4.7%", top: "9.3%" }, "-=2");
                t1.fromTo(context.$(".naibai"), 3, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=5");
                t1.fromTo(context.$(".naibai2"), 0.5, { autoAlpha: 0, scale: 1 }, { autoAlpha: 1, scale: 2 }, "-=2.5");

                t1.fromTo(context.$(".milk"), 1.5, { autoAlpha: 0, scale: 1 }, { autoAlpha: 1, scale: 2.5 }, "-=2.3");
                t1.to(context.$(".milk"), 2.5, { top: "50%" }, "-=1.5");
                t1.to(context.$(".naibai2"), 0.5, { autoAlpha: 0 }, "-=3");
                t1.to(context.$(".btn"), 0.5, { autoAlpha: 1 }, "-=2");

                $(".btn").on("click", function() {
                    app.tracker.event('click', 'event', 'explore');
                    t1.to(context.$(".milk"), 1.8, { top: "110%", width: "10%", onComplete: $.proxy(context.zoonOn, this) }, "-=0.5");
                })
            },
            zoonOn: function() {
                // $(".milk").click(function() { 
                app.router.goto("page7");
                // })
            }


        });

        // Return the module for AMD compliance.
        return Page;

    });
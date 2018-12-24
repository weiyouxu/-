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

                // $(".page-page7").css("background-color", "burlywood");
            },



            afterRender: function() {

                var context = this;

                var firstLoadFiles = {
                    
                    "files": [{
                            "type": "IMAGE",
                            "source": "assets/images/pageVideo/p8/P8100.jpg",
                            "size": 1
                        }]
                    }
                    for (var i = 8101; i < 8160; i++) {
                        
                            firstLoadFiles["files"].push({ "type": "IMAGE", "source": "assets/images/pageVideo/p8/P" + i + ".jpg?v=3", "size": 1 });
                            //console.log("assets/images/pageVideo/p6/P" + i + ".jpg?v=3")
                        }


                $.html5Loader({
                    filesToLoad: firstLoadFiles,
                    onBeforeLoad: function() {},
                    onComplete: function() {
                        // $.html5Loader({ filesToLoad: bgLoadFiles });
                        //t1.fromTo(context.$(".wrapper"), 0.5, {scale:1},{scale:1,autoAlpha:0,onComplete :$.proxy(context.zoonOn, this)});

                    },
                    onElementLoaded: function(obj, elm) {},
                    onUpdate: function(percentage) {
                       
                    }
                });


                var tl4 = new TimelineMax({});
                for (var i = 8000; i < 8160; i++) {
                    updatePicScene(i);
                }

                setTimeout(function() {
                    $(".p7_video").css("z-index", "-1");

                    var t1 = new TimelineLite();
                    t1.fromTo(context.$(".bg,.text3"), 0.01, { opacity: 0.2, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1 });
                    t1.to(context.$(".page7-2"), 0, { autoAlpha: 1 });
                    t1.from(context.$(".page7-2 .lun1,.page7-2 .lun2"), 3.5, { ease: Power0.easeNone, autoAlpha: 0, rotation: "390deg", transformOrigin: "50% 50%" }, "+=0.6");
                    t1.from(context.$(".page7-2 .ball1"), 1.5, { yPercent: -300, autoAlpha: 0 }, "-=1.5");
                    t1.from(context.$(".page7-2 .ball2"), 1.5, { yPercent: 300, xPercent: 150, autoAlpha: 0 }, "-=1.5");
                    t1.from(context.$(".page7-2 .ball3"), 1.5, { yPercent: 300, xPercent: -150, autoAlpha: 0 }, "-=1.5");
                    t1.from(context.$(".page7-2 .ball3-shine"), 0.1, { opacity: 0.2, autoAlpha: 0, onComplete: $.proxy(context.zoonOn, this) });
                }, 10300)

                function updatePicScene(i) {
                    var t = 0.065;
                    tl4.to(context.$('.p7_video'), t, {
                        onComplete: function() {
                            context.$('.p7_video').attr("src", "assets/images/pageVideo/p8/P" + i + ".jpg?v=3");
                        }
                    });
                }
                var t2 = new TimelineLite();
                //字幕
                t2.to(context.$(".tvc1,.tvc3"), 1, { opacity: 1 }, "+=2");
                t2.to(context.$(".tvc1,.tvc3"), 1, { opacity: 0 }, "+=2.5");
                t2.to(context.$(".tvc2"), 1, { opacity: 1 }, "+=4.5");
                t2.to(context.$(".tvc2"), 1, { opacity: 0 }, "+=3.2");



            },
            zoonOn: function() {
                app.router.goto("page8");
            }


        });

        // Return the module for AMD compliance.
        return Page;

    });
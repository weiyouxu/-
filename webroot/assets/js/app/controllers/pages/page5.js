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


                var firstLoadFiles = {
                    
                    "files": [{
                            "type": "IMAGE",
                            "source": "assets/images/pageVideo/p6/P6120.jpg",
                            "size": 1
                        }]
                    }
                    for (var i = 6121; i < 6176; i++) {
                        
                            firstLoadFiles["files"].push({ "type": "IMAGE", "source": "assets/images/pageVideo/p6/P" + i + ".jpg?v=3", "size": 1 });
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
                var tl3 = new TimelineMax({});
                for (var i = 6000; i < 6176; i++) {
                    updatePicScene(i);
                }
                setTimeout(function() {

                    tl4.fromTo(context.$(".wrapper"), 0.13, { scale: 1 }, { scale: 1.3, autoAlpha: 0.05, onComplete: $.proxy(context.zoonOn, this) });
                }, 11300)

                function updatePicScene(i) {
                    var t = 0.065;
                    tl3.to(context.$('.p6_video'), t, { onComplete: function() { context.$('.p6_video').attr("src", "assets/images/pageVideo/p6/P" + i + ".jpg?v=3") } });
                }
                var tlcao = new TimelineMax();

                tlcao.fromTo(context.$('.caozi'), 0.3, { autoAlpha: 1 }, { autoAlpha: 0 }, "+=2.8");
                tlcao.to(context.$('.niuzi'), 0.3, { autoAlpha: 1 });
                tlcao.to(context.$('.niuzi'), 0.3, { autoAlpha: 0 }, "+=0.7");
                tlcao.to(context.$('.muchang1'), 0.3, { autoAlpha: 1 });
                tlcao.to(context.$('.muchang1'), 0.3, { autoAlpha: 0 }, "+=5.9");

            },
            zoonOn: function() {
                app.router.goto("page6");

            }

        });

        // Return the module for AMD compliance.
        return Page;

    });
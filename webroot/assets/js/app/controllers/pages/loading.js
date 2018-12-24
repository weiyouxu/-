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
                context.$(".loading-btn").click(function() {
                    // ga('click', 'event', 'loading', '进入下一页', 'go');
                    app.tracker.event('click', 'event', 'loading');
                    var t1 = new TimelineLite();
                    // app.sound3.play('complete');
                    t1.to(context.$(".bg3,.loadingPer,.bg4,.loading-btn"), 0.5, { autoAlpha: 0 });

                    t1.fromTo(context.$(".bg2"), 1, { scale: 1 }, { scale: 5, autoAlpha: 0 });
                    t1.to(context.$(".wrapper"), 0.1, { autoAlpha: 0, onComplete: $.proxy(context.zoonOn, this) }, "-=0.5");



                })


                TweenLite.from(this.$el, 0.5, { autoAlpha: 0 });



                var firstLoadFiles = {

                    "files": [{
                            "type": "IMAGE",
                            "source": "assets/images/loading/bg1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/loading/bg2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/loading/bg3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/loading/bg4.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/loading/loading-btn.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/main/music-g.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/main/music-k.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/bg1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/bg2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/bg3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/bg4.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/niu.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/text1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/text2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page1/text3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page2/bg1.png",
                            "size": 1
                        },

                        {
                            "type": "IMAGE",
                            "source": "assets/images/page2/bg3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page2/p2-btn.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page2/p2-text1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page2/p2-text2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page2/p2-text3.png",
                            "size": 1
                        },

                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/guang.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/house.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/house-p.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/logo-l-b.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/logo-left.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/logo-r-b.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/opint-b.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/opint-h.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page3/xian.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/pageVideo/p6/P6108.jpg",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/pageVideo/p12/P1200.jpg",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/pageVideo/p8/P8000.jpg",
                            "size": 1
                        }
                        // ,

                        // {
                        //     "type": "IMAGE",
                        //     "source": "assets/images/pageVideo/p15/P1500.jpg",
                        //     "size": 1
                        // }


                    ]
                };
                //p5-video
                for (var i = 6000; i < 6120; i++) {

                    firstLoadFiles["files"].push({ "type": "IMAGE", "source": "assets/images/pageVideo/p6/P" + i + ".jpg?v=3", "size": 1 });
                    //console.log("assets/images/pageVideo/p6/P" + i + ".jpg?v=3")
                }
                //p8-video
                for (var j = 8000; j < 8100; j++) {

                    firstLoadFiles["files"].push({ "type": "IMAGE", "source": "assets/images/pageVideo/p8/P" + j + ".jpg?v=3", "size": 1 });
                    //console.log("assets/images/pageVideo/p8/P" + j + ".jpg?v=3")
                }
                //p12-video
                for (var k = 1200; k < 1235; k++) {

                    firstLoadFiles["files"].push({ "type": "IMAGE", "source": "assets/images/pageVideo/p12/P" + k + ".jpg?v=3", "size": 1 });
                    //console.log("assets/images/pageVideo/p12/P" + j + ".jpg?v=3")
                }
                //p15-video
                // for (var l = 1500; l < 1549; l++) {

                //     firstLoadFiles["files"].push({ "type": "IMAGE", "source": "assets/images/pageVideo/p15/P" + l + ".jpg?v=3", "size": 1 });
                //     //console.log("assets/images/pageVideo/p12/P" + l + ".jpg?v=2")
                // }

                var bgLoadFiles = {
                    "files": [{
                            "type": "IMAGE",
                            "source": "assets/images/page4/act1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/act2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/act3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/background.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/bg.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/bg1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/bg2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/bg3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/bg4.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/btn.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/lun1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/lun2.png",
                            "size": 1
                        },
                        // {
                        //     "type": "IMAGE",
                        //     "source": "assets/images/page4/muchang.png",
                        //     "size": 1
                        // },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/object1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/object2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/text.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page4/text2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/bg.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/btn.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/fengche.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/milk.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/naibai.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/naibai2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/naihuang.png",
                            "size": 1
                        },

                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/xingleft.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/xingright.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page6/zi.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page7/page7-1/text1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page7/page7-2/text2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/bg1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/5.png",
                            "size": 1
                        },

                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/bg2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line4.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line5.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line6.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/line7.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/ym.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page8/zm.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/bg.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/bg2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/dian1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/dian2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/guan.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/guang.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/p10-text1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/p10-text2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/p10-text3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/p10-zhuozi.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiu1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiu2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/btn1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/btn2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/sidai.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/text_1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/text_2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/xiaozi.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiu3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiu4.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiu5.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiu6.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiuqiu1.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiuqiu2.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiuqiu3.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiuqiu4.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiuqiu5.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/qiuqiu6.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/zhaozi.png",
                            "size": 1
                        },
                        {
                            "type": "IMAGE",
                            "source": "assets/images/page10/star.png",
                            "size": 1
                        },



                    ]
                };


                $.html5Loader({
                    filesToLoad: firstLoadFiles,
                    onBeforeLoad: function() {},
                    onComplete: function() {
                        $.html5Loader({ filesToLoad: bgLoadFiles });
                        //t1.fromTo(context.$(".wrapper"), 0.5, {scale:1},{scale:1,autoAlpha:0,onComplete :$.proxy(context.zoonOn, this)});

                    },
                    onElementLoaded: function(obj, elm) {},
                    onUpdate: function(percentage) {
                        if (percentage < 10) {
                            context.$(".loadingPer").css("left", "38%");
                        }
                        if (percentage > 10 && percentage < 100) {
                            context.$(".loadingPer").css("left", "38%");
                        }
                        if (percentage === 100) {
                            console.log(percentage);
                            context.$(".loadingPer").css("left", "31.53%");
                            var t2 = new TimelineLite();
                            t2.to(context.$(".loading-btn"), 0.5, { autoAlpha: 1 });
                        }
                        context.$(".loadingPer").html(percentage);
                        context.$(".water_line").height(percentage);
                    }
                });




            },

            zoonOn: function() {
                app.router.goto("page1");

            }

        });

        // Return the module for AMD compliance.
        return Page;

    });
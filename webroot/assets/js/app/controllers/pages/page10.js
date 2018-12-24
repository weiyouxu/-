// Page module
define(["app", "controllers/base/page"],

    function(app, BasePage) {

        var Page = {};

        Page.View = BasePage.View.extend({


            beforeRender: function() {

                var done = this.async();

                require(["vendor/greensock/utils/SplitText.min"], function() {

                    done();
                });


            },



            afterRender: function() {


                var context = this;

                var clipboard = new Clipboard('.divClip', {
                    text: function() {
                        return $(".divClip").text();
                    }
                });

                clipboard.on('success', function(e) {
                    alert("复制成功");
                });

                clipboard.on('error', function(e) {
                    alert("复制失败");
                });
                $(".jump").click(function() {
                    window.location.href = $(".weburl").val();
                })



                context.$(".btn1").click(function() {
                    context.$(".fenxiang").css("display", "block");
                })

                context.$(".fenxiang").click(function() {
                    context.$(".fenxiang").css("display", "none");
                })


                context.$(".btn2").click(function() {
                    context.$(".textCopy").show();
                    context.$(".divClip").show();
                    context.$(".clipClose").show();

                })
                context.$(".clipClose").click(function() {
                    context.$(".textCopy").hide();
                    context.$(".divClip").hide();
                    context.$(".clipClose").hide();
                })


                var t1 = new TimelineLite();

                t1.fromTo(context.$(".page10"), 1, { scale: 0.1 }, { scale: 1 });
                t1.to(context.$(".qiu"), 0.5, { autoAlpha: 0 });



                var t7 = new TimelineLite();

                t7.to(context.$(".zhaozi"), 0.5, { ease: Power0.easeNone, top: -200, transformOrigin: "50% 50%", autoAlpha: 0 }, "+=1");


                var t11 = new TimelineLite();
                t11.fromTo(context.$(".qiuqiu1"), 3, { scale: 0.26, autoAlpha: 0 }, { rotationX: "20deg", rotationY: "20deg", rotationZ: "30deg", autoAlpha: 1, scale: 1.4, xPercent: -43, yPercent: 158 }, '+=1.8');


                t11.fromTo(context.$(".qiuqiu2"), 3, { scale: 0.2 }, { rotationX: "20deg", rotationY: "20deg", rotationZ: "-30deg", autoAlpha: 1, scale: 1.1, xPercent: -133, yPercent: -125 }, '-=3');
                //
                //
                t11.fromTo(context.$(".qiuqiu3"), 3, { scale: 0.2, autoAlpha: 0 }, { rotationX: "20deg", rotationY: "20deg", rotationZ: "10deg", autoAlpha: 1, scale: 1.1, xPercent: 90, yPercent: 86 }, '-=3.3');
                //
                //
                t11.fromTo(context.$(".qiuqiu4"), 3, { scale: 0.2, autoAlpha: 0 }, { rotationX: "20deg", rotationY: "20deg", rotationZ: "10deg", autoAlpha: 1, scale: 1.1, xPercent: 62, yPercent: -84 }, '-=3.5');
                //
                //
                t11.fromTo(context.$(".qiuqiu5"), 3, { scale: 0.2, autoAlpha: 0 }, { rotationX: "20deg", rotationY: "20deg", rotationZ: "-20deg", autoAlpha: 1, scale: 1.1, xPercent: 2, yPercent: 92 }, '-=2.9');
                //
                //
                t11.fromTo(context.$(".qiuqiu6"), 3, { scale: 0.2, autoAlpha: 0 }, { rotationX: "20deg", rotationY: "20deg", rotationZ: "-10deg", autoAlpha: 1, scale: 1.1, xPercent: -65, yPercent: -10 }, '-=3.2');

                t11.to(context.$(".qiuqiu1,.qiuqiu2,.qiuqiu3,.qiuqiu4,.qiuqiu5,.qiuqiu6,.p10-zhuozi,.guang,.p10-text1,.p10-text2,.p10-text3"), 0.5, { display: "none", autoAlpha: 0 });
                t11.from(context.$(".bg2"), 1, { autoAlpha: 0 }, "-=0.5");
                t11.to(context.$(".guan"), 1, { scale: 0.35, xPercent: 92, yPercent: 75 }, "-=1");
                t11.from(context.$(".xiaozi"), 1, { autoAlpha: 0 }, "-=0.5");
                t11.from(context.$(".xiangzi_1,.xiangzi_2"), 1, { autoAlpha: 0 }, "-=0.5");
                t11.from(context.$(".text_1"), 0.5, { autoAlpha: 0, xPercent: 120 });
                t11.from(context.$(".text_2"), 0.5, { autoAlpha: 0, xPercent: -100 });
                t11.from(context.$(".btn1,.btn2"), 1.5, { autoAlpha: 0 });
                t11.fromTo(context.$('.sidai'), 1, { height: '0' }, { height: '81.9%' });

                t11.from(context.$('.star'), 1, { autoAlpha: 0, repeat: -1, repeatDelay: 0.8 });


            },

        });

        // Return the module for AMD compliance.
        return Page;

    });
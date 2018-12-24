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

            afterRemove: function() {

                clearInterval(this.ck);

            },

            afterRender: function() {

                var context = this;


                this.ck = setInterval(function() {


                    var ss = $(".tc").val();

                    var s1 = $(".tc").val()[0];
                    var s2 = $(".tc").val()[1];
                    var s3 = $(".tc").val()[2];

                    if (s1) {
                        $(".inputdiv1").text(s1);
                        $('.inputBg1 img').css('display', 'none');

                    } else {
                        $(".inputdiv1").text("");
                        $('.inputBg1 img').css('display', 'block');
                    }

                    if (s2) {
                        $(".inputdiv3").text(s2);
                        $('.inputBg2 img').css('display', 'none');
                    } else {
                        $(".inputdiv3").text("");
                        $('.inputBg2 img').css('display', 'block');
                    }

                    if (s3) {
                        $(".inputdiv4").text(s3);
                        $('.inputBg3 img').css('display', 'none');
                        if (s3 === "5") {
                            $(".tc").blur();
                        }

                    } else {
                        $(".inputdiv4").text("");
                        $('.inputBg3 img').css('display', "block");
                    }




                    if ($(".tc").val().length == 3 && $(".tc").val() == "125") {
                        clearInterval(context.ck);
                        setTimeout(function() {
                            var t2 = new TimelineLite();
                            t2.to(context.$(".ts"), 0.5, { display: "none", autoAlpha: 0 });

                            t2.to(context.$(".gr"), 0.5, { display: "block", autoAlpha: 1 });
                            t2.to(context.$(".tianK,.tc,.gr,.inputdiv1,.inputdiv2,.inputdiv3,.inputdiv4"), 0.8, { autoAlpha: 0 }, "+=1");

                            // t2.to(context.$(".bg"), 0.5, { scale: 3.5, top: "28%", left: "-1%" });

                            t2.to(context.$(".zm"), 2, { rotationY: "-20deg", transformOrigin: "00% 50%", onStart: $.proxy(context.yingxiao4, this) });
                            t2.to(context.$(".ym"), 2, { rotationY: "20deg", transformOrigin: "100% 50%" }, "-=2");
                            t2.fromTo(context.$(".light_bg2"), 1, { display: "none", autoAlpha: 0 }, { display: "block", autoAlpha: 1 }, "-=2");

                            t2.to(context.$(".zm"), 2, { rotationY: "-90deg", transformOrigin: "00% 50%" });
                            t2.to(context.$(".ym"), 2, { rotationY: "90deg", transformOrigin: "100% 50%" }, "-=2");
                            t2.to(context.$(".men"), 2, { scale: 1.5 }, "-=2");
                            t2.to(context.$(".light"), 2, { scale: 2 }, "-=2");
                            t2.to(context.$(".light_bg"), 1, { scale: 1, top: "18%", left: "-1%", onComplete: $.proxy(context.tiaoZou, this) }, "-=1.5");
                        }, 500);
                    } else {
                        if ($(".tc").val().length >= 3) {
                            setTimeout(function() {
                                var t3 = new TimelineLite();
                                t3.to(context.$(".bc"), 0.5, { display: "block", autoAlpha: 1 });
                                t3.to(context.$(".bc"), 0.5, { display: "none", autoAlpha: 0 }, "+=2");
                                context.$(".tc").val("");
                                context.$(".inputdiv1,.inputdiv3,.inputdiv4").text("");
                            }, 500);
                        }

                    }


                }, 500)


                // if(!isNaN($(".tc").val())&&$(".tc").val()!==""){






                var t1 = new TimelineLite();
                t1.from(context.$(".bg"), 0.5, { autoAlpha: 0 });
                t1.fromTo(context.$(".bg"), 0.5, { scale: 2 }, { scale: 1 }, "+=1.5");
                t1.fromTo(context.$('.line1'), 0.1, { width: '0' }, { width: '100%', onStart: $.proxy(context.yingxiao3, this) });
                t1.fromTo(context.$('.line2'), 0.1, { width: '0' }, { width: '100%' });
                t1.from(context.$('.line3 '), 0.1, { xPercent: 100, yPercent: -100 });
                t1.fromTo(context.$('.line4'), 0.1, { width: '0' }, { width: '100%' });
                t1.from(context.$('.line5 '), 0.1, { xPercent: 100, yPercent: -100 });
                t1.fromTo(context.$('.line6'), 0.1, { width: '0' }, { width: '100%' });
                t1.fromTo(context.$('.line7'), 0.1, { width: '0' }, { width: '100%' });
                t1.from(context.$('.db'), 0.5, { autoAlpha: 0 }, "+=0.5");
                t1.to(context.$('.db'), 0.5, { autoAlpha: 0 }, "+=1");

                t1.to(context.$(".bg"), 0.5, { scale: 2, top: "-28%", left: "40%", ease: Power1.easeInOut }, "+=1");
                t1.to(context.$(".line1,.line2,.line3,.line4,.line5,.line6,.line7"), 0.5, { scale: 2, top: "-12%", left: "-40%", ease: Power1.easeInOut }, "-=0.5");

                t1.to(context.$(".bg"), 0.5, { scale: 2.8, top: "30%", left: "-40%", ease: Power1.easeInOut }, "+=1");
                t1.to(context.$(".line1,.line3,.line4,.line5,.line6,.line7"), 0.5, { top: "110%" }, "-=0.5");
                t1.to(context.$(".line2"), 0.5, { scale: 3, top: "10%", left: "40%", ease: Power1.easeInOut }, "-=0.5");
                // 回到开门的位置
                t1.to(context.$(".bg"), 0.5, { scale: 3.5, top: "28%", left: "-1%" }, "+=1");

                t1.to(context.$(".line2"), 0.5, { scale: 3, top: "-10%", autoAlpha: 0 }, "-=0.5");

                t1.to(context.$(".bg"), 0.5, { scale: 19, top: "165%", left: "-5%" }, "+=1");

                t1.to(context.$(".tianK,.tc,.ts,.yxj,.inputdiv2,.inputBg1,.inputBg2,.inputBg3"), 0.5, { display: "block", autoAlpha: 1 });

                // t1.to(context.$('.bg'), 0.35, { onComplete: function() { $('.bg').attr("src", "assets/images/page8/bg2.png") } });
                t1.to(context.$(".light_bg,.zm,.ym,.light"), 0, { display: "block" });






                t1.to(context.$(".bg,.line1,.line2,.line3,.line4,.line5,.line6,.line7"), 0.5, { scale: 3.5, top: "28%", left: "-1%" }, "+=1.5");
                t1.to(context.$(".line1,.line2,.line3,.line4,.line5,.line6,.line7"), 0.3, { autoAlpha: 0 }, "-=0.5");

                t1.to(context.$(".tc"), 0, { display: "block" });

            },
            tiaoZou: function() {
                app.router.goto("page9");
            },
            yingxiao3: function() {
                if (app.isSoundPlaying == false) {
                    app.sound3.pause();
                }
                if (app.isSoundPlaying == true) {
                    app.sound3.play("complete");
                }


            },
            yingxiao4: function() {
                if (app.isSoundPlaying == false) {
                    app.sound4.pause();
                }
                if (app.isSoundPlaying == true) {
                    app.sound4.play("complete");
                }
            }


        });

        // Return the module for AMD compliance.
        return Page;

    });
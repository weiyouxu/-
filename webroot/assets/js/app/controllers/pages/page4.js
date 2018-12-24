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

                var t1 = new TimelineLite();


                t1.to(context.$(".background"), 3.5, { xPercent: -65, ease: Power0.easeNone });
                t1.to(context.$(".text1"), 0.5, { autoAlpha: 0 });
                t1.from(context.$(".text2"), 0.5, { autoAlpha: 0 });
                t1.fromTo(context.$(".lun2,.object1"), 0.3, { scale: 0.3, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, onComplete: $.proxy(context.yingxiao2, this) });
                t1.fromTo(context.$(".lun1"), 0.5, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, onStart: $.proxy(context.kuang, this) });
                t1.from(context.$(".lun1"), 0.8, { ease: Power0.easeNone, rotation: "70deg", transformOrigin: "52% 49%" });
                t1.from(context.$(".act1,.act2,.act3"), 1, { opacity: 0, autoAlpha: 0, onStart: $.proxy(context.xuanzhuan, this) });

                t1.to(context.$(".lun1"), 0.5, { ease: Power0.easeNone, rotation: "-30deg", transformOrigin: "52% 49%", onStart: $.proxy(context.yingxiao2, this) });
                t1.to(context.$(".lun1"), 0.5, { ease: Power0.easeNone, rotation: "0deg", transformOrigin: "52% 49%" }, "+=0.5");

                t1.from(context.$(".object2"), 0.8, { opacity: 0, autoAlpha: 0, repeat: 2 }, "+=0.3");
                t1.from(context.$(".btn"), 0.1, { autoAlpha: 0, onStart: $.proxy(context.tiaozhuan, this) }, "-=1");
            },
            tiaozhuan: function() {
                var context = this;
                context.$('.btn').click(function() {
                    app.tracker.event('click', 'event', 'run');
                    app.router.goto("page5");
                })
            },
            kuang: function() {
                var context = this;
                var tl = new TimelineLite();
                tl.fromTo(context.$('.bg1'), 0.6, { display: "block", width: '0' }, { width: '100%' });
                // tl.fromTo(context.$('.bg2'), 0.6, { display: "block", width: '0' }, { width: '48%' });
                tl.fromTo(context.$('.bg3'), 0.6, { display: "block", width: '0' }, { width: '49.3%' }, "-=1.2");
                tl.fromTo(context.$('.bg4'), 0.6, { display: "block", width: '0' }, { width: '50.6%' }, "-=0.6");
            },
            xuanzhuan: function() {
                var context = this;
                var tl = new TimelineLite();
                tl.from(context.$(".act1,.act2,.act3"), 3, { ease: Power0.easeNone, rotation: "360deg", transformOrigin: "50% 50%", repeat: -1 });
            },
            yingxiao2: function() {
                if(app.isSoundPlaying == false){
                    app.sound2.pause();
                }
                if(app.isSoundPlaying == true){
                    app.sound2.play("complete");
                }

            }


        });

        // Return the module for AMD compliance.
        return Page;

    });
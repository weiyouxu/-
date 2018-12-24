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
                t1.from(context.$(".bg1"), 0.5, {autoAlpha:0});
                t1.from(context.$(".logo-left,.logo-l-b,.logo-r-b"), 0.5, {autoAlpha:0});
                //t1.from(context.$(".opint-b,.opint-h"), 0.5, {autoAlpha:0});
                //光标移动1
                t1.fromTo(context.$(".opint-b"), 1, {autoAlpha:0,left:"52%",top:"22.3%"},{autoAlpha:1,left:"6%",top:"55%",onStart :$.proxy(context.yingxiao1, this)});
                t1.fromTo(context.$(".opint-h"), 1, {autoAlpha:0,left:"46.6%",top:"22.38%"},{autoAlpha:1,left:"0%",top:"56%"},"-=1");
                //t1.fromTo(context.$(".guang"), 0.5, {left:"0%",top:"0%"},{left:"-47%",top:"35%"},"-=0.5");
                //光标移动2
                t1.fromTo(context.$(".opint-b"), 1, {left:"0%",top:"55%"},{left:"60%",top:"75%"});
                t1.fromTo(context.$(".opint-h"), 1, {left:"0%",top:"56%"},{left:"54%",top:"76%"},"-=1");
                //////光标移动3
                t1.fromTo(context.$(".opint-b"), 1, {left:"60%",top:"75%"},{left:"52%",top:"22.3%"});
                t1.fromTo(context.$(".opint-h"), 1, {left:"54%",top:"76%"},{left:"46.6%",top:"22.38%"},"-=1");

                t1.from(context.$(".guang,.house,.house-p,.xian"), 0.5, {autoAlpha:0});
                t1.to(context.$(".opint-b"),2,{ease:Power0.easeNone,autoAlpha:1,rotation:"360deg",transformOrigin: "53% 55%"});
                t1.to(context.$(".opint-h"),2,{ease:Power0.easeNone,autoAlpha:1,rotation:"-360deg",transformOrigin: "61% 51%"},"-=1.8");
                t1.to(context.$(".xian"),2,{ease:Power0.easeNone,autoAlpha:1,rotation:"-360deg",transformOrigin: "71.1% 34.4%"},"-=2.2");
                t1.to($('.guang'), 0.5, { display:'block',autoAlpha: 0,ease: Elastic.easeInOut.config(2.5, 1.5),yoyo: true,repeat:3});
                t1.to(context.$(".wrapper"), 0.1, {scale:3,top:"20%",left:"20%",autoAlpha:0,onComplete :$.proxy(context.zoonOn, this)});
                

            },
            zoonOn :function(){
                app.router.goto("page4");
               
            },

            yingxiao1 :function(){
                if(app.isSoundPlaying == false){
                    app.sound1.pause();
                }
                if(app.isSoundPlaying == true){
                    app.sound1.play("complete");
                }
               
            }




        });

        // Return the module for AMD compliance.
        return Page;

    });
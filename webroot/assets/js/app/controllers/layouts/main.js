// Layout module
define(["app", "controllers/base/layout"],

    function (app, BaseLayout) {

        var Layout = {};

        Layout.View = BaseLayout.View.extend({


            el: "#main",
            template: "layouts/main",

            piconTween : null,
            liconTween : null,
            sound : null,
            isSoundPlaying : false,


            beforeRender: function () {

                var done = this.async();
                done();

            },



            afterRender: function () {
                var context =this;
                this.piconTween = TweenMax.fromTo(this.$(".rotate-portrait .icon"), 0.8, {rotation:90, transformOrigin:"50% 50%"}, {rotation:0, transformOrigin:"50% 50%", repeat:-1, repeatDelay:0.8 });
                this.liconTween = TweenMax.fromTo(this.$(".rotate-landscape .icon"), 0.8, {rotation:0, transformOrigin:"50% 50%"}, {rotation:90, transformOrigin:"50% 50%", repeat:-1, repeatDelay:0.8 });

                this.piconTween.pause();
                this.liconTween.pause();

                this.initMusic();

            },
            initMusic : function() {

                var context=this;

                this.$(".music").click(function(){

                    if(app.isSoundPlaying){
                        app.isSoundPlaying = false;
                        context.$(".music").attr("src","assets/images/main/music-g.png");
                        app.sound.pause();
                        app.sound1.pause();
                        app.sound2.pause();
                        app.sound3.pause();
                        app.sound4.pause();

                    } else{
                        app.isSoundPlaying= true;
                        context.$(".music").attr("src","assets/images/main/music-k.png");
                        app.sound.play("complete");
                        
                    };
                });

                if(app.isSoundPlaying){

                    context.$(".music").attr("src","assets/images/main/music-k.png");

                } else{

                    context.$(".music").attr("src","assets/images/main/music-g.png");

                };

            },

            resize: function (ww, wh, orient) {


                if (app.router.pageHolders.length > 0) {

                    if (orient == "landscape" && app.router.pageHolders[app.router.pageHolders.length - 1].defaultOrientation  == "portrait") {
                        this.$(".rotate-portrait").show();
                        this.$(".rotate-landscape").hide();

                        this.piconTween.play();
                        this.liconTween.pause();

                    }
                    else if (orient == "portrait" && app.router.pageHolders[app.router.pageHolders.length - 1].defaultOrientation  == "landscape") {
                        this.$(".rotate-landscape").show();
                        this.$(".rotate-portrait").hide();

                        this.liconTween.play();
                        this.piconTween.pause();

                    }
                    else {
                        this.$(".rotate-portrait").hide();
                        this.$(".rotate-landscape").hide();

                        this.piconTween.pause();
                        this.liconTween.pause();

                    }

                }


            }


        });

        // Return the module for AMD compliance.
        return Layout;

    });

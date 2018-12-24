define(["app"],

    function(app) {
        //jsFIles: jsFiles 文件在framework7 gulpfile.js中和pupup无关js已注释（如下）剩余未注视，已经打包在wendor/ui/framework7.min.js
        /*jsFiles: [
                 'src/js/dom7/dom7.js',
                 'src/js/template7/template7.js',
                 'src/js/wrap-start.js',
                 'src/js/framework7/f7-intro.js',
                 // 'src/js/framework7/views.js',
                 // 'src/js/framework7/navbars.js',
                 // 'src/js/framework7/searchbar.js',
                 // 'src/js/framework7/messagebar.js',
                 // 'src/js/framework7/xhr.js',
                 // 'src/js/framework7/pages.js',
                 // 'src/js/framework7/router.js',
                 'src/js/framework7/modals.js',
                 // 'src/js/framework7/progressbar.js',
                 // 'src/js/framework7/panels.js',
                 // 'src/js/framework7/lazy-load.js',
                 'src/js/framework7/material-preloader.js',
                 // 'src/js/framework7/messages.js',
                 // 'src/js/framework7/swipeout.js',
                 // 'src/js/framework7/sortable.js',
                 // 'src/js/framework7/smart-select.js',
                 // 'src/js/framework7/virtual-list.js',
                 // 'src/js/framework7/pull-to-refresh.js',
                 // 'src/js/framework7/infinite-scroll.js',
                 // 'src/js/framework7/scroll-toolbars.js',
                 // 'src/js/framework7/material-tabbar.js',
                 // 'src/js/framework7/tabs.js',
                 // 'src/js/framework7/accordion.js',
                 // 'src/js/framework7/fast-clicks.js',
                 // 'src/js/framework7/clicks.js',
                 // 'src/js/framework7/resize.js',
                 // 'src/js/framework7/forms-storage.js',
                 // 'src/js/framework7/forms-ajax.js',
                 // 'src/js/framework7/forms-textarea.js',
                 // 'src/js/framework7/material-inputs.js',
                 // 'src/js/framework7/push-state.js',
                 // 'src/js/framework7/swiper-init.js',
                 // 'src/js/framework7/photo-browser.js',
                 // 'src/js/framework7/autocomplete.js',
                 // 'src/js/framework7/picker.js',
                 // 'src/js/framework7/calendar.js',
                 // 'src/js/framework7/notifications.js',
                 // 'src/js/framework7/data-table.js',
                 // 'src/js/framework7/template7-templates.js',
                 'src/js/framework7/plugins.js',
                 // 'src/js/framework7/init.js',
                 'src/js/framework7/f7-outro.js',
                 'src/js/framework7/proto-support.js',
                 'src/js/framework7/proto-device.js',
                 'src/js/framework7/proto-plugins.js',
                 // 'src/js/swiper/swiper.js',
                 'src/js/wrap-end.js',
             ],
             */


        var framework7 = Backbone.Model.extend({


            isFocusInput: false,

            windowHeight: 0,
            windowWidth: 0,
            orientation: 'landscape', // portrait, landscape


            layoutHeightPortrait: 1206,
            layoutWidthPortrait: 750,

            layoutHeightLandscape: 646,
            layoutWidthLandscape: 1334,

            fontScalingFactor: 1,



            initialize: function() {


                $("body").append('<span id="test-font" style="font-size: 96px">黑</span>');
                this.fontScalingFactor = (96 / $("#test-font").width());
                $("#test-font").remove();


                $(window).on("resize", $.proxy(this.resize, this));
                $(window).on("orientationchange", $.proxy(this.orientationChange, this));


                this.resize();
                setInterval($.proxy(this.resize, this), 500);


                $("body").on("focus", "input, textarea, select", $.proxy(this.focusInput, this));

                $("body").on("blur", "input, textarea, select", $.proxy(this.blurInput, this));




            },


            focusInput: function() {

                this.isFocusInput = true;

            },

            blurInput: function() {

                this.isFocusInput = false;

            },


            orientationChange: function() {

                var context = this;
                $("input, textarea, select").trigger("blur");
                context.resize();

                // delay call for slow android response
                setTimeout(function() {

                    $("input, textarea, select").trigger("blur");
                    context.resize();

                }, 1000);



            },
            pupup: function(pname, msg) {
                var chattr = new Framework7({});
                if (pname === 'alert') {
                    chattr.alert(msg);

                }
                if (pname === 'confirm') {
                    chattr.confirm(msg);

                }
                if (pname === 'prompt') {
                    chattr.prompt(msg);

                }


            },


            resize: function() {

                var context = this;

                var orientation = context.orientation;
                var ww = context.windowWidth;
                var wh = context.windowHeight;

                context.updateParameters();

                context.adjustAllPageSizes();

                app.layout.resize(context.windowWidth, context.windowHeight, context.orientation);

                for (var i = 0; i < app.router.pageHolders.length; i++) {
                    app.router.pageHolders[i].resize(context.windowWidth, context.windowHeight, context.orientation);
                }


                if (context.orientation != orientation) {

                    app.layout.changeOrientation(context.windowWidth, context.windowHeight, context.orientation);

                    for (var i = 0; i < app.router.pageHolders.length; i++) {
                        app.router.pageHolders[i].changeOrientation(context.windowWidth, context.windowHeight, context.orientation);
                    }

                }


            },



            updateParameters: function() {


                if (!this.isFocusInput) {
                    this.windowWidth = $(window).width();
                    this.windowHeight = $(window).height();
                }


                if (this.windowWidth > this.windowHeight) {
                    this.orientation = "landscape";
                } else {
                    this.orientation = "portrait";
                }


            },


            adjustAllPageSizes: function() {


                for (var i = 0; i < app.router.pageHolders.length; i++) {


                    var ph = app.router.pageHolders[i];


                    var lh = this.layoutHeightPortrait;
                    var lw = this.layoutWidthPortrait;

                    if (ph.layoutOrientation == "landscape") {
                        lh = this.layoutHeightLandscape;
                        lw = this.layoutWidthLandscape;
                    }


                    var w = 0;
                    var h = 0;

                    if (ph.fitOn == "width") {


                        w = this.windowWidth;
                        h = (lh / lw) * this.windowWidth;

                        ph.$(".wrapper").width(w);
                        ph.$(".wrapper").height(h);

                        ph.$(".wrapper").css("left", 0);


                    } else if (ph.fitOn == "height") {

                        w = this.windowHeight / (lh / lw);
                        h = this.windowHeight;

                        if (w > this.windowWidth) {
                            w = this.windowWidth;
                            h = w * (lh / lw);
                        }

                        ph.$(".wrapper").width(w);
                        ph.$(".wrapper").height(h);

                        ph.$(".wrapper").css("left", (this.windowWidth - w) / 2);

                    }


                    var ch = 0;
                    if (ph.$(".ratio-fix").length > 0) {
                        //console.log(ph.$(".ratio-fix").css("padding-bottom"));
                        ch = Number(ph.$(".ratio-fix").css("padding-bottom").replace("px", ""));
                    }


                    if (i == app.router.pageHolders.length - 1) {


                        var count = 0;

                        ph.$(".ratio-fix").children().each(function() {

                            if ($(this).css("position") == "absolute") {

                                console.log($(this).position());

                                count++;
                                ch = Math.max(ch, $(this).position().top + $(this).height());
                            }

                        });


                        if (count > 0) {
                            ph.$el.height(Math.max(ch, h) + "px");
                        } else {
                            ph.$el.css("height", this.windowHeight + "px");
                        }


                    } else {
                        ph.$el.css("height", this.windowHeight + "px");
                    }


                    var rh = 0;
                    if (ph.fitOn == "height") {

                        if (this.windowHeight / this.windowWidth > lh / lw) {
                            rh = this.windowWidth * lh / lw;
                        } else {
                            rh = this.windowHeight;
                        }

                    }

                    if (ph.fitOn == "width") {
                        rh = this.windowWidth * lh / lw;
                    }


                    var ratio = rh / lh;
                    ph.$el.css("font-size", (96 * ratio * this.fontScalingFactor) + "px");


                }
            }




        });


        // Return the module for AMD compliance.
        return framework7;

    });
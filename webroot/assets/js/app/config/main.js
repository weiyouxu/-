require(["app", "managers/layout-manager", "managers/router", "managers/resize-manager", "managers/tracker", "managers/ui-framework7"],


    function(app, LayoutManager, Router, ResizeManager, Tracker, Framework7) {

        // layout manager
        app.layout = (new LayoutManager()).layout();

        // router
        app.router = new Router();

        app.resizeManager = new ResizeManager();

        app.framework7 = new Framework7();

        app.tracker = new Tracker({ gaAccount: "UA-108386280-1", baiduAccount: "" });

        app.eventBus = _.extend({}, Backbone.Events);


        app.sound = new Howl({
            src: [app.assetsPath + 'audio/bg.mp3?v=4'],
            loop: true,
            volume: 0.3,
            sprite: {
                complete: [0, 60000]
            }
        });

        app.sound1 = new Howl({
            src: [app.assetsPath + 'audio/p3-yd.mp3?v=3'],
            loop: false,
            sprite: {
                complete: [600, 4000]
            }
        });

        app.sound2 = new Howl({
            src: [app.assetsPath + 'audio/p4-yj.mp3?v=3'],
            loop: false,
            volume: 2,
            sprite: {
                complete: [0, 4000]
            }
        });



        app.sound3 = new Howl({
            src: [app.assetsPath + 'audio/p8-jg.mp3?v=3'],
            loop: false,
            volume: 1,
            sprite: {
                complete: [500, 4000]
            }
        });


        app.sound4 = new Howl({
            src: [app.assetsPath + 'audio/p8-km.mp3?v=4'],
            loop: false,
            volume: 2,
            sprite: {
                complete: [0, 2000]
            }
        });




        app.sound.play("complete");
        app.sound.fade(0, 1, 4000, null, "complete");

        app.isSoundPlaying = true;

        /*
         app.user = new User.Model();
         app.user.getInfo();
         */

        app.layout.render().promise().done(function() {
            Backbone.history.start({
                pushState: false
            });
        });
        // require(["vendor/media/sha"],
        $.ajax({
                type: 'get',
                url: 'http://wechat.myfriso.com/RoyalSpy/api/home.aspx',
                dataType: "xml",
                cache: false,


                success: function(data) {

                    // alert(data);
                    console.log(data);
                    var xmlDoc = data;
                    console.log(xmlDoc.getElementsByTagName("Result")[0]);
                    //                var y = xmlDoc.getElementsByTagName("Getjsapi_ticketResult")[0].childNodes[2];
                    var y = xmlDoc.getElementsByTagName("Result")[0];
                    console.log($(y).html())
                        //                console.log(y.nodeValue);


                    var jsapi_ticket = $(y).html();

                    //生成签名的随机串
                    var createNonceStr = Math.random().toString(36).substr(2, 15);

                    //生成签名的时间戳
                    var createTimeStamp = parseInt(new Date().getTime() / 1000) + '';
                    console.log(location.href.split('#')[0])

                    //签名生成
                    var str = 'jsapi_ticket=' + jsapi_ticket + '&noncestr=' + createNonceStr + '&timestamp=' + createTimeStamp + '&url=' + location.href.split('#')[0];

                    var shaObj = new jsSHA(str, 'TEXT');

                    var signature = shaObj.getHash('SHA-1', 'HEX');


                    wx.config({
                        debug: false,
                        appId: 'wxd32fafd4a4fd991a',
                        timestamp: createTimeStamp,
                        nonceStr: createNonceStr,
                        signature: signature,
                        jsApiList: [
                            'onMenuShareAppMessage',
                            'onMenuShareTimeline',
                            'hideMenuItems',
                            'showMenuItems',
                            'hideAllNonBaseMenuItem',
                            'showAllNonBaseMenuItem',
                            'hideOptionMenu',
                            'showOptionMenu',
                            'closeWindow',
                            'scanQRCode'
                        ]
                    });

                    wx.ready(function() {

                        var shareData = {
                            title: '迷妹震惊！皇家特工最新踪迹大公开！',
                            desc: '嗨翻世界！皇家特工为全人类解开皇家第一道奶源的奥秘',
                            link: 'http://wechat.myfriso.com/RoyalSpy/default.aspx?v=3',
                            imgUrl: 'http://wechat.myfriso.com/RoyalSpy/api/bg2_01.png?v=4'
                        };
                        // alert(shareData);

                        wx.onMenuShareAppMessage(shareData);
                        wx.onMenuShareTimeline(shareData);
                    });

                    // wx.error(function(res) {
                    //     alert(res.errMsg);
                    // });

                }
            })
            // )
    })
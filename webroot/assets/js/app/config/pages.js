define([
        "controllers/pages/loading",
        "controllers/pages/page1",
        "controllers/pages/page2",
        "controllers/pages/page3",
        "controllers/pages/page4",
        "controllers/pages/page5",
        "controllers/pages/page6",
        "controllers/pages/page7",
        "controllers/pages/page8",
        "controllers/pages/page9",
        "controllers/pages/page10",


    ],


    function (Loading,
              Page1,
              Page2,
              Page3,
              Page4,
              Page5,
              Page6,
              Page7,
              Page8,
              Page9,
              Page10

              ) {

        var pages = [
            {
                routeId: 'loading',
                type: 'main',
                landing: true,
                page: function () {
                    return new Loading.View({template: "pages/loading"});
                }
            },

            {
                routeId: 'page1',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page1.View({template: "pages/page1"});
                }
            },

            {
                routeId: 'page2',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page2.View({template: "pages/page2"});
                }
            },

            {
                routeId: 'page3',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page3.View({template: "pages/page3"});
                }
            },

            {
                routeId: 'page4',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page4.View({template: "pages/page4"});
                }
            },

            {
                routeId: 'page5',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page5.View({template: "pages/page5"});
                }
            },

            {
                routeId: 'page6',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page6.View({template: "pages/page6"});
                }
            },

            {
                routeId: 'page7',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page7.View({template: "pages/page7"});
                }
            },

            {
                routeId: 'page8',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page8.View({template: "pages/page8"});
                }
            },

            {
                routeId: 'page9',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page9.View({template: "pages/page9"});
                }
            },

            {
                routeId: 'page10',
                type: 'main',
                landing: true,
                page: function () {
                    return new Page10.View({template: "pages/page10"});
                }
            },

            
           

        ];


        return pages;

    });

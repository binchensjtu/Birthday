var offsetX = $("#loveHeart").width() / 2;
var offsetY = $("#loveHeart").height() / 2 - 55;
var displayMode = 1;
var together = new Date();
together.setUTCFullYear(2013, 9, 19);
together.setUTCHours(16);
together.setUTCMinutes(0);
together.setUTCSeconds(0);
together.setUTCMilliseconds(0);
$("#loveHeart").click(function() {
    displayMode *= -1;
    timeElapse(together, displayMode);
});
if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";
    document.body.appendChild(msg);
    $("#code").css("display", "none")
    $("#copyright").css("position", "absolute");
    $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    setTimeout(function() {
        adjustWordsPosition();
        startHeartAnimation();
    }, 5000);

    timeElapse(together, displayMode);
    setInterval(function() {
        timeElapse(together, displayMode);
    }, 500);

    adjustCodePosition();

    if (jQuery.browser.mobile) {
        console.log("is mobile");
        $("#code").typewriter();
    } else {
        console.log("is not mobile");
        var i_love_you_s = [{
            point: "-0.316806,51.562841",
            text: "I Love you"
        }, {
            point: "13.223604,52.560708",
            text: "Ich liebe Dich"
        }, {
            point: "20.87688,52.290783",
            text: "Kocham Cię"
        }, {
            point: "2.332405,48.920833",
            text: "Je t’aime"
        }, {
            point: "-9.221098,38.845",
            text: "Eu te amo"
        }, {
            point: "12.414123,41.883913",
            text: "Ti amo"
        }, {
            point: "23.526091,38.209098",
            text: "Σ 'αγαπώ"
        }, {
            point: "37.655215,55.713328",
            text: "Я люблю тебя"
        }, {
            point: "139.797007,35.729394",
            text: "私はあなたを愛して"
        }, {
            point: "126.918899,37.567543",
            text: "난 널 사랑해"
        }, {
            point: "91.059137,29.717551",
            text: "那丘拉嘎"
        }, {
            point: "111.700904,40.873903",
            text: "比恰嘛泰日贴"
        }, {
            point: "108.315801,22.891595",
            text: "顾哀蒙"
        }, {
            point: "120.393627,36.082817",
            text: "俺挺希罕嫩滴"
        }, {
            point: "120.157815,30.285259",
            text: "我毛喜欢你的来"
        }, {
            point: "121.560609,29.881251",
            text: "阿拉呆个欢喜侬"
        }, {
            point: "121.491696,31.229633",
            text: "阿拉老欢喜侬"
        }, {
            point: "114.427134,38.005578",
            text: "俺待见你"
        }, {
            point: "108.981534,34.245616",
            text: "饿爱你"
        }, {
            point: "120.58103,31.292851",
            text: "唔欢喜内"
        }, {
            point: "125.336731,43.832739",
            text: "俺贼稀罕你"
        }, {
            point: "113.249707,23.15365",
            text: "我好钟意你"
        }, {
            point: "116.414042,39.908737",
            text: "我爱你"
        }]
        // 百度地图API功能
        var map = new BMap.Map("code");
        var jiashanPoint = new BMap.Point(120.940155, 30.848783);
        var shanghaiPoint = new BMap.Point(121.507102, 31.288675);
        var jiashanContent =
            "<img style='float:right;margin:2px' id='imgDemo' src='images/tiananmen.jpg' width='139' height='104' title='天安门'/>" +
            "<p style='margin:0;line-height:1.5;font-size:11px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
            "</div>";
        var jiashanMarker = new BMap.Marker(jiashanPoint);
        var shanghaiMarker = new BMap.Marker(shanghaiPoint);
        var jiashaninfoWindow = new BMap.InfoWindow(jiashanContent); // 创建信息窗口对象

        var polylineArt = {
            strokeColor: "blue",
            strokeWeight: 3,
            strokeOpacity: 0.5
        };
        map.centerAndZoom("北京", 2); //初始化时，即可设置中心点和地图缩放级别。
        map.addControl(new BMap.ZoomControl()); //添加地图缩放控件

        function a2b(place, done) {
            var intervalTime = place.interval || 500;
            var start = place.start;
            var end = place.end;
            var step = place.step;

            var xdiff = end.lng - start.lng;
            var ydiff = end.lat - start.lat;
            var stepLen = xdiff / step;
            var x1 = start.lng;
            var y1 = start.lat;
            var x2;
            var y2;
            var a2bid = setInterval(function() {
                x2 = x1 + stepLen;
                y2 = y1 + stepLen * (ydiff / xdiff);
                if (x1 < (end.lng - stepLen)) {
                    var mypolyline = new BMap.Polyline([new BMap.Point(x1, y1), new BMap.Point(x2, y2)], polylineArt);
                    map.addOverlay(mypolyline);
                    x1 = x2;
                    y1 = y2;
                } else {
                    clearInterval(a2bid);
                    done(end);
                }

            }, intervalTime);
        }

        function popILoveU() {
            var i = 0;
            var intervalId = setInterval(function() {
                if (i == i_love_you_s.length) {
                    clearInterval(intervalId);
                } else {
                    var i_love_you = i_love_you_s[i++];
                    var point = i_love_you.point.split(",");
                    var infoWindow = new BMap.InfoWindow("<b>" + i_love_you.text + "</b>"); // 创建信息窗口对象
                    var location = new BMap.Point(point[0], point[1]);
                    map.centerAndZoom(location, 5);
                    map.openInfoWindow(infoWindow, location); //开启信息窗口
                }

            }, 500);

        }

        function jiashan2shanghai() {
            setTimeout(function() {
                jiashanMarker.closeInfoWindow(jiashaninfoWindow);
                map.centerAndZoom(shanghaiPoint, 9);
                var place = {
                    start: jiashanPoint,
                    end: shanghaiPoint,
                    step: 10,
                    interval: 500
                }
                a2b(place, function(point) {
                    shanghaiPoint = point;
                    map.centerAndZoom(shanghaiPoint, 16);
                    map.addOverlay(shanghaiMarker);
                    shanghaiMarker.openInfoWindow(jiashaninfoWindow);
                    document.getElementById('imgDemo').onload = function() {
                        jiashaninfoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
                    }
                    popILoveU();
                });
            }, 1000);
        }

        function jiashanAction() {
            map.addOverlay(jiashanMarker);
            jiashanMarker.openInfoWindow(jiashaninfoWindow);
            document.getElementById('imgDemo').onload = function() {
                jiashaninfoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
            }
        }

        var zoomJiashanLevel = 3;
        var intervalId = setInterval(function() {
            map.centerAndZoom(jiashanPoint, zoomJiashanLevel++);
            if (zoomJiashanLevel == 19) {
                jiashanAction();
            };
            if (zoomJiashanLevel == 20) {
                jiashan2shanghai();
                clearInterval(intervalId);
            };
        }, 500);
    }
}
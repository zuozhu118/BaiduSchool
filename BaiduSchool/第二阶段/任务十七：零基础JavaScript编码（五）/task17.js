/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 105,
    "2016-01-02": 250,
    "2016-01-03": 300,
    "2016-01-04": 360,
    ................
    "2016-03-31": 360
  },
  "上海":{
   "2016-01-01": 105,
    "2016-01-02": 250,
    "2016-01-03": 300,
    "2016-01-04": 360,
    ................
    "2016-03-31": 360
  }
};
*/
$(function () {
    AddSelect();//初始化select标签；
    var cityname = $("#city-select option:selected").html();//获取被选中的城市名；
    renderChart(cityname);//生成柱状图；
    Mouse();//鼠标悬浮离开事件；
    SelectChange();//select标签的改变事件；
});
//getDateStr()方法生成对应的日期；
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}

//randomBuildData方法根据每一天的日期随机生成空气指数；
function randomBuildData(seed) {
    returnData = {}; //申明的变量returnData前面没有加var ,就表示是一个全局变量；
    var dat = new Date("2016-01-01");
    //alert(dat);
    var datStr = ''
    for (var i = 1; i < 92; i++) { //一月份31天，二月份29天，三月份31天，相加就是91天，但此处i是从1开始的，所以是92；
        datStr = getDateStr(dat);
        //alert(datStr+',   日期');
        returnData[datStr] = Math.ceil(Math.random() * seed); //将日期作为键，空气指数作为值添加到returnData集合中；
        dat.setDate(dat.getDate() + 1);//在前面的时间上加一天；
    }
    //遍历查看returnData这个键值对集合：
    //for (var key in returnData) {
    //    alert(key+',   这是键');
    //    alert(returnData[key]+',   这是值');
    //}
    return returnData;
}

var aqiSourceData = {
    "北京": randomBuildData(500), //randomBuildData(500)就等于整个returnData集合；
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

//将城市添加到select选择框中：
function AddSelect() {
    var i = 0;
    for (var key in aqiSourceData) {
        form1.city.options[i] = new Option(key);
        i++;
    }
}
//生成对应城市的柱状图:
var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
'#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce'];
function renderChart(CityName) { //CityName表示我们选中的城市名，也是aqiSourceData键值对中的键；
    var j = 1,
        k = 0;
    $('#wrap').append('<div class="title">' + CityName + '01-03月每日空气质量报告</div>');
    for (var key in aqiSourceData[CityName]) {
        //$('#wrap').append('<div class="aqi-bar" id="bar' + j + '">' + j + '</div>');
        $('#wrap').append('<div class="aqi-bar" id="bar' + j + '"><span>' + key + '</span><span>' + aqiSourceData[CityName][key] + '</span></div>');
        $('#bar' + j + '').animate({ height: aqiSourceData[CityName][key] + 'px' }, 1000);
        $('#bar' + j + '').css('backgroundColor', colors[k]);
        k++;
        j++;
        if (k >= colors.length) {
            k = 0;
        }
    }
}
//给每个长柱注册一个鼠标悬浮事件：
function Mouse() {
    $('.aqi-bar').mouseover(function () {

        var barchild1 = $(this).children().eq(0).html();
        var barchild2 = $(this).children().eq(1).html();
        //alert(barchild1);
        //在当前光标悬浮的div添加一个子div:
        $(this).append('<div class="aqi-hint">' + barchild1 + '</br> [AQI]:  ' + barchild2 + '</div>');
        var hintheight = $(this).css('height');
        hintheight = parseInt(hintheight) + 10 + 'px';
        var barleft = $(this).css('left');
        $('.aqi-hint').css('bottom',hintheight);
    });
    $('.aqi-bar').mouseout(function () {
        $(this).children().css('display','none');
    });
}
//注册select标签的改变事件：
function SelectChange() {
    $('#city-select').change(function () {
        var cityname = $("#city-select option:selected").html();//获取被选中的城市名；
        //将之前大的容器中的div清空：
        $('#wrap').html('');
        renderChart(cityname);//生成柱状图；
        Mouse();
    });
}
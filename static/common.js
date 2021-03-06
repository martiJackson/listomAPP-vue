//整个项目的根路径
// var projectBaseUrl = "https://api.listome.com/app/";
var projectBaseUrl="http://192.168.1.147/OfficeApp/"

//数据请求的根路径
var requestBaseUrl = "https://api.listome.com/v1/";

window.onload=function(){
    var data1={mobile:13111111111,password:123123};
    console.log(data1)
    $.ajax({
        type:"POST",
        data:data1,
        url: 'http://api.listome.com/v1/users/authorization',
        success:function(data,status){
            console.log(data.data)
        }
    })
}

var Terminal = {
    // 辨别移动终端类型
    platform : function() {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            // 是否为iPhone或者QQHD浏览器
            iPhone : u.indexOf('iPhone') > -1,
            // 是否iPad
            iPad : u.indexOf('iPad') > -1,
            // 是否微信
            weixin : u.toLowerCase().indexOf("micromessenger") > -1,
            // android终端或者uc浏览器
            android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            // 是否WinPhone
            wp : u.indexOf('Windows Phone') > -1
        };
    }(),
}
 
var testToken = "GrQZ2l2nQ8XuceFqAOJDT/7ojRbGnbs4/38J2Lv0tAo=";

// var testToken = "UUeswJmfdvMbihoJC8N55/sohPFsqhvekbsDJ3d377g="; // listome

//获取AccessToken
function getToken() {
    if(typeof(window.js_interface) == "undefined"){
        var storage = window.localStorage;
        var token = storage.getItem('token');
        if(token == null){
            storage.setItem('token', testToken)
            return testToken;
        }
        return token;
    }
    
    var token = '';
    try {
        token = window.js_interface.getAccessToken();
    }catch(e) {
        console.log(e);
    }
    if (!Terminal.platform.android){
        var storage = window.localStorage;
        storage.setItem('token', token);
    }
    return token;
}

//APP跳转到新的窗口，并加载指定url
function openWindow(url) {
    if (typeof(window.js_interface) == "undefined") {
        location.href = url;
    } else {
        try {            
            window.js_interface.jumpToDetail(url);
        }catch (e) {
            console.log(e);
            $.alert('请在工厂宝APP上使用本功能，或者升级工厂宝APP到最新版本。', '提示');
        }
    }
}


//根据Unix时间戳获取对应的格式化时间，格式为yyyy/MM/dd HH:mm
function getTimeStr(unixTime) {
    var date = new Date(unixTime * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var min = date.getMinutes();
    return year + '-' + numberProcess(month) + '-' + numberProcess(day) + ' ' + numberProcess(hours) + ':' + numberProcess(min);
}

//根据Unix时间戳获取对应的格式化时间，格式为yyyy/MM/dd
function getDateStr(unixTime) {
    var date = new Date(unixTime * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var min = date.getMinutes();
    return year + '-' + numberProcess(month) + '-' + numberProcess(day);   
}

//根据年月获取该月的起止时间
function getStartEndTime(year, month) {
    var startDateStr = year + '/' + month + '/01 ' + '00:00:00';
    var endDateStr = '';
    if(month == 12) {
        endDateStr = (year + 1) + '/01/01 ' + '00:00:00';
    }else{
        endDateStr = (year) + '/' + (month + 1) + '/01 ' + '00:00:00';
    }
    var startDate = new Date(startDateStr);
    var endDate = new Date(endDateStr);
    var obj = {
        start_time: startDate / 1000,
        end_time: endDate / 1000 - 1
    };
    console.log(obj);
    return obj; 
}

//获取一个月有多少天
function getDaysOfMonth(year, month) {
    var date = new Date(year, month, 0);
    return date.getDate();
}

//获取某一天的起始时间戳
function getDayStartUnixTimestamp(year, month, day) {
    var date = new Date(year + '/' + month + '/' + day);
    return date.getTime() / 1000;
}

//获取当天的起始时间戳
function getTodayStartUnixTimestamp() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    return getDayStartUnixTimestamp(year, month, day);
}

function numberProcess(n) {
    if(n < 10) {
        return '0' + n;
    }
    return '' + n;
}

var dateNow = new Date();
var yearNow = dateNow.getFullYear();
var monthNow = dateNow.getMonth() + 1;
var dayNow = dateNow.getDate();
var hoursNow = dateNow.getHours();
var minutesNow = dateNow.getMinutes();
var yearNowStr = '' + yearNow;
var monthNowStr = monthNow < 10 ? ('0' + monthNow) : ('' + monthNow);
var dayNowStr = dayNow < 10 ? ('0' + dayNow) : ('' + dayNow);
var hoursNowStr = '' + hoursNow;
var minutesNowStr = minutesNow < 10 ? ('0' + minutesNow) : ('' + minutesNow);

//获取当前时间对象
function getTimeNow() {
    return {
        year: yearNow,
        month: monthNow,
        day: dayNow,
        hour: hoursNow,
        minute: minutesNow,
        yearStr: yearNowStr,
        monthStr: monthNowStr,
        dayStr: dayNowStr,
        hourStr: hoursNowStr,
        minuteStr: minutesNowStr 
    }
}

//判断一个字符串是否为空
function isEmpty(val) {
    return val == null || val == '' || val == undefined;
}

//判断是否是数字
function isNumber(n) {
    return !isNaN(n);
}

//字符串转日期，字符串格式为yyyy-MM-dd HH:mm:ss
function strToDate(str) {
    var s = str.replace(/-/g,"/");
    return new Date(s);
}

//字符串时间转Unix时间戳
function strToUnixTimestamp(str) {
    return strToDate(str).getTime() / 1000;
}

//比较两个格式为yyyy-MM-dd HH:mm:ss的字符串对应的时间大小，dateStr1大于dateStr2则返回1，小于则返回-1，相等返回0
function compareDateStr(dateStr1, dateStr2) {
    var date1 = strToDate(dateStr1).getTime();
    var date2 = strToDate(dateStr2).getTime();
    if(date1 > date2) {
        return 1;
    }else if(date1 == date2) {
        return 0;
    }
    return -1;
}

var isBoss = getIsBoss();

//判断当前用户是否是上级，上级有审核选项卡
function getIsBoss() {
    var boss = false;
    $.ajax({
        type: 'GET',
        url: requestBaseUrl + 'companies/users/isboss',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        async:false,
        success: function(response) {
            if(response.status == 10001){
                boss = true;
            }
        }
    });
    return boss;
}

//获取URL参数
function getUrlParam(name) {
     var url=window.location.href;
      var r=''
      var c=[];
      if(url.indexOf(name)==-1){
          return null
      }else{           
            var search=window.location.href.split('?')[1];
            if(search.indexOf('&')!=-1){
                r=search.split('&');
                for(var i=0;i<r.length;i++){
                  for(var j=0;j<r[i].split('=').length;j++){
                      c.push(r[i].split('=')[j])
                  }
            };
            }else {
                r=search;
                for(var i=0;i<r.split('=').length;i++){
                  c.push(r.split('=')[i])
                }
            };             
            for(var i=0;i<c.length;i++){
                if(c[i]==name){
                    return decodeURIComponent(c[i+1]);
                }                    
            }     
      }
}

//获取当前用户的角色，如果是人事，则显示人脸采样菜单，否则隐藏
function getRole() {
    var role = 0;
    $.ajax({
        type: 'GET',
        url: requestBaseUrl + 'companies/users/roles',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        async: false,
        success: function(response) {
            if(response.status == 10001){
                role = response.data.id;
            }
        }
    });
    return role;
}

var myLeaderEaseMobUsername = '';

//获取我的领导
function getMyLeader() {
    var url = requestBaseUrl + "companies/users/boss";
    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
        success: function(response) {
            if(response.status == 10001) {
                $('#my_leader').val(response.data.name);
                //获取上级的环信用户名
                myLeaderEaseMobUsername = response.data.easemob_user;
            }else{
                $('#my_leader').val('加载领导信息失败');
            }
        },
        error: function() {
            $('#my_leader').val('加载领导信息失败');
        }
    })
}

//秒 转成 小时分钟秒
function secondToFormattedTime(sec) {
    var hours, minute, second;
    if(sec <= 0) {
        return '--';
    }else if(sec < 60) {
        return sec + '秒';
    }else if(sec < 3600) {
        minute = parseInt(sec / 60);
        second = sec - 60 * minute;
        if(second == 0) {
            return minute + '分钟';
        }
        // return minute + '分钟' + second + '秒';
        return (minute + 1) + '分钟';
    }else {
        hours = parseInt(sec / 3600);
        var remain = sec - hours * 3600;
        if(remain == 0) {
            return hours + '小时';
        }else if(remain < 60) {
            // return hours + '小时' + remain + '秒';
            return hours + '小时1分钟';
        }else{
            minute = parseInt(remain / 60);
            second = remain - minute * 60;
            if(second > 0) {
                minute++;
            }
            if(minute >= 60) {
                return (hours + 1) + '小时';
            }
            // return hours + '小时' + minute + '分钟' + second + '秒';
            return hours + '小时' + minute + '分钟';
        }
    }
}

function formatJSON(txt,compress){
    var indentChar = '    ';   
    if(/^\s*$/.test(txt)){   
        alert('数据为空,无法格式化! ');   
        return;   
    }   
    try{var data=eval('('+txt+')');}   
    catch(e){   
        alert('数据源语法错误,格式化失败! 错误信息: '+e.description,'err');   
        return;   
    };   
    var draw=[],last=false,This=this,line=compress?'':'\n',nodeCount=0,maxDepth=0;   
       
    var notify=function(name,value,isLast,indent/*缩进*/,formObj){   
        nodeCount++;/*节点计数*/  
        for (var i=0,tab='';i<indent;i++ )tab+=indentChar;/* 缩进HTML */  
        tab=compress?'':tab;/*压缩模式忽略缩进*/  
        maxDepth=++indent;/*缩进递增并记录*/  
        if(value&&value.constructor==Array){/*处理数组*/  
            draw.push(tab+(formObj?('"'+name+'":'):'')+'['+line);/*缩进'[' 然后换行*/  
            for (var i=0;i<value.length;i++)   
                notify(i,value[i],i==value.length-1,indent,false);   
            draw.push(tab+']'+(isLast?line:(','+line)));/*缩进']'换行,若非尾元素则添加逗号*/  
        }else   if(value&&typeof value=='object'){/*处理对象*/  
                draw.push(tab+(formObj?('"'+name+'":'):'')+'{'+line);/*缩进'{' 然后换行*/  
                var len=0,i=0;   
                for(var key in value)len++;   
                for(var key in value)notify(key,value[key],++i==len,indent,true);   
                draw.push(tab+'}'+(isLast?line:(','+line)));/*缩进'}'换行,若非尾元素则添加逗号*/  
            }else{   
                    if(typeof value=='string')value='"'+value+'"';   
                    draw.push(tab+(formObj?('"'+name+'":'):'')+value+(isLast?'':',')+line);   
            };   
    };   
    var isLast=true,indent=0;   
    notify('',data,isLast,indent,false);   
    return draw.join('');   
}  

function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
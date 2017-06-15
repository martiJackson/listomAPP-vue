//获取URL参数
function getUrlParam(name) {
    var url=window.location.href;
    if(url.indexOf(name)==-1){
        return null
    }else{
        var search=window.location.href.split('?')[1];
        var r=search.split('&');
        var c=[];
        for(var i=0;i<r.length;i++){
            for(var j=0;j<r[i].split('=').length;j++){
                c.push(r[i].split('=')[j])
            }
        };
        for(var i=0;i<c.length;i++){
            if(c[i]==name){
                return decodeURIComponent(c[i+1]);
            }
        }     
    }
}
<template>
<div id="app">	
    <div class="page page2">
    	<div id="main" style="width:800px;height:400px;"></div>
	</div>
</div>
	
</template>
<style type="text/css">
	.page2{
		margin-left:50px;
		position: static;
		float: right;
	}
	#main{
		margin:0 auto;
	}
</style>
<script>
  var Mock = require('mockjs')
  // 初始化数据
  var data1=Mock.mock("http://arc.cn",{
    'data':[250,320,350,120]
  });
var echarts = require('echarts');
export default{
  data () {
    return { 
        
    }  
  },
  mounted:function(){
    // 获取URL参数
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
    };   
    var machineNumber=getUrlParam('machineNumber');
    var myChart = echarts.init(document.getElementById('main'));   
    // 获取饼状图数据
    var vueThis=this;     	
	var option = {
            title : {
                
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['工作时间','待机时间','故障时间','其他时间']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '75%',
                    center: ['50%', '60%'],
                    data:[{value:300, name:'工作时间'},
                          {value:300, name:'待机时间'},
                          {value:300, name:'故障时间'},
                          {value:300, name:'其他时间'}],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
         $.ajax({
            type:"GET",
            async:false, 
            url:"http://arc.cn",
            success:function(data,status){
                // data={work:335,stop:310,erro:234,other:135}
               var data2=JSON.parse(data).data;
                for(var i=0;i<data2.length;i++){
                    option.series[0].data[i].value=data2[i];     
                }                                  
        }
    })
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
  }  	
}

</script>
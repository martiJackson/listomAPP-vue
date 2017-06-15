<template>
	<div id="app">	
    	<div class="page page2">
    		<div id="main" style="width:800px;height:400px;"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
 var Mock = require('mockjs')
  // 初始化数据
  var data1=Mock.mock("http://rect.cn",{
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
		} 	
		var machineNumber=getUrlParam('machineNumber');


	  	var myChart = echarts.init(document.getElementById('main'));
		var option = {
	    color: ['#3398DB'],
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['工作时间', '待机时间', '故障时间', '其他时间'],
	            axisTick: {
	                alignWithLabel: true
	            }
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series: [
	        {
	            name:'直接访问',
	            type:'bar',
	            barWidth: '60%',
	            data:[200, 334, 390, 330]
	        }
	    ]
	};
		// 获取柱状图数据
		$.ajax({
	        type:"GET",
	        url:"http://rect.cn",
	        async:false,
	        success:function(data,status){
	            // data={work:335,stop:310,erro:234,other:135}
	            var data2=JSON.parse(data).data;
	            for(var i=0;i<data2.length;i++){
	            	option.series[0].data[i]=data2[i];
	            }
	            
	        }
	    })
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	  }
	}
</script>
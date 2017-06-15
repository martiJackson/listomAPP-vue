<template>
	<div class="newData page">
	<el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/8' }">机器列表</el-breadcrumb-item> 
      <el-breadcrumb-item>{{value}}今日数据</el-breadcrumb-item> 
    </el-breadcrumb>

      <h1>{{value}}今日数据</h1>
      <p>
    	<el-button type="primary" @click='timeLine'>时间轴</el-button>
    	<el-button type="primary" @click='arc'>饼状图</el-button>
    	<el-button type="primary" @click='rect'>柱状图</el-button>        
      </p>
      <router-view></router-view>
      <div class="text2">
    		<p class="red">上次故障时间：2016-11-15 13：20</p>
    		<p class="orange">上次待机时间：2016-11-15 13：20</p>
    		<p class="green">上次工作时间：2016-11-15 13：20</p>
    	</div>
  </div>
</template>
<script>
export default{
	  data () {
	    return {
	    value:""
	    }  
	  },
	  methods:{
	  	// 跳转到时间轴
	  	timeLine(){
	  		window.location='#/17/20?machineNumber='+encodeURIComponent(this.value);
	  	},
	  	// 跳转到扇形图
	  	arc(){
	  		window.location='#/17/18?machineNumber='+encodeURIComponent(this.value);
	  	},
	  	// 跳转到柱状图
	  	rect(){
	  		window.location='#/17/19?machineNumber='+encodeURIComponent(this.value);
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
		this.value=getUrlParam('machineNumber');
	  }
  }
 </script>
<style type="text/css">
	.timeLine,.arc,.rect{
		cursor: pointer;
	}
	.newData>h1{
		height:.5rem;
		text-align: center;
		font-size:.24rem;
	}
	.newData>p{
		height:.5rem;
		text-align: right;
		line-height: .5rem;
		margin-right:1rem;
	}
	.newData>p>a{
		display: inline-block;
		height:.4rem;
		width: 1rem;
		margin-left:.2rem;
	}
	.text2{
		display: inline-block;
		margin-top:1rem;
		width:100%;
	}
	.text2>p{
		text-align: center;
	}
	.green{
		color: green;
	}
	.red{
		color: red;
	}
	.orange{
		color: orange;
	}
</style>

<template>
  <div id="app">
    <div class='header page'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>APP办公模块</el-breadcrumb-item> 
    </el-breadcrumb>
      <h1>APP办公模块</h1>
      <p style="background:#99CCCC;border-radius:5px 5px 0 0;height:.5rem; padding-left:.2rem;line-height:.5rem" >app办公模块</p>
      <ul class='APP' style="border-radius: 0 0 5px 5px">
        <li>
          <p>
            <img src='/static/logo.jpg'>
          </p>
          <p>打卡记录</p>
          <p>
             <el-switch
              v-model="value"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
          </p>
        </li>
        <li>
          <p>
            <img src='/static/logo.jpg'>
          </p>
          <p>数据统计</p>
          <p>
              <el-switch
              v-model="value2"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
          </p>
        </li>
        <li>
          <p>
            <img src='/static/logo.jpg'>
          </p>
          <p>设备管理</p>
            <p>
              <el-switch
              v-model="value3"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
            </p>
        </li>
        <li>
          <p>
            <img src='/static/logo.jpg'>
          </p>
          <p>一键打卡</p>
          <p>
              <el-switch
              v-model="value4"
              on-color="#13ce66"
              off-color="#ff4949">
            </el-switch>
          </p>
        </li>
      </ul>
      <el-button type="primary" style=" margin-left:7.15rem; position:relative;top:-.5rem" @click="saveChange">保存</el-button>
       <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
    </div>
  </div>
</template>

<script>
var Mock = require('mockjs')
// 初始化数据
var data1=Mock.mock("http://appModule.cn",{
  'data':[{local:true,data:false,device:true,punch:true}]
});
// 保存状态
var data1=Mock.mock("http://saveModule.cn",{
  'data':[{local:true,data:false,device:true,punch:false}]
});
export default {
  data () {
    return { 
      value: true,
      value2: true,
      value3: true,
      value4: true
    }   
  }, 
  methods:{
    saveChange(){
      var vueThis=this;
      var Data=[];
      var data2={local:this.value,data:this.value2,device:this.value3,punch:this.value4};
      $.ajax({
        type:'POST',
        url:'http://saveModule.cn',
        data:data2,
        success:function(data1,status){
          var APPModule=JSON.parse(data1).data;
          Data=APPModule;
          vueThis.value=Data[0].local;
          vueThis.value2=Data[0].data;
          vueThis.value3=Data[0].device;
          vueThis.value4=Data[0].punch;
        }
      })

    }
  },
  mounted:function(){
    var vueThis=this;
    var Data=[];
  		$.ajax({
        type:"GET",
        url:"http://appModule.cn",
        success:function(data1,status){
          // {APPModule:{history:true,data:true,device:true,punch:true}}
          var APPModule=JSON.parse(data1).data;
             Data=APPModule;
          vueThis.value=Data[0].local;
          vueThis.value2=Data[0].data;
          vueThis.value3=Data[0].device;
          vueThis.value4=Data[0].punch;
        }
      })
        
  }
}

</script>
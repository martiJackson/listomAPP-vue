
<template>
<div id="app">
  <div class='header B page'>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>机器任务列表</el-breadcrumb-item> 
</el-breadcrumb>
    <h1>机器任务列表</h1> 
    <el-row style="margin:.2rem 0">
      <el-col :span="2" style="text-align:right">
        <span>机器编号</span>
      </el-col>
      <el-col :span="4" style="margin-left:.1rem;">
        <el-select v-model="value"  style="width:100%">
          <el-option value="机器1-2">机器1-2</el-option>
          <el-option value="机器1-3">机器1-3</el-option>
          <el-option value="机器1-4">机器1-4</el-option>
          <el-option value="机器1-5">机器1-5</el-option>
        </el-select>
      </el-col>
      <el-col :span="2"  style="text-align:right">
        <span>开始时间</span>
      </el-col>
      <el-col :span="4" style="margin-left:.1rem;">
         <template>
          <el-time-picker
          style="width:100%;"
            v-model="value2"
            :picker-options="{
              selectableRange: '00:00:00 - 23:59:59'
            }"
            placeholder="任意时间点">
          </el-time-picker>
        </template>
      </el-col>
      <el-col :span="1"  style="width:1rem;text-align:right;" >
        <span>状态</span>
      </el-col>
      <el-col :span="4" style="margin-left:.1rem;">
        <el-select v-model="value3" style="width:100%">
          <el-option value="已完成">已完成</el-option>
          <el-option value="工作中">工作中</el-option>
        </el-select>
      </el-col>
      <el-col :span="4" style="margin-left:.1rem">
        <el-button type="primary" @click="searchTask">搜索</el-button>
        <el-button type="primary" id='output' @click='output'>导出数据</el-button> 
      </el-col>
    </el-row> 

    <template>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="number"
          label="机器编号"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="taskName"
          label="任务名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="加工工件名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="加工类型"
          width="180">
        </el-table-column>
        <el-table-column
          prop="star"
          label="开始时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="time"
          label="加工周期">
        </el-table-column>

        <el-table-column
          prop="tag"
          label="状态"
          width="100"
          :filters="[{ text: '已完成', value: '已完成' }, { text: '工作中', value: '工作中' }]"
          :filter-method="filterTag">
          <template scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </template>
     <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
  </div>
</div>
</template>
<script>
var Mock = require('mockjs')
// 初始化数据
var data1=Mock.mock("http://task.cn",{
  'data|5':[{"number":"1-2","taskName":"xxx","name":"xxx","type":"xxx","start":"xxx","time":"xxx",'tag':'已完成'}]
});
// 点击跳转到任务列表
var data3=Mock.mock("http://task2.cn",{
  'data|3':[{"number":"1-2","taskName":"xxx","name":"xxx","type":"xxx","start":"xxx","time":"xxx",'tag':'已完成'}]
});
// 搜索机器任务
var data2=Mock.mock("http://searchTask.cn",{
  'data|10':[{"number":"1-3","taskName":"xxxx","name":"xxx","type":"xxx","start":"xxx","time":"xxxxx",'tag':'已完成'}]
});
export default {
  data () {
    return {
      input:"",
      input2:"",
      value:"",
      value3:"",
      tableData: [],
      value2: new Date(2016, 9, 10, 0, 0)
    }   
  }, 
    methods: {
      // 导出数据
      output(){
        window.open('/static/员工导入.xls')
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      searchTask(){
        var vueThis=this;
        var data2={number:this.value,star:this.value2,tag:this.value3}
         var Data=[];
        $.ajax({
          type:"POST",
          url:"http://searchTask.cn",
          data:data2,
          success:function(data1,status){
            var Task=JSON.parse(data1).data;
            vueThis.tableData=Task;  
          }
        })

      }
    },
    mounted:function(){
      var vueThis=this;
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
      $(".touchMe").click(function(){
         window.location.reload();
      $("#task").removeClass('.touchMe');
      })
      // 机器列表跳转到加工任务筛选
      if(machineNumber!=null){
        this.value=machineNumber;
        var Data=[];
         $.ajax({
          type:"POST",
          url:"http://task2.cn",
          data:{machineNumber:machineNumber},
          success:function(data1,status){
           var Task=JSON.parse(data1).data;
            vueThis.tableData=Task
          }
        })
      }else{
        var Data=[];
        $.ajax({
          type:"POST",
          url:"http://task.cn",
          success:function(data1,status){
            var Task=JSON.parse(data1).data;
            vueThis.tableData=Task;  
          }
        })     
      }
    }   
}
</script>

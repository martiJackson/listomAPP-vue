
<template>
  <div id="app">
    <div class='header page'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>通知列表</el-breadcrumb-item> 
    </el-breadcrumb>

    <el-button type="success" style="position:absolute;top:0;right:.5rem" @click="dialog = true" >添加通知</el-button>

      <h1>通知列表</h1>

       <template>
        <el-table :data="tableData" style="width: 100%">

          <el-table-column  label="ID" width="180">
            <template scope="scope">
              <p>{{scope.row.ID}}</p>
            </template>
          </el-table-column>

          <el-table-column  label="名称" width="180">
            <template scope="scope">
              <p>{{scope.row.name}}</p>
            </template>
          </el-table-column>

          <el-table-column  label="创建时间" width="180">
            <template scope="scope">
             <span style="display:block;">{{scope.row.creat[0]}}</span><span>{{scope.row.creat[1]}}</span>
            </template>
          </el-table-column>

          <el-table-column  label="更新时间" width="180">
            <template scope="scope">
              <span style="display:block;">{{scope.row.new[0]}}</span><span>{{scope.row.new[1]}}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template scope="scope">          
              <el-button size="small" type="info" @click="dialogVisible = true">编辑</el-button>
              <el-button size="small" type="danger" @click="open2(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
     </template>

       <el-dialog title="编辑通知" v-model="dialogVisible" size="tiny">      
          <el-row style="margin:.3rem 0 0 .5rem">          
            <el-col :span="4">           
            <span class="must">*</span>
            <span class="inputName">通知标题</span>
            </el-col>
           <el-col :span="18"> <el-input  v-model="input"></el-input></el-col>         
          </el-row>
           <p  class="content2" style="margin-left:1.3rem ">填写通知标题</p>

           <el-row style="margin:.3rem 0 0 .5rem">          
            <el-col :span="4">           
            <span class="must">*</span>
            <span class="inputName">通知内容</span>
            </el-col>
           <el-col :span="18"> <el-input  v-model="input2"></el-input></el-col>         
          </el-row>
           <p  class="content2" style="margin-left:1.3rem ">填写通知内容</p>

          <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
       </el-dialog>

       <el-dialog title="添加通知" v-model="dialog" size="tiny">      
          <el-row style="margin:.3rem 0 0 .5rem">          
            <el-col :span="4">           
            <span class="must">*</span>
            <span class="inputName">通知标题</span>
            </el-col>
           <el-col :span="18"> <el-input  v-model="input3"></el-input></el-col>         
          </el-row>
           <p  class="content2" style="margin-left:1.3rem ">填写通知标题</p>

           <el-row style="margin:.3rem 0 0 .5rem">          
            <el-col :span="4">           
            <span class="must">*</span>
            <span class="inputName">通知内容</span>
            </el-col>
           <el-col :span="18"> <el-input  v-model="input4"></el-input></el-col>         
          </el-row>
           <p  class="content2" style="margin-left:1.3rem ">填写通知内容</p>

          <span slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="addNotice">确 定</el-button>
          </span>
       </el-dialog>   
        <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>   
  </div>
  </div>
</template>
<script>
var Mock = require('mockjs')
// 初始化数据
var data1=Mock.mock("http://notice.cn",{
  'data|5':[{"ID":"1-2","name":"xxx","creat":["xxx",'xxx'],"new":["xxx",'xxx']}]
});
// 编辑通知
var data2=Mock.mock("http://editNotice.cn",{
  'data|6':[{"ID":"1-3","name":"xxxx","creat":["xxx",'xxx'],"new":["xxx",'xxx']}]
});
// 删除通知
var data3=Mock.mock("http://deleteNotice.cn",{
  'data|4':[{"ID":"1-3","name":"xxxx","creat":["xxx",'xxx'],"new":["xxx",'xxx']}]
});
// 添加通知
var data4=Mock.mock("http://addNotice.cn",{
  'data|7':[{"ID":"1-3","name":"xxxx","creat":["xxx",'xxx'],"new":["xxx",'xxx']}]
});
export default {
  data () {
    return {
       tableData:[],
       dialogVisible:false,
       dialog:false,
       input:"",
       input2:"",
       input3:"",
       input4:""
    }   
  },
  methods:{
    // 添加通知
    addNotice(){
      var vueThis=this;
      this.dialog = false
      var data2={noticeName:this.input3,noticeContent:this.input4}
      var Data=[];
      $.ajax({
        type:"POST", 
        url:"http://addNotice.cn",
        data:data2,
        success:function(data1,status){
          var Notice=JSON.parse(data1).data;
          vueThis.tableData=Notice;
        }
      })
    
    },
    // 编辑通知
    edit(index,row){
      dialogVisible=true
      this.input=row.name
    },
    editNotice(){
     var vueThis=this;
     var data2={noticeName:this.input}
     var Data=[];
      $.ajax({
        type:"POST",
        url:"http://editNotice.cn",
        data:data2,
        success:function(data1,status){
          var Notice=JSON.parse(data1).data;
          vueThis.tableData=Notice;
        }
      })
    },
    // 删除通知
    open2(index) {
      var vueThis=this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function(){
           var data2={deleteIndex:index}
           var Data=[];
            $.ajax({
              type:"POST",
              url:"http://deleteNotice.cn",
              data:data2,
              success:function(data1,status){
                var Notice=JSON.parse(data1).data;
                vueThis.tableData=Notice;
              }
            })
        })
      }  
  },
  mounted:function(){
    var vueThis=this;
    var Data=[];
    $.ajax({
        type:"GET",
        url:"http://notice.cn",
        success:function(data1,status){
          var Notice=JSON.parse(data1).data;
           vueThis.tableData=Notice;
        }
      })  
    }
}
</script>


<template>
<div id="app">
  <div class='header page'>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>车间列表</el-breadcrumb-item> 
</el-breadcrumb>

<el-button type="success" style="position:absolute;top:0;right:.5rem" @click="dialog = true" >添加车间</el-button>

    <h1>车间列表</h1>

    <template>
      <el-table :data="tableData" border  style="width: 100%">

        <el-table-column label="车间名"  width="180">
          <template scope="scope">           
            <span style="margin-left: 10px">{{ scope.row.workshopName }}</span>
          </template>
        </el-table-column>

        <el-table-column label="车间描述"  width="180">
          <template scope="scope">         
         <span> {{ scope.row.say }}</span>
          </template>
        </el-table-column>

        <el-table-column label="机器数"  width="180">
          <template scope="scope">           
            <span style="margin-left: 10px">{{ scope.row.number}}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
               @click="edit(scope.$index,scope.row)" type="primary">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="open2(scope.$index,scope.row);">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <el-dialog title="编辑车间" v-model="dialogVisible" size="tiny">
        <el-row style="margin:.3rem 0 0 .5rem">
          <el-col :span="3">
           <span style="color:red;font-size:18px">*</span><span style="font-size:16px;">车间名</span>
          </el-col>
          <el-col :span="18">
             <el-input  v-model="input" ></el-input>
          </el-col>
        </el-row>    

        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="3">
           <span style="color:red;font-size:18px">*</span><span style="font-size:16px;">描述</span>
          </el-col>
          <el-col :span="18">
             <el-input  v-model="input2"></el-input>
          </el-col>
        </el-row>  

        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="3">
           <span style="color:red;font-size:18px">*</span><span style="font-size:16px;">机器数</span>
          </el-col>
          <el-col :span="18">
             <el-input  v-model="input3"  ></el-input>
          </el-col>
        </el-row>      
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editWorkshop">确 定</el-button>
      </span>
    </el-dialog>  

    <el-dialog title="添加车间" v-model="dialog" size="tiny">
        <el-row style="margin:.3rem 0 0 .5rem">
          <el-col :span="3">
           <span style="color:red;font-size:18px">*</span><span style="font-size:16px;">车间名</span>
          </el-col>
          <el-col :span="18">
             <el-input  v-model="input4" ></el-input>
          </el-col>
        </el-row>    

        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="3">
           <span style="color:red;font-size:18px">*</span><span style="font-size:16px;">描述</span>
          </el-col>
          <el-col :span="18">
             <el-input  v-model="input5"></el-input>
          </el-col>
        </el-row>  

        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="3">
           <span style="color:red;font-size:18px">*</span><span style="font-size:16px;">机器数</span>
          </el-col>
          <el-col :span="18">
             <el-input  v-model="input6"  ></el-input>
          </el-col>
        </el-row>       
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="addWorkshop">确 定</el-button>
      </span>
    </el-dialog>
    <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
  </div>
</div>
</template>
<script>
  var Mock = require('mockjs')
  // 初始化数据
  var data1=Mock.mock("http://workshop.cn",{
    'data|5':[{"workshopName":"一车间","say":"生产","number":"12"}]
  });
  // 添加车间
  var data2=Mock.mock("http://addWorkshop.cn",{
    'data|8':[{"workshopName":"一车间","say":"生产","number":"5"}]
  });
  // 编辑车间
  var data3=Mock.mock("http://editWorkshop.cn",{
    'data|5':[{"workshopName":"一车间","say":"生产","number":"9"}]
  });
  // 删除车间
  var data4=Mock.mock("http://deleteWorkshop.cn",{
    'data|3':[{"workshopName":"一车间","say":"生产","number":"6"}]
  });
export default {
  data () {
    return { 
      dialogVisible: false,
      dialog:false,
      input:"",
      input2:"",
      input3:"",
      input4:"",
      input5:"",
      input6:"",
      tableData: [],
      index:""
    }
  },
    methods: {
      // 添加车间
      addWorkshop(){
        this.dialog = false;
        var vueThis=this;
        var data2={workshopName:this.input4,say:this.input5,number:this.input6};
         var Data=[];
        $.ajax({
          type:"POST",
          data:data2, 
          url:"http://addWorkshop.cn",
          success:function(data1,status){
            var Workshop=JSON.parse(data1).data;
            vueThis.tableData=Workshop;
          }
        })       
      },
      // 编辑车间
      edit(index,row){
        this.dialogVisible=true;
        this.index=index
        this.input=row.workshop
        this.input2=row.say
        this.input3=row.number
      },
      editWorkshop(){
         this.dialogVisible=false;
        var vueThis=this;
        var data2={editIndex:this.index,workshop:this.input,say:this.input2,number:this.input3};
        $.ajax({
          type:"POST",
          data:data2,
          url:"http://editWorkshop.cn",
          success:function(data1,status){
            var Workshop=JSON.parse(data1).data;
            vueThis.tableData=Workshop;
          }
        })      
      },
      // 删除车间
      open2(index,row) {
        var vueThis=this;
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type:'warning'
        }).then(function(){  
          // 删除信息     
          var data2={deleteIndex:index};
          $.ajax({
            type:"POST",
            data:data2,
            url:"http://deleteWorkshop.cn",
            success:function(data1,status){
              var Workshop=JSON.parse(data1).data;
              vueThis.tableData=Workshop;
            }
          })       
        })
      }   
    },
    mounted:function(){
      var vueThis=this;
      $.ajax({
        type:"GET",
        url:"http://workshop.cn",
        success:function(data1,status){
          var Workshop=JSON.parse(data1).data;
          vueThis.tableData=Workshop;  
        }
      })     	
    }   
}
</script>

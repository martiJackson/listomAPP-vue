
<template>
<div id="app" class="page">
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>部门列表</el-breadcrumb-item> 
</el-breadcrumb>

<el-button type="success" style="position:absolute;top:0;right:.5rem" @click="dialog=true" >添加部门</el-button>

  <div class='header'>
    <h1>部门列表</h1>
    <template>
      <el-table :data="tableData" style="width: 100%">

        <el-table-column  label="ID" width="180">
          <template scope="scope">
            <p>{{scope.row.ID}}</p>
          </template>
        </el-table-column>

        <el-table-column  label="名称" width="180">
          <template scope="scope">
            <p>{{scope.row.departmentName}}</p>
          </template>
        </el-table-column>

        <el-table-column  label="部门人数" width="180">
          <template scope="scope">
            <p>{{scope.row.chilren}}</p>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template scope="scope">          
            <el-button size="small"  type="info" @click="open4();handleDelete(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="info"><a class='jump' href='javascript:;' @click="message(scope.$index, scope.row)">员工信息</a></el-button>
            <el-button size="small" type="danger" @click="open2(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
   </template>

   <el-dialog title="编辑部门" v-model="dialogVisible" size="tiny">      
      <el-row>
        <p class="content1" style="text-align:left;margin:.3rem .5rem">
        <el-col :span="4">
        <span style="color:red;font-size:18px;">*</span>
        <span style="font-size:16px;">部门</span>
        </el-col>
       <el-col :span="18"> <el-input  v-model="input4"  id="DInput" placeholder="研发部"></el-input></el-col>
       </p>
       
      </el-row>
       <p  class="content2" style="margin-left:1.3rem ">填写部门名称</p>
       <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click=" editDepartment">确 定</el-button>
      </span>
  </el-dialog>

  <el-dialog title="添加部门列表" v-model="dialog" size="tiny">
    <el-row>
        <p class="content1" style="text-align:left;margin:.3rem .5rem">
        <el-col :span="4">
        <span style="color:red;font-size:18px;">*</span>
        <span style="font-size:16px;">ID</span>
        </el-col>
       <el-col :span="18"> <el-input  v-model="input" type="number"  id="DInput" placeholder="3"></el-input></el-col>
       </p>       
    </el-row>

    <el-row>
        <p class="content1" style="text-align:left;margin:.3rem .5rem">
        <el-col :span="4">
        <span style="color:red;font-size:18px;">*</span>
        <span style="font-size:16px;">名称</span>
        </el-col>
       <el-col :span="18"> <el-input  v-model="input2"  id="DInput" placeholder="研发部"></el-input></el-col>
       </p>       
    </el-row>
       <p  class="content2" style="margin-left:1.3rem ">填写部门名称</p>
    <el-row>
        <p class="content1" style="text-align:left;margin:.3rem .5rem">
        <el-col :span="4">
        <span style="color:red;font-size:18px;">*</span>
        <span style="font-size:16px;">人数</span>
        </el-col>
       <el-col :span="18"> <el-input  v-model="input3"  type="number" id="DInput" placeholder="3"></el-input></el-col>
       </p>       
    </el-row>
       <span slot="footer" class="dialog-footer">
      <el-button @click="dialog = false">取 消</el-button>
      <el-button type="primary" @click="addDepartment">确 定</el-button>
      </span>
</el-dialog>
 <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
</div> 
</div>
</template>

<script>
  var Mock = require('mockjs')
  // 初始化数据
  var data1=Mock.mock("http://DepartMent.cn",{
    'data|3':[{"ID":10,"departmentName":"人事部","chilren":"5"},{"ID":5,"departmentName":"行政部","chilren":"8"}]
    })
  // 添加部门
  var data2=Mock.mock("http://addDepartMent.cn",{
    'data|4':[{"ID":10,"departmentName":"人事部","chilren":"5"},{"ID":5,"departmentName":"行政部","chilren":"8"}]
    })
  // 编辑部门
  var data3=Mock.mock("http://editDepartMent.cn",{
    'data|3':[{"ID":10,"departmentName":"人事部","chilren":"5"},{"ID":5,"departmentName":"行政部","chilren":"8"}]
    })
  // 删除部门
  var data4=Mock.mock("http://deleteDepartMent.cn",{
    'data|2':[{"ID":10,"departmentName":"人事部","chilren":"5"},{"ID":5,"departmentName":"行政部","chilren":"8"}]
    })

export default {
  data () {
    el:'#app'
    return {
      dialogVisible: false,
      dialog:false,
      input:"",
      input2:"",
      input3:"",
      input4:"",
      tableData:[],
      index:""  
    }  
  },
   methods: {
    // 添加部门
      addDepartment(){
        this.dialog = false
        var data2=new Array({name:"addDepartemt",ID:this.input,departmentName:this.input2,chilren:this.input3});      
         var Data="";
        $.ajax({
          type:"POST",
          async:false, 
          url:"http://addDepartMent.cn",
          data:data2,
          success:function(data1,status){
           var  Department=JSON.parse(data1).data;
           Data=Department 
          }     
        })
        this.tableData=Data;
    },

    // 员工信息
    message(index,row){
      var data2=new Array({name:"departmentMessage",messageIndex:index,departmentName:row.departmentName})
      window.location='#/3?departmentName='+encodeURIComponent(row.departmentName)
      $("#employee").addClass('touchMe');
      // this.$parent.employee=true
      // this.$parent.employeeValue=row.departmentName
      // this.$parent.employeeData=data2  
    },
     handleDelete(index, row) {  
      this.index=index
      this.input4=row.departmentName
      },
      editDepartment(){
       this.dialogVisible = false
         // 编辑部门    
        var data2=new Array({name:"changeDepartment",changeIndex:this.index,departmentName:this.input4})
        var Data=[];
           $.ajax({
            type:"POST",
            data:data2,
            async:false, 
            url:"http://editDepartMent.cn",
            success:function(data1,status){
             var  Department=JSON.parse(data1).data;
             Data=Department 
             console.log(Data)
            }     
          })
          this.tableData=Data;
      },
      open4(){
         this.dialogVisible=true; 
      },
       open2(index) {
       var vueThis=this;      
        var tableData=[]
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function(){
          // 删除部门
          var data2={index:index};
           var Data=[];
          $.ajax({
            type:"POST",
            data:data2,
            url:"http://deleteDepartMent.cn",
            success:function(data1,status){
               var Department=JSON.parse(data1).data;
               vueThis.tableData=Department;             
            }           
          })      
        })
      }       
    },
   mounted:function(){
    var Data="";
    $.ajax({
      type:"GET",
      async:false, 
      url:"http://DepartMent.cn",
      success:function(data1,status){
       var  Department=JSON.parse(data1).data;
       Data=Department 
       console.log(Data)
      }     
    })
    this.tableData=Data;
  }
}
</script>

<style>
.dUl>li{
  width:3.8rem;
}
.dUl>li.dBtn>button{
  width:1rem;
  height:.4rem;
  line-height:.4rem;
  margin-left:.2rem;
  background:#169BD5;
}

/*编辑弹窗*/
.DContent,.DContent2{
  position: relative;
  z-index: 100;
  width:4.45rem;
  height:4.1rem;
  background: #f2f2f2;
  margin:1rem auto;
  text-align: center;
  display: none;
}
.DContent>h1{
  font-size: .18rem;
  font-weight: bold;
  height:.6rem;
  line-height: .6rem;
}
.DContent>div{
  height:3.5rem;
  text-align: center;
}
.DContent>div>.content1>span:first-of-type{
  color: red;
  font-size:.18rem;
}
.DContent>div>.content1>span:nth-of-type(2){
  display: inline-block;
  width:.65rem;
  height:.2rem;
  font-size:.16rem;
  text-align: center;
}
.DContent>div>.content1>input{
  width:3rem;
  height:.5rem;
  margin-left: .1rem;
}
.DContent>div>.content2{
  width:3.15rem;
  color: gray;
  margin-top: .1rem;
}
.DContent>div>.content3{
  margin-top:.9rem;
  display: flex;
  justify-content: space-around;
}
.DContent>div>.content3>button{
  width:1.4rem;
  height:.4rem;
  text-align: center;
  line-height: .4rem;
}
.DContent>div>.content3>button:first-of-type{
  background: #fff;
  border:1px solid;
}
.DContent>div>.content3>button:last-of-type{
  background: #169BD5;
  border:1px solid;
}
/*删除弹窗*/

.DContent2>h1{
  height:2rem;
  text-align: center;
  line-height: 2rem;
  font-weight: bold;
  font-size:.24rem;
}
.DContent2>div{
  height:2.1rem;
}
.DContent2>div>.content3{
  display: flex;
  justify-content: space-around;
  margin-top: .5rem;
}
.DContent2>div>.content3>button{
  width:1.4rem;
  height:.4rem;
  text-align: center;
}
.DContent2>div>.content3>button:first-of-type{
  background: #fff;
  border:1px solid;
}
.mContent2>div>.content3>button:last-of-type{
  background: #169bd5;
  border:1px solid;
}
.jump{
  height:100%;
  width:100%;
  display: inline-block;
  color: #fff;
}
</style>
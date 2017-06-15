
<template>
<div id="app">
  <div class='header B page' id="machineList">

  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>机器列表</el-breadcrumb-item> 
</el-breadcrumb>

<el-button type="success" style="position:absolute;top:0;right:.5rem" @click="dialog = true" >添加机器</el-button>

    <h1>机器列表</h1>
      <el-row style="margin:.2rem 2rem">
        <el-col :span="2" >
        <span>机器编号</span>
        </el-col>
        <el-col :span="6">
        <el-select v-model="value" style="width:100%;">
          <el-option label="机器1" value="机器1-2">机器1-2</el-option>
          <el-option label="机器1-2" value="机器1-3">机器1-3</el-option>
          <el-option label="机器1-3" value="机器1-4">机器1-4</el-option>
          <el-option label="机器1-4" value="机器1-5">机器1-5</el-option>
        </el-select>
      </el-col>
      <el-col :span="1"style="margin-left:.2rem">
        <span>车间</span>
      </el-col>
      <el-col :span="6" >
        <el-select v-model="value2" style="width:100%;">
          <el-option label="一车间" value="一车间">一车间</el-option>
          <el-option label="二车间" value="二车间">二车间</el-option>
          <el-option label="三车间" value="三车间">三车间</el-option>
        </el-select>
      </el-col>
      <el-col :span="2" style="text-align:center">  
        <el-button type="primary" @click="searchWorkshop">搜索</el-button>
      </el-col>
  </el-row>      
     
    <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="ID"
      width="180">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ID }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="机器编号"
      width="180">
      <template scope="scope">
       <span>{{ scope.row.number }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="车间"
      width="180">
      <template scope="scope">
       <span>{{ scope.row.workshopName }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="型号"
      width="180">
      <template scope="scope">
       <span>{{ scope.row.model }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="类型"
      width="180">
      <template scope="scope">
       <span>{{ scope.row.type }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="MAC"
      width="180">
      <template scope="scope">
       <span>{{ scope.row.MAC }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
         type="primary"
          @click="edit(scope.$index,scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="open2(scope.$index, scope.row)">删除</el-button>
       <el-button
          size="small"
          type="primary"
          ><a href="javascript:;" @click="newData(scope.$index, scope.row)">今日数据</a></el-button>
         <el-button
          size="small"
          type="primary"
          > <a href="javascript:;" @click="task(scope.$index, scope.row)">加工任务</a></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

  <el-dialog title="编辑机器信息" v-model="dialogVisible" size="tiny">  

    <el-row  style="margin:.3rem 0 0 .5rem">
     <el-col :span="5">
      <span class="must">*</span><span class="inputName">机器编号</span>
      </el-col>      
      <el-col :span="18">
        <el-select v-model="value5" style="width:100%;">
          <el-option label="机器1-2" value="机器1-2">机器1-2</el-option>
          <el-option label="机器1-3" value="机器1-3">机器1-3</el-option>
          <el-option label="机器1-4" value="机器1-4">机器1-4</el-option>
          <el-option label="机器1-5" value="机器1-5">机器1-5</el-option>
        </el-select>
      </el-col>         
    </el-row>

      <p class="moveLeft">输入工厂内用来区分机器的编号,长度不能大于100</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
     <span class="must">*</span><span class="inputName">所属车间</span>
     </el-col>      
      <el-col :span="18">
        <el-select v-model="value6" style="width:100%;">
          <el-option label="一车间" value="一车间">一车间</el-option>
          <el-option label="二车间" value="二车间">二车间</el-option>
          <el-option label="三车间" value="三车间">三车间</el-option>
        </el-select>
      </el-col>   
     </el-row>

     <el-row style="margin:.3rem 0 0 .5rem">
      <el-col :span="5">
      <span class="must">*</span><span class="inputName">品牌</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input3"></el-input></el-col>   
      </el-row>

     <p class="moveLeft">输入机器的品牌</p>

     <el-row style="margin:.3rem 0 0 .5rem">
      <el-col :span="5">
      <span class="must">*</span><span class="inputName">序列号</span>
      </el-col>      
      <el-col :span="18"> <el-input  v-model="input4" ></el-input></el-col>   
      </el-row>

     <p class="moveLeft">输入机器铭牌上的序列号</p>

     <el-row style="margin:.3rem 0 0 .5rem">
      <el-col :span="5">
      <span class="must">*</span><span class="inputName">型号</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input5"></el-input></el-col>   
      </el-row>

      <p class="moveLeft">输入机器铭牌上的型号</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="must">*</span><span  class="inputName">类型</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input6"></el-input></el-col>   
      </el-row>

      <p class="moveLeft">机器类型 比如:CNC 磨床 车床等</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span>MAC</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input7"></el-input></el-col>   
      </el-row>

      <p class="moveLeft">输入绑定设备的MAC</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="inputName">MAC</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input8"></el-input></el-col>         
      </el-row>

      <p class="moveLeft">输入计数设备的MAC</p>
      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="inputName">备注</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input9" ></el-input></el-col>   
      </el-row>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="inputName">排序</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input10" ></el-input></el-col>   
      </el-row>

      <p class="moveLeft">机器排序，数值越大越靠前</p>

      <el-row style="margin:.3rem 0 0  .5rem">
       <el-col :span="5">
      <span class="inputName">管理人</span>
      </el-col>      
      <el-col :span="18"> <el-input  v-model="input11"></el-input></el-col>   
      </el-row>

       <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="editMachine">确 定</el-button>
      </span>
  </el-dialog>

  <el-dialog title="添加机器" v-model="dialog" size="tiny">  

    <el-row  style="margin:.3rem 0 0 .5rem">
     <el-col :span="5">
      <span class="must">*</span><span class="inputName">机器编号</span>
      </el-col>      
      <el-col :span="18"> 
         <el-select v-model="value3" style="width:100%;">
          <el-option label="机器1" value="机器1-2">机器1-2</el-option>
          <el-option label="机器1-2" value="机器1-3">机器1-3</el-option>
          <el-option label="机器1-3" value="机器1-4">机器1-4</el-option>
          <el-option label="机器1-4" value="机器1-5">机器1-5</el-option>
        </el-select>
      </el-col>         
    </el-row>

      <p class="moveLeft">输入工厂内用来区分机器的编号,长度不能大于100</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
     <span class="must">*</span><span class="inputName">所属车间</span>
     </el-col>      
      <el-col :span="18">
        <el-select v-model="value4" style="width:100%;">
          <el-option label="一车间" value="一车间">一车间</el-option>
          <el-option label="二车间" value="二车间">二车间</el-option>
          <el-option label="三车间" value="三车间">三车间</el-option>
        </el-select>
      </el-col>   
     </el-row>

     <el-row style="margin:.3rem 0 0 .5rem">
      <el-col :span="5">
      <span class="must">*</span><span class="inputName">品牌</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input14"></el-input></el-col>   
      </el-row>

     <p class="moveLeft">输入机器的品牌</p>

     <el-row style="margin:.3rem 0 0 .5rem">
      <el-col :span="5">
      <span class="must">*</span><span class="inputName">序列号</span>
      </el-col>      
      <el-col :span="18"> <el-input  v-model="input15" ></el-input></el-col>   
      </el-row>

     <p class="moveLeft">输入机器铭牌上的序列号</p>

     <el-row style="margin:.3rem 0 0 .5rem">
      <el-col :span="5">
      <span class="must">*</span><span class="inputName">型号</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input16"></el-input></el-col>   
      </el-row>

      <p class="moveLeft">输入机器铭牌上的型号</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="must">*</span><span  class="inputName">类型</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input17"></el-input></el-col>   
      </el-row>

      <p class="moveLeft">机器类型 比如:CNC 磨床 车床等</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span>MAC</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input18"></el-input></el-col>   
      </el-row>

      <p class="moveLeft">输入绑定设备的MAC</p>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="inputName">MAC</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input19"></el-input></el-col>         
      </el-row>

      <p class="moveLeft">输入计数设备的MAC</p>
      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="inputName">备注</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input20" ></el-input></el-col>   
      </el-row>

      <el-row style="margin:.3rem 0 0 .5rem">
       <el-col :span="5">
      <span class="inputName">排序</span>
      </el-col>
      <el-col :span="18"> <el-input  v-model="input21" ></el-input></el-col>   
      </el-row>

      <p class="moveLeft">机器排序，数值越大越靠前</p>

      <el-row style="margin:.3rem 0 0  .5rem">
       <el-col :span="5">
      <span class="inputName">管理人</span>
      </el-col>      
      <el-col :span="18"> <el-input  v-model="input22"></el-input></el-col>   
      </el-row>

       <span slot="footer" class="dialog-footer">
      <el-button @click="dialog = false">取 消</el-button>
      <el-button type="primary" @click="addMachine">确 定</el-button>
      </span>
  </el-dialog>

    <template>
      <div class="block" style="margin:.8rem .5rem">
        <el-pagination  @current-change="handleCurrentChange" :current-page="currentPage1" :page-size="size" layout="total, prev, pager, next" :total="total">
        </el-pagination>
      </div>  
   </template> 
   <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
  </div> 

</div>
</template>
<script>
  var Mock = require('mockjs')
  // 初始化数据
  var data1=Mock.mock("http://machine.cn",{
    'data|30':[{"ID":"10","number":"机器1-2","workshopName":"一车间","model":"GLK260","type":"注塑机","MAC":"b8:27:eb:fc:09:bb"}]
  });
  // 添加机器
  var data2=Mock.mock("http://addMachine.cn",{
    'data|35':[{"ID":"10","number":"机器1-2","workshopName":"一车间","model":"GLK260","type":"注塑机","MAC":"b8:27:eb:fc:09:bb"}]
  });
  // 编辑机器
  var data3=Mock.mock("http://editMachine.cn",{
    'data|30':[{"ID":"10","number":"机器1-2","workshopName":"一车间","model":"GLK260","type":"注塑机","MAC":"b8:27:eb:fc:09:bb"}]
  });
  // 删除机器10
  var data4=Mock.mock("http://deleteMachine.cn",{
    'data|20':[{"ID":"10","number":"机器1-2","workshopName":"一车间","model":"GLK260","type":"注塑机","MAC":"b8:27:eb:fc:09:bb"}]
  });
  // 搜索机器
  var data5=Mock.mock("http://searchMachine.cn",{
    'data|10':[{"ID":"10","number":"机器1-2","workshopName":"一车间","model":"GLK260","type":"注塑机","MAC":"b8:27:eb:fc:09:bb"}]
  });
export default {
  data () {
    return {  
        tableData: [],
        dialogVisible:false,
        dialog:false,
        input:"",
        input2:"",
        input3:"",
        input4:"",
        input5:"",
        input6:"",
        input7:"",
        input8:"",
        input9:"",
        input10:"",
        input11:"" ,
        input14:"",
        input15:"",
        input16:"",
        input17:"",
        input18:"",
        input19:"",
        input20:"",
        input21:"",
        input22:"",
        value:"",
        value2:"",
        value3:"",
        value4:"",
        value5:"",
        value6:"",
        currentPage1:1,
        size:12,
        total:100,
        index:"",
        base:''
    }   
  }, 
  methods:{
    // 搜索
    searchWorkshop(){
      var vueThis=this;
      var data2={machineNumber:this.value,workshop:this.value2};
        var Length="";
        $.ajax({
          type:"POST",
          url:"http://searchMachine.cn",
          data:data2,
          success:function(data1,status){
            var Machine=JSON.parse(data1).data;
            var Data2=[];
            vueThis.base=Machine;
            Length=Machine.length
            if(Machine.length>=12){
              for(var i=0;i<12;i++){
                Data2[i]=Machine[i]
              }
            }else if(Machine.length<12){
               for(var i=0;i<Machine.length;i++){
                Data2[i]=Machine[i]
              }
            }
          vueThis.total=Length
          vueThis.tableData=Data2;
          }
        })      
    },
    // 添加机器信息
    addMachine(){
      this.dialog = false
      var data2={number:this.value3,workshopName:this.value4,brand:this.input14,serialNumber:this.input15,model:this.input16,type:this.input17,MAC1:this.input18,MAC2:this.input19,tips:this.input20,sort:this.input21,management:this.input22};
      var vueThis=this;
      var Data=[];
      var Length="";
      $.ajax({
        type:"POST",
        url:"http://addMachine.cn",
        data:data2,
        success:function(data1,status){
          var Machine=JSON.parse(data1).data;
          var Data2=[];
          vueThis.base=Machine;
          Length=Machine.length
          if(Machine.length>=12){
            for(var i=0;i<12;i++){
              Data2[i]=Machine[i]
            }
          }else if(Machine.length<12){
             for(var i=0;i<Machine.length;i++){
              Data2[i]=Machine[i]
            }
          }
          vueThis.total=Length
          vueThis.tableData=Data2;
        }
      })
    },
    // 编辑机器信息
    edit(index,row){
      this.dialogVisible=true
      this.index=index
      this.value5=row.number
      this.value6=row.workshopName
      this.input5=row.model
      this.input6=row.type
      this.input7=row.MAC
    },
    editMachine(){
      this.dialogVisible = false
      var data2={editIndex:this.index,number:this.value5,workshopName:this.value6,brand:this.input3,serialNumber:this.input4,model:this.input5,type:this.input6,MAC1:this.input7,MAC2:this.input8,tips:this.input9,sort:this.input10,management:this.input11};
      var vueThis=this;
      var Length="";
      $.ajax({
        type:"POST",
        url:"http://editMachine.cn",
        data:data2,
        success:function(data1,status){
          var Machine=JSON.parse(data1).data;
          var Data2=[];
          vueThis.base=Machine;
          Length=Machine.length
          if(Machine.length>=12){
            for(var i=0;i<12;i++){
              Data2[i]=Machine[i]
            }
          }else if(Machine.length<12){
             for(var i=0;i<Machine.length;i++){
              Data2[i]=Machine[i]
            }
          }
          vueThis.total=Length
          vueThis.tableData=Data2;
        }
      })
    },
    // 删除信息
    open2(index,row) {
      var vueThis=this;
      var data2={deleteIndex:index};
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type:'warning'
        }).then(function(){      
        var data2={deleteIndex:index};
          var Length="";
          $.ajax({
            type:"POST",
            url:"http://deleteMachine.cn",
            data:data2,
            success:function(data1,status){
              var Machine=JSON.parse(data1).data;
              var Data2=[];
              vueThis.base=Machine;
              Length=Machine.length
              if(Machine.length>=12){
                for(var i=0;i<12;i++){
                  Data2[i]=Machine[i]
                }
              }else if(Machine.length<12){
                 for(var i=0;i<Machine.length;i++){
                  Data2[i]=Machine[i]
                }
              }
              vueThis.total=Length;
              vueThis.tableData=Data2;
            }
          })
        })        
      } ,  
      newData(index, row) {
        // 跳转到今日数据
        window.location='#/17/18?machineNumber='+encodeURIComponent(row.number);
      },
      task(index, row) {
       // 跳转到机器任务
       $("#task").addClass('touchMe');
        window.location='#/10?machineNumber='+encodeURIComponent(row.number);
            
      },
      handleCurrentChange(val) {
        this.currentPage = val;      
        console.log(`当前页: ${val}`);
          var vueThis=this;
        // 点击分页
       var base=this.base;
        var Data=[]; 
       if(base.length<=val*this.size){
        for(var i=(val-1)*this.size;i<base.length;i++){
          Data.push(base[i]);
        }
       }else{
          for(var i=(val-1)*this.size;i<val*this.size;i++){
            Data.push(base[i])
          }
       }    
       vueThis.tableData=Data;
      }
  },
  mounted:function(){ 
    var vueThis=this;
    var Data=[];
    var Length="";
    // 加载初始化数据
    $.ajax({
        type:"GET",
        url:"http://machine.cn",
        success:function(data1,status){
          var Machine=JSON.parse(data1).data;
          var Data2=[];
          vueThis.base=Machine;
          Length=Machine.length
          if(Machine.length>=12){
            for(var i=0;i<12;i++){
              Data2[i]=Machine[i]
            }
          }else if(Machine.length<12){
             for(var i=0;i<Machine.length;i++){
              Data2[i]=Machine[i]
            }
          }
          vueThis.total=Length
          vueThis.tableData=Data2;
        }
      }) 		
    }
}
</script>
<style type="text/css">
.inputName{
  font-size:16px;
}
.must{
  color: red;
  font-size:18px;
}
.moveLeft{
  margin-left:1.5rem;
  color: gray;
}
</style>
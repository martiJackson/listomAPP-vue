
<template>
<div id="app">
  <div class='header B page 'id="employeeList">

  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>员工列表</el-breadcrumb-item> 
</el-breadcrumb>

<el-button type="success" style="position:absolute;top:0;right:2rem" @click="dialog = true" >添加员工</el-button>
<el-button type="success" style="position:absolute;top:0;right:.5rem" @click="dialog2 = true" >批量导入员工</el-button>
    
    <h1>员工列表</h1>
     <template>
   <el-row style="text-align:right; margin:.2rem 0">
     <el-col :span="1">
      <span>部门</span>
     </el-col>
     <el-col :span="2" id="DInput" >
        <template>
              <el-select v-model="value" placeholder="请选择" style="margin-left:-.1rem">
                <el-option label="研发部" value="研发部" >
                </el-option>
                 <el-option label="人事部" value="人事部" >
                </el-option>
                 <el-option label="销售部" value="销售部" >
                </el-option>
              </el-select>
            </template>
     </el-col>
     <el-col :span="1">
      <span>姓名</span>
     </el-col>
     <el-col :span="2">
     <el-input  v-model="input14"  id="DInput" placeholder=""></el-input>
     </el-col>
     <el-col :span="2" style="width:1rem">
      <span>入职时间</span>
     </el-col>
     <el-col :span="3">
      <div class="block">
        <el-date-picker v-model="value5" id="DInput" type="date" placeholder="1986-01-01" :picker-options="pickerOptions0">
        </el-date-picker>
      </div>
     </el-col>
     <el-col :span="1"  >
      <span>职位</span>
     </el-col>
     <el-col :span="3" id="DInput">
      <template>
          <el-select  v-model="value2" placeholder="请选择" style="margin-left:-.1rem">
            <el-option label="员工" value="员工" >
            </el-option>
             <el-option label="总监" value="总监" >
            </el-option>
             <el-option label="董事" value="董事" >
            </el-option>
          </el-select>
        </template>
     </el-col>
     <el-col :span="1">
      <span>上级</span>
     </el-col>
     <el-col :span="2" id="DInput">
        <template>
          <el-select  v-model="value3" placeholder="请选择" style="margin-left:-.1rem">
            <el-option label="肖峰" value="肖峰" >
            </el-option>
             <el-option label="徐伟" value="徐伟" >
            </el-option>
             <el-option label="小娟" value="小娟" >
            </el-option>
          </el-select>
        </template>

     </el-col>
     <el-col :span="2"> <el-button  type="primary" @click="searchEmployee">搜索</el-button></el-col>
     <el-col :span="1"> <el-button  type="primary" @click="rest">重置</el-button></el-col>
   </el-row>
   </template>
    
   <template>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column label="姓名" width="180">
        <template scope="scope">        
          <span style="margin-left: 10px">{{ scope.row.employeeName }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="手机号码"
        width="180">
        <template scope="scope">        
           {{ scope.row.phone }}          
        </template>
      </el-table-column>

      <el-table-column label="部门" width="180">
        <template scope="scope">        
          <span style="margin-left: 10px">{{ scope.row.department }}</span>
        </template>
      </el-table-column>

      <el-table-column label="职位" width="180">
        <template scope="scope">        
          <span style="margin-left: 10px">{{ scope.row.position }}</span>
        </template>
      </el-table-column>

      
      <el-table-column label="上级" width="180">
        <template scope="scope">        
          <span style="margin-left: 10px">{{ scope.row.up }}</span>
        </template>
      </el-table-column>

      
      <el-table-column label="入职时间" width="180">
        <template scope="scope">        
          <span style="margin-left: 10px">{{ scope.row.inTime }}</span>
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
            @click="open2(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>

<el-dialog title="编辑员工" v-model="dialogVisible" size="tiny">
  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">员工姓名</span></el-col>
    <el-col :span="18">
      <el-input v-model="input" placeholder="请输入员工姓名"></el-input>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">手机号码</span></el-col>
    <el-col :span="18">
      <el-input v-model="input2" placeholder="请输入手机号码"></el-input>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .6rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">部门</span></el-col>
    <el-col :span="19">
      <template>
              <el-select v-model="value8" placeholder="请选择" style="margin-left:-.1rem;width:100%;">
                <el-option label="研发部" value="研发部" >
                </el-option>
                 <el-option label="人事部" value="人事部" >
                </el-option>
                 <el-option label="销售部" value="销售部" >
                </el-option>
              </el-select>
            </template>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .6rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">职位</span></el-col>
    <el-col :span="19">
      <template>
          <el-select  v-model="value9" placeholder="请选择" style="margin-left:-.1rem;width:100%;">
            <el-option label="员工" value="员工" >
            </el-option>
             <el-option label="总监" value="总监" >
            </el-option>
             <el-option label="董事" value="董事" >
            </el-option>
          </el-select>
        </template>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">上级</span></el-col>
    <el-col :span="18">
      <el-input v-model="input5" placeholder="请输入上级"></el-input>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">入职时间</span></el-col>
    <el-col :span="18">
      <div class="block">
        <el-date-picker v-model="value6" style="width:100%;" type="date" placeholder="1986-01-01" :picker-options="pickerOptions0">
        </el-date-picker>
      </div>
    </el-col>
  </el-row>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editEmployee">确 定</el-button>
  </span>
</el-dialog>

<el-dialog title="添加员工" v-model="dialog" size="tiny">
  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">员工姓名</span></el-col>
    <el-col :span="18">
      <el-input v-model="input7" placeholder="请输入员工姓名"></el-input>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">手机号码</span></el-col>
    <el-col :span="18">
      <el-input v-model="input8" placeholder="请输入手机号码"></el-input>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .6rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">部门</span></el-col>
    <el-col :span="19">
      <template>
              <el-select v-model="value10" placeholder="请选择" style="margin-left:-.1rem;width:100%;">
                <el-option label="研发部" value="研发部" >
                </el-option>
                 <el-option label="人事部" value="人事部" >
                </el-option>
                 <el-option label="销售部" value="销售部" >
                </el-option>
              </el-select>
            </template>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .6rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">职位</span></el-col>
    <el-col :span="19">
      <template>
          <el-select  v-model="value11" placeholder="请选择" style="margin-left:-.1rem;width:100%;">
            <el-option label="员工" value="员工" >
            </el-option>
             <el-option label="总监" value="总监" >
            </el-option>
             <el-option label="董事" value="董事" >
            </el-option>
          </el-select>
        </template>
    </el-col>
  </el-row>

  <el-row style="margin:.3rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">上级</span></el-col>
    <el-col :span="18">
      <el-input v-model="input11" placeholder="请输入上级"></el-input>
    </el-col>
  </el-row>

  <el-row style="margin:.5rem .5rem">
    <el-col :span="5"><span style="color:red;font-size:18px;">*</span><span style="font-size:16px;">入职时间</span></el-col>
    <el-col :span="18">
      <div class="block">
        <el-date-picker v-model="value7" id="DInput" type="date" placeholder="1986-01-01" :picker-options="pickerOptions0">
        </el-date-picker>
      </div>
    </el-col>
  </el-row>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialog = false">取 消</el-button>
    <el-button type="primary" @click="addEmployee">确 定</el-button>
  </span>
</el-dialog>



<el-dialog title="批量导入员工" v-model="dialog2" size="tiny">
  <el-row style="margin:.2rem;border:1px solid rgb(247, 238, 214);padding:.2rem">
    <p>批量导入员工之前，请下载规定好的模板，然后录入需要批量导入的员工资料，然后在该页上传录入好的文件批量导入员工。</p>
    <p>下载模板请点这里 <el-button type="primary" id="downLoadEmployee"><a href="/static/员工导入.xls">下载批量导入模板</a></el-button></p>
  </el-row>
 <h2>导入员工信息</h2>
 <div style="margin:.2rem;border:1px solid rgb(247, 238, 214);padding:.2rem">
    <el-row >
      <el-col :span="18">
        <el-upload class="upload-demo" ref="upload" action="http://portal.listome.com/portal/employee/import" method="post" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>   
  </el-row>
 </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialog2 = false">取 消</el-button>
    <el-button type="primary" @click="dialog2=false" >确 定</el-button>
  </span>
</el-dialog>
<template>
  <div class="block" style="margin:1rem">
    <el-pagination  @current-change="handleCurrentChange" :current-page="currentPage1" :page-size="size" layout="total, prev, pager, next" :total="total">
    </el-pagination>
  </div>  
</template>
<p style="text-align:right;margin:.5rem ">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
</div>
</div>
</template>
<script>
var Mock = require('mockjs')
// 初始化数据
var data1=Mock.mock("http://Employee.cn",{
  'data|30':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});
// 点击部门列表员工信息
var data2=Mock.mock("http://Employee2.cn",{
  'data|10':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});
// 添加员工
var data3=Mock.mock("http://addEmployee.cn",{
  'data|35':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});
// 编辑员工
var data4=Mock.mock("http://editEmployee.cn",{
  'data|30':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});
// 删除员工
var data5=Mock.mock("http://deleteEmployee.cn",{
  'data|20':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});
// 搜索员工
var data6=Mock.mock("http://searchEmployee.cn",{
  'data|10':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});
// 批量导入员工
var data7=Mock.mock("http://batchEmployee.cn",{
  'data|40':[{"employeeName":"张三","phone":"12345678912","department":"人事","position":"人事","up":"xxx","inTime":"1986-1-1"}]
});


export default {
  data () {
    return {input:"",
            input2:"",
            input3:"",
            input4:"",
            input5:"",
            input7:"",
            input8:"",
            input9:"",
            input10:"",
            input11:"",
            input14:"",
            tableData: [],
            dialog:false,
            dialog2:false,
            dialogVisible:false,
            value:"",
            value2:"",
            value3:"",
            value4:"",
            value5:"",
            value6:"",
            value7:"",
            value8:"",
            value9:"",
            value10:"",
            value11:"",
            currentPage1:1,
            size:12,
            total:12,
            fileList:[],
            index:"" ,
            page:"" ,
            employee:"",
            base:'',
            departmentName:''              
    }
  }, 
  methods:{
        pickerOptions0: {
              disabledDate(time) {
                return time.getTime() < Date.now() - 8.64e7;
              }
            },
      addEmployee(){
        // 添加员工
        var vueThis=this;
        this.dialog = false
        var data2={employee:this.input7,phone:this.input8,department:this.input9,position:this.input10,up:this.input11,intime:this.value7,departmentName:this.departmentName};
        var Data=[];
        var Length=0;
        $.ajax({
          type:"POST",
          url:"http://addEmployee.cn",
          data:data2,
          success:function(data1,status){
            var Employee=JSON.parse(data1).data;
            vueThis.base=Employee;
            var Data2=[];
            Length=Employee.length
            if(Employee.length>12){
              for(var i=0;i<12;i++){
                Data2[i]=Employee[i]
              }
            }else if(Employee.length<=12){
               for(var i=0;i<Employee.length;i++){
                Data2[i]=Employee[i]
              }
            }
          vueThis.total=Length
          vueThis.tableData=Data2;
          }         
        })        
      }, edit(index,row){
        this.dialogVisible = true
        this.index=index;
        this.input=row.employeeName
        this.input2=row.phone
        this.value8=row.department
        this.value9=row.position
        this.input5=row.up
        this.value6=row.inTime
      },
      // 编辑员工
      editEmployee(){
        var vueThis=this;
        this.dialogVisible = false 
        var data2={editIndex:this.index,employeeName:this.input1,phone:this.input2,department:this.value8,position:this.value9,up:this.input5,inTime:this.value6,departmentName:this.departmentName}
        var Data=[];
        var Length="";
        $.ajax({
          type:"POST",
          async:false, 
          url:"http://editEmployee.cn",
          data:data2,
          success:function(data1,status){
            var Employee=JSON.parse(data1).data;
            vueThis.base=Employee;
            var Data2=[];
            Length=Employee.length
            if(Employee.length>12){
              for(var i=0;i<12;i++){
                Data2[i]=Employee[i]
              }
            }else if(Employee.length<=12){
               for(var i=0;i<Employee.length;i++){
                Data2[i]=Employee[i]
              }
            }
            Data=Data2;
            return {Data:Data,Length:Length}
          }
        })
       this.total=Length
       this.tableData=Data;  
      },
      submitUpload() {
        // 批量上传
        this.$refs.upload.submit();
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      // 搜索
       searchEmployee(){
        var vueThis=this;
        var data2={department:this.value,employeeName:this.input14,inTime:this.value5,position:this.value2,up:this.value3,departmentName:this.departmentName};
        var Data=[];
        var Length=0;
        $.ajax({
          type:"POST",
          url:"http://searchEmployee.cn",
          data:data2,
          success:function(data1,status){
            var Employee=JSON.parse(data1).data;
            console.log(Employee)
            vueThis.base=Employee;
            var Data2=[];
            Length=Employee.length
            if(Employee.length>12){
              for(var i=0;i<12;i++){
                Data2[i]=Employee[i]
              }
            }else if(Employee.length<=12){
               for(var i=0;i<Employee.length;i++){
                Data2[i]=Employee[i]
              }
            }
            // Data=Data2;
            // return {Data:Data,Length:Length}
            vueThis.total=Length
            vueThis.tableData=Data2;
          }         
        })
        
       },

       // 重置
       rest(){
          this.value=""
          this.input14=""
          this.value5=""
          this.value2=""
          this.value3=""
          var vueThis=this;
          var Data=[];
          var Length=0;
          $.ajax({
            type:"GET",
            url:"http://Employee.cn",
            success:function(data1,status){
              var Employee=JSON.parse(data1).data;
              vueThis.base=Employee;
              var Data2=[];
              Length=Employee.length
              if(Employee.length>=12){
                for(var i=0;i<12;i++){
                  Data2[i]=Employee[i]
                }
              }else if(Employee.length<12){
                 for(var i=0;i<Employee.length;i++){
                  Data2[i]=Employee[i]
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
        var total=0;
        var tableData=[];
        var data2={deleteIndex:index,departmentName:this.departmentName};
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() =>{         
          console.log(data2)
          var Data=[];
          var Length=0;
          $.ajax({
            type:"POST",
            url:"http://deleteEmployee.cn",
            data:data2,
            success:function(data1,status){
              var Employee=JSON.parse(data1).data;
              vueThis.base=Employee;
              var Data2=[];
              Length=Employee.length
              if(Employee.length>=12){
                for(var i=0;i<12;i++){
                  Data2[i]=Employee[i]
                }
              }else if(Employee.length<12){
                 for(var i=0;i<Employee.length;i++){
                  Data2[i]=Employee[i]
                }
              }
              vueThis.total=Length;
              vueThis.tableData=Data2;
            }
          })       
         })
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        // 点击分页.
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
       this.tableData=Data;
      }
  },
  mounted:function(){

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
    };
    var vueThis=this;
    var departmentName=getUrlParam('departmentName');
    vueThis.departmentName=departmentName;
    var data2={departmentName:departmentName}
    $(".touchMe").click(function(){
      window.location.reload();
      $("#employee").removeClass('.touchMe');
    })
    if(departmentName!=null){
      vueThis.value=departmentName;
      var Data=[];
      var Length=0;
    $.ajax({
        type:"POST",
        url:"http://Employee2.cn",
        data:data2,
        async:false, 
        success:function(data1,status){
              var Employee=JSON.parse(data1).data;
              vueThis.base=Employee;
              var Data2=[];
              Length=Employee.length
              if(Employee.length>=12){
                for(var i=0;i<12;i++){
                  Data2[i]=Employee[i]
                }
              }else if(Employee.length<12){
                 for(var i=0;i<Employee.length;i++){
                  Data2[i]=Employee[i]
                }
              }
              Data=Data2;
              return {Data:Data,Length:Length}
        }
      })
      this.total=Length
      this.tableData=Data;
    }else{
       vueThis.value='';
         var Data=[];
          var Length=0;
          $.ajax({
            type:"POST",
            async:false, 
            url:"http://Employee.cn",
            data:data2,
            success:function(data1,status){
              var Employee=JSON.parse(data1).data;
              vueThis.base=Employee;
              var Data2=[];
              Length=Employee.length
              console.log(Length)
              if(Employee.length>12){4
                for(var i=0;i<12;i++){
                  Data2[i]=Employee[i]
                }
              }else if(Employee.length<=12){
                 for(var i=0;i<Employee.length;i++){
                  Data2[i]=Employee[i]
                }
              }
              Data=Data2;
              return {Data:Data,Length:Length}
            }
          })
           this.tableData=Data;
          this.total=Length;
    }
  }  
}
</script>


<template>
  <div id="app">
    <div class='header B page'>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>加工日报列表</el-breadcrumb-item> 
    </el-breadcrumb>

    <el-button type="success" style="position:absolute;top:0;right:.5rem" @click="dialog = true" >添加加工日报表</el-button>
      <h1>加工日报列表</h1>

        <el-row style="margin:.2rem 0">
          <el-col :span="1" style="margin-left:.1rem;text-align:center">
            <span>车间</span>
          </el-col>
          <el-col :span="3">
            <el-select>
              <el-option value="一车间">一车间</el-option>
              <el-option value="二车间">二车间</el-option>
              <el-option value="三车间">三车间</el-option>
            </el-select>
          </el-col>
          <el-col :span="1" style="margin-left:.1rem;text-align:center">
            <span>机器</span>
          </el-col>
          <el-col :span="3">
            <el-select>
              <el-option value="机器1-2">机器1-2</el-option>
              <el-option value="机器1-3">机器1-3</el-option>
              <el-option value="机器1-4">机器1-4</el-option>
              <el-option value="机器1-5">机器1-5</el-option>
            </el-select>
          </el-col>
          <el-col :span="2" style="margin-left:.1rem;text-align:center">
            <span>加工时间</span>
          </el-col>
          <el-col :span="6">
            <template>
              <div class="block">
                <el-date-picker
                  v-model="value3"
                  type="datetimerange"
                  placeholder="选择时间范围">
                </el-date-picker>
              </div>
            </template>

          </el-col>
          <el-col :span="4" style="margin-left:.1rem">
            <el-button type="primary" class="processSearch">搜索</el-button>
            <el-button type="primary">导出数据</el-button>
          </el-col>
      </el-row>    

      <template>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            label="ID"
            width="80">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.ID }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="工件名"
            width="118">
            <template scope="scope">            
                  {{ scope.row.name }}               
            </template>
          </el-table-column>

          <el-table-column
            label="加工周期(秒)"
            width="160">
            <template scope="scope">            
                  {{ scope.row.time }}        
            </template>
          </el-table-column>

          <el-table-column
            label="开始时间"
            width="180">
            <template scope="scope">            
                  <span  style="display:inline-block;width:1rem">{{ scope.row.star[0] }}</span><span>{{ scope.row.star[1] }} </span>            
            </template>
          </el-table-column>

          <el-table-column
            label="结束时间"
            width="180">
            <template scope="scope">            
                 <span style="display:inline-block;width:1rem">{{ scope.row.end[0] }}</span><span>{{ scope.row.end[1] }}  </span>           
            </template>
          </el-table-column>

          <el-table-column
            label="数量"
            width="120">
            <template scope="scope">            
                  {{ scope.row.number }}               
            </template>
          </el-table-column>

          <el-table-column
            label="车间"
            width="100">
            <template scope="scope">            
                 {{ scope.row.workshop }}              
            </template>
          </el-table-column>

          <el-table-column
            label="机器编号"
            width="100">
            <template scope="scope">            
                  {{ scope.row.machine }}               
            </template>
          </el-table-column>

          <el-table-column
            label="加工数量"
            width="120">
            <template scope="scope">            
                  {{ scope.row.workNumber }}               
            </template>
          </el-table-column>

          <el-table-column
            label="改机时间"
            width="100">
            <template scope="scope">            
                  {{ scope.row.changeTime }}               
            </template>
          </el-table-column>

          <el-table-column
            label="稼动率"
            width="80">
            <template scope="scope">            
                {{ scope.row.rate }}             
            </template>
          </el-table-column>

          <el-table-column label="操作" width="180">
            <template scope="scope">
              <el-button
                size="small"
                @click="edit(scope.$index,scope.row)" type="primary" >编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="open2(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

        <el-dialog title="编辑加工日报表" v-model="dialogVisible" size="tiny">

        <el-row style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">工件名称</span>
          </el-col>
          <el-col :span="18">
              <el-input v-model="input" ></el-input>
          </el-col>
          </el-row>

        <p class="moveLeft">工件名称</p>

        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="5" >
            <span class="must">*</span><span class="inputName">所属车间</span>
          </el-col>
          <el-col :span="18">
              <el-select v-model="value5" style="width:100%;">
                <el-option label="一车间" value="一车间">一车间</el-option>
                <el-option label="二车间" value="二车间">二车间</el-option>
                <el-option label="三车间" value="三车间">三车间</el-option>
              </el-select>
          </el-col>
        </el-row>

        <el-row   style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
           <span class="must">*</span><span class="inputName">选择机器</span>
          </el-col>
          <el-col :span="18">
              <el-select v-model="value6" style="width:100%;">
                <el-option label="机器1" value="机器1-2">机器1-2</el-option>
                <el-option label="机器1-2" value="机器1-3">机器1-3</el-option>
                <el-option label="机器1-3" value="机器1-4">机器1-4</el-option>
                <el-option label="机器1-4" value="机器1-5">机器1-5</el-option>
              </el-select>
          </el-col>
        </el-row>

        <p class="moveLeft">选择机器</p>

        <el-row   style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">加工周期</span>
          </el-col>
          <el-col :span="18">
              <el-input v-model="input2" ></el-input>
          </el-col>
        </el-row>
       
        <p class="moveLeft">输入加工周期</p>

        <el-row  style="margin:.3rem 0px 0px .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">加工时间</span>
          </el-col>
         <el-col :span="9">
              <template>               
                  <el-date-picker style="width:1.7rem;" v-model="value1" type="date" placeholder="选择日期" >
                  </el-date-picker>               
              </template>
         </el-col>
         <el-col :span="8">
              <template>
                <el-time-picker
                 style="width:1.7rem;"
                  v-model="value2"
                  :picker-options="{
                    selectableRange: '00:00:00 - 23:59:59'
                  }"
                  placeholder="任意时间点">
                </el-time-picker>
              </template>
          </el-col>
        </el-row>
        
        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">数量</span>
          </el-col>
          <el-col :span="18">
              <el-input v-model="input3" ></el-input>
          </el-col>
        </el-row>
       
        <p class="moveLeft">加工工件的数量，比如一次加工成型3个工件数量为3</p>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>

        <el-dialog title="添加加工日报表" v-model="dialog" size="tiny">

        <el-row style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">工件名称</span>
          </el-col>
          <el-col :span="18">
              <el-input v-model="input4" ></el-input>
          </el-col>
          </el-row>

        <p class="moveLeft">工件名称</p>

        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="5" >
            <span class="must">*</span><span class="inputName">所属车间</span>
          </el-col>
           <el-col :span="18">
              <el-select v-model="value7" style="width:100%;">
                <el-option label="一车间" value="一车间">一车间</el-option>
                <el-option label="二车间" value="二车间">二车间</el-option>
                <el-option label="三车间" value="三车间">三车间</el-option>
              </el-select>
          </el-col>
        </el-row>

        <el-row   style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
           <span class="must">*</span><span class="inputName">选择机器</span>
          </el-col>
          <el-col :span="18">
              <el-select v-model="value8" style="width:100%;">
                <el-option label="机器1" value="机器1-2">机器1-2</el-option>
                <el-option label="机器1-2" value="机器1-3">机器1-3</el-option>
                <el-option label="机器1-3" value="机器1-4">机器1-4</el-option>
                <el-option label="机器1-4" value="机器1-5">机器1-5</el-option>
              </el-select>
          </el-col>
        </el-row>

        <p class="moveLeft">选择机器</p>

        <el-row   style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">加工周期</span>
          </el-col>
          <el-col :span="18">
              <el-input v-model="input5" ></el-input>
          </el-col>
        </el-row>
       
        <p class="moveLeft">输入加工周期</p>

        <el-row  style="margin:.3rem 0px 0px .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">加工时间</span>
          </el-col>
         <el-col :span="9">
              <template>               
                  <el-date-picker style="width:1.7rem;" v-model="value3" type="date" placeholder="选择日期" >
                  </el-date-picker>               
              </template>
         </el-col>
         <el-col :span="8">
              <template>
                <el-time-picker
                 style="width:1.7rem;"
                  v-model="value4"
                  :picker-options="{
                    selectableRange: '00:00:00 - 23:59:59'
                  }"
                  placeholder="任意时间点">
                </el-time-picker>
              </template>
          </el-col>
        </el-row>
        
        <el-row  style="margin:.3rem 0 0 .5rem">
          <el-col :span="5">
            <span class="must">*</span><span class="inputName">数量</span>
          </el-col>
          <el-col :span="18">
              <el-input v-model="input6" ></el-input>
          </el-col>
        </el-row>
       
        <p class="moveLeft">加工工件的数量，比如一次加工成型3个工件数量为3</p>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialog = false">取 消</el-button>
            <el-button type="primary" @click="addProcess">确 定</el-button>
          </span>
        </el-dialog>
         <p style="text-align:right;margin:.5rem">Copyright © 2015 <a href="http://www.listome.com" style="color:#50bfff">工厂宝</a> 版权所有 深圳利市通信息技术有限公司 粤ICP备15087798号-1 </p>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
       dialogVisible: false,
       dialog:false,
       value1:new Date(),
       value2:new Date(2016, 9, 10, 18, 40),
       value3:new Date(),
       value4:new Date(2016, 9, 10, 18, 40),
       value5:"",
       value6:"",
       value7:"",
       value8:"",
       input:"",
       input2:"",
       input3:"",
       input4:"",
       input5:"",
       input6:"",
       index:"",
    }
  },
    methods: {
      // 添加加工日报表
      addProcess(){
        this.dialog=false;
        var data2={name:"addProcess",taskName:this.input4,workshop:this.value7,machine:this.value8,time:this.input5,star1:this.value3,star2:this.value4,number:this.input6}
        console.log(data2)
        // var Data=[];
        // $.ajax({
        //   type:"post",
        //   async:false, 
        //   url:"url",
        //   data:data2,
        //   success:function(data1,status){
        //      var Processing=data1.data.processingList;
        //      Data=Processing;
        //      return Data
        //   }
        // })
        // this.tableData=Data;
      },
      // 编辑加工日报表
      edit(index,row){
        this.dialogVisible = true
        this.index=index
        this.input=row.taskName
        this.value5=row.workshop
        this.value6=row.machine
        this.input2=row.time
        this.value1=row.star[0]
        this.input3=row.number
      },
      editProcess(){
        this.dialogVisible = false
        var data2={name:"editProcess",editIndex:this.index,taskName:this.input,workshop:this.value5,machine:this.value6,time:this.input2,star1:this.value1,star2:this.value2,number:this.input3}
        console.log(data2)
         // var Data=[];
          // $.ajax({
          //   type:"POST",
          //   async:false, 
          //   url:"url",
          //   data:data2,
          //   success:function(data1,status){
          //      var Processing=data1.data.processingList;
          //      Data=Processing;
          //      return Data
          //   }
          // })
          // this.tableData=Data;

      },
      // 删除信息
      open2(index) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function(){
          var data2={name:"deleteProcess",deleteIndex:index};
          console.log(data2)
          // var Data=[];
          // $.ajax({
          //   type:"POST",
          //   async:false, 
          //   url:"url",
          //   data:data2,
          //   success:function(data1,status){
          //      var Processing=data1.data.processingList;
          //      Data=Processing;
          //      return Data
          //   }
          // })
          // this.tableData=Data;
        })
      }     
    }, 
    mounted:function(){
    var Data=[];
    $.ajax({
      type:"GET",
      async:false, 
      url:"http://localhost:8080/api/Processing",
      success:function(data1,status){
         var Processing=data1.data.processingList;
         Data=Processing;
         return Data
      }
    })
    this.tableData=Data;
    }
}

</script>

<template>
<div id="app">
  <div class='header A page editParssword'>
    <h1>修改密码</h1>
    <el-row class="tac">
      <p>
        <el-col :span="2">
          <span>*</span>
          <span>原来密码</span>
        </el-col>
        <el-col :span="12">
          <el-input v-model="input" placeholder="请输入内容"id="oldParssword"></el-input>
        </el-col>
      </p>
    </el-row>
    <el-row class="tac">
      <p>
        <el-col :span="2">
        <span>*</span>
        <span>修改密码</span>
        </el-col>
        <el-col :span="12">
        <el-input v-model="input2" placeholder="请输入内容"id="newParssword"></el-input>
        </el-col>
      </p>
    </el-row>
    <el-button id="btn" type="primary" @click="changePassword">提交修改</el-button>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      input:"" ,
      input2:""  
    }  
  }, 
  methods:{
    changePassword(){
     
      var data2={name:"changePassword",oldParssword:this.input,newParssword:this.input2}
      console.log(data2)
       alert("已提交修改")
      // $.ajax({
      //   type:"POST",
      //   url:"url",
      //   data:data2,
      //   success:function(data1,status){
      //     alert("密码修改"+status)
      //   }
      // })
    }
  },
  mounted:function(){
  $("#btn").on("click",function(){
    var data2={name:"changePassword",newPassword:$("#newParssword").val(),oldParssword:$("#oldParssword").val()};
    console.log(data2)
    // $.ajax({
    //   type:"POST",
    //   url:'url',
    //   data:data2,
    //   success:function(data,status){

    //   }
    // })
   })  	
    }
}
</script>
<style type="text/css">
.editParssword p{
  margin:.5rem 2.3rem;
}
  .editParssword p span:first-of-type{
    color: red;
    font-size:18px;
  }
  .editParssword p span:nth-of-type(2){
     font-size:16px;
  }
  #btn{
    margin:.5rem 7.15rem ;
  }
</style>
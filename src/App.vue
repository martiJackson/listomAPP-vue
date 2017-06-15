<template>
  <div id="app">
    <!-- 头部 -->
    <div class="head">
      <div class="logo">
        <img src="/static/logo.png">      
        <span>利市通-工厂宝</span>
      </div>
     
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  style="position:absolute;top:0;right:.5rem">
      <el-submenu index="1">
        <template slot="title">用户名</template>
        <el-menu-item index="1-1"><router-link to="/0" >修改密码</router-link></el-menu-item>
        <el-menu-item index="1-2">退出</el-menu-item>
      </el-submenu>
  </el-menu>
</div>
    <!-- 内容区 -->
    <div class="main">
    <!-- 侧边导航栏 -->
      <div class="side">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu default-active="2" class="el-menu-vertical-demo"  theme="dark">
            <el-submenu index="1">
              <template slot="title">部门管理</template>      
                <el-menu-item index="1-1"><router-link to="/">部门列表</router-link></el-menu-item>
            </el-submenu>
           
            <el-submenu index="2">
              <template slot="title">员工管理</template>      
              <el-menu-item index="2-1" id='employee'><router-link to="/3">员工列表</router-link></el-menu-item>
           </el-submenu>

            <el-submenu index="3">
              <template slot="title">车间管理</template>      
              <el-menu-item index="3-1"><router-link to="/6">车间列表</router-link></el-menu-item>
            </el-submenu> 

            <el-submenu index="4">
              <template slot="title">机器管理</template>      
              <el-menu-item index="4-1"><router-link to="/8">机器列表</router-link></el-menu-item>
              <el-menu-item index="4-2" id='task'><router-link to="/10" >机器任务列表</router-link></el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">加工日报表</template>      
              <el-menu-item index="5-1"><router-link to="/11">加工日报列表</router-link></el-menu-item>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">办公模块</template>      
              <el-menu-item index="6-1"><router-link to="/13">通知列表</router-link></el-menu-item>
               <el-menu-item index="6-2"><router-link to="/15">APP办公模块</router-link></el-menu-item>
            </el-submenu>

            <el-submenu index="7">
              <template slot="title">系统设置</template>      
              <a href="/static/map/map.html"><el-menu-item index="7-1">修改公司信息</el-menu-item></a>              
            </el-submenu>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
        
      </div>
      <router-view></router-view> 
    </div>
  </div>
</template>
<script>

export default {
  data(){
   return { 
            activeIndex: '1',
            activeIndex2: '1',
            employee:false,
            employeeValue:"",
            employeeData:{},
            task:false,
            taskValue:"",
            newData2:"",
            newDataValue:""

      }
  },
  mounted:function(){    
  }
}    
</script>

<style>
.logo>img{
  height:.5rem;
  float: left
}
.logo{
  line-height: .5rem
}
/*element-ui*/

div.el-submenu__title{
      font-size: 16px;
}
#app .el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-color: #324157;
}


@import './css/reset.css';
 @import './css/index.css';

</style>

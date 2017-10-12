<template>
   <div class="header">
      <div class="billlogo">管理或者记账系统</div>
      <div class="userimgbox">
          <el-dropdown>
      <span class="el-dropdown-link">
             <img class="userimg" src="../../assets/1.jpg">
      </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>账号设置</el-dropdown-item>
              <el-dropdown-item>我的主页</el-dropdown-item>
              <el-dropdown-item>安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
   </div>
</template>

<script>
    export default {
        name: '',
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
   .header{
      position:relative;
      top: 0;
      left: 0;
      width:100%;
      height:60px;
      line-height: 60px;
     color: white;
      background-color: #475669;
   }
  .billlogo{
    text-align: left;
    margin-left: 20px;
    float: left;
  }
  .userimgbox{
    float: right;
    height:60px;
  }
  .userimg{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 40px;
    vertical-align:middle
  }
</style>
<!--<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="userimg" src="../../assets/1.jpg">
                </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data:function () {
    return {
      name: 'linxin'
    }
  },
  }
</script>
<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
    background-color: #475669;
  }
  .header .logo{
    float: left;
    width:250px;
    text-align: center;
  }
  .user-info {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }
  .user-info .el-dropdown-link{
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
  }
  .user-info .user-logo{
    position: absolute;
    left:0;
    top:15px;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>-->

<template>
   <div class="timechoice">
    <span>日期范围：</span>
    <el-date-picker
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
     <span>——</span>
     <el-date-picker
       type="datetime"
       placeholder="选择日期时间">
     </el-date-picker>
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
.timechoice{
  float: left;
  margin-right: 20px;
}
</style>

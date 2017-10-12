<template>
    <div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="title" label="电影名" ></el-table-column>
          <el-table-column prop="director" label="导演" ></el-table-column>
          <el-table-column prop="movieLanguage" label="语言"></el-table-column>
          <el-table-column prop="movieYear" label="上映日期"></el-table-column>
          <el-table-column prop="movieType" label="类型"></el-table-column>
          <el-table-column prop="movieScore" label="豆瓣评分"></el-table-column>
        </el-table>
      </div>
      <div class="paging">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
           layout="total, prev, pager, next"
          :total="pageTotal">
        </el-pagination>
      </div>
    </div>
</template>

<script>
  import mock from '../../mock'
    export default {
        name: '',
        data: function () {
            return {
              tableData:[],
              currentPage:1,
              pageTotal:0,
              pageSize:1
            }
        },
      created:function () {
        this.$axios.get('/mydata').then((response) => {
          this.pageTotal=response.data.total;
          this.tableData=response.data.data;
        })
      },
      methods:{
        handleSizeChange:function(val) {
          console.log(val);
      },
       handleCurrentChange:function(val){
          console.log(val+"当前页数");
      }
      }
    }
</script>

<style scoped>
 .paging{
   float:right;
 }
</style>

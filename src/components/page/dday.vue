<template>
    <div class="today">
      <el-button type="primary" icon="search">查询</el-button>
      <el-button type="primary" icon="plus" @click="increase()">添加</el-button>
      <div class="billtable">
        <el-table :data="tableData"   stripe fit>
          <el-table-column label="日期">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="具体时间"  style="text-align: center">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="金额"  style="text-align: center">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.money }}</span>
            </template>
          </el-table-column>
          <el-table-column label="详情"  style="text-align: center">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.mdetails }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button size="small"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
        <div>
          <el-dialog title="消费记录" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="日期" :label-width="formLabelWidth">
                <el-date-picker  v-model="newdata.date"   type="date"  placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="时间" :label-width="formLabelWidth">
                <el-input  v-model="newdata.time" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="金额" :label-width="formLabelWidth">
                <el-input v-model="newdata.money" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="备注" :label-width="formLabelWidth">
                <el-input v-model="newdata.mdetails" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addbill">确 定</el-button>
            </div>
          </el-dialog>
        </div>
    </div>
</template>

<script>
    import querytime from '../public/time'
    export default {
        name: '',
        data: function () {
            return {
              tableData: [{
                date: '2017-07-21',
                time: '08:40',
                money:'￥6',
                mdetails:'早餐钱'
              }, {
                date: '2017-07-21',
                time: '11:55',
                money:'￥15',
                mdetails:'午餐钱'
              }, {
                date: '2017-07-21',
                time: '18:55',
                money:'￥2',
                mdetails:'公交车钱'
              }, {
                date: '2017-07-21',
                time: '19:15',
                money:'￥15',
                mdetails:'买菜钱'
              }],
              dialogTableVisible: false,
              dialogFormVisible: false,
              newdata:{
                date:0,
                time:'',
                money:'',
                mdetails:'',
                id:''
              },
              form: {
                namedate: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                remarks:'',
                time:'',
                money:''
              },
              formLabelWidth: '120px',
              boxdata:{}
            }
        },
        components: {

        },
        created:function(){
          console.log("你好")
        },
        methods:{
          addbill: function () {  //确定
            const _this=this;
            _this.newdata.date=_this.formatdate(_this.newdata.date);
            console.log(_this.newdata.date);
            console.log(_this.newdata.id);
            if(_this.newdata.id=="id"){
              console.log("修改数据状态" );
              _this.newdata= {date: _this.newdata.date, time: '', money: '', mdetails: '' }
            }else{
              console.log("当index为空时，这时弹框就是添加数据状态");
              _this.tableData.push(_this.newdata);
            }
            console.log(_this.newdata);
            _this.newdata="";
            _this.dialogFormVisible = false;
          },
          handleDelete:function (index) {  //删除
            this.tableData.splice(index, 1);
          },
          handleEdit: function (index, row) { //编辑数据
            this.newdata = row;
            this.newdata.id ="id";
            this.dialogFormVisible = true;
            console.log(this.newdata.id);
          },
          formatdate: function (mydate) {   //时间显示
            if(mydate){
              console.log("有时间数据");
              var reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
              var regExp = new RegExp(reg);
              if(!regExp.test(mydate)){
                console.log("没有通过正则")
                var y = mydate.getFullYear();
                var m = mydate.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                var d = mydate.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
              }else{
                console.log("通过正则");
                return mydate;
              }

            }else{
              console.log("没有时间数据");
              return ''
            }
          },
          increase:function(){  //添加
            this.newdata="";
            this.dialogFormVisible = true;
          }
        },
        filters: {
        },
        computed: {
           //computed可以关联一个变量  有get和set方法2.
        }
    }
</script>

<style scoped>

</style>

<template>
      <div>
        <div class="timeQuery">
          开始日期：
          <el-date-picker v-model="start" type="date" placeholder="选择日期"></el-date-picker>
          结束日期：
          <el-date-picker v-model="end" type="date" placeholder="选择日期"></el-date-picker>
          <el-button type="primary" size="small" v-on:click="fetchData" icon="search">查  询</el-button>
          <el-button type="primary" size="small" v-on:click="add" icon="plus">添  加</el-button>
        </div>
        <div class="table">
          <el-table v-bind:data="manifests" highlight-current-row border height="500">
            <el-table-column prop="Date" label="月份"></el-table-column>
            <el-table-column prop="Cost" label="总额"></el-table-column>
            <el-table-column prop="Remark" label="备注"></el-table-column>
            <el-table-column inline-template label="操作">
                        <span>
                            <el-button type="text" size="small" v-on:click="edit(row.ID)" icon="edit">编 辑</el-button>
                            <el-button type="text" size="small" v-on:click="del(row.ID)" icon="delete">删 除</el-button>
                        </span>
            </el-table-column>
          </el-table>
        </div>
        <div class="pager">
          <el-pagination v-bind:current-Page="pageIndex" v-bind:page-size="pageSize" :total="total"
                         layout="total,sizes,prev,pager,next,jumper" v-bind:page-sizes="pageSizes"
                         v-on:size-change="sizeChange" v-on:current-change="pageIndexChange">

          </el-pagination>
        </div>
        <div>
          <el-dialog v-bind:title="title" v-bind:close-on-click-modal="false" v-model="showOperateManifest" v-on:close="dialogClosed">
            <el-form v-bind:model="manifest" v-bind:rules="rules" ref="formManifest" label-position="left" label-width="80px">
              <el-form-item label="月 份" prop="Date">
                <el-date-picker v-model="manifest.Date"></el-date-picker>
              </el-form-item>
              <el-form-item label="总  额" prop="Cost">
                <el-input v-model="manifest.Cost"></el-input>
              </el-form-item>
              <el-form-item label="备  注" prop="Remark">
                <el-input v-model="manifest.Remark"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" v-on:click="save">确 定</el-button>
                <el-button type="primary" v-on:click="cancel">取 消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </div>
</template>

<script>
  export default {
    name: '',
    data:function(){
      let currentDate = new Date();
      let costValidator = (rule, value, callback) => {
        if (!/^[0-9]+(.[0-9]{2})?$/.test(value)) {
          callback(new Error("请输入合法金额"));
        }
        else {
          callback();
        }
      };
      return {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1),
        end: new Date(),
        manifests: [],
        title: "",
        manifest: {},
        showOperateManifest: false,
        isAdd: false,
        rules: {
          Date: [
            { type: "date", required: true, message: "请选择消费日期", trigger: "change" }
          ],
          Cost: [
            { required: true, message: "请填写消费金额", trigger: "blur" },
            { validator: costValidator, trigger: "change" }
          ],
          Remark: [
            { required: true, message: "请填写消费明细", trigger: "blur" }
          ]
        },
        pageIndex: 0,
        pageSize: 10,
        total: 0,
        pageSizes: [10, 20, 50, 100]
      }
    },
    created: function () {
      this.fetchData();
    },
    methods:{
      fetchData: function () {

      },
      add: function () {
        this.title = "添加消费明细";
        this.manifest = {
          ID: "D",
          Date: new Date(),
          Cost: "",
          Remark: ""
        };
        this.isAdd = true;
        this.showOperateManifest = true;
      },
      save: function () {  //获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。vue中就可以使用将ref绑定到元素上去。
      // 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素; 如果用在子组件上，引用就指向组件实例:
       const  _this=this;
        _this.$refs.formManifest.validate(valid => {   //function(valid){ if(){}else{}}
          if (valid) {
            let operateManifest = JSON.parse(JSON.stringify(_this.manifest));                     //JSON.parse()是从字符串中解析出json对象   JSON.stringify()是从对象中解析出字符串
            if (_this.isAdd) {
                console.log(operateManifest.Date)
                _this.manifests.push(operateManifest);
                _this.showOperateManifest = false;
                //bus.$emit("manifestChanged");

            }
            else {
                let updatedManifest = this.manifests.find(x => x.ID == this.manifest.ID);
                updatedManifest.Date = operateManifest.Date;
                updatedManifest.Cost = operateManifest.Cost;
                updatedManifest.Remark = operateManifest.Remark;
                this.showOperateManifest = false;
                //bus.$emit("manifestChanged" )
            }
          }
          else {
            return false;
          }
        });
      },
      cancel: function () {
        this.manifest = {};
        this.showOperateManifest = false;
      },
      edit: function (ID) {
        let currentManifest = this.manifests.find(x => x.ID == ID);
        this.manifest = JSON.parse(JSON.stringify(currentManifest));
        this.manifest.Date = new Date(this.manifest.Date);
        this.title = "编辑消费明细";
        this.isAdd = false;
        this.showOperateManifest = true;
      },
      del: function (ID) {
        this.$confirm("是否删除？", "警告", { type: "warning" })
          .then(() => {
          this.$http.delete("http://localhost:1500/api/Manifests/" + ID)
            .then(response => {
            let index = this.manifests.findIndex(x => x.ID == ID);
            this.manifests.splice(index, 1);
            bus.$emit("manifestChanged");
            this.$message({
              message: "删除成功",
              type: "success"
            });
          })
        .catch(err => {
            this.$alert(err.body.Message, "删除消费明细", { type: "error" });
            //console.log(err);
          });
        });
      },
      dialogClosed: function () {
        this.$refs.formManifest.resetFields();
      },
      sizeChange: function (pageSize) {
        this.pageSize = pageSize;
        this.fetchData();
      },
      pageIndexChange: function (pageIndex) {
        this.pageIndex = pageIndex;
        this.fetchData();
      }
    }
  }
</script>

<style scoped>
     .timeQuery{
       margin-bottom:20px;
     }
</style>

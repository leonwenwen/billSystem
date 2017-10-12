<template>
    <div>
      <h1>文件上传</h1>
      <div class="upfliebox">
        <!--1.on-preview可选参数, 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
            2.on-remove可选参数, 文件列表移除文件时的钩子
            3.action必选参数, 上传的地址
            4.list-type文件列表的类型
            -->
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
           :on-progress="startflie"
          :on-error="failflie">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
       <div style="margin-top: 100px">
         <el-upload
           class="upload-demo"
           action="https://jsonplaceholder.typicode.com/posts/"
           :on-preview="handlePreview"
           :on-remove="handleRemove2"
           :file-list="fileList2"
           list-type="picture">
           <el-button size="small" type="primary">点击上传</el-button>
           <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
         </el-upload>
       </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function () {
            return {
              dialogImageUrl: '../../assets/1.jpg',
              dialogVisible: false,
              fileList2: []
            }
        },
        methods: {
          handleRemove : function (file,fileList) {  //删除时
            console.log(file, fileList);
          },
          handleRemove2 : function (file,fileList) {  //删除时
            console.log(file, fileList);
          },
          handlePictureCardPreview : function (file) {   //点击查看大图
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
          },
          handlePreview : function (file) {
                 console.log(file);
          },
          startflie: function (event, file, fileList) {
                console.log("上传时"+file)
                console.log(file)
          },
          failflie: function (err, file, fileList){
                console.log("上传失败"+err)
                console.log(err)
          }
      }
    }
</script>

<style scoped>

</style>

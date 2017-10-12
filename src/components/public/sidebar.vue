<template>
    <div class="sidebar">
      <el-menu :default-active="$route.path"  class="el-menu-vertical-demo" unique-opened  router>
        <template v-for="bitem in billitem">
          <template v-if="bitem.sublist">
            <el-submenu  :index="bitem.index">
              <template slot="title"><i  :class="bitem.icon"></i>{{bitem.title}}</template>
              <el-menu-item  v-for="(subitem,myindex) in bitem.sublist" :index="subitem.topath" :key="myindex"  >
                {{subitem.title}}
              </el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item  :index="bitem.index">
              <i  :class="bitem.icon"></i>
              {{bitem.title}}
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function () {
            return {
              billitem:[
                {
                  icon: 'el-icon-star-on',
                  index: 'sameday',
                  title: '天账单',
                  sublist: [
                    {
                      topath: '/Dday',
                      title: '账单明细'
                    },
                    {
                      topath: '/Tday',
                      title: '账单总额'
                    }
                  ]
                },
                {
                  icon: 'el-icon-upload',
                  index: 'ctyle',
                  title: '表单样式',
                  sublist: [
                    {
                      topath: '/Basicfrom',
                      title: '基本'
                    },
                    {
                      topath: '/Upflie',
                      title: '文件上传'
                    }
                  ]

                },
                {
                  icon: 'el-icon-setting',
                  index: 'chartstyle',
                  title: '图表样式',
                  sublist: [
                    {
                      topath: '/Ccurve',
                      title: '曲线图'
                    },
                    {
                      topath: '/Ccolumn',
                      title: '柱状图'
                    },
                    {
                      topath: '/Cpie',
                      title: '饼状图'
                    },
                    {
                      topath: '/Cannular',
                      title: '环形图'
                    },
                    {
                      topath: '/Cblend',
                      title: '地图'
                    }
                  ]
                },
                {
                  icon: 'el-icon-menu',
                  index: '/tableplugin',
                  title: '数据axios请求'
                },
                {
                  icon: 'el-icon-date',
                  index: '/drag',
                  title: '消费总结'
                }
              ]
            }
        },
        computed: {
          onRoutes: function () {
            console.log(this.$route.path)
            return this.$route.path.replace('/','');  //$route.path表示当前路由，:index能直接跳转路由
          }
        }
    }
</script>

<style scoped>
  .sidebar{
    position:absolute;
    display: block;
    width:200px;
    top:60px;
    left:0;
    bottom:0;
  }
  .sidebar > ul {
    height:100%;
  }
</style>


<template>
    <div>
      <h1>柱状图</h1>
      <div id="main" style="width: 600px;height:400px;"></div>
      <h1>柱状图2</h1>
      <div id="bartwo" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');//不使用import，是因为require可以直接从node-modules中查找，而import必须将路径写完整

    export default {
        name: '',
        data: function () {
            return {}
        },
        mounted: function () {
            let  chartmyBar=echarts.init (document.getElementById('main'))
            let  bartwo=echarts.init (document.getElementById('bartwo'))
          chartmyBar.setOption({
            color: ['#475669'],  //调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。默认为：['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
            tooltip : {    //提示框组件。
              trigger: 'axis',  //触发类型。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发。
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            grid: {  //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。
              left: '3%', //grid 组件离容器左侧的距离。
              right: '4%', //grid 组件离容器右侧的距离。
              bottom: '3%',//grid 组件离容器下侧的距离。
              containLabel: true  //grid 区域是否包含坐标轴的刻度标签。
            },
            xAxis : [
              {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [ //系列列表。每个系列通过 type 决定自己的图表类型
              {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
              }
            ]
          });
          bartwo.setOption({
            tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            legend: {
              data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series : [
              {
                name:'直接访问',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
              },
              {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                name:'联盟广告',
                type:'bar',
                stack: '广告',
                data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                name:'视频广告',
                type:'bar',
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
              },
              {
                name:'搜索引擎',
                type:'bar',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine : {
                  lineStyle: {
                    normal: {
                      type: 'dashed'
                    }
                  },
                  data : [
                    [{type : 'min'}, {type : 'max'}]
                  ]
                }
              },
              {
                name:'百度',
                type:'bar',
                barWidth : 5,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
              },
              {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
              },
              {
                name:'必应',
                type:'bar',
                stack: '搜索引擎',
                data:[60, 72, 71, 74, 190, 130, 110]
              },
              {
                name:'其他',
                type:'bar',
                stack: '搜索引擎',
                data:[62, 82, 91, 84, 109, 110, 120]
              }
            ]
          });
        }
    }

</script>

<style scoped>

</style>

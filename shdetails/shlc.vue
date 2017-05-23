<template>
  <div class="ml50">
    <div class="bh-form-groupname sc-title-borderLeft bh-mb-24" title="urls.title">
      {{urls.title}}
    </div>

    <ul class="sh-body bh-bColor-primary-3 bh-border-l">
      <li>
        <div>
          <div class="sh-title">
            提交申请
          </div>
        </div>
        <div class="sh-value">
          <span class="sh-value-t">申请时间:</span><span>{{tjsj.shsj}}</span>
        </div>

      </li>
      <!--人事处审核-->
      <li v-for="item in list">
        <div>
          <div class="sh-title">
            {{item.title}}
          </div>
        </div>
        <div class="shzt bh-mv-4" :class="[item.bg]">
          {{item.shzt}}
        </div>
        <div class="sh-value">
          <span class="sh-value-t">审核人:</span><span>{{item.shr}}</span>
        </div>
        <div class="sh-value">
          <span class="sh-value-t">审核时间:</span><span>{{item.shsj}}</span>
        </div>
        <div class="sh-value">
          审核意见:
        </div>
        <div class="sh-value">
          {{item.shyj}}
        </div>
      </li>
      <!--人事处审核-->
    </ul>
  </div>
</template>
<script type="text/javascript">
  import pageUtil from 'bh-vue/utils/pageUtil';
  import {postJson, handler} from 'bh-vue/utils/http';

  export default {
    components: {

    },
    props: {
      urls: {
        type: Object,
        default: function(){
            return {}
        }
      },
      //参数集合
      row: {
        type: Object,
        default: function(){
          return {}
        }
      }
    },
    computed: {

    },
    data: () => {

      return {
        list: [],
        tjsj: {shsj:''}
      }
    },
    ready() {
      if(!!this.row.zfglWid){
        //初始化数据
        this.init();
      }

    },
    route: {},

    methods: {
      init(){

        var row = this.row,
          res = {zfglWid:row.zfglWid};
        this.urls.data && postJson(this.urls.data, res, handler.DATAS).then(data => {
          //此处存list
          if(!!data){

            if( !!data.rows[0] && !!data.rows[0].shsj ){
              this.tjsj = data.rows[0];
            }

            var rows =  data.rows.slice(1);

            _.each(rows,function(item,index){
              if(item.shzt == 0){
                item.shzt = '未审核';
                item.bg = 'bh-bg-grey-3';
              }else if(item.shzt == 1){
                item.shzt = '通过';
                item.bg = 'bh-bg-success';
              }else if(item.shzt == 2){
                item.shzt = '不通过';
                item.bg = 'bh-bg-danger';
              }
            });

            this.list = rows;

          }

        }, () => {
          //待删除
//            this.tjsj = {shsj:'2017-05-23'};
//          this.list = [
//            {
//              title:'标题1',
//              shr:'啊三',
//              shzt:'未审核',
//              bg:'bh-bg-grey-3',
//              shsj:'2017-05-23',
//              shyj:'我很有意见啊'
//            },
//            {
//              title:'标题2',
//              shr:'李毅',
//              shzt:'通过',
//              bg:'bh-bg-success',
//              shsj:'2017-05-23',
//              shyj:'我很有意见啊2'
//            },
//            {
//              title:'标题3',
//              shr:'啊牛',
//              shzt:'不通过',
//              bg:'bh-bg-danger',
//              shsj:'2017-05-23',
//              shyj:'我很有意见啊3'
//            }
//          ];
          //待删除
          pageUtil.tip('获取审核流程数据失败', 'danger');
        });

      }
    },
    watch: {
      'row': function () {
        this.init();
      }
    }
  }
</script>
<style scoped>
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .ml12{
    margin-left: 12px;
  }
  .ml4{
    margin-left: 4px;
  }
  .ml50{
    margin-left: 50px;
  }


  .sh-body>li{
    margin-left: 24px;
    margin-bottom: 24px;
  }

  .sh-title{
    color: #666666;
    font-size: 16px;
    position: relative;
  }
  .sh-title:after{
    content: '';
    width:12px;
    height:12px;
    background: #f0f1f9;
    border-radius: 50%;
    left: -31px;
    position: absolute;
  }
  .sh-value{
    color: #999999;
  }
  .sh-value-t{
    display: inline-block;
    width:70px;
  }
  .shzt{
    width: 50px;
    line-height: 26px;
    background: #f00;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
  }
</style>

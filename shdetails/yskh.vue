<template>
  <!--预算卡号-->
  <div>
    <div class="bh-form-groupname sc-title-borderLeft bh-mb-24" title="预算卡号">
      <span>预算卡号</span>
      <a href="javaScript:;" v-if="showAdd" class="more ml12" @click="alter()">修改卡号</a>
    </div>

    <div class="bh-row ml4">

      <div class="bh-col-md-4" v-for="(index,item) in kalist">
        <div class="ka-box bh-p-8">
          <div>
            <div class="ka-icon vm">
              <i class="iconfont W_icon-yinxingqia icon" :class="iconClass[index%3]"></i>
            </div>
            <div class="kahao vm ml4">
              {{item.yskh}}
                  </div>
          </div>
          <div class="bh-clearfix bh-mt-4">
            <div class="ka-title bh-pull-left">
              余额
            </div>
            <div class="ka-value bh-pull-left">
              <span>{{item.ye}}</span>
              <span>元</span>
            </div>
          </div>
          <div class="bh-clearfix bh-mt-4">
            <div class="ka-title bh-pull-left">
              支付金额
            </div>
            <div class="ka-value bh-pull-left">
              <span>{{item.zfje}}</span>
              <span>元</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!--预算卡号-->
</template>

<script type="text/javascript">

//  import iconfont from 'statics/css/iconfont'
  import {postJson, handler} from 'bh-vue/utils/http';
  import pageUtil from 'bh-vue/utils/pageUtil';
  export default {
    components: {},

    computed: {},
    data: () => {

      return {
        kalist: [],
        iconClass: ['ka-icon0','ka-icon1','ka-icon2']
      }
    },
    props: {
      urls: String,
      //参数集合
      row: {
        type: Object,
        default: function(){
          return {}
        }
      },
      showAdd: true,
      yskhFlag: {
        default: function(){
            return []
        }
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

        // 获取预算卡号数据
        var row = this.row,
          res = {zfglWid:row.zfglWid};
        this.urls && postJson(this.urls, res, handler.DATAS).then(data => {
          //kalist此处用kalist数据
          if(!!data){
            var rows = data.rows;

            this.kalist = rows;
          }
        }, () => {

          pageUtil.tip('获取预算卡号失败', 'danger');
        });

      },
      alter () {
        this.$dispatch('alter');
      }

    },
    watch: {
      'row': function () {
        this.init();
      },
      'yskhFlag': function (newValue,oldValue) {

        this.init();
      }
    }
  }
</script>
<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 48px;
    margin-top: -10px;
    margin-left: -6px;
  }
  .ml12 {
    margin-left: 12px;
  }

  .ml4 {
    margin-left: 4px;
  }
  .vm{
    vertical-align: middle;
  }
  .ka-box{
    width:224px;
    height:96px;
    border:1px solid #d8dcf0;
    margin-bottom: 8px;
  }
  .ka-icon{
    display: inline-block;
    width:40px;
    height:30px;
  }
  .ka-icon0{
    color: #3e50b4;
  }
  .ka-icon1{
    color: #ffcc00;
  }
  .ka-icon2{
    color: #bc6cc9;
  }
  .kahao{
    display: inline-block;
    font-size: 16px;
    color: #666666;
  }
  .ka-title{
    width:64px;
    color: #999999;
  }
  .ka-value{
    color:#333333;
  }
  .more{
    font-size: 12px;
  }
</style>

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
      this.init();

    },
    route: {},

    methods: {
      init(){

        // 获取预算卡号数据
        this.urls.data && postJson(this.urls.data, {zfglWid:this.row.zfglWid}, handler.DATAS).then(data => {
          //此处存list
          if(!!data){

            if( !!data.rows[0] && !!data.rows[0].shsj ){
              this.tjsj = data.rows[0];
            }

            this.list = data.rows.slice(1);

          }

        }, () => {
          pageUtil.tip('获取数据失败', 'danger');
        });

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

</style>

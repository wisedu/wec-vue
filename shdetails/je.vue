<template>
  <!--金额-->
  <div class="bh-mt-24">
    <div class="bh-form-groupname sc-title-borderLeft bh-mb-24 rel" title="金额">
      <div class="bh-clearfix">
        <div class="">金额</div>
        <!--<div class="bh-pull-left je-title">
          <span v-if="dataObj.wbbz != 2 && dataObj.wbbz !== null">金额</span>
        </div>-->
        <div class="bh-pull-left je-value l16">
          <span class="je-num">{{dataObj.je}}</span>&nbsp;{{wbbz}} <span class="fno" v-if="dataObj.wbbz != 2 && dataObj.wbbz !== null">(汇率：{{dataObj.wbhl}}%)</span>
        </div>
      </div>
      
    </div>
    <div class="ml12">
      
      <div class="bh-clearfix" v-if="dataObj.wbbz != 2 && dataObj.wbbz !== null ">
        <div class="bh-pull-left je-title">
          对应人民币金额
        </div>
        <div class="bh-pull-left je-value l30">
          <span class="je-num">{{dataObj.rmbje}}&nbsp;元</span>
        </div>
      </div>
    </div>
  </div>
  <!--金额-->
</template>
<script type="text/javascript">

  var bz = {
      '1': '美元',
      '2': '元'
  };

  import pageUtil from 'bh-vue/utils/pageUtil';
  import {postJson, handler} from 'bh-vue/utils/http';

  export default {
    components: {},

    computed: {
      wbbz() {
        if(!!this.dataObj.wbbz){
          return bz[this.dataObj.wbbz];
        }else{
          return '元'
        }
        
      }
    },
    data: () => {

      return {

      }
    },
    props: {

      dataObj: {
        type: Object,
        default: function(){
          return {
            wbbz:'',
            je: '',
            rmbje: ''
          }
        }
      }
    },
    ready() {
    },
    route: {},

    methods: {

    }
  }
</script>
<style scoped>
  .fno{
    font-weight:normal;
  }
  .ml12 {
    margin-left: 12px;
  }

  .ml4 {
    margin-left: 4px;
  }
  .rel{
    position: relative;
  }
  .l16{
    position: absolute;
    left: 150px;
    top: 0;
    line-height: 16px;
  }
  .l30{
    line-height: 30px;
  }
  .je-title{
    width:140px;
    color: #666666;
  }
  .je-value{
    color: #666666;
  }
  .je-title{
    line-height: 30px;
    font-size: 16px;
  }
  .je-num{
    font-size: 24px;
  }
</style>

<template>
  <!--金额-->
  <div class="bh-mt-24">
    <div class="bh-form-groupname sc-title-borderLeft bh-mb-24" title="金额">
      金额
    </div>
    <div class="ml12">
      <div class="bh-clearfix">
        <div class="bh-pull-left je-title">
          对应{{wbbz}}金额
        </div>
        <div class="bh-pull-left je-value">
          <span class="je-num">{{dataObj.je}}</span>&nbsp;{{wbbz}} <span v-if="dataObj.wbbz != 2">(汇率：{{dataObj.wbhl}}%)</span>
        </div>
      </div>
      <div class="bh-clearfix" v-if="dataObj.wbbz != 2">
        <div class="bh-pull-left je-title">
          对应人民币
        </div>
        <div class="bh-pull-left je-value">
          <span class="je-num">{{dataObj.rmbje}}</span>&nbsp;元
        </div>
      </div>
    </div>
  </div>
  <!--金额-->
</template>
<script type="text/javascript">

  var bz = {
      '1': '美元',
      '2': '人民币'
  };

  import pageUtil from 'bh-vue/utils/pageUtil';
  import {postJson, handler} from 'bh-vue/utils/http';

  export default {
    components: {},

    computed: {
      wbbz() {
        return bz[this.dataObj.wbbz];
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

  .ml12 {
    margin-left: 12px;
  }

  .ml4 {
    margin-left: 4px;
  }
  .je-title{
    width:100px;
    color: #666666;
  }
  .je-value{
    color: #666666;
  }
  .je-title,.je-value{
    line-height: 30px;
    font-size: 16px;
  }
  .je-num{
    font-size: 24px;
  }
</style>

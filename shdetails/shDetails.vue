<template>
  <div>
    <div class="bh-mb-16" v-if="toggleTop">
      <h5>合同名称：{{row.htmc}}</h5>
    </div>
    <!--正文-->
    <div class="bh-row">
      <div class="bh-col-md-8 bh-pb-32">
        <!--支付信息-->
        <emap-form v-ref:form
                   offset-top=0
                   :options="ps.option"
                   :outline="ps.outline"
                   >
        </emap-form>
        <!--支付信息-->

        <!--借款原因-->
        <jkyy :data-obj="info"  v-if="toggleText"></jkyy>
        <!--借款原因-->

        <!--预算卡号-->
        <yskh :urls="urls.yskh.data" :row="row" @alter="alter" :yskh-flag="yskhFlag" :show-add="showAdd" v-if="toggleCard"></yskh>
        <!--预算卡号-->

        <!--关联发票-->
          <div class="bh-mt-16">
            <glfp titleval="关联发票信息"  :row="row" :urls="urls.glfp.data" :flag="true" v-if="toggleInvoice"></glfp>
          </div>
        <!--关联发票-->

        <!--其他支付凭证-->
        <div class="bh-mt-24">
          <glfp titleval="其他支付凭证" :row="row" :urls="urls.glfp.data" :flag="false" v-if="toggleInvoice"></glfp>
        </div>
        <!--关联发票-->

        <!--金额-->
        <je :data-obj="zfxqsyxxObj" ></je>
        <!--金额-->


      </div>

      <!--审核流程-->
      <div class="bh-col-md-4" v-if="showShlc">
        <shlc :urls="urls.shlc" :row="row"></shlc>
      </div>
      <!--审核流程-->

    </div>
    <!--正文-->

    <!--底部按钮-->
    <btn-footer
      :toggle-prev="togglePrev"
      :toggle-group="toggleGroup"
      @pass="pass"
      @returns="returns"
      @notpass="notpass"
      @prev="prev"
      @next="next">
    </btn-footer>
    <!--底部按钮-->
  </div>
</template>
<script type="text/javascript">
  /**
   * @module shxx
   * 支付审核详情模块，需要配置请求相关的 url,
   *
   * @example
   * <shxx  :urls='urls' :toggle-prev="false" :toggle-group="true"></shxx>
   *
   * @example
   * export default {
   *   data: () => ({
   *    //上一份，下一份显示隐藏
   * togglePrev: {
   *   default: false
   * },
   * //整个按钮组显示隐藏
   * toggleGroup: {
   *   default: true
   * },
   * //预算卡号模块显示隐藏
   * toggleCard: {
   *   default: true
   * },
   * //借款原因
   *  toggleText: {
   *    default: false
   * },
   * //关联发票和其他凭证的显示隐藏
   *  toggleInvoice: {
   *    default: true
   *  },
   *  //接收参数
   *  row: {
   *    type: Object,
   *    default: function(){
   *      return {}
   *    }
   *  },
   * //各页面的配置url
   * urls: {
   *   type: Object,
   *   default: () => ({
   *     form:{ // 支付信息配置
   *       meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-zcgl-zfgl/zfgl_zfsq_zfxq.json',
   *       model: 'xmgl_ysxm_view',
   *       data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
   *     },
   *     yskh: { // 预算卡号url
   *       data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
   *     },
   *     glfp: { // 关联发票url
   *       data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
   *     },
   *     je: { // 金额url
   *       data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
   *     },
   *     shlc: { // 审核流程
   *       data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
   *     },
   *     jkyy: { // 借款原因
   *       title: '借款原因',
   *       data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
   *     }
   *  })
   *}
   *   }),
   * methods: {
   *   //底部按钮组件方法
   *  pass () {//通过
   *     this.$dispatch('pass');
   *   },
   *   returns () {//退回
   *     this.$dispatch('returns');
   *   },
   *   notpass () {//不通过
   *     this.$dispatch('notpass');
   *   },
   *   prev () {//上一个
   *     this.$dispatch('prev');
   *   },
   *   next () {//下一个
   *     this.$dispatch('next');
   *   },
   *   //底部按钮组件方法
   *   alter () {//修改卡号
   *     this.$dispatch('alter');
   *   },
   *   //退回按钮
   *   back () {
   *     this.$dispatch('back');
   *   }
   *  }
   *}
   */

//  import service from '../service';
  import {postJson, handler} from 'bh-vue/utils/http';
  import pageUtil from 'bh-vue/utils/pageUtil';
  import emapForm from 'bh-vue/emap-form/emapForm.vue'
  import glfp from './glfp.vue'
  import btnFooter from './btnFooter.vue'
  import yskh from './yskh.vue'
  import je from './je.vue'
  import shlc from './shlc.vue'
  import jkyy from './jkyy.vue'
  import bhButton from 'bh-vue/bh-button/bhButton.vue'


  export default {
    components: {
      emapForm,
      glfp,
      btnFooter,
      yskh,
      je,
      shlc,
      jkyy,
      bhButton
    },
    props: {
      //上一份，下一份
      togglePrev: {
        default: false
      },
      //整个按钮组
      toggleGroup: {
        default: true
      },
      //预算卡号模块显示隐藏
      toggleCard: {
        default: true
      },
      //借款原因的显示隐藏
      toggleText: {
        default: false
      },
      //关联发票和其他凭证的显示隐藏
      toggleInvoice: {
        default: true
      },
      //是否展示预算卡号
      showAdd: {
        default: true
      },
      //是否展示合同名称
      toggleTop: {
        default: false
      },
      //是否展示审核流程
      showShlc: {
        default: true
      },
      //接收表格带过来的参数
      row: {
        type: Object,
        default: function(){
          return {}
        }
      },
      //修改卡号更新数据的时候，刷新预算卡号
      yskhFlag: {
        default: function(){
          return {}
        }
      },
      //各页面的配置url
      urls: {
        type: Object,
        default: () => ({
          form:{ // 支付信息配置
            meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-zcgl-zfgl/zfgl_zfsq_zfxq.json',
            model: 'zfsh_shxq_zfxq',
            data: '/nk-zcgl-zfgl/zfsh/shxq/zfxq'
          },
          yskh: { // 预算卡号url
            data: '/nk-zcgl-zfgl/zfsh/shxq/zfxqYskhList'
          },
          glfp: { // 关联发票url
            data: '/nk-zcgl-zfgl/zfsh/shxq/scpz'
          },
          je: { // 金额url
            data: '/nk-zcgl-zfgl/zfsh/shxq/zfxqsyxx'
          },
          shlc: { // 审核流程http://res.wisedu.com:8000
            title: '审核流程',
            data: '/nk-zcgl-zfgl/zfsh/shxq/ckshjd'
          }
        })
      }

    },
    computed: {
      ps() {
        let obj = {
          option: {
            pagePath: this.urls.form.meta,
            modelName: this.urls.form.model,
            outline: true,
            readonly: true,
            model: 'v',
            cols: 2
          },
          outline: false
        };

        return obj;
      }
    },
    data: () => {

      return {
        zfxqsyxxObj: {},
        info: []
      }
    },

    route: {},
    ready() {
      
      if(!!this.row.zfglWid){
        this.formInited();
        this.jeInited();
      }


    },
    methods: {
      formInited(){
        let self = this;
        // 获取支付信息数据
        var row = this.row,
        res = {zfglWid:row.zfglWid};
        this.urls.form.data && postJson(this.urls.form.data, res, handler.DATAS).then(data => {

          var zflb = {
            1: '合同类',
            2: '用途类'
          },
          sfjk = {
            0: '是',
            1: '不是'
          },
          zffs = {
            1: '电汇',
            2: '汇票 ',
            3: '支票',
            4: '现金'
          };

          data.zflb = zflb[data.zflb];

          data.sfjk = sfjk[data.sfjk];

          data.zffs = zffs[data.zffs];
          
          //预算卡号处理(array)
          // var yskh = data.yskh,
          // yskhArr = [];

          // _.each(yskh,(item,index)=>{
          //   yskhArr.push(item.yskh);
          // });
    
          // data.yskh = yskhArr.join(',');

          this.$refs.form.reload();
          this.$refs.form.setValue(data);
        }, () => {
          this.$refs.form.reload();
          pageUtil.tip('获取支付信息失败', 'danger');
        });

      },
      jeInited(){

        let self = this;
        // 获取金额和合同号、借款原因数据
        var row = this.row,
          res = {zfglWid:row.zfglWid};
        this.urls.je.data && postJson(this.urls.je.data, res, handler.DATAS).then(data => {

          if(!!data){
            this.zfxqsyxxObj = data;

            var zflb = data.zflb,
              sfjk = data.sfjk,
              obj = {},
              self = this;

            if( zflb == 1 && sfjk == 0){

              obj.title = '借款原因';

              obj.value = data.jkyy;

              self.info.push(obj);

            }else if(zflb == 2 && sfjk == 1){

              obj.title = '用途说明';

              obj.value = data.ytsm;

              self.info.push(obj);

            }else if(zflb == 2 && sfjk == 0){

              self.info = [
                {
                  title: '用途说明',
                  value: data.ytsm
                },
                {
                  title: '借款原因',
                  value: data.jkyy
                }
              ];

            }

          }
        }, () => {
          pageUtil.tip('获取金额和合同号数据失败', 'danger');
        });

      },
      //底部按钮组件方法
      pass () {
        this.$dispatch('pass');
      },
      returns () {
        this.$dispatch('returns');
      },
      notpass () {
        this.$dispatch('notpass');
      },
      prev () {
        this.$dispatch('prev');
      },
      next () {
        this.$dispatch('next');
      },
      //底部按钮组件方法
      //修改卡号
      alter () {
        this.$dispatch('alter');
      }
    },
    watch: {
      'row': function () {

          this.formInited();
          this.jeInited();
      }
    }
  }
</script>
<style scoped>
  .tuihui{
    position: absolute;
    border-radius: 5px;
    top: -48px;
    left: 153px;
  }
  .l30{
    line-height: 30px;
  }
</style>

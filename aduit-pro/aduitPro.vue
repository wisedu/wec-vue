<template>
  <bh-step-flow class='wec-audit-pro'>
    <bh-flow-node v-for="item in nodeList" :tag="item.status" :num="item.nodeIndex" :title='item.title'
                  :class-name="item.tagClass" :caption="item.caption">
      <div class="bh-mb-8">
        <span class="bh-text-caption bh-color-caption">审核人</span>
        <span class="bh-text-caption bh-color-default  bh-mh-4">{{item.shr}}</span>
      </div>
      <div>
        <span class="bh-text-caption bh-color-caption">审核意见</span>
        <span class="bh-text-caption bh-color-default  bh-mh-4">{{item.shyj}}</span>
      </div>
    </bh-flow-node>
  </bh-step-flow>
</template>
<script type="text/ecmascript-6">
  /**
   * @module aduitPro
   * 合同审核进度条，需要其url,
   *
   *
   * @example
   * <flow-state :url="url" ></flow-state>
   *
   */

  import bhStepFlow from 'bh-vue/bh-step-flow/bhStepFlow.vue'
  import bhFlowNode from 'bh-vue/bh-flow-node/bhFlowNode.vue'
  import {postJson, handler} from 'bh-vue/utils/http'

  export default{

    data: () => {
      return {
        nodeList: []
      }
    },

    props: {
      url: String,
      wid:String
    },
    components: {bhStepFlow, bhFlowNode},
    computed: {},
    created(){
      postJson(this.url, {wid: this.wid}, handler.DATAS).then((data) => {
        let nodeIndex = 0
        data.rows.forEach((item) => {
          if (item.shzt === 0) {
            item.status = '未审核'
            item.tagClass = 'warning'
          } else if (item.shzt === 1) {
            item.status = '通过'
            item.tagClass = 'success'
          } else if (item.shzt === 2) {
            item.status = '不通过'
            item.tagClass = 'danger'
          } else if (item.shzt === 4) {
            item.status = '退回'
            item.tagClass = 'danger'
          }
          if (nodeIndex < data.rows.length) {
            item.nodeIndex = nodeIndex + 1
            nodeIndex = item.nodeIndex
            item.nodeIndex = item.nodeIndex.toString()//转成字符串
          }
          if(!!item.shsj){
            item.caption = '<span class="bh-text-caption bh-color-caption">审核时间</span>'+
                  '<span class="bh-text-caption bh-color-default bh-mh-8">'+item.shsj+'</span>'
          }else{
            item.caption = '';
          }
          
        })
        this.nodeList = data.rows
      })
    }
  }
</script>

<style>
    .wec-audit-pro .bh-text-caption.bh-caption-default {
      margin-left: 12px;
      margin-top: 8px;
      margin-bottom: 6px;
    }

    .wec-audit-pro .scenes-cbrt-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: calc(100% - 30px);
    }
</style>

<template>
    <bh-step-flow>
        <bh-flow-node v-for="item in nodeList" :tag="item.status" :num="$index + 1" :title='item.title' :class-name="item.tagClass">
            <div class="bh-mv-8">
                <span class="bh-text-caption bh-color-caption">审核时间</span>
                <span class="bh-text-caption bh-color-default bh-mh-4">{{item.shsj}}</span>
            </div>
            <div class="bh-mb-8">
                <span class="bh-text-caption bh-color-caption">审核人</span>
                <span class="bh-text-caption bh-color-default    bh-mh-4">{{item.shr}}</span>
            </div>
            <div>
                <span class="bh-text-caption bh-color-caption">审核意见</span>
                <span class="bh-text-caption bh-color-default    bh-mh-4">{{item.shyj}}</span>
            </div>
        </bh-flow-node>
    </bh-step-flow>
</template>
<script>
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
            wid:String, // 合同 id
            tmId: String // 条目 id
        },
        components: {bhStepFlow, bhFlowNode},
        computed: {},
        created () {
            postJson(this.url, {wid: this.wid, tmwid: this.tmId}, handler.DATAS).then((data) => {
                let rows = data.rows;

                rows.forEach((item) => {
                    if (item.shzt === 0) {
                        item.status = '未审核'
                        item.tagClass = 'warning'
                    } else if (item.shzt === 1) {
                        item.status = '通过'
                        item.tagClass = 'success'
                    } else if (item.shzt === 2) {
                        item.status = '退回修改'
                        item.tagClass = 'danger'
                    }
                });

                this.nodeList = rows;
            })
        }
    }
</script>

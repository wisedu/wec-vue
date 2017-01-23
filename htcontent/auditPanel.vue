<template>
    <div>
        <template v-if='status === 1'> <!-- 审核已通过 -->
            <div v-if='!feedback'>
                <div class='audit audit-ok bh-p-8'>
                    <i class='icon iconfont bh-color-success icon-checkcircle vmiddle'></i>
                    <span class='title bh-mh-8 vmiddle'>已通过</span>
                    <span class='bh-pull-right bh-color-danger-2 hand' @click='feedback=true'>条目有问题</span>
                </div>
                <div class='bh-mv-8'>
                    <span class='sub-indent bh-color-primary-2 hand'>查看审核进度</span>
                </div>
            </div>
            <div v-if='feedback' class='feedback bh-p-8'>
                <div class='title'>提交问题</div>
                <div class="tip bh-mv-8 bh-bg-info-3 bh-p-4">此条目已通过审核，如果需要修改，请填写修改原因</div>
                <textarea class='bh-bColor-info-3 bh-p-4' placeholder="请填写修改原因，不超过100个汉字" v-model='reason'></textarea>
                <bh-button class='bh-pull-right bh-mv-4' @click='cancelFeedback'>取消</bh-button>
            </div>
        </template>
        <template v-if='status === 2'> <!-- 审核不通过 -->
            <div class='audit audit-reject bh-p-8'>
                <i class='icon iconfont bh-color-danger icon-cancel vmiddle'></i>
                <span class='title bh-mh-8 vmiddle'>审核不通过</span>
            </div>
            <div class='bh-pv-8 sub-indent'>
                <span class='subtitle bh-mr-8 vmiddle bh-str-cut' :title='item.lcjdmc'>{{item.lcjdmc}}</span>
            </div>
            <div class='bh-pv-8 sub-indent'>
                <span class='label bh-color-grey-3 bh-mr-8'>审核人&emsp;</span><span>{{item.shr}}</span><br>
                <span class='label bh-color-grey-3 bh-mr-8'>审核时间</span><span>{{item.shsj}}</span><br>
                <span class='label bh-color-grey-3 bh-mr-8'>审核意见</span><span>{{item.shyj}}</span>
            </div>
            <div class='bh-mb-8'>
                <span class='sub-indent bh-color-primary-2 hand'>查看审核进度</span>
            </div>
        </template>
        <template v-if='status === 0'> <!-- 待审核 -->
            <div class='audit bh-p-8'>
                <div class='title'>审核结果</div>
                <bh-radio class='radiolist bh-mv-8' :items='auditStatus' :value.sync='auditVal' dir='h' @change='auditChange'></bh-radio>
                <textarea v-if='auditVal === 2' class='bh-bColor-info-3 bh-ph-4' placeholder="请填写审核意见，不超过100个汉字" v-model='auditContent'></textarea>
            </div>
            <div class='bh-ph-8 bh-mb-8'>
                <span class='bh-color-primary-2 hand'>查看审核进度</span>
            </div>
        </template>
    </div>
</template>

<script>
    import BhButton from 'bh-vue/bh-button/bhButton';
    import BhRadio from 'bh-vue/bh-radio/bhRadio';

    export default {
        data: () => ({
            feedback: false, // 是否需要提交问题
            reason: '', // 修改原因
            auditContent: '', // 审核意见
            auditStatus: [{name: '通过', value: 1}, {name: '退回', value: 2}],
            auditVal: 0 // 审核结果
        }),
        props: {
            item: Object
        },
        computed: {
            status () { // 审核状态（0--未审核； 1--通过； 2--不通过）
                return this.item.shzt;
            }
        },
        methods: {
            cancelFeedback () {
                this.feedback = false;
                this.reason = '';
            },
            auditChange (val) {
                this.$dispatch('audit', this.item.wid, val);
            },
            getAuditInfo () {
                let item = this.item;
                return {
                    wid: item.wid,
                    shzt: this.auditVal,
                    shyj: this.auditContent
                };
            }
        },
        components: {BhButton, BhRadio}
    };
</script>

<style scoped lang='less'>
    .audit {
        i {
            font-size: 30px;
        }

        .radiolist {
            margin-left: -28px;
        }
    }

    textarea {
        width: 100%;
    }

    .hand {
        cursor: pointer;
    }

    .sub-indent {
        margin-left: 50px;
    }

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .subtitle {
        font-size: 16px;
        font-weight: bold;
        max-width: e("calc(100% - 50px)");
        display: inline-block;
    }

    .vmiddle {
        vertical-align: middle;
    }
</style>

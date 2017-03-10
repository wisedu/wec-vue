<template>
    <div>
        <div>
            <span class='label bh-mr-16'>支付条件</span>
            <span class='value'>{{payInfo.zftj}}</span>
        </div>
        <div class='bh-mv-8'>
            <span class='label bh-mr-16'>付款时间</span>
            <span class='value'>{{payInfo.fksjd}}</span>
        </div>
    </div>
</template>

<script>
    /**
     * 一次性付款
     */
    import {postJson, handler} from 'bh-vue/utils/http';
    import pageUtil from 'bh-vue/utils/pageUtil';

    export default {
        data: () => ({
            payInfo: {}
        }),
        props: {
            wid: String,
            dataUrl: String
        },
        created () {
            if (!this.wid || !this.dataUrl) {
                return;
            }

            postJson(this.dataUrl, {wid: this.wid}, handler.DATAS).then(data => {
                this.payInfo = data;
            }, () => {
                pageUtil.tip('获取付款信息失败', 'danger');
            });
        },
        ready () {
            Vue.nextTick(() => {
                pageUtil.resetPageFooter();
            })
        }
    };
</script>

<style scoped>
    .label {
        font-weight: bold;
    }
</style>

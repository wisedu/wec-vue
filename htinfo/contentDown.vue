<template>
    <div>
        <form-group title="合同内容">
            <div class="bh-clearfix bh-form-horizontal bh-form-readonly bh-form-block">
                <div class="bh-form-group  bh-col-md-6" data-col="1">
                    <label class="bh-form-label bh-form-readonly-label " title="原始版本">原始版本</label>
                    <div class="bh-form-readonly-input">

                        <a class="bh-form-static down bh-ph-8" @click="downFirst">{{ysbb}}</a>
                    </div>
                </div>
                <div class="bh-form-group bh-col-md-6" data-col="1">
                    <label class="bh-form-label bh-form-readonly-label " title="已盖章版本">已盖章版本</label>
                    <div class="bh-form-readonly-input">
                        <label v-if="noPdf" class="bh-form-static bh-ph-8">无</label>
                        <a v-else class="bh-form-static down bh-ph-8" :href='fjxzlj' target="_blank">{{fjmc}}</a>
                    </div>
                </div>
            </div>
        </form-group>
    </div>
</template>
<script>
    import formGroup from './formGroup.vue'
    import pageUtils from 'bh-vue/utils/pageUtil'
    import {postJson, handler} from 'bh-vue/utils/http'
    /**
     * 获取合同内容的下载文件的url
     */
    const queryData = (url, wid) => {
        return postJson(url, {wid: wid}, handler.datas);
    };
    export default{
        data: ()=> {
            return {
                noPdf: true,
                ysbb: '',
                fjWid: '',
                fjmc: '',
                fjxzlj: '',
                htWid: '',
                sfzs: ''
            }
        },
        components: {formGroup},
        props: {
            wid: String,
            dataUrl: String,
            generatePdf: String,
            isZs: Boolean
        },
        created(){
            queryData(this.dataUrl, this.wid).then(data=> {
                if (data.code === '0') {
                    let downData = data.datas
                    this.ysbb = downData.ysbb
                    this.htWid = downData.htWid
                    this.sfzs = downData.sfzs
                    if (downData.ygzbb === '' || downData.ygzbb === null) {
                        this.noPdf = true
                    } else {
                        this.noPdf = false
                        this.fjWid = downData.ygzbb.fjWid
                        this.fjmc = downData.ygzbb.fjmc
                        this.fjxzlj = downData.ygzbb.fjxzlj
                    }
                }
            })
        },
        methods: {
            downFirst(){
                if (this.ysbb === null || this.ysbb === '') {
                    return
                }
                if (this.isZs || parseInt(this.sfzs) ===0) {
                    window.open(`${this.generatePdf}?htwid=${this.htWid}`);
                } else {
                    pageUtils.alert('非制式合同暂不能生成pdf');
                }

            }
        }
    }
</script>
<style>
    .down {
        cursor: pointer;
    }
</style>

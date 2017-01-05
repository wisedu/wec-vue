<template>
    <form-group title='付款计划'>
        <div class='bh-form-horizontal bh-form-readonly bh-form-block bh-mb-4'>
            <div class='bh-form-group  bh-col-md-4'>
                <label class="bh-form-label bh-form-readonly-label">合同计算币种</label>
                <div class="bh-form-readonly-input"><p class="bh-form-static bh-ph-8">{{payInfo.htjsbz}}</p></div>
            </div>
            <div class='bh-form-group  bh-col-md-4'>
                <label class="bh-form-label bh-form-readonly-label">合同总金额</label>
                <div class="bh-form-readonly-input"><p class="bh-form-static bh-ph-8">{{payInfo.htzje}}</p></div>
            </div>
            <div class='bh-form-group  bh-col-md-4'>
                <label class="bh-form-label bh-form-readonly-label">重大经济合同论证表</label>
                <div class="bh-form-readonly-input"><p class="bh-form-static bh-ph-8"><a href="#">{{payInfo.zdjjhtlzb}}</a></p></div>
            </div>
        </div>
        <div class='bh-mb-16'>
            <span class='subtitle'>合同结算方式：</span> <span>{{payInfo.htjsfs}}</span>
        </div>
        <paylist-by-goods :wid='wid' :meta-url='listMeta' :model-name='listModel'></paylist-by-goods>
        <div class='subtitle bh-mt-16 bh-mb-8'>履约保证金</div>
        <div class='table'>
            <div class='thead row'>
                <div>占合同总额</div><div>具体金额</div><div>付款时间点</div>
            </div>
            <div class='row'>
                <div>{{payInfo.zhtze}}</div><div>{{payInfo.lybzjjtje}}</div><div>{{payInfo.lybzjfksjd}}</div>
            </div>
        </div>
    </form-group>
</template>

<script>
    /**
     * 付款计划模块
     */
    import {postJson, handler} from 'bh-vue/utils/http';
    import FormGroup from './formGroup';
    import PaylistByGoods from './paylistByGoods';

    /**
     * 获取合同付款计划信息
     * @param  {String} wid 合同 id
     */
    const _queryPayInfo = (url, wid) => {
        return postJson(url, {wid: wid}, handler.DATAS);
    };

    export default {
        data: () => ({
            payInfo: {}
        }),
        props: {
            wid: String,
            dataUrl: String,
            listMeta: String,
            listModel: String
        },
        created () {
            _queryPayInfo(this.dataUrl, this.wid).then(data => {
                this.payInfo = data.fkjhBean; // 后续会根据类型切换不同的bean
            });
        },
        components: {FormGroup, PaylistByGoods}
    };
</script>

<style scoped lang='less'>
    .subtitle {
        font-weight: bold;
    }

    .table {
        width: 100%;
        .row {
            &.thead {
                background: #f7f8fc;
                font-weight: bold;
                & > div {
                    border-bottom: none;
                }
            }

            & > div {
                display: inline-block;
                width: 33.3333%;
                border: 1px solid #d8dcf0;
                padding: 4px 8px;

                &:nth-child(2), &:nth-child(3) {
                    border-left: none;
                }
            }
        }
    }
</style>

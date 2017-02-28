<template>
    <form-group title='合同货物'>
        <emap-datatable v-el:list v-ref:list :options='listOpts' @ready='listReady'></emap-datatable>
        <div class='bh-mt-8 goods-summary'>
            <span class='bh-mr-16'>总金额合计</span>
            <span>{{total}}</span>
        </div>
    </form-group>
</template>

<script>
    /**
     * 合同货物列表
     */
    import EmapDatatable from 'bh-vue/dist/EmapDatatable';
    import {postJson, handler} from 'bh-vue/utils/http';
    import pageUtil from 'bh-vue/utils/pageUtil';
    import FormGroup from './formGroup';

    const PAGE_SIZE = 5;
    // const PAGER_HEIGHT = 36;

    export default {
        data: () => ({
            total: 0
        }),
        props: {
            wid: String, // 合同 id
            metaUrl: String,
            extraUrl: String,
            modelName: String
        },
        computed: {
            listOpts () {
                return {
                    pagePath: this.metaUrl,
                    action: this.modelName,
                    schema: false,
                    params: {
                        wid: this.wid
                    }
                    // pageable: false,
                    // pageSize: PAGE_SIZE,
                    // pageSizeOptions: [PAGE_SIZE],
                    // height: 220
                };
            }
        },
        methods: {
            listReady () {
                // 获取合同货物总额、币种等信息
                this.extraUrl && postJson(this.extraUrl, {wid: this.wid}, handler.DATAS).then(data => {
                    this.total = data.ze;
                }, () => {
                    pageUtil.tip('获取合同总额失败', 'danger');
                });
            }
        },
        components: {EmapDatatable, FormGroup}
    };
</script>

<style scoped>
    .goods-summary {
        font-weight: bold;
    }
</style>

<template>
    <form-group title='合同货物'>
        <emap-datatable v-el:list v-ref:list :options='listOpts' @ready='listReady'></emap-datatable>
        <div class='bh-mt-8 goods-summary'>
            <span class='bh-mr-16'>总金额合计</span>
            <span>小写：</span><span class='bh-mr-16'>11635.00元</span>
            <span>大写：</span><span>壹万壹仟陆佰叁拾伍圆</span>
        </div>
    </form-group>
</template>

<script>
    /**
     * 合同货物列表
     */
    import {EmapDatatable} from 'bh-vue';
    import FormGroup from './formGroup';

    const PAGE_SIZE = 5;
    // const PAGER_HEIGHT = 36;

    export default {
        props: {
            wid: String, // 合同 id
            metaUrl: String,
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
                    },
                    pageable: false,
                    // pageSize: PAGE_SIZE,
                    // pageSizeOptions: [PAGE_SIZE],
                    // height: 220
                };
            }
        },
        methods: {
            listReady () {
                // let total = this.$refs.list.getTotalRecords();
                // if (!total || total <= PAGE_SIZE) {
                //     let height = parseInt(this.$els.list.style.height) - PAGER_HEIGHT;
                //     setTimeout(() => {
                //         this.$els.list.style.height = `${height}px`;
                //     }, 400); // 目前emap表格组件无法判断渲染完成时机，暂用此ugly方式
                // }
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

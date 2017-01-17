<template>
    <emap-datatable :options='listOpts'></emap-datatable>
</template>

<script>
    /**
     * 付款计划列表 - 总额分阶段
     */
    import {EmapDatatable} from 'bh-vue';

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
                    pageable: false
                };
            }
        },
        components: {EmapDatatable}
    };
</script>

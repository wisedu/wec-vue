<template>
    <emap-datatable 
        :options='listOpts' 
        v-el:list 
        v-ref:list 
        @expand='rowToggle'
        @collapse='rowToggle'
        class='playlist-by-goods'>
    </emap-datatable>
</template>

<script>
    /**
     * 付款计划列表 - 货物分阶段
     */
    import EmapDatatable from 'bh-vue/dist/EmapDatatable';
    import pageUtil from 'bh-vue/utils/pageUtil';
    import PaylistDetail from './paylistDetail';

    // const PAGE_SIZE = 5;
    // const PAGER_HEIGHT = 36;

    const _initRowDetails = (vm, id, row, element, rowinfo) => {
        vm.detailData = rowinfo.row.zxfkjh;
        let parent = element.parent();
        element.append('<paylist-detail :items=\'detailData\'></paylist-detail>');
        vm.$compile(element[0]);

        vm.$nextTick(() => parent.niceScroll());
    };

    export default {
        data: () => ({
            detailData: null
        }),
        props: {
            wid: String, // 合同 id
            metaUrl: String,
            modelName: String,
        },
        computed: {
            listOpts () {
                let vm = this;
                return {
                    pagePath: this.metaUrl,
                    action: this.modelName,
                    schema: false,
                    params: {
                        wid: this.wid
                    },
                    pageable: true,
                    // pageSize: PAGE_SIZE,
                    // pageSizeOptions: [PAGE_SIZE],
                    // height: 220,
                    rowDetails: true,
                    initRowDetails (id, row, element, rowinfo) {
                        _initRowDetails(vm, id, row, element, rowinfo);
                    }
                };
            }
        },
        methods: {
            // listReady () {
            //     let total = this.$refs.list.getTotalRecords();
            //     if (!total || total <= PAGE_SIZE) {
            //         let height = parseInt(this.$els.list.style.height) - PAGER_HEIGHT;
            //         setTimeout(() => {
            //             this.$els.list.style.height = `${height}px`;
            //         }, 500); // 目前emap表格组件无法判断渲染完成时机，暂用此ugly方式
            //     }
            // },
            rowToggle () {
                this.$nextTick(() => {
                    pageUtil.resetPageFooter();
                });
            }
        },
        components: {EmapDatatable, PaylistDetail}
    };
</script>

<style lang='less'>
    .playlist-by-goods {
        [data-role=row-details] {
            & > td {
                background: #F6FBFF;
            }
        }
    }
</style>

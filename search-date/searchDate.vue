<template>
    <div class="bh-advancedQuery-form-row">
        <div class="bh-advancedQuery-groupName">{{title}}：</div>
        <bh-timepicker v-ref:tp></bh-timepicker>
    </div>
</template>

<script>
    /**
     * 日期范围搜索框
     * @module SearchDate
     *
     * @example
     * <caption>html</caption>
     * <search-date v-ref:sd :title='请选择日期范围' @change='search'></search-date>
     *
     * @example
     * <caption>javascript</caption>
     * let dateObj = this.$refs.sd.getValue();
     * console.log(dateObj.startTime);
     * console.log(dateObj.endTime);
     */
    import BhTimepicker from 'bh-vue/bh-timepicker/bhTimepicker.vue';

    export default {
        /**
         * @property {String} title 标签名称
         */
        props: {
            title: String
        },
        methods: {
            /**
             * 获取当前选择的日期范围对象
             * @return {Object} 日期范围对象，包含 startTime 和 endTime 属性
             */
            getValue () {
                return this.$refs.tp.getValue();
            }
        },
        components: {BhTimepicker}
    };
</script>

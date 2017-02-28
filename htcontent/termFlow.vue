<template>
    <div>
        <div v-if='!viewFlow' class='bh-color-primary-2 hand' @click='viewFlow = true'>查看审核进度</div>
        <div v-else>
            <audit-flow :url='url' :wid='wid' :tm-id='tmId'></audit-flow>
            <div class='bh-color-primary-2 hand' @click='viewFlow = false'>收起进度</div>
        </div>
    </div>
</template>

<script>
    /**
     * 单个条目中查看流程进度
     */
    import AuditFlow from '../audit-flow/auditFlow';

    export default {
        data: () => ({
            viewFlow: false
        }),
        props: {
            url: String,
            wid:String, // 合同 id
            tmId: String // 条目 id
        },
        components: {AuditFlow}
    };
</script>

<style scoped>
    .hand {
        cursor: pointer;
    }
</style>

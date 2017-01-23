<template>
    <div>
        <div class="entry-part bh-pull-left">
            <entry :entry-item="item"></entry>
        </div>
        <div class="audit-status bh-pull-left">
            <audit-panel :item="item" v-ref:ap></audit-panel>
        </div>
    </div>
</template>

<script>
    import Entry from './entry';
    import AuditPanel from './auditPanel';

    export default {
        props: {
            item: Object
        },
        methods: {
            getAuditInfo () {
                return this.$refs.ap.getAuditInfo();
            }
        },
        components: {Entry, AuditPanel}
    };
</script>

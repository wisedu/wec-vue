<template>
    <div>
        <div class="entry-part bh-pull-left" :class="{notShow:notReview}">
            <entry :entry-item="item"></entry>
        </div>
        <div class="audit-status bh-pull-left" :class="{notShow:notReview}">
            <audit-panel :flow-url='flowUrl' :item="item" v-ref:ap></audit-panel>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Entry from './entry';
    import AuditPanel from './auditPanel';

    export default {
        props: {
            item: Object,
            notReview:Boolean,
            flowUrl: String
        },
        methods: {
            getAuditInfo () {
                return this.$refs.ap.getAuditInfo();
            }
        },
        components: {Entry, AuditPanel}
    };
</script>
<style>
    .audit-status.notShow {
        display: none;
    }

    .notShow.entry-part {
        width:100%;
        border-right: 0px;
    }
</style>

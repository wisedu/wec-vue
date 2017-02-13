<template>
    <entry-item
            class="entry-con bh-mb-16 bh-clearfix"
            v-ref:aplist
            v-for="item in entryList"
            :item='item'
            data-wid="{{item.wid}}"
            @item-ready="entryReady"
            @audit='audit'
            :not-review="notReview">
    </entry-item>
</template>

<script type="text/ecmascript-6">
    import {postJson, handler} from 'bh-vue/utils/http';
    import pageUtil from 'bh-vue/utils/pageUtil';
    import EntryItem from './entryItem';

    const AUDIT_STATUS = {
        TODO: 0,
        APPLY: 1,
        REJECT: 2
    };

    export default {
        data: () => ({
        entryList: [],
        auditMap: {}, // 通过/拒绝的条目 主键为 wid
        todoCount: 0 // 总的待审核条目数
    }),
    props: {
        url: String,
                wid: String ,// 合同 id
                notReview:Boolean
    },
    ready () {
        postJson(this.url, {htWid: this.wid}, handler.ROWS).then((data) => {
            this.entryList = data;
        // 状态为 0 是待审核的条目
        this.todoCount = data.filter(item => item.shzt === AUDIT_STATUS.TODO).length;
    }, () => {
            pageUtil.tip('获取合同条目列表失败', 'danger');
        });
    },
    methods: {
        entryReady (entryItem) {
            this.$dispatch('ready', entryItem);
            pageUtil.resetPageFooter();
        },
        audit (wid, result) {
            // '通过': 1  退回': 2
            this.auditMap[wid] = result;
        },
        getCount () { // 获取未审核的条目数目
            let apply = 0, reject = 0;
            let map = this.auditMap;
            Object.keys(map).forEach(item => {
                if (map[item] === AUDIT_STATUS.APPLY) {
                apply ++;
            } else {
                reject ++;
            }
        });

            return {
                apply,
                reject,
                todo: this.todoCount - apply - reject
            };
        },
        getTermList () {
            let apList = this.$refs.aplist;
            return apList.map(ap => ap.getAuditInfo());
        }
    },
    components: {EntryItem}
    }
</script>
<style>
    .entry-con {
        display: flex;
        border: 1px solid #D8DCF0;
        margin: 0px 10px;
    }

    .entry-con:last-child{
        margin-bottom: 0px;
    }

    .entry-part {
        width: calc((100% - 10px) / 4 * 3);

    }

    .audit-status {
        width: calc((100% - 10px) / 4);
        border-left: 1px solid #D8DCF0;
    }
</style>

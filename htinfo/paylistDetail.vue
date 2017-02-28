<template>
    <table class='paylist-detail'>
        <tr class='row'>
            <td class="td condition">付款条件</td>
            <td class="td percent">占货物总金额比重</td>
            <td class="td total">具体金额</td>
            <td class="td date">付款时间点</td>
        </tr>
        <tr class='row' v-for='item in clonedItems'>
            <td class="td condition" :title='item.condition'>{{item.fktj}}</td>
            <td class="td percent">{{item.zhwjebz}}</td>
            <td class="td total">{{item.je}}</td>
            <td class="td date">{{item.sjd}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        data: () => ({
            clonedItems: []
        }),
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        created () {
            // clone一份对象防止多个组件共享数据
            this.clonedItems = _.cloneDeep(this.items);
        }
    };
</script>

<style scoped lang='less'>
    .paylist-detail {
        font-weight: bold;
        padding: 0 60px 0 40px;
        background-color: transparent;
        width: e('calc(100% - 110px)');
        margin-left: 40px;

        .row {
            border-bottom: 1px solid #d8dcf0;

            .td {
                white-space: nowrap;
                text-overflow: ellipsis;
                text-indent: 20px;
                overflow: hidden;
                padding: 8px;
            }
        }
    }
</style>

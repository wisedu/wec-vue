<template>
    <table class='paylist-detail'>
        <tr class='row'>
            <td class="td condition">付款条件</td>
            <td class="td date">时间点</td>
            <td class="td total">金额</td>
        </tr>
        <tr class='row' v-for='item in items'>
            <td class="td condition" :title='item.condition'>{{item.fktj}}</td>
            <td class="td date">{{item.sjd}}</td>
            <td class="td total">{{item.je}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array,
                default () {
                    return [{
                        condition: '付款条件1',
                        date: '2017-01-02',
                        total: '5000.00'
                    }, {
                        condition: '付款条件2',
                        date: '2017-01-02',
                        total: '5000.00'
                    }, {
                        condition: '付款条件3',
                        date: '2017-01-02',
                        total: '5000.00'
                    }];
                }
            }
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

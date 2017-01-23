<template>
    <ul>
        <li class='outline-item bh-bg-hover-primary-3 bh-p-8 bh-str-cut'
            v-for='item in outlineList' @click='select(item)'>
            <i v-if="item.lb === 1" class='icon iconfont bh-color-success icon-checkcircle'></i>
            <i v-if="item.lb === 2" class='icon iconfont bh-color-danger icon-highlightremove'></i>
            <i v-if="item.lb === 0" class='icon iconfont bh-color-warning icon-locallibrary'></i>
            <span>{{item.tmmc}}</span>
        </li>
    </ul>
</template>

<script>
    import {postJson, handler} from 'bh-vue/utils/http';
    import pageUtil from 'bh-vue/utils/pageUtil';

    export default {
        data: () => {
            return {
                outlineList: [],
                oldOutlineList:[]
            }
        },
        props: {
            url: String,
            wid: String // 合同id
        },
        methods: {
            select(item, event) {
                this.$dispatch('select', item);
            },
            update(audit, isChecked) {
                if (isChecked) {
                    if (audit) {
                        this.outlineList = this.outlineList.filter(function (item) {
                            return item.lb === 0
                        });
                    } else {
                        this.outlineList = this.outlineList.filter(function (item) {
                            return item.lb === 1
                        });
                    }
                } else {
                    this.outlineList = this.oldOutlineList;
                }
            }
        },
        activate: function (done) {
            postJson(this.url, {htWid: this.wid}, handler.ROWS).then(data => {
                this.outlineList = data;
                this.oldOutlineList = this.outlineList;
                done();
            }, () => {
                pageUtil.tip('获取合同模板条目列表失败', 'danger');
                done();
            });
        }
    }
</script>

<style scoped>
    .outline-item {
        list-style: none;
        cursor: pointer;
        border-left: 2px solid transparent;
    }

    .outline-item:hover {
        border-color: #2196f3;
    }
</style>

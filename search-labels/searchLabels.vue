<template>
    <div class="bh-advancedQuery-form-row">
        <div class="bh-advancedQuery-groupName">{{title}}：</div>
        <div class="bh-advancedQuery-groupList bh-label-radio-group">
            <div v-if='showAll' class="bh-advancedQuery-groupList-item bh-label-radio" :class='{"bh-active": !current}' @click='select(null)'>{{displayTexts.all}}</div>
            <div 
                v-for='item in shownItems' 
                class="bh-advancedQuery-groupList-item bh-label-radio"
                :class='{"bh-active": item === current}'
                @click='select(item)'>
                {{item[nameMember]}}
            </div>
            <div 
                v-if='viewMore' 
                class="bh-advancedQuery-groupList-item opt"
                @click='toggleMore'>
                {{moreText}}
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @module SearchLabels
     * 用于搜索选项的标签列表
     * @example
     * <caption>html</caption>
     * <search-labels :current.sync='depart' title='所属学部' :source='departs' :more='true' @change='search'></search-labels>
     * <caption>javascript</caption>
     * const DEPARTS = [{name: 'xxx', value: '1'}];
     * export default {
     *     data: () => ({
     *         depart: DEPARTS[0],
     *         departs: DEPARTS
     *     })
     * }
     */
    
    const _DEFAULT_TEXTS = {
        all: '全部',
        hide: '隐藏',
        more: '更多'
    };

    export default {
        data: () => ({
            realDisplay: 0,
            isMore: false
        }),
        /**
         * @property {Object} [current=null] 当前选择项
         * @property {String} [nameMember=name] 用于显示的字段名称
         * @property {Boolean} [more=false] 是否显示更多按钮
         * @property {Number} [display=5] 存在更多按钮时默认显示的个数
         * @property {String} title 标签名称
         * @property {Object[]} source 标签列表
         * @property {String} source.name 标签名称
         * @property {String} source.value 标签值
         */
        props: {
            current: {
                default: null,
                type: Object
            },
            nameMember: {
                default: 'name'
            },
            more: {
                default: false,
                type: Boolean
            },
            showAll: {
                default: true,
                type: Boolean
            },
            display: {
                default: 5,
                type: Number
            },
            title: String,
            source: Array,
            texts: Object
        },
        computed: {
            moreText () {
                let texts = this.displayTexts;
                return this.isMore ? texts.hide : texts.more;
            },
            viewMore () {
                return this.more && (this.source.length > this.display);
            },
            shownItems () {
                if (this.more) {
                    return this.source && this.source.slice(0, this.realDisplay);
                } else {
                    return this.source;
                }
            },
            displayTexts () {
                return $.extend({}, _DEFAULT_TEXTS, this.texts);
            }
        },
        methods: {
            /**
             * 选择某项时触发，会发送change事件
             */
            select (item) {
                if (this.current === item) {
                    return;
                }

                this.current = item;
                this.$dispatch('change', this.current);
            },
            /**
             * 获取选择项
             */
            val () {
                return this.current;
            },
            /**
             * 显示/隐藏 '更多'按钮
             */
            toggleMore () {
                this.isMore = !this.isMore;
                if (this.isMore) {
                    this.showMore();
                } else {
                    this.hideMore();
                }
            },
            showMore () {
                this.realDisplay = this.source.length;
            },
            hideMore () {
                this.realDisplay = this.display;
            }
        },
        beforeCompile () {
            this.realDisplay = this.display;
        }
    };
</script>

<style scoped>
    .bh-advancedQuery-groupList-item {
        position: relative;
        padding: 2px 4px;
        margin-top: 2px;
        margin-right: 4px;
        float: left;
        color: #333;
        background-color: #fff;
        border: 1px solid #d8dcf0;
        border-radius: 1px;
        cursor: pointer;
    }

    .bh-advancedQuery-groupList-item.opt {
        color: #2196f3;
        border-color: transparent;
    }
</style>

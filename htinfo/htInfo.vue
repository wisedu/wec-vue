<template>
    <div>
        <ht-basic-info :wid='wid' 
            :meta-url='urls.basic.meta'
            :model-name='urls.basic.model'
            :data-url='urls.basic.data'>
        </ht-basic-info>
        <goods :wid='wid'
            :meta-url='urls.goods.meta'
            :model-name='urls.goods.model'>
        </goods>
        <payment :wid='wid'
            :data-url='urls.payment.data'
            :list-meta='urls.payment.list.meta'
            :list-model='urls.payment.list.model'
            :list-total-meta='urls.payment.list.totalMeta'
            :list-total-model='urls.payment.list.totalModel'
            :all-pay-url='urls.payment.list.allData'>
        </payment>
    </div>
</template>

<script>
    /**
     * @module HtInfo
     * 合同信息模块，需要配置合同 id 及所有请求相关的 url,
     *
     * @example
     * <ht-info :wid='htId' :urls='urls'></ht-info>
     *
     * @example
     * export default {
     *   data: () => ({
     *     htId: 1,
     *     urls: {
     *          basic: { // 基本信息相关 url 及 model
     *              meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_jbxx.json',
     *              model: 'htqcsh_shxq_shhtxx_jbxx',
     *              data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
     *          },
     *          goods: { // 合同货物相关 url 及 model
     *              meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_hthw.json',
     *              model: 'htqcsh_shxq_shhtxx_hthw'
     *          },
     *          payment: { // 付款计划相关 url 及 model
     *              data: '/nk-htgl-glsh/htqcsh/shxq/shhtxx/fkjh', // 付款概要信息
     *              list: { // 计划列表
     *                  meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_fkjh_zx.json',
     *                  model: 'htqcsh_shxq_shhtxx_fkjh_zx'
     *              }
     *          }
     *      }
     *   })
     * }
     */
    import HtBasicInfo from './htBasicInfo';
    import Goods from './goods';
    import Payment from './payment';

    export default {
        props: {
            wid: String, // 合同 id
            urls: {
                type: Object,
                default: () => ({
                    basic: { // 基本信息相关 url 及 model
                        meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_jbxx.json',
                        model: 'htqcsh_shxq_shhtxx_jbxx',
                        data: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/jbxx'
                    },
                    goods: { // 合同货物相关 url 及 model
                        meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_hthw.json',
                        model: 'htqcsh_shxq_shhtxx_hthw'
                    },
                    payment: {
                        data: '/nk-htgl-glsh/htqcsh/shxq/shhtxx/fkjh',
                        list: {
                            // 货物分阶段付款
                            meta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_fkjh_hwfjd.json',
                            model: 'htqcsh_shxq_shhtxx_fkjh_hwfjd',
                            // 总额分阶段付款
                            totalMeta: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/nk-htgl-glsh/htqcsh_shxq_shhtxx_fkjh_zefjd.json',
                            totalModel: 'htqcsh_shxq_shhtxx_fkjh_zefjd',
                            // 一次性付款
                            allData: 'http://res.wisedu.com:8000/nk-htgl-glsh/htqcsh/shxq/shhtxx/fkjh/ycxfk'
                        }
                    }
                })
            }
        },
        components: {HtBasicInfo, Goods, Payment}
    };
</script>

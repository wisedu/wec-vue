<template>
    <form-group title='基本信息'>
        <emap-form v-ref:form :options='formOpts' @inited='formInited' :outline='false'></emap-form>
    </form-group>
</template>

<script>
    /**
     * 合同基本信息表单
     */
    import {EmapForm} from 'bh-vue';
    import {postJson, handler} from 'bh-vue/utils/http';
    import pageUtil from 'bh-vue/utils/pageUtil';
    import FormGroup from './formGroup';

    /**
     * 获取填充form的数据
     */
    const queryData = (url, wid) => {
        return postJson(url, {wid: wid}, handler.FIRST_ROW);
    };

    export default {
        props: {
            wid: String, // 合同 id
            metaUrl: String, // meta 地址
            modelName: String, // 模型名称
            dataUrl: String // 数据请求地址
        },
        computed: {
            formOpts () {
                return {
                    pagePath: this.metaUrl,
                    modelName: this.modelName,
                    renderByGroup: false,
                    readonly: true
                };
            }
        },
        methods: {
            formInited () {
                queryData(this.dataUrl, this.wid).then(data => {
                    if (data) {
                        this.$refs.form.setValue(data);
                    }
                }, () => {
                    pageUtil.tip('获取基本信息失败', 'danger');
                });
            }
        },
        components: {EmapForm, FormGroup}
    };
</script>

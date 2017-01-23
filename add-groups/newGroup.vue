<template>
    <div>
        <div class="bh-row">
            <div class="bh-col-md-1">业务域：</div>
            <div class="bh-col-md-2">
                <bh-dropdown :url='url' v-ref:domain display-member='domainName' value-member='domainId'></bh-dropdown>
            </div>
            <div class="bh-col-md-1">组名：</div>
            <div class="bh-col-md-2">
                <bh-input :value.sync='name' placeholder='请输入...'></bh-input>
            </div>
            <div class="bh-col-md-1">描述：</div>
            <div class="bh-col-md-2">
                <bh-input :value.sync='desc' placeholder='请输入...'></bh-input>
            </div>
            <div class="bh-col-md-3">
                <bh-button type="primary" @click="add">添加</bh-button>
                <bh-button @click="cancel">取消</bh-button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import BhDropdown from 'bh-vue/bh-dropdown/bhDropdown.vue';
    import BhInput from 'bh-vue/bh-input/bhInput.vue';
    import BhButton from 'bh-vue/bh-button/bhButton.vue';
    import * as http from 'bh-vue/utils/http';

    export default{
        data(){
            return{
                name:'',
                desc:''
            }
        },
        components:{
            BhDropdown,
            BhInput,
            BhButton
        },
        props: {
            domainUrl: {
                default: '',
                type: String
            },
            groupAddUrl: {
                default: '',
                type: String
            }
        },
        methods: {
            add () {
            	let domain = this.$refs.domain.getSelectedItem();
            	let params = {
                    domainCode: domain.domainId,
                    domainName: domain.domainName,
                    groupId: '',
                    groupName: this.name,
                    description: this.desc
                };
                return http.postJson(this.groupAddUrl, params, http.handler.CODE);
            },
            cancel () {
                this.name = '';
                this.desc = '';
                this.$parent.showNewGroup = false;
            }
        }
    }
</script>

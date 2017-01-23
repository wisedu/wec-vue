<style lang="less">
    .border-box {
        background-color: #fff;
        border: 1px solid #D8DCF0;
        align-self: stretch;
    };

    .g-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        .area-add {
            height: 40px;
        }
        .area-main {
            flex-grow: 1;
            display: flex;
            flex-direction: row;
            background-color: #F7F8FC;
            .left-tree {
                .border-box;
                width: 30%;
                padding: 5px;
            }
            .middle-list {
                width: 29%;
                margin-right: 1%;
                .border-box;
                border-left: none;
                padding: 5px;
            }
            .right-table {
                .border-box;
                width: 40%;
                padding: 5px;
            }

            .group-add-title {
                font-size: 1.5rem;
                margin: 10px 0;
            }
        }
    }
</style>
<template>
    <div class="g-container">
        <div class="area-add">
            <p v-show="!showNewGroup">若没有合适的组，您还可以 <a @click.prevent="ShowNewGroup">新建组</a></p>
            <new-group v-show="showNewGroup" :domain-url="domainUrl" :group-add-url="groupAddUrl"></new-group>
        </div>
        <div class="area-main">
            <div class="left-tree">
                <div class="group-add-title">可选用户组</div>
                <div>
                    <bh-search @search='search' :value.sync='keyword' :placeholder='搜索组名' :show-button="false"></bh-search>
                </div>
                <div class="treeview">
                    <bh-tree v-ref:tree
                             :source='groupTree'
                             :fields='treeFileds'
                             @select="select"
                             @check-change="checkChange"
                             :options="{checkboxes: true}">
                    </bh-tree>
                </div>
            </div>
            <div class="middle-list">
                <div  class="group-add-title">已选择（{{checkedGroups.length}}）</div>
                <div>
                    <div class="group-item" v-for="group in checkedGroups">{{group.groupName}}</div>
                </div>
            </div>
            <div class="right-table">
                <members :member-url="memberUrl" :member-meta-url="memberMetaUrl" :group-id="groupId"></members>
            </div>
        </div>
    </div>
</template>
<script>
    import NewGroup from './newGroup.vue';
    import Members from './members.vue';
    import BhSearch from 'bh-vue/bh-search/bhSearch';
    import BhTree from 'bh-vue/bh-tree/bhTree';
    import * as http from 'bh-vue/utils/http';

    export default{
        data(){
            return{
            	showNewGroup: false,
                groupTree: [],
                treeFileds: {id: 'id', pid: 'parentId', label: 'label', expanded: 'expanded', checked: 'checked', disabled: 'disabled'},
                groupId: '',
                checkedGroups: []
            };
        },
        methods: {
            checkChange (node) {
                let checked = node.checked;
            	// TODO: 真实环境取消注释
//                if(!node.item.level) {
//                    return;
//                }

                if(checked) {
                    let group = {
                        groupId: node.item.id,
                        groupName: node.item.label
                    };
                    this.checkedGroups.push(group);
                } else {
                    for (let i = 0; i < this.checkedGroups.length; i++) {
                        let group = this.checkedGroups[i];
                        if(group.groupId == node.item.id ) {
                            this.checkedGroups.splice(i--);
                            break;
                        }
                    }
                }
            },
            select (item) {
                // TODO: 真实环境取消注释
//                if(!item.level) {
//                    return;
//                }
                this.groupId = item.id;
            },
            ShowNewGroup () {
            	this.showNewGroup = true;
            },
            getSelectedGroups () {
            	return this.checkedGroups;
            }
        },
        components:{
            NewGroup,
            BhSearch,
            BhTree,
            Members
        },
        activate (done) {
            let params = {
                searchCondition: ''
            };
            http.postJson(this.domainGroupUrl, params, http.handler.ROWS).then((data)=> {
                this.groupTree = data;
            }).then(done);
        },
        props: {
            domainUrl: {
                default: '',
                type: String
            },
            domainGroupUrl: {
                default: '',
                type: String
            },
            groupAddUrl: {
                default: '',
                type: String
            },
            memberUrl: {
                default: '',
                type: String
            },
            memberMetaUrl: {
                default: '',
                type: String
            }
        }
    };
</script>

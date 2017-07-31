<template>
    <div v-el:treeview class="wec-school-edit-tree">
        <bh-tree v-ref:tree
            :default-select='defaultSelect'
            :default-select-leaf='defaultSelectLeaf'
            :source='source'
            :fields='fields'
            :operations='opts'
            @select='selectNode'
            @edit='editName'
            @del='del'></bh-tree>
    </div>
</template>

<script>
    /**
     * 支持自定义编辑、删除操作的树控件
     * @module EditTree
     */
    import BhTree from 'bh-vue/bh-tree/bhTree';
    import pageUtil from 'bh-util/pageUtil';

    const MENU_NAME_MAX_LEN = 24; // 输入框长度
    const OPTS = { // 默认支持的操作类型
        edit: {
            title: '编辑',
            name: 'edit'
        },
        del: {
            title: '删除',
            name: 'del'
        }
    };

    let _editName = (vm, item) => {
        if (!vm.doEdit) {
            console.warn('未指定编辑时的操作函数(doEdit)');
            return;
        }

        let elem = $(item.element);
        let elemPos = elem.offset();
        let label = item.label;
        let root = $(vm.$els.treeview);
        let rootPos = root.offset();
        let itemData = _getNodeData(vm, item);
        let isNew = (itemData === null || itemData.isNew); // 若无原始数据则为新增节点

        let editPanel = $('<div>').addClass('menu-tree-node-edit').css({
            top: elemPos.top - rootPos.top,
            left: elemPos.left - rootPos.left
        });

        $('<input>').attr('maxlength', MENU_NAME_MAX_LEN).addClass('bh-mr-4 ').val(label).appendTo(editPanel);
        $('<i class="icon iconfont icon-checkcircle bh-color-primary"></i>').appendTo(editPanel);
        $('<i class="icon iconfont icon-cancel bh-color-grey-3"></i>').appendTo(editPanel);

        let hideEditPanel = () => {
            editPanel.off('click');
            editPanel.remove();
        };

        editPanel.on('click', '.icon-checkcircle', (event) => {
            // _save name
            let target = $(event.target);
            let newName = target.prev('input').val();

            vm.doEdit($.extend({
                isNew: isNew
            }, item, itemData), newName).then(() => {
                hideEditPanel();
            });
        });

        editPanel.on('click', '.icon-cancel', (event) => {
            if (isNew) { // 删掉新加入的节点
                let tree = vm.$refs.tree;
                tree.remove(item);
            }

            hideEditPanel();
        });
        root.append(editPanel);
    };

    let _del = (vm, item) => {
        if (!vm.doDel) {
            console.warn('未指定删除时的操作函数(doDel)');
            return;
        }

        let tree = vm.$refs.tree;

        pageUtil.confirm('确认删除此节点？', () => {
            vm.doDel(item).then(() => {
                pageUtil.tip('删除成功', 'success');
                // debugger;
                tree.remove(item);
                let allItems = tree.getAll();
                if (allItems && allItems.length > 0) {
                    tree.selectItem(allItems[0]);
                }
            }, () => {
                pageUtil.tip('删除失败', 'danger');
            });
        });
    };

    let _getFirstNode = (tree, parent) => {
        if (!parent) { // add to root
            var treeItems = tree.getAll();
            return treeItems && treeItems[0];
        } else { // add child
            if (parent.hasItems) {
                return parent.nextItem;
            } else {
                return null;
            }
        }
    };

    let _addFirstNode = (vm, nodeData) => {
        let tree = vm.$refs.tree;
        let firstNode = _getFirstNode(tree);

        tree.addBefore(nodeData, firstNode && firstNode.element);
    };

    let _addNode = (vm, nodeData, parent) => {
        let tree = vm.$refs.tree;
        if (!parent) {
            _addFirstNode(vm, nodeData);
            _editName(vm, _getFirstNode(tree));
        } else {
            let subNode = _getFirstNode(tree, parent);
            if (subNode) {
                tree.addBefore(nodeData, subNode);
            } else {
                tree.addTo(nodeData, parent.element);
            }

            let subFirst = _getFirstNode(tree, parent);
            vm.cachedData[subFirst.id] = nodeData;

            _editName(vm, subFirst);
        }
    };

    let _optConvert = (opts) => {
        if (!opts || opts.length === 0) {
            return null;
        }

        return opts.map(item => {
            if (OPTS[item]) {
                return OPTS[item];
            } else {
                return item;
            }
        });
    };

    // 根据节点获取节点数据
    let _getNodeData = (vm, item) => {
        let source = vm.source || [];
        let id = item.id;
        for (let i = 0, len = source.length; i < len; i++) {
            let data = source[i];
            let idField = vm.fields.id ? vm.fields.id : 'id';
            if (data[idField] === id) {
                return $.extend(data, {isNew: false}, {level: item.level});
            }
        }

        if (vm.cachedData[id]) {
            return $.extend(vm.cachedData[id], {isNew: true});
        }

        return null;
    };

    //给非叶子节点增加特定样式，用以区分叶子节点和非叶子节点
    let _addClassToParentNode = () => {
        $('.wec-school-edit-tree li:has(.jqx-tree-dropdown)').addClass('edit-tree-haschild');
        $('.wec-school-edit-tree li:not(:has(.jqx-tree-dropdown))').addClass('edit-tree-leaf-child');
    }

    // let _setNewFlag = (vm, id, isNew) {
    //     if (vm.cachedData[id]) {
    //         vm.cachedData[id].isNew = isNew;
    //     }
    // };

    export default {
        data: () => ({
            cachedData: {}
        }),
        props: {
            source: {
                type: Array,
                default: []
            },
            fields: Object,
            operations: [Array, Function],
            doEdit: Function,
            doDel: Function,
            defaultSelect: {
                type: Boolean,
                default: false
            },
            defaultSelectLeaf: {
                type: Boolean,
                default: false
            },
            noLeaf: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            opts () {
                let operations = this.operations;
                if (!operations) {
                    return null;
                }

                if (typeof operations === 'function') {
                    let vm = this;
                    return function (item) {
                        let opts = operations(_getNodeData(vm, item)) || [];
                        return _optConvert(opts);
                    };
                }

                return _optConvert(operations);
            }
        },
        methods: {
            editName (item) {
                _editName(this, item);
            },
            del (item) {
                _del(this, item);
            },
            getSelectedItem () {
                return this.$refs.tree.getSelectedItem();
            },
            getItem (item) {
                return this.$refs.tree.getItem(item);
            },
            addTo (item, elem) {
                return this.$refs.tree.addTo(item, elem);
            },
            remove (item) {
                return this.$refs.tree.remove(item);
            },
            updateItem (item, newItem) {
                return this.$refs.tree.updateItem(item, newItem);
            },
            newNode (nodeData, parent) {
                _addNode(this, nodeData, parent);
            },
            selectNode (item) {
                // debugger;
                this.$dispatch('select', _getNodeData(this, item));
            },
            selectItem (item) {
                // debugger;
                this.$refs.tree.selectItem(item);
            },
            selectItemByData (item) {
                // debugger;
                let newItem = this.$refs.tree.getItem(item);
                this.$refs.tree.selectItem(newItem);
            },
            preprocessSource (source) {
                return this.$refs.tree.preprocessSource(source);
            },
            getPrevItem (item) {
                return this.$refs.tree.getPrevItem(item);
            },
            getNextItem (item) {
                return this.$refs.tree.getNextItem(item);
            },
            expandItem (item) {
                return this.$refs.tree.expandItem(item);
            },
            getAll () {
                return this.$refs.tree.getAll();
            }
            // ,
            // addTo (item, parentItem) {
            //     return this.$refs.tree.addTo(item, parentItem);
            // }
        },
        beforeDestory () {
            this.cachedData = {};
            this.doEdit = null;
            this.doDel = null;
        },
        components: {BhTree},
        ready () {
            $('.wec-school-edit-tree').on('mouseover', '.wec-school-domain-item-flag', (e) => {
                let desc = $(e.target).attr("taginfo");
                pageUtil.showPopover(e.target, desc, {showCloseButton: false});
            });

            $('.wec-school-edit-tree').on('mouseout', '.wec-school-domain-item-flag', (e) => {
                pageUtil.hidePopover();
            });

        },
        events: {
            'initialized': function () {
                if(!this.noLeaf) {
                    _addClassToParentNode();
                }
            }
        }
    };
</script>

<style lang="less">
    .menu-tree-node-edit {
        position: absolute;
        display: flex;
        left: 0;
        right: 0;
        height: 30px;
        background-color: #fff;

        input {
            vertical-align: middle;
            flex-grow: 1;
        }

        .iconfont {
            cursor: pointer;
            font-size: 2.4rem;
            vertical-align: middle;
        }
    }

    div.wec-school-edit-tree {
        ul.jqx-tree-dropdown-root{
            width: auto !important;
            padding: 0 !important;
        }
        // ul {
        //     margin: 0px;
        //     padding-left: 32px;
        //     li.jqx-tree-item-li {
        //         cursor: pointer;
        //         line-height: 22px !important;
        //         margin-left: 0 !important;
        //         padding: 0 !important;
        //         span{
        //             margin-top: 7px !important;
        //         }
        //         div.jqx-tree-item {
        //             background-color: inherit !important;
        //             display: block !important;
        //             font-weight: normal;
        //         }
        //         div.opt-panel {
        //             a.opt-btn {
        //                 color: #fff !important;
        //             }
        //         }
        //     }

        //     li.edit-tree-haschild {
        //         > div.jqx-tree-item-selected,
        //         > div.jqx-tree-item-hover {
        //             color: #3e50b4 !important;
        //             background-color: #fff !important;
        //             font-weight: bold;
        //         }
        //     }
        //     li.edit-tree-leaf-child {
        //         background-color: #fff !important;
        //         font-weight: normal;
        //         color: #000;
        //     }
        //     li.edit-tree-leaf-child.edit-tree-li-select,
        //     li.edit-tree-leaf-child:hover {
        //         color: #fff !important;
        //         background-color: #3e50b4 !important;
        //         font-weight: normal;
        //     }
        // }
        ul {
            margin: 0px;
            padding-left: 32px;
            li.jqx-tree-item-li {
                cursor: pointer;
                line-height: 22px !important;
                margin-left: 0 !important;
                padding: 0 !important;
                span{
                    margin-top: 7px !important;
                }
                div.jqx-tree-item {
                    background-color: inherit !important;
                    display: block !important;
                    font-weight: normal;
                }
            }


            li.jqx-tree-item-li {
                > div.jqx-tree-item-selected,
                > div.jqx-tree-item-hover {
                    color: #3e50b4 !important;
                    background-color: #fff !important;
                    font-weight: bold;
                }
                div.opt-panel {
                    a.opt-btn {
                        color: #00f !important;
                    }
                }
            }

            // li.edit-tree-haschild {
            //     > div.jqx-tree-item-selected,
            //     > div.jqx-tree-item-hover {
            //         color: #3e50b4 !important;
            //         background-color: #fff !important;
            //         font-weight: bold;
            //     }
            //     div.opt-panel {
            //         a.opt-btn {
            //             color: #00f !important;
            //         }
            //     }
            // }
            // li.edit-tree-leaf-child {
            //     background-color: #fff !important;
            //     font-weight: normal;
            //     color: #000;
            // }
            // li.edit-tree-leaf-child.edit-tree-li-select,
            // li.edit-tree-leaf-child:hover {
            //     color: #fff !important;
            //     background-color: #7F86EE !important;
            //     font-weight: normal;
            //     div.opt-panel {
            //         a.opt-btn {
            //             color: #fff !important;
            //         }
            //     }
            // }
        }
    }

    .wec-school-domain-item-flag {
        width: 9px;
        height: 9px;
        background-image: url("./tag.png");
        display: inline-block;
        margin-left: 5px;
    }

.item-con {
    display: flex;
}

.item-con .name {

}
.item-con .flag {
    margin-left: 5px;
    padding: 2px 10px;
    border-radius: 20px;
    color: #ffffff;
}
</style>

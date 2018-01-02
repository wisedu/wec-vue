<template>
    <div>
        <ul :id="rdm_ID" v-el:treeroot class="ztree"></ul>
    </div>
</template>

<script>
    /**
     * ztree树
     *
     * @module ZTree
     * @fires check-change - 选择的元素列表发生变化(需要支持多选: checkboxes = true)
     * @fires initialized - 初始化完成
     * @fires selected - 当前元素发生变化(鼠标点击)
     * @fires expanded - 节点展开时触发
     * @example
     *     <ztree v-ref:tree2
                        :source="groupTree"
                        :fields='zTreeFileds'
                        @selected='select'
                        @check-change="checkChange"
                        @initialized="treeInited"
                        :default="{checkboxes: true, hasThreeStates: true, nameIsHTML: true}">
                    </ztree>
     */
    var IDMark_A = '_a'


    var onExpand = (vm) => {
        return (event, treeId, treeNode) => {
            vm.$emit('expanded', treeNode)
        }
    };
    var onSelected = (vm) => {
        return (event, treeId, treeNode) => {
            vm.$emit('selected', treeNode)
        }
    };
    var onCheckChange = (vm) => {
        return (event, treeId, treeNode) => {
            vm.$emit('check-change', treeNode)
        }
    };

    var getSelectedNode = (vm) => {
        var node;
        var nodes = vm.zTreeObj.getSelectedNodes();
        if (nodes && nodes.length > 0) {
            node = nodes[0];
        } else {
            node = null
        }
        return node;
    };

    var getCheckedNodes = (vm) => {
        return vm.zTreeObj.getCheckedNodes();
    };

    var selectNode = (vm, node) => {
        return vm.zTreeObj.selectNode(node);
    };

    var _setDefaultStates = (vm) => {
        var self = vm;
        var el = $(vm.$els.treeroot);

        // 默认选中
        if(vm.default.selected) {
            vm.$nextTick(function () {
                var nodes = vm.zTreeObj.getNodes();

                let _item = nodes[0];
                if(vm.default.select_leaf === true) {
                    // 后台返回第一个选中的节点
                    for(var i = 0; i < nodes.length; i++) {
                        if(!nodes[i].children) {
                            _item = nodes[i];
                            break;
                        }
                    }
                }
                vm.selectNode(_item);
                vm.$emit('selected', _item)
            })
        }
        self.$emit('initialized');
    };

    var _addOperations = (vm) => {
        let operations = vm.operations;
        if (!operations) {
            return;
        }

        let root = $(vm.$els.treeroot);
        root.addClass('has-opt').on('mouseenter', '.hover-line', function(event) {
            // console.log('hover enter')
            let target = $(this);
            let aObj = target.find('a').first()

            // 清除遗留效果
            aObj.off()
            aObj.find('.opt-panel .opt-more').off();
            aObj.find('.opt-panel').remove();

            let treeNode = vm.zTreeObj.getNodeByTId(aObj.parents('li').first().attr('id'));
            let opts = null;
            if (typeof operations === 'function') {
                opts = operations(treeNode) || [];
            } else {
                opts = operations;
            }

            if (opts.length > 0) {
                let optHtml = $('<div>').addClass('opt-panel');
                var subOpts = opts.slice(0, 2)
                subOpts.forEach(opt => {
                    $('<a>').text(opt.title)
                        .data('action', opt.name)
                        .data('item', treeNode)
                        .addClass('opt-btn bh-mh-4')
                        .appendTo(optHtml);
                });
                if (opts.length > 2) {
                    $('<a>').text('更多')
                        .data('opts', opts.slice(2))
                        .addClass('opt-more bh-mh-4')
                        .appendTo(optHtml);
                }
                aObj.append(optHtml);

                aObj.on('click', '.opt-btn', function(event) {
                    event.stopPropagation();
                    let target = $(event.target);
                    var action = target.data('action')
                    vm.$dispatch(action, treeNode);
                });
                aObj.on('click', '.opt-more', function(event) {
                    event.stopPropagation();
                });

                var btnMore = $('.opt-more')
                btnMore.on('mouseenter', function(event) {
                    // console.log('more enter')
                    let more = $(this);
                    // if (more.find('.opt-panel-dropdown').length > 0) {
                    //     more.find('.opt-panel-dropdown').remove()
                    //     return
                    // }

                    let optHtmlDrop = $('<div>').addClass('opt-panel-dropdown').css({
                        top: 20,
                        position: 'absolute'
                    });
                    var _subopts = more.data('opts')
                    _subopts.forEach(opt => {
                        $('<a>').text(opt.title)
                            .data('action', opt.name)
                            .data('item', treeNode)
                            .addClass('opt-btn bh-mh-4')
                            .appendTo(optHtmlDrop);
                    });

                    more.append(optHtmlDrop);
                });

                btnMore.on('mouseleave', function(event) {
                    // console.log('more leave')
                    let more = $(this);
                    if (more.find('.opt-panel-dropdown').length > 0) {
                        more.find('.opt-panel-dropdown').remove()
                    }
                    if (!$(event.relatedTarget).hasClass('opt-panel')) {
                        $(this).off();
                        $(this).parents('.opt-panel').remove();
                    }
                });
            }
        }).on('mouseleave', '.hover-line', function(event) {
            // console.log('hover leave')
            let target = $(this);
            target.find('.opt-panel').remove();
        })
    };

    var _removeOperations = (vm) => {
        let root = $(vm.$els.treeroot);
        root.off();
        root.find('.opt-panel').remove();
    };

    var createTree = (vm) => {
        if (!$) {
            console.error('未加载jQuery--ZTree');
            return
        }
        if (!$.fn.zTree) {
            console.error('未加载zTree--ZTree');
            return
        }

        let setting = $.extend(true, {}, vm.defaultSetting, {
            data: {
                simpleData: {
                    idKey: vm.fields.idKey,
                    pIdKey: vm.fields.pIdKey,
                    rootPId: vm.fields.rootPId
                },
                key: {
                    name: vm.fields.name,
                    checked: vm.fields.checked
                }
            },
            check: {
                enable: vm.default.checkboxes ? true : false,
                chkStyle: vm.default.chkStyle || "checkbox",
                autoCheckTrigger: true
            },
            view: {
                nameIsHTML: vm.default.nameIsHTML ? true : false
            }
        });

        vm.zTreeObj = $.fn.zTree.init($(vm.$els.treeroot), setting, vm.source);

        _setDefaultStates(vm);

        _addOperations(vm);

        return vm.zTreeObj;
    };

    var prepareSource = (vm) => {
        return preprocessSource(vm, vm.source);
    };

    export default {
        data () {
            return {
                zTreeObj: null,
                defaultOpts: {
                    hasThreeStates: false,
                    checkboxes: false
                },
                defaultSetting: {
                    data: {
                        key: {
                            checked: "checked",
                            name: "name"
                        },
                        simpleData: {
                            enable: true,
                            idKey: "id",
                            pIdKey: "pId",
                            rootPId: null
                        }
                    },
                    view: {
                        showTitle: true,
                        showLine: false,
                        showIcon: false,
                        dblClickExpand: false,
                        // addHoverDom: addHoverDom(this),
                        // removeHoverDom: removeHoverDom(this)
                    },
                    callback: {
                        onExpand: onExpand(this),
                        onClick: onSelected(this),
                        onCheck: onCheckChange(this)
                    }
                },
                rdm_ID: ('' + Math.random()).substr(2)
            };
        },
        /**
         * @property {Array}  source - 数据源，发生变化时会重新渲染当前组件，目前只支持ztree的简单数据结构
         * @example
         *     source: [
         *      {"id":"200002", "name":"学生组", "parentId":"-1", checked: true}
         *  ];
         * @property {Object}  default - 默认设置
         * @example
         *     default: {
                    checkboxes: false, // 是否显示复选框
                    chkStyle: "checkbox", // 类型，支持checkbox, radio
                    selected: false,    // 是否默认选中一个节点
                    selected_leaf: false // 是否默认选中叶子节点
                }
         * @property {Array/Function}  操作字段:[{title: '删除', name: 'delete'}]
         * @property {Array}  [fields={idKey: 'id', pIdKey: 'parentId', name: 'name', checked: 'checked', rootPId: '-1'}] - 字段定义
         */
        props: {
            source: {
                type: Array,
                default () {
                    return [];
                }
            },
            default: {
                type: Object,
                default: () => ({
                    checkboxes: false,
                    hasThreeStates: true,
                    chkStyle: "checkbox",
                    selected: false,
                    selected_leaf: false
                })
            },
            operations: [Array, Function],
            fields: {
                type: Object,
                default () {
                    return {idKey: 'id', pIdKey: 'parentId', name: 'name', checked: 'checked', rootPId: null};
                }
            }
        },
        methods: {
            removeChildNodes (node) {
                return this.zTreeObj.removeChildNodes(node);
            },
            removeNode (node) {
                return this.zTreeObj.removeNode(node);
            },
            addNodes (parentNode, nodes) {
                return this.zTreeObj.addNodes(parentNode, nodes);
            },
            getNodes () {
                return this.zTreeObj.getNodes();
            },
            /**
             * 展开节点
             * @param  {Object} item 元素节点（li 标签）
             */
            expandNode (node) {
                return this.zTreeObj.expandNode(node, true, false, true, true);
            },
            /**
             * 选择节点
             * @param  {Object} item 元素节点（li 标签）
             */
            selectNode (node) {
                return this.zTreeObj.selectNode(node, false, true);
            },
            updateNode (node) {
                return this.zTreeObj.updateNode(node);
            },
            moveNode (targetNode, node, moveType, isSilent) {
                return this.zTreeObj.moveNode(targetNode, node, moveType, isSilent);
            },
            addNodes (parentNodeJSON, nodes) {
                return this.zTreeObj.addNodes(parentNodeJSON, nodes);
            },
            expandAll () {
                return this.zTreeObj.expandAll(true);
            },
            getNodeByParam (key, value, parentNode) {
                return this.zTreeObj.getNodeByParam(key, value, parentNode);
            },
            /**
             * 获取当前选择节点
             */
            getSelectedNode () {
                return getSelectedNode(this);
            }
        },
        ready () {
            var self = this;
            createTree(self);

            self.$watch('source', (newVal) => {
                createTree(self);
            });
        },
        /**
         * 销毁释放
         * @inner
         */
        beforeDestroy () {
            _removeOperations(this);
            var root = $(this.$els.treeroot);
            $.fn.zTree.destroy(root.attr('id'));
        }
    };
</script>

<style lang="less">

    .ztree {
        position: relative;
        span.node_name {
            margin-right: 130px;
        }
        .opt-panel {
            display: inline-block;
            width: 130px;
            margin-left: -130px;
            .opt-btn {
                color: blue !important;
            }
            .opt-more {
                color: blue !important;
                display: inline-block;
                position: relative;
            }
        }
        .opt-panel-dropdown {
            background-color: white;
            border: 1px solid #ddd;
            .opt-btn {
                display: block;
                padding: 0 0.7rem;
            }
            .opt-btn:hover {
                background-color: #D2E7FD;
            }
        }
        .hover-line {
            padding-right: 100px;
        }
    }
</style>

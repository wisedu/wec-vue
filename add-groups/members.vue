<template>
    <div>
        <div class="group-add-title">
            资料科组员（{{calcMembersNum}}）
        </div>
        <div class="bh-mt-8">
            <bh-search @search='search' :value.sync='keyword' :placeholder='' :show-button="false"></bh-search>
        </div>
        <div>
            <emap-datatable v-ref:table :options='calcOptions'></emap-datatable>
        </div>
    </div>
</template>
<style>

    .group-add-title {
        font-size: 1.5rem;
        margin: 10px 0;
    }
</style>
<script>
    import BhSearch from 'bh-vue/bh-search/bhSearch';
    import EmapDatatable from 'bh-vue/emap-datatable/emapDatatable.vue';


    let getCustomColumns = function() {
        return [{
            colField: 'userName',
            type: 'tpl',
            width: 100,
            column: {
                cellsRenderer: function(row, column, value, rowData) {
                	let str = value + '（' + rowData.userAccount + '）';
                    let html = $('<p>');
                    html.append($('<p>').addClass('bh-str-cut').text(str).attr('title', str));
                    return html.html();
                }
            }
        }
        ];
    };

    export default{
        data(){
            return{
                keyword: '',
            }
        },
        methods: {
            search () {
            	let params = {
                    groupId: this.groupId,
                    searchCondition: this.keyword
                };
                this.$refs.table.reload(params);
            }
        },
        components:{
            BhSearch,
            EmapDatatable
        },
        computed: {
            calcMembersNum () {
            	return this.$refs.table.getTotalRecords();
            },
            calcOptions () {
            	return {
                    'pagePath': this.memberMetaUrl,
                    'url': this.memberUrl,
                    'action': this.memberMetaUrl.match(/^http\S*\/([^\.]+)\.json/i)[1],
                    'method': 'POST',
                    'pageable': true,
                    'hiddenColumns': ['userAccount'],
                    'params': {groupId: '',searchCondition: ''},
                    'schema': false,
                    height: 340,
                    customColumns: getCustomColumns()
                };
            }
        },
        watch: {
            'groupId' () {
            	this.search();
            }
        },
        props: {
            memberUrl: {
                default: '',
                type: String
            },
            memberMetaUrl: {
                default: '',
                type: String
            },
            groupId: {
                default: '',
                type: String
            }
        },
    }
</script>

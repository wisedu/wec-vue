<template>
  <div>
    <div>
      <div class="bh-mb-16 pay-card" v-for="card in cardsList">
        <div class="bh-l-inline pay-card-ysxm">
          <span class="bh-color-default">{{card.yskh}}</span>
        </div>
        <div class="bh-l-inline bh-mh-16 pay-card-ye">
          <span class="bh-color-default">余额：</span>
          <span class="bh-color-default">{{card.ye}}</span>
        </div>
        <div class="bh-l-inline pay-card-zfje">
          <h5 class="bh-color-default bh-l-inline">支付金额</h5>
          <bh-input placeholder='请输入支付金额' :value.sync="card.zfje"></bh-input>
          <span class="bh-color-default">元</span>
        </div>
        <div class="bh-l-inline pay-card-delete">
          <i class="iconfont icon-delete delete-icon" @click="dele($index)" :card-data="card"></i>
        </div>
      </div>
    </div>
    <bh-button v-if="showButton" type="primary" @click="add">新增预算卡号</bh-button>
    <div v-else class="bh-clearfix">
      <div class="bh-pull-left" style="width: 500px">
        <emap-dd-table v-ref:ddt :options='options' class="add-pay-card"></emap-dd-table>
      </div>
      <div class="bh-pull-left select-icon">
        <i class="iconfont icon-checkcircle bh-color-primary" @click="confirm"></i>
        <i class="iconfont icon-cancel bh-color-default" @click="cancel"></i>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import bhInput from 'bh-vue/bh-input/bhInput.vue'
  import bhButton from 'bh-vue/bh-button/bhButton.vue'
  import emapDdTable from 'bh-vue/emap-dd-table/emapDdTable.vue'
  import {postJson, handler} from 'bh-vue/utils/http'
  import pageUtil from 'bh-vue/utils/pageUtil'

  const _deleteCard = (url, obj)=> {
    return postJson(url, {yskh: obj}, handler.data)
  }
  const _addCard = (url, item)=> {
    return postJson(url, {item: item}, handler.data)
  }

  export default{
    data: ()=> {
      return {
        showButton: true,
        options: {
          url: '',
          displayMember:'yskh',
          valueMember:'yskh'
//          ,
//          formatData:function (data) {
//            data.ysxmWid='1'
//          }    添加其他参数
        }
      }
    },

    components: {
      bhInput,
      bhButton,
      emapDdTable
    },
    props: {
      dataUrl: Object,
      cardsList: Array
    },
    created(){
      this.options.url = this.dataUrl.select
    },
    methods: {
      add(){
        this.showButton = false
      },
      dele(index){
        if (this.dataUrl.deletUrl) {

          _deleteCard(this.dataUrl.deletUrl,this.cardsList[index].yskh).then(data=> {
            if (data.code === '0') {
              pageUtil.tip('删除成功', 'success')
            } else {
              pageUtil.tip('删除失败', 'warning')
            }
          })
        }
        this.cardsList.splice(index, 1)
      },
      confirm(){
        let chooseItemValue = this.$refs.ddt.getValue();
        if(!!chooseItemValue){
          let chooseItem=$('.add-pay-card').jqxComboBox('getItemByValue', chooseItemValue).originalItem;
          chooseItem={
            ye:chooseItem.ye,
            yskh:chooseItem.yskh,
            zfje:chooseItem.zfje
          };

          if (_.isEmpty(chooseItem)) {
            pageUtil.tip('请确认已选择新的卡号', 'warning')
          } else {
            if (this.dataUrl.addCard) {
              _addCard(this.dataUrl.addCard, chooseItem).then(data=> {
                if (data.code === '0') {
                  this.cardsList.push(chooseItem)
                  this.showButton = true
                  pageUtil.tip('新增成功', 'success')
                }
              }, ()=> {
                pageUtil.tip('新增失败', 'danger')
              })
            } else {
              this.cardsList.push(chooseItem)
              this.showButton = true
            }
          }
        }else{
          pageUtil.tip('请先搜索新的卡号', 'warning');
        }


      },
      cancel(){
        this.showButton = true
      }
    }
  }
</script>
<style>
  .pay-card {
    border: 1px solid #eee;
    padding: 12px 12px;
  }

  .delete-icon {
    font-size: 24px;
  }

  .pay-card-zfje {
    width: 240px;
  }

  .pay-card-ysxm {
    width: 220px;
  }

  .pay-card-ye {
    width: 200px;
  }

  .pay-card-zfje input {
    width: 150px !important;
  }

  .pay-card-delete {
    float: right;
    cursor: pointer;
  }

  .select-icon .iconfont {
    font-size: 24px;
    cursor: pointer;
  }
</style>

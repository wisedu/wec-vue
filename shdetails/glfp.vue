<template>
  <!--关联发票-->
  <div>
    <div class="bh-form-groupname sc-title-borderLeft bh-mb-24" :title="titleval">
      {{titleval}}
    </div>
    <div class="bh-row ml4">
      <div class="bh-col-md-3" v-for="(index,item) in imgList">
        <direct-upload
          :readonly="true"
          :upload-url="obj.url"
          :delete-url="obj.url"
          :upload-param="obj.x"
          :delete-param ="obj.x"
          :edit-buttons="obj.btns"
          :width="168"
          :height="108"
          display-type="image"
          button-type="block"
          :images-url="item.fjlj"
          :limit="1"
           ></direct-upload>
      </div>
    </div>



  </div>
  <!--关联发票-->
</template>
<script type="text/javascript">

  import {postJson, handler} from 'bh-vue/utils/http';
  import pageUtil from 'bh-vue/utils/pageUtil';
  import directUpload from 'bh-vue/direct-upload/directUpload.vue';
  export default {
    components: {directUpload},

    computed: {},
    data: () => {

      return {
        imgList: [],
        obj: {
          url: '/jbxx',
          x:{a:''},
          btns:['preview']
        }

      }
    },
    props: {
      titleval: {
        type: String,
        default: '关联发票'
      },
      urls: String,
      flag: true,
      //参数集合
      row: {
        type: Object,
        default: function(){
          return {}
        }
      }
    },
    ready() {
      this.init();
    },
    route: {},

    methods: {
      init(){

        // 获取预算卡号数据
        var row = this.row,
          res = {zfglWid:row.zfglWid};
        this.urls && postJson(this.urls, res, handler.DATAS).then(data => {

          if( !!data ){

            var arr = [];

            //imgList此处用imgList数据
            if(this.flag){

              //此处走关联发票
              var list = data.glfp;

              _.each(list,function(item,index){
                var obj = {
                  fjlj:[item.fjlj]
                };
                arr.push(obj);
              });


              this.imgList = arr;

            }else{

              //此处走其他支付凭证
              var list2 = data.qtpz;

              _.each(list2,function(item,index){
                var obj = {
                  fjlj:[item.fjlj]
                };
                arr.push(obj);
              });



              this.imgList = arr;
            }
          }

        }, () => {
          pageUtil.tip('获取数据失败', 'danger');
        });

      }

    }
  }
</script>
<style scoped>

  .ml12 {
    margin-left: 12px;
  }

  .ml4 {
    margin-left: 4px;
  }
</style>

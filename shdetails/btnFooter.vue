<template>
  <div v-if="toggleGroup">
    <!--底部按钮-->
    <div class="btn-box bh-clearfix">
      <div class="left-btn bh-pull-left bh-bColor-grey-3 bh-border-r" v-if="togglePrev" @click="prev">
        <div ><&nbsp;&nbsp;&nbsp;&nbsp;上一份</div>
      </div>
      <div class="right-btn bh-pull-right bh-bColor-grey-3 bh-border-l" v-if="togglePrev"  @click="next">
        <div>下一份&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>

      <div class="center-btnbox">
        <bh-button type="success"  :small="true" @click="pass">通过</bh-button>
        <bh-button type="default" :small="true" @click="returns">退回</bh-button>
        <bh-button type="default" :small="true" @click="notpass">不通过</bh-button>
      </div>
    </div>
    <!--底部按钮-->

  </div>
</template>
<script type="text/javascript">

  import bhButton from 'bh-vue/bh-button/bhButton.vue'



  export default {
    components: {
      bhButton
    },
    props: {
      togglePrev: {
        default: false
      },
      toggleGroup: {
        default: true
      }
    },
    computed: {

    },
    data: () => {

      return {

      }
    },
    ready() {

    },
    route: {},

    methods: {
      pass () {
        this.$dispatch('pass');
      },
      returns () {
        this.$dispatch('returns');
      },
      notpass () {
        this.$dispatch('notpass');
      },
      prev () {
        this.$dispatch('prev');
      },
      next () {
        this.$dispatch('next');
      }
    }
  }
</script>
<style scoped>
  .btn-box{
    width:100%;
    height:50px;
    position: relative;
    background: #F7F8FC;
    margin-bottom: 50px;
  }
  .center-btnbox{
    position: absolute;
    top:0;
    left: 50%;
    transform: translateX( -50% );
    height: 50px;
    line-height: 50px;
  }
  .left-btn,.right-btn{
    height:50px;
    line-height: 50px;
    text-align: center;
    width:140px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
</style>

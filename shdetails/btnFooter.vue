<template>
  <div v-if="toggleGroup">
    <!--底部按钮-->
    <div class="btn-box bh-clearfix">
      <div class="left-btn bh-pull-left bh-bColor-grey-3 bh-border-r" :class="{active:leftAcitve}" v-if="togglePrev" @click="prev">
        <div ><&nbsp;&nbsp;&nbsp;&nbsp;上一份</div>
      </div>
      <div class="right-btn bh-pull-right bh-bColor-grey-3 bh-border-l" :class="{active:rightAcitve}" v-if="togglePrev"  @click="next">
        <div>下一份&nbsp;&nbsp;&nbsp;&nbsp;></div>
      </div>

      <div class="center-btnbox">
        <bh-button type="primary"  :small="false" @click="pass">通过</bh-button>
        <bh-button type="default" :small="false" @click="returns">退回</bh-button>
        <bh-button type="default" :small="false" @click="notpass">不通过</bh-button>
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
      },
      leftAcitve: {
        default: false
      },
      rightAcitve: {
        default: false
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
    height: 50px;
    position: fixed;
    background: #F7F8FC;
    width:93.5%;
    bottom: 34px;
    left:50%;
    transform: translateX(-50%);
  }
  @media screen and (max-width: 1290px) {
    .btn-box {
         width:93.5%;
    }
  }
  @media screen and (min-width: 1900px) {
    .btn-box {
         width: 81.5%;
    }
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
  .left-btn.active,.right-btn.active{
    opacity: 0.5
  }
</style>

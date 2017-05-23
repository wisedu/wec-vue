<template>
  <!--借款原因-->
  <div class="bh-mt-24 bh-mb-24" v-for="item in dataObj">
    <div class="bh-form-groupname sc-title-borderLeft bh-mb-24">
      {{item.title}}
    </div>
    <div class="ml12 bh-color-grey-2">
      {{item.value}}
    </div>
  </div>
  <!--借款原因-->
</template>
<script type="text/javascript">
  import pageUtil from 'bh-vue/utils/pageUtil';
  import {postJson, handler} from 'bh-vue/utils/http';


  export default {
    components: {},

    computed: {},
    data: () => {

      return {
      }
    },
    props: {
      dataObj: []
    },
    ready() {

    },
    route: {},

    methods: {

    }
  }
</script>
<style scoped>

  .ml12 {
    margin-left: 12px;
  }

</style>

<template>
    <div class='entry-content bh-p-8' data-type="{{entryItem.tmmc}}">
        <div class='title bh-mv-12'>{{entryItem.tmmc}}</div>
        <div class='content-ro bh-pt-8'>{{{entryItem.tmnr}}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            entryItem: Object
        },
        ready(){
            this.$dispatch('item-ready',this.entryItem);
        }
    }
</script>

<style scoped>

</style>

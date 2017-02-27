<template>
    <div class="pop">
        <label>
            <i class='icon iconfont bh-color-success icon-checkcircle'></i>
            <span>已通过</span>
        </label>
        <label class="bh-mh-8">
            <i class='icon iconfont bh-color-danger icon-cancel'></i>
            <span>已退回</span>
        </label>
        <label>
            <i class='icon iconfont bh-color-warning icon-locallibrary'></i>
            <span>我审核的</span>
        </label>
    </div>
</template>

<style>
    .pop{
        background-color: #000300;
        padding: 4px 12px;
        color: #fff;
    }
    .pop .iconfont {
        position: relative;
        top: 2px;
    }
    .jqx-popover.bottom .jqx-popover-arrow:after{
        border-bottom-color: #000300 !important;
    }
    .jqx-popover.bottom{
        background-color: #000300;
    }
    .jqx-popover.bottom .jqx-popover-title{
        display:none;
    }
    .jqx-popover {
        margin-left: 48px !important;
    }
    .jqx-popover-content {
        padding: 0 0 32px !important;
    }
    .jqx-popover-arrow {
        margin-left: -59px !important;
    }
</style>

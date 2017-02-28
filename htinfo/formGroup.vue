<template>
    <div class='bh-form-horizontal'>
        <div>
            <div class="bh-col-md-12 bh-form-groupname sc-title-borderLeft bh-mb-24" bh-role-form-outline="title">{{title}}</div>
            <div class='bh-form-block bh-ph-16'>
                <slot name="goods-bz"></slot>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    };
</script>

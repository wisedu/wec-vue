<template>
    <div class='bh-form-horizontal'>
        <div>
            <div class="bh-col-md-12 bh-form-groupname sc-title-borderLeft bh-mb-24" >{{title}}</div>
            <div class='bh-form-block bh-ph-16'>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: String
        }
    };
</script>
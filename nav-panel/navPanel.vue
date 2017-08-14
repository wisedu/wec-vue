<template>
    <div class="nav-panel bh-ph-16">
        <div class="title bh-mr-24 bh-color-grey-3" v-if='title && title.length > 0'> <i class="icon iconfont icon-star bh-color-grey-3"></i> {{title}}</div>
        <div class='nav-list'>
            <ul>
                <li v-for='menu in menus'>
                    <a v-link='menu.url' class='bh-ph-24' :class='["bh-bColor-hover-primary", current == menu.name ? "bh-bColor-primary":"", current == menu.name ? "active":""]'>{{menu.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    let _activeMenu = (vm) => {
        let transition = vm.$router._currentTransition;
        let path = transition.to.path;
        let menus = vm.menus;
        let matched = false;
        for (let i = 0, length = menus.length; i < length; i++) {
            let menu = menus[i];
            let url = menu.url;
            if (path === url) {
                vm.current = menu.name;
                matched = true;
                break;
            }
        }
        if(matched == false && vm.defaultMenu) {
            for (let i = 0, length = menus.length; i < length; i++) {
                if (vm.defaultMenu === menus[i].url) {
                    vm.current = menus[i].name;
                    break;
                }
            }
        }
    };

    export default {
        data: () => ({
            current: null
        }),
        props: {
            defaultMenu: String,
            title: String,
            menus: {
                type: Array,
                default: []
            }
        },
        created () {
            this.$router.afterEach((transition) => {
                if (this.menus.length === 0) {
                    return;
                }

                _activeMenu(this);
            });

            this.$watch('menus', (newVal) => {
                _activeMenu(this);
            });
        }
    };
</script>

<style scoped lang="less">
    .nolist {
        list-style: none;
        display: inline-block;
    }

    .nav-panel {
    	box-shadow: 0 1px 3px 2px rgba(160, 160, 160, 0.2);
        background-color: #fff;
        line-height: 4rem;

        .title {
            display: inline-block;
            font-size: 2rem;
            line-height: 2rem;
        }

        .nav-list {
            display: inline-block;

            ul {
                .nolist;

                li {
                    .nolist;

                    a {
                        color: #333;
                        cursor: pointer;
                        display: inline-block;
                        box-sizing: border-box;

                        font-size: 1.5rem;
                        border-bottom: 4px solid transparent;

                        &:hover, &.active {
                            // border-color: #333;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>

<template>
<div class="lv-left-sub-menu-item">
    <div class="lv-left-sub-menu-item-icon" :class="item.icon"></div>
    <div class="lv-left-sub-menu-item-title">{{item.title}}</div>
    <LeftSubMenu :items="item.items" 
        v-if="showItems()">
    </LeftSubMenu>
</div>
</template>

<script>
export default {
    props:["item"],
    components:{
    },
    methods:{
        showItems(){
            return this.item.items && this.item.items.length>0;
        },
    },
    beforeCreate(){
        this.$options.components.LeftSubMenu = ()=>import('./LeftSubMenu.vue')
    }
}
</script>

<style>
.lv-left-sub-menu-item{
    width:100%;
    position:relative;
}

.lv-left-sub-menu-item-icon{
    display:inline-block !important;
    width:60px;
    height:30px;
    line-height:30px !important;
    vertical-align:middle;
    text-align:center;
    font-size:20px !important;
}

.lv-left-sub-menu-item-title{
    display:inline-block ;
    width:calc(100% - 60px);
    height:30px;
    line-height:30px;
    vertical-align:middle;
    text-align:left;
    font-size:20px;
    font-weight:bolder;
}
</style>
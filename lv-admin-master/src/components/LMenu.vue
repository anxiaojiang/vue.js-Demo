<template>
<div class="lv-lmenu">
    <LMenuItem :menutype="menutype" v-for="item in items" :key="item.title" :item="item">
    </LMenuItem>
</div>
</template>

<script>
import LMenuItem from './LMenuItem'

export default{
    props:["items", "menutype"],
    data: function(){
        return {
            
        }
    },
    components:{LMenuItem}
}
</script>

<style>
.lv-lmenu, .lv-lmenu-item, .lv-lmenu-item-title{
    z-index:10000;
}
</style>
<template>
<div class="lv-left-sub-menu">
    <LeftSubMenuItem v-for="item in items" :key="item.title"
        :item="item">
    </LeftSubMenuItem>
</div>
</template>

<script>
import LeftSubMenuItem from './LeftSubMenuItem'

export default {
    props:["items"],
    components:{
        LeftSubMenuItem
    }
}
</script>

<style>
.lv-left-sub-menu{
    width:100%;
}

.lv-fold .lv-left-sub-menu .lv-left-sub-menu{
    margin-left:140px !important;
    margin-top:-30px;
}
</style>
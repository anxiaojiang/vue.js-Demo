<template>
<div class="lv-center-section">
    <TabControl></TabControl>
</div>
</template>

<script>
import TabControl from './TabControl'
export default {
    components:{TabControl}
}
</script>

<style>
.lv-center-section{
    width:calc(100% - 200px);
    height:calc(100% - 60px);
    float:left;
    position:relative;
}

.lv-fold .lv-center-section{
    width:calc(100% - 60px);
}
</style>
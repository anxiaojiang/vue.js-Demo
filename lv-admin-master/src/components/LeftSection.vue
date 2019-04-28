<template>
<div class="lv-left-section">
    <slot name="menu"></slot>
</div>
</template>

<script>
export default {

}
</script>

<style>
.lv-left-section{
    width:200px;
    height:calc(100% - 60px);
    float:left;
    background-color:gray;
}

.lv-fold .lv-left-section{
    width:60px;
}
</style>
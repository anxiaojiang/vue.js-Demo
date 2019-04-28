<template>
<div class="lv-function-item">
    <div class="lv-function-item-icon">
        <slot name="icon"></slot>
    </div>
    <div class="lv-function-item-panel">
        <slot name="panel"></slot>
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style>
    .lv-function-item-panel{
        display:none;
        width:200px;
        background-color:#fff;
        z-index:100;
        position:relative;
    }

    .lv-function-item:hover > .lv-function-item-panel{
        display:block;
        position:relative;
        margin-top:45px;
        margin-left:-160px;
        padding-top:20px;
        background-color:transparent;
    }

    .lv-function-panel-item-content{
        background-color:#fff;
    }
</style>
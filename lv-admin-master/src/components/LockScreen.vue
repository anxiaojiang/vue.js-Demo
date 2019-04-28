<template>
<div class="lv-lockscreen-component" ref="lockscrren">
<button @click="close">close</button>
</div>
</template>

<script>
export default{
    methods:{
        close(){
            this.$refs.lockscrren.style.display="none";
        }
    }
}
</script>

<style>
    .lv-lockscreen-component{
        width:100%;
        height:100%;
        position:fixed;
        background-color:gray;
        z-index:1000000;
        display:none;
    }
</style>
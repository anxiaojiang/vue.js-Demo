<template>
<div ref="headitem" class="lv-tabcontrol-head-item" @click="selected()">
    <div :class="item.icon" class="lv-tabcontrol-head-item-icon"></div>
    <div class="lv-tabcontrol-head-item-text">{{item.title}}</div>
    <div class="lv-tabcontrol-head-item-refresh fa fa-refresh"></div>
    <div class="lv-tabcontrol-head-item-close fa fa-close" @click="close($event)" ></div>
</div>
</template>

<script>
export default{
    props:["item"],
    methods:{
        selected(){
            if(!this.$refs.headitem.classList.contains('lv-selected')){
                this.tabEventBus.$emit('tabSelectChanged', this.item);   
            }
        },
        close(event){
            this.tabEventBus.$emit('tabclose', this.item);   
            event.cancelBubble=true;
        },
    },
    inject:["tabEventBus"],
    created(){
    },
}
</script>

<style>
.lv-tabcontrol-head-item{
    padding:5px;
    margin-left:5px;
    margin-top:9px;
    border:1px solid #ddd;
    width:auto;
    display:inline-block;
    float:left;
}

.lv-tabcontrol-head-item.lv-selected{
    border-bottom-color:#fff;
}

.lv-tabcontrol-head-item div{
    display:inline-block;
    font-size:14px !important;
    height:20px;
    line-height:20px !important;
    vertical-align:middle;
    margin:0px 2px;
}
</style>
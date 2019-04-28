<template>
<div class="lv-content-panel" v-if="!closed">
    <div class="lv-content-panel-head">
        <div class="lv-content-panel-title">
            <div class="lv-content-panel-icon" :class="currentIcon">
            </div>
            <div class="lv-content-panel-text">
                {{currentTitle}}
            </div>
            <div class="lv-content-panel-btns">
                <div class="fa fa-close" @click="close($event)"></div>
            </div>
        </div>
    </div>
    <div class="lv-content-panel-body">
    </div>
</div>
</template>

<script>
export default{
    props:['title', 'icon'],
    data:function(){
        return {
            defaultIcon:'fa fa-windows',
            defaultTitle:'面板',
            closed:false
        }
    },
    computed:{
        currentTitle(){
            return this.title && this.title.length > 0 ? this.title : this.defaultTitle;
        },
        currentIcon(){
            return this.icon && this.icon.length > 0 ? this.icon : this.defaultIcon;
        }
    },
    methods:{
        close(event){
            this.closed = true;
            event.cancelBubble = true;
        }
    }
}
</script>

<style>
.lv-content-panel{
    width:100%;
    position:relative;
    background-color:#fff;
    border:1px solid #ddd;
    border-radius:4px;
}

.lv-content-panel-head{
    height:30px; 
    line-height:30px !important;
    vertical-align:middle;
    border-bottom:1px solid #ddd;
}

.lv-content-panel-icon, .lv-content-panel-text{
    display:inline-block;
    margin-left:5px;
}

.lv-content-panel-btns{
    float:right;
    margin-right:5px;
}
</style>

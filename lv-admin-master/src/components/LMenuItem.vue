<template>
<div class="lv-lmenu-item" ref="menuitem" :menu-type="menutype" :class="{'lv-selected':bselected, 'lv-hover':bhover}" 
    @click="selected()" @mouseenter="mouseEnter" @mouseleave="mouseLeave" >
    <div class="lv-lmenu-item-title">
        <div class="lv-lmenu-highlight" v-if="showHighlight"></div>
        <div class="lv-lmenu-item-icon" :class="item.icon"></div>
        <div class="lv-lmenu-item-text">
            {{item.title}}
            <div v-if="hasSubMenu" class="lv-lmenu-item-collapse fa"
                :class="{'fa-angle-down':collapse, 'fa-angle-up':!collapse}"></div>
        </div>
    </div>
    <LMenu :menutype="'lv-sub-lmenu'" :items="item.items" v-if="hasSubMenu"></LMenu>
</div>
</template>

<script>
export default{
    props:["item", "menutype"],
    data:function(){
        return {
            bselected:false,
            bhover:false
        }
    },
    computed:{
        showHighlight(){
            return this.menutype == 'lv-top-lmenu';
        },
        collapse(){
            if(this.menutype == 'lv-top-lmenu'){
                return this.bselected || this.bhover;
            } else {
                return  this.bselected;
            }
        },
        hasSubMenu(){
            return this.item.items && this.item.items.length > 0;
        }
    },
    methods:{
        mouseEnter(){
            this.bhover = true;
        },
        mouseLeave(){
            this.bhover = false;
            if(this.menutype == 'lv-top-lmenu'){
                this.menuEventBus.$emit('removeSubmenuSelected');
            }
        },
        selected(){
            if(this.item.addr){
                this.tabEventBus.$emit('openNewTab', this.item);
            }
            if(this.menutype == 'lv-top-lmenu'){
                this.menuEventBus.$emit("topmenuSelectedChanged", this.item.title);
            } else {
                this.menuEventBus.$emit("submenuSelectedChanged", this.item.title);
            }
        },
        topmenuSelectedChnaged(title){
            this.bselected = !(title != this.item.title)
        },
        submenuSelectedChnaged(title){
            if(title == this.item.title){
                if(this.$refs.menuitem && this.$refs.menuitem.classList.contains('lv-selected')){
                    this.bselected = false;
                } else {
                    this.bselected = true;     
                }
            } else {
                this.bselected = false;
            }
        },
        removeSubmenuSelected(){
            this.bselected = false;
        }
    },
    inject:["menuEventBus", "tabEventBus"],
    created(){
        if(this.menutype == 'lv-top-lmenu'){
            this.menuEventBus.$on("topmenuSelectedChanged", this.topmenuSelectedChnaged);
        } else {
            this.menuEventBus.$on("submenuSelectedChanged", this.submenuSelectedChnaged);
            this.menuEventBus.$on("removeSubmenuSelected", this.removeSubmenuSelected);
        }
    },
    beforeCreate(){
        this.$options.components.LMenu = ()=>import('./LMenu.vue')
    },
}
</script>

<style>
.lv-fold div[menu-type='lv-sub-lmenu'] .lv-lmenu-item-icon{
    width:30px;
}
.lv-lmenu-item-title{
    width:100%;
    height:40px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:20px !important;
    position:relative;
}

.lv-lmenu-highlight,
.lv-lmenu-item-icon,
.lv-lmenu-item-text{
    display:inline-block !important;
    float:left;
}

.lv-lmenu-highlight{
    width:3px;
    height:100%;
}

.lv-lmenu-item-icon{
    width:54px;
    height:40px;
    margin-right:3px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:20px !important;
}

.lv-lmenu-item-text{
    width:calc(100% - 60px);
    text-align:left;
}

.lv-fold .lv-lmenu-item-title{
    overflow:hidden;
}

.lv-lmenu-item-collapse{
    float:right;
    width:40px;
    height:40px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:30px !important;
}

div[menu-type='lv-top-lmenu'] > .lv-lmenu,
div[menu-type='lv-sub-lmenu'] > .lv-lmenu{
    padding-left:20px;
}
div[menu-type='lv-sub-lmenu'] .lv-lmenu-item-title{
    height:30px !important;
}
div[menu-type='lv-sub-lmenu'] .lv-lmenu-item-collapse,
div[menu-type='lv-sub-lmenu'] .lv-lmenu-highlight,
div[menu-type="lv-sub-lmenu"] .lv-lmenu-item-icon,
div[menu-type="lv-sub-lmenu"] .lv-lmenu-item-text{
    height:30px !important;
    line-height:30px !important;
    font-size:14px !important;
}

div[menu-type="lv-sub-lmenu"]{
    display:none;
}

div[menu-type="lv-top-lmenu"].lv-hover > .lv-lmenu > div[menu-type="lv-sub-lmenu"],
div[menu-type="lv-top-lmenu"].lv-selected > .lv-lmenu > div[menu-type="lv-sub-lmenu"],
div[menu-type="lv-sub-lmenu"].lv-selected > .lv-lmenu > div[menu-type="lv-sub-lmenu"]{
    display:block;
}

.lv-fold div[menu-type='lv-top-lmenu'] > .lv-lmenu{
    position:absolute;
    margin-left:60px;
    padding-left:0px;
    width:140px;
}



.lv-fold div[menu-type='lv-sub-lmenu'] > .lv-lmenu{
    position:absolute;
    margin-left:140px;
    width:140px;
    margin-top:-30px;
}

.lv-fold div[menu-type="lv-top-lmenu"].lv-hover > .lv-lmenu-item-title{
    overflow:visible;
    width:200px;
}

.lv-fold div[menu-type="lv-top-lmenu"] > .lv-lmenu > div[menu-type="lv-sub-lmenu"]{
    display:none !important;
}

.lv-fold div[menu-type="lv-top-lmenu"].lv-hover > .lv-lmenu > div[menu-type="lv-sub-lmenu"]{
    display:block !important;
}
</style>
<template>
<div class="lv-tabcontrol" ref="tabcontrol">
    <div class="lv-tabcontrol-head">
        <div ref="headitems" class="lv-tabcontrol-head-items">
            <TabControlHeadItem ref="tabitems" v-for="item in items"
                :item="item" :key="item.addr"
                :class="{'lv-selected':item.addr == currentItem.addr}">
            </TabControlHeadItem>
        </div>
        <div class="lv-tabcontrol-head-btns">
            <div @click="selectPrevious($event)" class="fa fa-angle-left"></div>
            <div class="fa fa-angle-down lv-tabcontrol-head-options">
                <div class="lv-tabcontrol-head-options-panel">
                    <div @click="closeAll($event)" class="lv-tabcontrol-head-options-panel-item">关闭所有</div>
                    <div @click="closeOther($event)" class="lv-tabcontrol-head-options-panel-item">关闭其他</div>
                </div>
            </div>
            <div @click="selectNext($event)" class="fa fa-angle-right"></div>
        </div>
    </div>
    <div class="lv-tabcontrol-body">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import TabControlHeadItem from './TabControlHeadItem'
export default{
    data:function(){
        return {
            items:[
            ],
            currentItem:{}
        }
    },
    components:{TabControlHeadItem},
    methods:{
        selectPrevious(event){
            var index = this.items.findIndex(p=>p.addr == this.currentItem.addr);
            if(!(index == -1 || index == 0)){
                this.setCurrentItem(this.items[index-1])
            }
            event.cancelBubble = true;
        },
        selectNext(event){
            var index = this.items.findIndex(p=>p.addr == this.currentItem.addr);
            if(!(index == -1 || index == this.items.length -1)){
                this.setCurrentItem(this.items[index+1])
            }
            event.cancelBubble = true;
        },
        closeAll(event){
            this.currentItem = {};
            this.items = [];
            event.cancelBubble = true;
        },
        closeOther(event){
            if(this.items && this.hasOwnProperty('length') && this.itmes.length != 0){
                this.items = [this.currentItem];
                this.setCurrentItem(this.currentItem);
                event.cancelBubble = true;
            }
            
        },
        setCurrentItem(item){
            this.currentItem = item;
                this.$router.push(this.currentItem.addr);
                this.$refs.headitems.style.width = (this.items.length * 200) + 'px';
                var index = this.items.findIndex(p=>p.addr == item.addr);
                var width = 0;
                for(var i=0; i<index; i++){
                    width = width + this.$refs.tabitems[i].$el.clientWidth + 5;
                }
                if(width > this.$refs.tabcontrol.clientWidth - 200){
                    this.$refs.headitems.style.marginLeft = 
                        (-1*(width - this.$refs.tabcontrol.clientWidth + 200)) + 'px'
                } else {
                    this.$refs.headitems.style.marginLeft = "0px";
                }
        },
        openNewTab(item){
            if(this.items.findIndex(p=>p.addr == item.addr) == -1){
                this.items.push(item);
            }
            this.setCurrentItem(item);
        },
        closeTab(item){
            var index = this.items.findIndex(p=>p.addr == item.addr);
            if(index != -1){
                if(this.items.length == 1){
                    this.items = [];
                } else if(index == 0){
                    this.items.splice(index, 1);
                    this.setCurrentItem(this.items[0]);  
                } else if(index == this.items.length-1){
                    this.items.splice(index, 1);
                    this.setCurrentItem(this.items[this.items.length-1]);
                } else {
                    this.items.splice(index, 1);
                    this.setCurrentItem(this.items[index-1]);
                }
            }
        },
        tabSelectChanged(item){
            this.setCurrentItem(item);
        }
    },
    inject:["tabEventBus"],
    created(){
        this.tabEventBus.$on("openNewTab", this.openNewTab);
        this.tabEventBus.$on("tabclose", this.closeTab);
        this.tabEventBus.$on("tabSelectChanged", this.tabSelectChanged);
    },
}
</script>

<style>
.lv-tabcontrol{
    width:calc(100% - 10px);
    height:calc(100% - 10px);
    margin:5px;
    position:relative;
    background-color:#fff;
    border-shadow:5px 5px 5px #ddd;
}

.lv-tabcontrol-head{
    width:100%;
    height:40px;
    border-bottom:1px solid #ddd;
    overflow:hidden;
}

.lv-tabcontrol-body{
    width:100%;
    height:calc(100% - 41px);
    position:relative;
}

.lv-tabcontrol-head-items{
    display:inline-block;
    overflow:hidden;
}

.lv-tabcontrol-head-btns{
    height:32px;
    position:absolute;
    right:5px;
    top:9px;
    border-radius:5px;
}

.lv-tabcontrol-head-btns .fa{
    height:32px;
    width:25px;
    line-height:32px !important;
    vertical-align:middle;
    font-size:20px !important;
    text-align:center;
}

.lv-tabcontrol-head-btns > .fa:first-child{
    border-right:1px solid #ddd !important;
}

.lv-tabcontrol-head-btns > .fa:last-child{
    border-left:1px solid #ddd !important;
}

.lv-tabcontrol-head-options{
    position:relative;
}
.lv-tabcontrol-head-options-panel{
    position:absolute;
    width:90px;
    background-color:transparent;
    margin-left:-30px;
    margin-top:-5px;
    padding-top:10px;
    display:none;
}

.lv-tabcontrol-head-options:hover .lv-tabcontrol-head-options-panel{
    display:block;
    z-index:10000;
}

.lv-tabcontrol-head-options-panel-item{
    height:20px;
    line-height:20px !important;
    vertical-align:middle;
    font-size:12px !important;
    background-color:red;
    color:#fff;
}

.lv-tabcontrol-head-options-panel-item:first-child{
    border-top-left-radius:5px;
    border-top-right-radius:5px;
}

.lv-tabcontrol-head-options-panel-item:last-child{
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
}

.lv-tabcontol-content{
    height:100%;
    width:100%;
    position:relative;
    overflow:auto;
    background-color:#ecf0f5;
}
</style>
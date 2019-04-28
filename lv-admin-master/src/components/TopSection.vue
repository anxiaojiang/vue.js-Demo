<template>
<div class="lv-top-section">
    <LockScreen ref="lockscreen"></LockScreen>
    <div class="lv-logo">{{logo}}</div>
    <div class="lv-function">
        <div class="lv-function-item fa fa-navicon" @click="foldClick"></div>
        <div class="lv-function-items">
            <FunctionItem>
                <div title="锁屏" class="fa fa-lock" slot="icon" @click="lockScrren"></div>
            </FunctionItem>
            <FunctionItem>
                <div class="fa fa-arrows-alt" slot="icon" @click="screenfullToggle"></div>
            </FunctionItem>
            <FunctionItem>
                <div class="fa fa-gears" slot="icon" ></div>
                <SkinPanel slot="panel"></SkinPanel>
            </FunctionItem>
            <FunctionItem>
                <div class="fa fa-bell" slot="icon"></div>
                <MessagePanel slot="panel"></MessagePanel>
            </FunctionItem>
            <FunctionItem>
                <div class="fa fa-tasks" slot="icon"></div>
                <TaskPanel slot="panel" style="display:block"></TaskPanel>
            </FunctionItem>
            <FunctionItem>
                <div class="fa fa-user" slot="icon"></div>
                <UserPanel slot="panel" style="display:block"></UserPanel>
            </FunctionItem>
        </div>
    </div>
</div>
</template>

<script>
import LockScreen from './LockScreen'
import FunctionItem from './FunctionItem'
import SkinPanel from './SkinPanel'
import MessagePanel from './MessagePanel'
import UserPanel from './UserPanel'
import TaskPanel from './TaskPanel'
import screenfull from 'screenfull'
import { mapState, mapMutations } from "vuex"
export default {
    components:{LockScreen, FunctionItem, SkinPanel, MessagePanel, UserPanel, TaskPanel},
    computed:{
        ...mapState({
            title: state=>state.config.title,
            titleAlias: state=>state.config.titleAlias,
            fold: state=>state.config.fold
        }),
        logo(){
            return this.fold ? this.titleAlias : this.title;
        }
    },
    methods:{
        ...mapMutations({
            setFold: "config/setFold",
        }),
        foldClick(){
            this.setFold(this.fold ? false:true);
        },
        screenfullToggle(){
            screenfull.toggle();
        },
        lockScrren(){
            this.$refs.lockscreen.$el.style.display = "block";    
        }
    }
}
</script>

<style>
.lv-top-section{
    width:100%;
    height:60px;
}

.lv-logo{
    width:200px;
    text-align:center;
    font-size:30px;
}

.lv-function{
    width:calc(100% - 200px);
    font-size:30px !important;
}

.lv-fold .lv-logo{
    width:60px;
}

.lv-fold .lv-function{
    width:calc(100% - 60px);
}

.lv-logo, .lv-function,
.lv-function-item-icon > div{

    height:60px;
    line-height:60px !important;
    vertical-align:middle;
    display:inline-block;
}

.lv-function-item,.lv-function-item-icon > div{
    width:40px;
    text-align:center;
    display:inline-block;
}

.lv-function-item-icon > div{
    float:right;
}

.lv-function-items{
    float:right;
    position:relative;
}

.lv-function-items .lv-function-item{
    float:left;
}

</style>
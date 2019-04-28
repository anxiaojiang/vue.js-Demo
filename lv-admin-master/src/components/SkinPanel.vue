<template>
<div class="lv-function-panel-item-content lv-skin-panel">
    <h1>Skins</h1>
    <div class="lv-skin-items">
        <div class="lv-skin-item" @click="selectSkin(skin)"
            v-for="skin in skins" :key="skin.name">
            <div class="lv-skin-item-color" :style="{backgroundColor:skin.color}"></div>
            <div class="lv-skin-item-name">{{skin.name}}</div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default{
    computed:{
        ...mapState({
            skins: state=>state.config.skins,
        }),
    },
    methods:{
        ...mapMutations({
            setCurrentSkin: "config/setCurrentSkin",
        }),
        selectSkin(skin){
            this.setCurrentSkin(skin);
        }
    }
}
</script>

<style>
    .lv-skin-panel{
        width:100%;
        height:100%;
        background-color:#222d32;
        line-height:30px;
        vertical-align:middle;
        text-align:left;
        padding:5px;
        font-size:20px;
    }

    .lv-skin-panel h1{
        font-size:20px;
        height:30px;

    }

    .lv-skin-items{
        width:calc(100% - 10px);
    }
    .lv-skin-item{
        width:100%;
        height:30px;
    }
    .lv-skin-item .lv-skin-item-color{
        display:inline-block;
        width:100px;
        height:30px;
        float:left;
    }

    .lv-skin-item-name{
        display:inline-block;
        float:left;
        margin-left:10px;
    }
</style>
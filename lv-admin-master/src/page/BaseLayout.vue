<template>
<div class="lv-tabcontol-content lv-baselayout-component">
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <div class="lv-info-block">
                    <div class="lv-info-block-icon fa fa-bell" style="background-color:#00c0ef">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#00c0ef">10</h1>
                        <h4>系统通知</h4>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <div class="lv-info-block">
                    <div class="lv-info-block-icon fa fa-tasks" style="background-color:#dd4b39">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#dd4b39">10</h1>
                        <h4>当前任务数</h4>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <div class="lv-info-block">
                    <div class="lv-info-block-icon fa fa-user" style="background-color:#00a65a">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#00a65a">10</h1>
                        <h4>员工人数</h4>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <div class="lv-info-block">
                    <div class="lv-info-block-icon fa fa-envelope" style="background-color:#f39c12">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#f39c12">10</h1>
                        <h4>未处理消息</h4>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="24">
            <div class="grid-content bg-purple">
                <ContentPanel style="height:100px;margin-top:20px;"></ContentPanel>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="18">
            <div class="grid-content bg-purple">
                <ContentPanel style="height:460px;margin-top:20px;" :title="'窗体'" :icon="'fa fa-slideshare'"></ContentPanel>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <div class="lv-info-block" style="margin-top:20px;">
                    <div class="lv-info-block-icon fa fa-bell" style="background-color:#00c0ef">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#00c0ef">10</h1>
                        <h4>系统通知</h4>
                    </div>
                </div>
                <div class="lv-info-block" style="margin-top:20px;">
                    <div class="lv-info-block-icon fa fa-tasks" style="background-color:#dd4b39">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#dd4b39">10</h1>
                        <h4>当前任务数</h4>
                    </div>
                </div>
                <div class="lv-info-block" style="margin-top:20px;">
                    <div class="lv-info-block-icon fa fa-user" style="background-color:#00a65a">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#00a65a">10</h1>
                        <h4>员工人数</h4>
                    </div>
                </div>
                <div class="lv-info-block" style="margin-top:20px;">
                    <div class="lv-info-block-icon fa fa-envelope" style="background-color:#f39c12">
                    </div>
                    <div class="lv-info-block-text">
                        <h1 style="color:#f39c12">10</h1>
                        <h4>未处理消息</h4>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import ContentPanel from '../components/ContentPanel'
export default{
    components:{ContentPanel}
}
</script>

<style>
.lv-baselayout-component{
    padding:10px;
}

.lv-info-block{
    height:100px;
    background-color:#fff;
}
.lv-info-block-icon{
    height:100px;
    width:50%;
    line-height:100px !important;
    background-color:red;
    vertical-align:middle;
    font-size:40px !important;
    text-align:center;
    float:left;
    color:#fff;
}

.lv-info-block-text{
    height:100px;
    width:50%;
    float:left;
    text-align:center;
    padding-top:20px;
}

.lv-info-block-text h4{
    color:#999;
}

.lv-static-display{
    height:100px;
    background-color:#fff;
    margin-top:20px;
}
</style>
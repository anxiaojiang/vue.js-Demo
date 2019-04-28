<template>
<div class="lv-function-panel-item-content lv-task-panel">
    <div class="lv-task-panel-title">Your task list</div>
    <div class="lv-task-panel-items">
        <div class="lv-task-panel-item">
            <div class="lv-task-panel-item-info">
                <div class="lv-task-name">design some button</div>
                <div class="lv-task-percent">20%</div>
            </div>
            <div class="lv-task-panel-item-progress">
                <div class="lv-progressbar">
                    <div class="lv-progressbar-percent" style="width:20%"></div>
                </div>
            </div>
        </div>
        <div class="lv-task-panel-item">
            <div class="lv-task-panel-item-info">
                <div class="lv-task-name">design some button</div>
                <div class="lv-task-percent">50%</div>
            </div>
            <div class="lv-task-panel-item-progress">
                <div class="lv-progressbar">
                    <div class="lv-progressbar-percent" style="width:50%"></div>
                </div>
            </div>
        </div>
        <div class="lv-task-panel-item">
            <div class="lv-task-panel-item-info">
                <div class="lv-task-name">design some button</div>
                <div class="lv-task-percent">20%</div>
            </div>
            <div class="lv-task-panel-item-progress">
                <div class="lv-progressbar">
                    <div class="lv-progressbar-percent" style="width:20%"></div>
                </div>
            </div>
        </div>
        <div class="lv-task-panel-item">
            <div class="lv-task-panel-item-info">
                <div class="lv-task-name">design some button</div>
                <div class="lv-task-percent">20%</div>
            </div>
            <div class="lv-task-panel-item-progress">
                <div class="lv-progressbar">
                    <div class="lv-progressbar-percent" style="width:20%"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="lv-task-panel-all">
    View all
    </div>
</div>
</template>

<script>
export default{
}
</script>

<style>
    .lv-task-panel{
        color:#444444;
        text-align:left;
        border:1px solid #ddd;
        border-radius:2px;
    }
    .lv-task-panel-title,
    .lv-task-panel-all{
        line-height:20px;
        vertical-align:middle;
        font-size:14px;
    }

    .lv-task-panel-title{
        border-bottom:1px solid #f4f4f4;
        padding:5px;
    }

    .lv-task-panel-items{
        height:100px;
        overflow:auto;
    }

    .lv-task-panel-all{
        border-top:1px solid #f4f4f4;
        text-align:center;
        height:30px;
        line-height:30px;
    }

    .lv-task-panel-item{
        height:33px;
        width:calc(100% - 10px);
        line-height:33px !important;
        vertical-align:middle;
        border-bottom:1px solid #f4f4f4;
        padding-left:10px;
    }

    .lv-task-panel-item:last-child{
        border-bottom:none;
    }

    .lv-task-panel-item div{
        display:inline-block;
        font-size:14px !important;
    }

    .lv-task-panel-item-info{
        height:20px;
        line-height:20px;
        vertical-align:middle;
        font-size:14px;
        width:100%;
        float:left;
    }

    .lv-task-panel-item-info div{
        display:inline-block;
    }

    .lv-task-panel-item-info .lv-task-percent{
        float:right;
        margin-right:5px;
    }

    .lv-task-panel-item-progress{
        height:10px;
        line-height:10px;
        width:calc(100% - 10px);
        float:left;
    }

    .lv-task-panel-item-progress .lv-progressbar{
        width:100%;
        height:10px;
        background-color:#f5f5f5;
    }

    .lv-task-panel-item-progress .lv-progressbar-percent{
        height:10px;
        background-color:#00c0ef;
    }
</style>
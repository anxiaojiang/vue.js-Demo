<template>
<div class="lv-function-panel-item-content lv-message-panel">
    <div class="lv-message-panel-title">You have 10 notivications</div>
    <div class="lv-message-panel-items">
        <div class="lv-message-panel-item">
            <div class="lv-message-icon fa fa-balance-scale"></div>
            <div class="lv-message-text">
            fjdksaljfdslkajlfkd
            </div>
        </div>
        <div class="lv-message-panel-item">
            <div class="lv-message-icon fa fa-balance-scale"></div>
            <div class="lv-message-text">
            fjdksaljfdslkajlfkd
            </div>
        </div>
        <div class="lv-message-panel-item">
            <div class="lv-message-icon fa fa-balance-scale"></div>
            <div class="lv-message-text">
            fjdksaljfdslkajlfkd
            </div>
        </div>
        <div class="lv-message-panel-item">
            <div class="lv-message-icon fa fa-balance-scale"></div>
            <div class="lv-message-text">
            fjdksaljfdslkajlfkd
            </div>
        </div>
    </div>
    <div class="lv-message-panel-all">
    View all
    </div>
</div>
</template>

<script>
export default{
}
</script>

<style>
    .lv-message-panel{
        color:#444444;
        text-align:left;
        border:1px solid #ddd;
        border-radius:2px;
    }
    .lv-message-panel-title,
    .lv-message-panel-all{
        line-height:20px;
        vertical-align:middle;
        font-size:14px;
    }

    .lv-message-panel-title{
        border-bottom:1px solid #f4f4f4;
        padding:5px;
    }

    .lv-message-panel-items{
        height:100px;
        overflow:auto;
    }

    .lv-message-panel-all{
        border-top:1px solid #f4f4f4;
        text-align:center;
        height:30px;
        line-height:30px;
    }

    .lv-message-panel-item{
        height:30px;
        width:calc(100% - 10px);
        line-height:30px !important;
        vertical-align:middle;
        border-bottom:1px solid #f4f4f4;
        padding-left:10px;
    }

    .lv-message-panel-item::last-child{
        border-bottom:none;
    }

    .lv-message-panel-item div{
        display:inline-block;
        font-size:14px !important;
    }
</style>
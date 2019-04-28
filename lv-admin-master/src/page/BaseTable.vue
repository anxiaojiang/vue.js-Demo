<template>
<div class="lv-tabcontol-content lv-basetable-component">
    <v-table column-width-drag is-horizontal-resize is-vertical-resize style="width:calc(100% - 10px);margin:5px;"
        :columns="columns" :table-data="tableData"
        row-hover-color="#eee" row-click-color="#edf7ff"
        :filter-method="filterMethod"
        :cell-edit-done="cellEditDone"
        :multiple-sort="multipleSort">
    </v-table>
    <VPagination></VPagination>
</div>
</template>

<script>
import 'vue-easytable/libs/themes-base/index.css'
import {VTable, VPagination} from 'vue-easytable' 
export default{
    components:{VTable, VPagination},
    methods:{
        cellEditDone(newValue,oldValue,rowIndex,rowData,field){

                this.tableData[rowIndex][field] = newValue;
            },
        filterMethod(filters){
            var tableData = this.getTableData();

            // filter gender
            if (Array.isArray(filters.tel)){

                tableData = tableData.filter(item => item.tel.startsWith(filters.tel[0]));
            }
            this.tableData = tableData;
        },
        getTableData(){

                return [
                    {"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}
                ]
            }
    },
    created(){

            //this.tableData = this.getTableData();
        },
    data: function() {
        return {
            tableData: [{"name":"赵伟","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                        {"name":"李伟","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                        {"name":"孙伟","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                        {"name":"周伟","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                        {"name":"吴伟","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"}],
            multipleSort:true,
                columns: [
                    {width: 60, titleAlign: 'center',columnAlign:'center',type: 'selection'},
                    {field: 'name', title:'姓名', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isEdit:true,
                              formatter: function (rowData,rowIndex,pagingIndex,field) {

                                   return `<span class='cell-edit-color'>${rowData[field]}</span>`;
                               },isResize:true},
                             {field: 'tel', title: '手机号码', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isEdit:true,isResize:true,
                                filterMultiple: false,
                                filters: [{
                                    label: '182',
                                    value: '182',
                                }, {
                                    label: '161',
                                    value: '161',
                                }]
                             },
                             {field: 'hobby', title: '爱好', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                             {field: 'address', title: '地址', width: 250, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true},
                             {field: 'options', title: '操作', width: 100, titleAlign: 'center',columnAlign:'center',
                             formatter: function (rowData) {

                                   return '<button title=' + rowData.name + '>edit</button><button style="margin-left:10px;" title=' + rowData.tel + '>delete</button>';
                               }}
                ]
        }
    }
}
</script>
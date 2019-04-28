import Vue from "vue"
import VueRouter from "vue-router"

import BaseTable from "../page/BaseTable";
import BaseLayout from "../page/BaseLayout";
import MarkdownEditor from "../page/MarkdownEditor";
import TextEditor from "../page/TextEditor";
Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {path:"/basetable", component:BaseTable},
        {path:"/baselayout", component:BaseLayout},
        {path:"/texteditor", component:TextEditor},
        {path:"/mdeditor", component:MarkdownEditor}
    ]
})
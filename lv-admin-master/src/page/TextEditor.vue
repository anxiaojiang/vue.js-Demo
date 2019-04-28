<template>
<div class="lv-tabcontol-content lv-texteditor-component">
    <quill-editor class="lv-editor" ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    <div style="clear:both;margin-top:120px;">
        <button @click="submit">click</button>
    </div>
</div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
export default{
    data: function(){
        return {
            content: '',
            editorOption: {
                placeholder: 'Hello World'
            }
        }
    },
    components: {quillEditor},
    methods: {
        submit(){
        }
    }
}
</script>

<style>
    .lv-texteditor-component .lv-editor{
        height:200px;
        width:calc(100% - 10px);
        margin:5px;
    }
</style>
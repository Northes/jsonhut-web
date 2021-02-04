<template>
  <div>
    <client-only>
      <codemirror
        v-model="code"
        :options="cmOption"
        class="codemirror"
      />
    </client-only>
  </div>
</template>
<script>
export default {
  props: ['code','readOnly'],
  data () {
    return {
      cmOption: {
        tabSize: 4,
        styleActiveLine: true, // 高亮选中行
        lint: true,
        mode: 'text/javascript',
        lineNumbers: true, // 显示行号
        lineWrapping: true, // 自动换行
        scrollbarStyle: 'overlay', // 滚动条样式
        theme: 'ayu-mirage',
        readOnly: this.readOnly, // 只读
        autofocus: true,
        autoCloseBrackets: true // 自动闭合括号
      }
    }
  }
}
</script>

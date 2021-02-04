import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'
// codemirror language
import 'codemirror/mode/vue/vue.js'
// codemirror active-line.js
import 'codemirror/addon/selection/active-line.js' // 高亮选中行插件
// more codemirror resource...
import 'codemirror/addon/scroll/simplescrollbars' // 滚动条插件
import 'codemirror/addon/edit/closebrackets' // 自动闭合括号插件



Vue.use(VueCodemirror)

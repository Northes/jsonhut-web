import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'
import {Button, Col, Input, message, Row, Select} from 'ant-design-vue'


// Vue.use(Antd)
Vue.use(Button)
Vue.use(Col)
Vue.use(Select)
Vue.use(Row)
Vue.use(message)
Vue.use(Input)
Vue.prototype.$message = message;

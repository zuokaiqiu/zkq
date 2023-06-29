import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// svg插件需要配置代码
import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })

// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from './components'
app.use(globalComponent)

import router from './router'
import pinia from './store'
app.use(router)
app.use(pinia)

// 引入全局样式
import '@/styles/index.scss'
app.mount('#app')

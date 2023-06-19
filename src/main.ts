import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// svg插件需要配置代码
import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')

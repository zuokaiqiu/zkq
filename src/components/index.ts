// 引入項目中的全局組件
import SvgIcon from '@/components/svgIcon/index.vue'
import Pagination from '@/components/pagination/index.vue'
// 全局對象
const allGlobalComponent = {
  SvgIcon,
  Pagination,
}
// 對外暴露
export default {
  install(app) {
    // console.log('app', app);
    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
  }
}

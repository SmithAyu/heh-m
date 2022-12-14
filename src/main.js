import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'amfe-flexible'
import 'vant/lib/index.css'
//  加载全局样式
import './styles/index.less'
createApp(App).use(store).use(router).use(Vant).mount('#app')

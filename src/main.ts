import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

const clickOutside = {
    beforeMount: (el: any, binding: any) => {
      el.clickOutsideEvent = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
            binding.value()
        }
      }
      document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted: (el: any) => {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  }

createApp(App)
    .use(store)
    .use(router)
    .use(PerfectScrollbar)
    .use(ContextMenu)
    .directive('click-outside', clickOutside)
    .mount('#app')

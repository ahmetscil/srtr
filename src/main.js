import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store'
import TopHeader from './components/Header'
import BottomFooter from './components/Footer'
import MobileMenu from './components/MobileMenu'
import CatLinks from './components/CatLinks'
import { TimelineLite, TweenMax, Back, Easing, CSS, Expo } from 'gsap'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component('TopHeader', TopHeader)
Vue.component('BottomFooter', BottomFooter)
Vue.component('MobileMenu', MobileMenu)
Vue.component('CatLinks', CatLinks)
const router = new VueRouter({
  routes,
  base: process.env.BASE_URL,
  mode: 'history'
})
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

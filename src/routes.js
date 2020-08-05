import Home from './views/Home.vue'

const Page = resolve => {
  require.ensure(['./views/Page.vue'], () => {
    resolve(require('./views/Page.vue'))
  })
}
const Blog = resolve => {
  require.ensure(['./views/Blog.vue'], () => {
    resolve(require('./views/Blog.vue'))
  })
}
const BlogCat = resolve => {
  require.ensure(['./views/BlogCat.vue'], () => {
    resolve(require('./views/BlogCat.vue'))
  })
}
const Rider = resolve => {
  require.ensure(['./views/Rider.vue'], () => {
    resolve(require('./views/Rider.vue'))
  })
}
const Riders = resolve => {
  require.ensure(['./views/Riders.vue'], () => {
    resolve(require('./views/Riders.vue'))
  })
}

export const routes = [
  { path: '/', component: Home },
  { path: '/sr-tr/:url', component: Page },
  { path: '/organizations', component: BlogCat },
  { path: '/organizations/:blog', component: Blog },
  { path: '/riders/', component: Riders },
  { path: '/rider/:rider', component: Rider }
]

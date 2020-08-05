import Vue from 'vue'
import Vuex from 'vuex'
// import router from './routes'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pageTitle: 'Star Riders Turkiye',
    appTitle: 'Star Riders Turkiye',
    cdnImgUrl: 'https://s3.eu-west-2.amazonaws.com/boltcdn/img/',
    apiURL: 'http://admin.ahmetsc.com/api/H0n5RzaQ5nP7RgcZ/',
    targetHref: null
  },
  getters: {
    appTitle (state) {
      return state.pageTitle
    }
  },
  mutations: {
    goHref (state, payload) {
      state.targetHref = payload.targetHref
      state.appTitle = payload.appTitle + ' | ' + state.pageTitle
      document.title = state.appTitle
      TweenMax.to('#mask', .7, { height: '100%', ease: Power1.easeOut })
    }
  }
})

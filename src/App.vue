<template>
  <div id="app">
    <div id="mask" class="mask">
      <img src="../public/img/logo.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl'])
    },
    mounted() {
      document.title = this.appTitle
    },
  }
</script>

<style lang="sass">
@font-face
  font-family: 'capsule'
  src: url('../public/fonts/capsule_x_pro_medium_uc-webfont.woff2') format('woff2'), 
  url('../public/fonts/capsule_x_pro_medium_uc-webfont.woff') format('woff')
  font-weight: normal
  font-style: normal
body
  margin: 0px
  padding: 0px
  height: 100vh
  width: 100vw
  overflow-x: hidden
  background: #fff
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  .mask
    position: fixed
    top: 0px
    left: 0px
    z-index: 99
    background: linear-gradient(223deg, #000000, #525252, #333)
    background-size: 600% 600%
    animation: srtrloader 2s ease infinite
    color: #fff
    width: 100%
    height: 100%
    overflow: hidden
    & img
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      margin: auto
      width: 40%

  @-webkit-keyframes srtrloader
    0%
      background-position: 88% 0%
    50%
      background-position: 13% 100%
    100%
      background-position: 88% 0%
  @-moz-keyframes srtrloader
    0%
      background-position: 88% 0%
    50%
      background-position: 13% 100%
    100%
    background-position: 88% 0%

  @keyframes srtrloader
    0%
      background-position: 88% 0%
    50%
      background-position: 13% 100%
    100%
      background-position: 88% 0%
</style>

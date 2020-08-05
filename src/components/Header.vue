<template>
  <header>
    <a href="/">
      <img src="../../public/img/logo.png" :alt="appTitle" :title="appTitle" class="logo">
    </a>
  
    <ul class="headerNavbar">
      <li><router-link to="" @click.native="linkClick('/sr-tr/star-riders-turkey-hakkinda', 'HAKKIMIZDA')" >HAKKIMIZDA</router-link></li>
      <li><router-link to="" @click.native="linkClick('/sr-tr/star-riders-turkey-yonetim-sekli', 'KURALLAR')" >KURALLAR</router-link></li>
      <li><router-link to="" @click.native="linkClick('/riders', 'RIDERS')" >RIDERS</router-link></li>
      <li><router-link to="" @click.native="linkClick('/organizations', 'ORGANİZASYONLAR')" >ORGANİZASYONLAR</router-link></li>
      <li><router-link to="" @click.native="linkClick('/sr-tr/contact', 'İLETİŞİM')" >İLETİŞİM</router-link></li>
    </ul>
  </header>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl']),
      ...mapState(['apiURL']),
      ...mapState(['targetHref'])
    },
    methods: {
      ...mapMutations(['goHref']),
      linkClick(to, title) {
        this.goHref({
          targetHref: to,
          appTitle: title
        })
        setTimeout(() => {
          this.$router.push({
            path: this.targetHref
          })
        }, 1000)
      }
    },
    props: {
      logoClass: String,
      logoId: String,
      logoStyle: null
    }
  }
</script>

<style lang="sass">
  header
    display: block
    position: fixed
    width: 100vw
    top: 0px
    left: 0px
    z-index: 50
    @media screen and (max-width: 768px)
      display: none
  .logo 
    width: 190px
    padding: 20px 5px 5px 5px
    float: left
    @media screen and (max-width: 768px)
      position: absolute
      top: -10px
      margin: initial
      width: 300px
      left: 10px
      right: auto
      padding: 20px 5px 5px 5px
      background: #ffffff
      z-index: 3
      &:hover
        width: 300px
        transition: .3s
        transform: skewY(0deg)
        top: -10px
  .headerNavbar
    width: auto
    float: right
    list-style: none
    margin-top: 30px
    margin-right: 30px
    & li
      display: inline-block
      margin: 20px 5px 20px 5px
      & a
        color: white
        padding: 5px 10px
        background: #000
        &:hover
          background: #fff
          color: #000
          text-decoration: none


</style>
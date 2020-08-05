<template>
  <div>
    <top-header logoId="detailLogo" logoClass="detailLogo"></top-header>
    <mobile-menu></mobile-menu>
    <section class="riderPage" v-for="post in posts" :key="post.id" @mousemove="mouseTarget">
      <div class="onlymobile" :style="{backgroundImage: 'url(https://s3.eu-west-2.amazonaws.com/boltcdn/img/' + post.photo + ')'}"></div>
      <div class="riderBg" :style="{backgroundImage: 'url(https://s3.eu-west-2.amazonaws.com/boltcdn/img/' + post.photo + ')', transform : 'skewX(-'+skx+'deg) skewY(-'+sky+'deg)'}"></div>
      <div class="riderTitle">
        <h1>{{post.name}}</h1>
        <p>{{post.title}}</p>
        <div v-html="post.summary"></div>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import axios from 'axios'
  export default {
    data() {
      return {
        posts: [],
        errors: [],
        tarx: null,
        tary: null,
        posx: null,
        posy: null,
        skx: null,
        sky: null,
        pt: this.$store.getters.appTitle
      }
    },
    methods: {
      mouseTarget: function(event) {
        this.tarx = event.clientX;
        this.tary = event.clientY;
        this.posx = this.tarx / 50
        this.posy = this.tary / 50
        this.skx = this.tarx / 200
        this.sky = this.tary / 200
      }
    },
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl']),
      ...mapState(['apiURL'])
    },
    mounted() {
      TweenMax.to('#mask', 1, {
        height: "0%",
        ease: Power1.easeOut
      })
      document.onreadystatechange = function() {
        let newState = document.readyState
        if (newState == 'complete')
          TweenMax.to('#mask', 1, {
            height: "0%",
            ease: Power1.easeOut
          })
      }
    },
    created() {
      axios.get(this.apiURL + `team&${this.$route.params.rider}`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="sass">
  .onlymobile
    position: fixed
    z-index: -5
    background-size: 500%
    background-position: center
    filter: blur(5px) grayscale(100%)
    width: 100%
    height: 100%
    top: 0px
    left: 0px
  .riderPage
    width: 100vw
    height: 100vh
    position: fixed
    z-index: 0
    overflow: hidden
    .riderBg
      position: fixed
      top: 0px
      left: 0px
      width: 100%
      height: 100%
      background-size: 120%
      background-position: top
      background-repeat: no-repeat
      filter: grayscale(100%)
      z-index: -1
      @media screen and (max-width: 768px)
        background-size: 200%
        background-position: center

    .riderTitle
      position: absolute
      left: 5vw
      height: fit-content
      margin: auto
      bottom: 5vw
      color: #fff
      & h1
        text-shadow: 0 2px 6px rgba(0,0,0,.5)
        font-size: 100px
        margin: 0px
        padding: 0px
        font-family: 'Fjalla One', sans-serif
      & p
        background: #bf1019
        color: #fff
        font-size: 30px
        padding: 2px 10px
        letter-spacing: -0.1em
        width: fit-content
        box-shadow: 0 2px 6px rgba(0,0,0,.5)
      @media screen and (max-width: 768px)
        & h1
          font-size: 50px
        & p
          font-size: 20px
          padding: 2px 5px
      



</style>
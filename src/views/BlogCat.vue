<template>
  <div>
    <top-header logoId="pageLogo" logoClass="pageLogo"></top-header>
    <mobile-menu></mobile-menu>
    <section class="page customElement" v-for="post in posts" :key="post.id">
      <div class="catheader">
        <div class="cattitle">{{post.title}}</div>
        <div class="catbg" :style="{backgroundImage: 'url('+cdnImgUrl+post.photo+')'}"></div>
      </div>
      <div class="container">
        <div class="row" id="dsf">
          <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 thumbs" v-for="blog in post.blogs" :key="blog.id">
            <router-link to="" @click.native="linkClick(post.url+'/'+blog.url, blog.title)">
              <img :src=" cdnImgUrl + blog.photo">
              <h1>{{blog.title}}</h1>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import axios from 'axios'
  export default {
    data() {
      return {
        posts: [],
        errors: [],
        divscrolltop: 0,
        primgh: 0,
      }
    },
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl']),
      ...mapState(['apiURL']),
      ...mapState(['targetHref'])
    },
    created() {
      axios.get(this.apiURL + `blogcat&organizations`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    mounted() {
      TweenMax.to('#mask', 1, {
        height: "0%",
        ease: Power1.easeOut
      })
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
    watch: {
      "$route" (to) {
        TweenMax.to('#mask', 1, {
          height: "0%",
          ease: Power1.easeOut
        })
        axios.get(this.apiURL + `blogcat/organizations`)
          .then(response => {
            this.posts = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style lang="sass">
  .page
    width: 100vw
    padding-bottom: 25vh
    overflow-x: hidden
    position: relative
    .catheader
      position: relative
      height: 50vh
      width: 100%
      background: #000
      margin-bottom: 30px
      .catbg
        position: absolute
        left: 0px
        top: 0px
        width: 100%
        height: 100%
        background-repeat: no-repeat
        background-size: 100%
        filter: blur(2px)
        @media screen and (max-width: 768px)
          background-size: auto 100%
          background-position-x: center

      .cattitle
        position: absolute
        width: 100%
        top: 120px
        text-align: center
        color: #fff
        letter-spacing: -0.1em
        font-weight: bold
        text-shadow: 0px 2px 2px #00000090
        font-size: 100px
        z-index: 2
    .thumbs
      position: relative
      overflow: hidden
      display: inline-block
      margin: 0 15px 50px 15px
      background-image: url(http://admin.ahmetsc.com/storage/uploads/img/ahmloader.svg)
      background-repeat: no-repeat
      background-position: center center
      background-color: #fff

      & img
        width: 100%
        filter: grayscale(100%) blur(1px)
        transition: .3s
      & h1
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%) skewY(-2deg)
        color: #fff
        letter-spacing: -0.1em
        font-weight: bold
        text-shadow: 0px 2px 2px #00000090
        text-align: center
        transition: .3s
      & a
        color: #fff
      &:hover
        transition: .3s
        & img
          filter: grayscale(0%) blur(0px)
          transition: .3s
        & h1
          top: 50%
          left: 50%
          transform: translate(-50%,-50%) skewY(0deg)
          transition: .3s
    @media screen and (max-width: 768px)
      padding-top: 0px
      .thumbs
        width: 100vw
        height: 30vh
        margin: 0 0 10px 0
        & h1
          line-height: 20px

</style>
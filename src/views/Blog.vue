<template>
  <div>
    <top-header logoId="detailLogo" logoClass="detailLogo"></top-header>
    <mobile-menu></mobile-menu>
    <section class="page customElement" v-for="post in posts" :key="post.id">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 blogImg">
            <img :src="'' + cdnImgUrl + post.photo" :alt="post.title" :title="post.title">
          </div>
          <div class="col-xs-12 col-sm-6 col-md-9">
            <h1>{{post.title}}</h1>
            <div v-html="post.content"></div>
          </div>
          <div class="col-xs-12">
            <div class="detailImgs">
              <img v-for="blog in post.photos" :key="blog.id" :src="'' + cdnImgUrl + blog.photo" :alt="blog.title" :title="blog.title">
            </div>
          </div>
        </div>
      </div>
    </section>
    <bottom-footer></bottom-footer>
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
        pt: this.$store.getters.appTitle
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
      axios.get(this.apiURL + `blog&${this.$route.params.blog}`)
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
  .page
    width: 100vw
    padding-top: 20vh
    overflow-x: hidden

  .blogImg
    position: relative
    & img
      width: 100%

    .detailImgs
      position: relative
      height: auto
      overflow: auto
      background-image: url(https://s3.eu-west-2.amazonaws.com/boltcdn/img/ahmloader.svg)
      background-repeat: no-repeat
      background-position: center center
      background-color: #fff
      text-align: center
      & img
        max-width: 60vw
        max-height: 60vh
        display: block
        margin: 30px auto
</style>
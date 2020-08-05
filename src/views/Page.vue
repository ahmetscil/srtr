<template>
  <div>
    <top-header></top-header>
    <mobile-menu></mobile-menu>
    <section class="detailPage container customElement" v-for="post in posts" :key="post.id">
      <div class="dpWelcome">
          <h2 class="text-center">{{post.title}}</h2>
          <div v-html="post.content"></div>
      </div>
    </section>
    <bottom-footer></bottom-footer>
  </div>
</template>


<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  export default {
    data() {
      return {
        posts: [],
        errors: [],
        pt: this.$store.getters.appTitle,
      }
    },
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl']),
      ...mapState(['apiURL'])
    },
    mounted() {
      TweenMax.to('#mask', 1, { height: "0%", ease: Power1.easeOut})
      document.onreadystatechange = function () {
        let newState = document.readyState
        if(newState == 'complete')
          TweenMax.to('#mask', 1, { height: "0%", ease: Power1.easeOut})
          TweenMax.from('.detailPage', 1, { marginTop: "500px", autoAlpha: 0, ease: Power1.easeOut})
          TweenMax.from('.dpBg', 1, { top: "250px", autoAlpha: 0, ease: Power1.easeOut})  
      }
    },
    created() {
      axios.get(this.apiURL+`page&${this.$route.params.url}`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    watch: {
      "$route" (to) {
        TweenMax.to('#mask', 1, { height: "0%", ease: Power1.easeOut})
        axios.get(this.apiURL+`page&${to.params.url}`)
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
  .detailPage
    margin: auto
    min-height: 70vh
    padding-top: 20vh
</style>
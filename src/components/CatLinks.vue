<template>
  <div class="catLinks">
    <router-link class="catsLink" to="" @click.native="linkClick('../ASC/designer','Designer')">Designer</router-link>
    <router-link class="catsLink" to="" @click.native="linkClick('../ASC/developer','Developer')">Developer</router-link>
    <router-link class="catsLink" to="" @click.native="linkClick('../ASC/photographer','Photographer')">Photographer</router-link>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['targetHref'])
    },
    mounted() {
      var tl
      tl = new TimelineLite()
      tl.staggerFrom('.catsLink', 0.5, {x: -50, autoAlpha: 0, ease: Power1.easeOut}, 0.1)
    },
    methods: {
      ...mapMutations(['goHref']),
      linkClick (to,title) {
        this.goHref({targetHref: to, appTitle: title})
        setTimeout(() => {
          this.$router.push({path: this.targetHref})
        }, 1000)
      }
    }
  }
</script>

<style lang="sass">
  .catLinks
    position: fixed
    z-index: 2
    left: 0px
    top: 100px
    display: block
    @media screen and (max-width: 768px)
      display: none
    & a
      display: block
      padding-left: 20px
      padding-right: 10px
      color: #000
      background: #fff
      margin-bottom: 10px
      &:hover
        text-decoration: underline
  .actLink
    background: #000 !important
    color: #fff !important
    text-decoration: none
    &:hover
      text-decoration: underline

</style>
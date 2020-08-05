<template>
  <div class="home">
    <top-header></top-header>
    <mobile-menu></mobile-menu>
    <div class="grain"></div>
    <section class="index customElement" id="index">
      <div class="video">
        <div id="player"></div>
      </div>
      <div class="icon-scroll"></div>
    </section>
    <section class="slider customElement" id="slider">
      <div class="icon-scroll-up"></div>
      <ind-slider></ind-slider>
    </section>
  </div>
</template>

<script>
  import IndSlider from '@/components/IndexSlider.vue'
  
  export default {
    name: 'home',
    components: {
      IndSlider
    },
    data() {
      return {
        show: 0,
        pt: this.$store.getters.appTitle
      }
    },
    mounted() {
      TweenMax.to('#mask', 1, { height: "0%", ease: Power1.easeOut})
      document.title = this.pt
      var index = document.getElementById('index')
      TweenMax.from(index, .5, {
        width: '150vw',
        height: '150vh',
        top: '-25vh',
        left: '-25vw',
        autoAlpha: 0
      }); 
    },
    methods: {
      seeSlider() {
        var slider = document.getElementById('slider')
        var index = document.getElementById('index')
        TweenMax.to(slider, .2, {
          top: '0px'
        });
        TweenMax.to(index, .3, {
          top: '-50vw'
        });
      },
      seeHome() {
        var slider = document.getElementById('slider')
        var index = document.getElementById('index')
        TweenMax.to(slider, .2, {
          top: '100vw'
        });
        TweenMax.to(index, .1, {
          top: '0vw'
        });
      },
      mouseWheel(e) {
        const direction = e.deltaY
        this.show = direction
        var slider = document.getElementById('slider')
        var index = document.getElementById('index')
        if (direction > 0) {
          TweenMax.to(slider, .5, {
            top: '0px',
            ease: Power1.easeOut
          });
          TweenMax.to(index, .5, {
            width: '150vw',
            height: '150vh',
            ease: Power1.easeOut
          });
        } else {
          TweenMax.to(slider, .3, {
            top: '100vw'
          });
          TweenMax.to(index, .3, {
            width: '100vw',
            height: '100vh',
            top: '0vh',
            left: '0vw'
          });
        }
      }
    },
    watch: {
      "$route" (to) {
        //TweenMax.to('#mask', 1, { height: "0%", ease: Power1.easeOut})
        alert('2');
      }
    }
  }
</script>

<style lang="sass">
  #player
    width: 100vw
    height: 100vh
  .index 
    background: #fff
  .home
    position: relative
    width: 100vw
    .index
      width: 100vw
      height: 100vh
    .slider
      width: 100vw
      height: 100vh
      z-index: 2
      background: #fff
  nav
    display: none
    @media screen and (max-width: 768px)
      display: block
      position: fixed
      font-size: 0px
      z-index: 4
      left: 50%
      bottom: 15px
      transform: translate(-50%,0)
      & li
        display: inline-block
        margin-left: 5px
        margin-right: 5px
        height: 20px
        width: 20px
        border-radius: 20px
        background: transparent
        border: 1px #fff solid
        cursor: pointer

  .icon-scroll,
  .icon-scroll:before,
  .icon-scroll-up,
  .icon-scroll-up:before
    position: absolute
    left: 50%
    bottom: 20px
    z-index: 2

  .icon-scroll,
  .icon-scroll-up
    display: block
    width: 25px
    height: 40px
    box-shadow: inset 0 0 0 1px #fff
    border-radius: 15px
    @media screen and (max-width: 768px)
      display: none

  .icon-scroll:before
    content: ''
    width: 3px
    height: 3px
    background: #fff
    margin-left: -2px
    top: 8px
    border-radius: 3px
    animation-duration: 1.5s
    animation-iteration-count: infinite
    animation-name: scroll-d
  .icon-scroll-up:before
    content: ''
    width: 3px
    height: 3px
    background: #fff
    margin-left: -2px
    top: 28px
    border-radius: 3px
    animation-duration: 1.5s
    animation-iteration-count: infinite
    animation-name: scroll-u

  @keyframes scroll-d
    0%
      opacity: 1
    100%
      opacity: 0
      transform: translateY(20px)
  @keyframes scroll-u
    0%
      opacity: 1
    100%
      opacity: 0
      transform: translateY(-20px)
</style>

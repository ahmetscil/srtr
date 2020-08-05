<template>
  <div class="mobileHeader">
    <div id="mobileLogo" class="mobileLogo">
      <router-link to="" @click.native="linkClick('/', 'Home')">
        <img src="../../public/img/logo.png">
      </router-link>
    </div>
    <div class="hamburgerToggle" @click="toggleMenu">
      <div class="hamburger hamburger--spin" v-bind:class="[isActive ? 'is-active' : '']">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>  
    <!-- <div v-if="isActive == true" id="mobileNav" class="mobileNav"> -->
    <div id="mobileNav" class="mobileNav">
      <router-link to="" @click.native="linkClick('/sr-tr/star-riders-turkey-hakkinda', 'HAKKIMIZDA')" >HAKKIMIZDA</router-link>
      <router-link to="" @click.native="linkClick('/sr-tr/star-riders-turkey-yonetim-sekli', 'KURALLAR')" >KURALLAR</router-link>
      <router-link to="" @click.native="linkClick('/riders', 'RIDERS')" >RIDERS</router-link>
      <router-link to="" @click.native="linkClick('/organizations', 'ORGANİZASYONLAR')" >ORGANİZASYONLAR</router-link>
      <router-link to="" @click.native="linkClick('/sr-tr/contact', 'İLETİŞİM')" >İLETİŞİM</router-link>
    </div>
  
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        isActive: false,
        pt: this.$store.getters.appTitle
      }
    },
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl']),
      ...mapState(['apiURL']),
      ...mapState(['targetHref'])
    },
    methods: {
      toggleMenu: function() {
        var mobileNav = document.getElementById('mobileNav')
        if (this.isActive === false) {
          this.isActive = true
          TweenMax.to(mobileNav, .5, {
            left: '0vw',
            autoAlpha: 1,
            ease: Power1.easeOut
          });
          document.querySelector('.customElement').style.filter= 'blur(5px)'
        } else {
          this.isActive = false
          TweenMax.to(mobileNav, .5, {
            left: '100vw',
            autoAlpha: 0,
            ease: Power1.easeOut
          });
          document.querySelector('.customElement').style.filter= 'blur(0px)'
        }
      },
      ...mapMutations(['goHref']),
      linkClick (to,title) {
        this.goHref({targetHref: to, appTitle: title})
        setTimeout(() => {
          this.$router.push({path: this.targetHref})
        }, 1000)
      }
    },
    mounted() {
      var mobileLogo = document.getElementById('mobileLogo')
      TweenMax.from(mobileLogo, .5, {
        width: '200%',
        top: '-200px',
        left: '-200px',
        autoAlpha: 0,
        ease: Power1.easeOut
      });
    }
  }
</script>

<style lang="sass">
  .mobileHeader
    display: none
    @media screen and (max-width: 768px)
      display: block
      position: absolute
      top: 0px
      left: 0px
      width: 100%
      z-index: 1
      padding: 10px
      .mobileLogo
        width: 35%
        margin: auto
        & img
          width: 100%
      .hamburgerToggle
        position: fixed
        right: 0px
        top: 20px
        z-index: 99
        background: #00000090

  .mobileNav 
    position: fixed
    z-index: 2
    top: 0
    left: 100vw
    width: 100vw
    height: 100vh
    display: table
    padding: 30% 0
    background: #00000070

  .mobileNav a 
    display: block
    text-align: center
    font-weight: bold
    color: #fff
    font-size: 24px
    display: table-row
    text-shadow: 0 2px 2px #00000090


</style>

<style>
  /*!
         * Hamburgers
         * @description Tasty CSS-animated hamburgers
         * @author Jonathan Suh @jonsuh
         * @site https://jonsuh.com/hamburgers
         * @link https://github.com/jonsuh/hamburgers
         */
  
  .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #fff;
  }
  
  .hamburger-box {
    width: 30px;
    height: 8px;
    display: inline-block;
    position: relative;
  }
  
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 1px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  
  .hamburger-inner::before {
    top: -10px;
  }
  
  .hamburger-inner::after {
    bottom: -10px;
  }
  
  
  /*
    * Spin
    */
  
  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  
  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  
  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  
  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  
  /*
    * Spin Reverse
    */
  
  .hamburger--spin-r .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  
  .hamburger--spin-r .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }
  
  .hamburger--spin-r .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  
  .hamburger--spin-r.is-active .hamburger-inner {
    transform: rotate(-225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  .hamburger--spin-r.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }
  
  .hamburger--spin-r.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(90deg);
    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
</style>
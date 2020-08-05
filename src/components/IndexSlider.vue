<template>
  <div>
    <section class="indexSlider">
      <div class="info">
        <div class="infoImg">
          <img src="http://panel.starridersturkey.com/assets/uploads/4703003400936_gif.gif">
        </div>
        <div class="infoText">
            <h3>STAR RIDERS TURKEY</h3>
            <p>Kapımız, cinsiyet ayrımı yapılmaksızın en az A2 ehliyet ve silindir hacmi en az 250 cc olan, kendine ait (XVS 250 Dragstar – XVS 650 Dragstar – XVS 1100 Dragstar –XVZ Royal Star – XV Wild Star –XV 950 Serileri, XV 950 Midnightstar – XV 1300 Midnight Star, vs.) model Yamaha Star serisi motosiklet sahiplerine açıktır.  Kulübümüz şartlarına uygun tüm Yamaha Star sevdalıları gerekli prosedürlerin yerine getirilmesinin ardından üyeliğe alınmaktadır.</p>
            <a href="https://www.facebook.com/groups/starriderstr" target="_blank">BİZE KATIL</a> <a href="https://www.facebook.com/groups/starriderstr" class="button bgWhite pull-right">
              <b>facebook</b>
            </a> <a href="https://www.instagram.com/starridersturkey/" class="button bgWhite pull-right">
              <b>instagram</b>
            </a>
        </div>
      </div>


    </section>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    data() {
      return {
        posts: [],
        errors: [],
      }
    },
    computed: {
      ...mapState(['appTitle']),
      ...mapState(['cdnImgUrl']),
      ...mapState(['apiURL']),
      ...mapState(['targetHref'])
    },
    methods: {
      ...mapMutations(['goHref']),
      linkClick (to,title) {
        this.goHref({targetHref: to, appTitle: title})
        setTimeout(() => {
          this.$router.push({path: this.targetHref})
        }, 1000)
      }
    },
    created() {
      axios.get(this.apiURL+`blogcat&all&0,99&order,desc`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="sass" scopped>

  .indexSlider
    position: relative
    width: 100%
    height: 100vh
    .info
      width: 70%
      margin: auto
      padding: 200px 2%  
      @media screen and (max-width: 768px)
        padding: 50px 2% 200px 2%
        width: 100%

      .infoImg
        width: 35%
        float: left
        margin: inherit
        & img
          width: 100%
        @media screen and (max-width: 768px)
          width: 70%
          float: none
          margin: auto
        
      .infoText
        width: 65%
        float: right
        margin-top: 15vh    
        & h3
          font-family: impact
          color: #000
          letter-spacing: -.05em  
          margin: 0
        & p
          background-color: #000
          color: #fff
          font-size: 14px
          padding: 5px 10px
          text-align: justify
        & a
          color: #fff
          background: #000
          padding: 10px 20px
          float: right
          margin-left: 1px
        @media screen and (max-width: 768px)
          width: 100%
          float: none
          margin-top: 30px        
    & h1
      position: absolute
      width: 100%
      height: 100%
      bottom: 0px
      right: 0px
      margin: 0px
      padding: 0px
      font-size: 120px
      letter-spacing: -0.16em
      color: #fff
      font-weight: bold
      z-index: 2
      text-shadow: 0 5px 5px #00000050
      transform: rotate(-180deg)
      writing-mode: vertical-lr
      text-orientation: mixed
      transition: .1s
      filter: blur(0px) !important
    &:hover
      .slBg
        filter: grayscale(0%) blur(0px)
        transition: .1s
      & h1
        letter-spacing: -0.1em
        transition: .1s

</style>
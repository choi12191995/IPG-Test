<template>
  <div class="home router-view">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
   <section id="hero-img">
       <h1>Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit.</h1>
   </section>
   <section id="carousell">
      <h2>Carousell</h2>
       <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="https://dummyimage.com/250/ffffff/000000.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://dummyimage.com/250/red.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://dummyimage.com/250/green.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://dummyimage.com/250/e0f53f/fff.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://dummyimage.com/250/f53fe0/fff.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://dummyimage.com/250/11423e/fff.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://dummyimage.com/250/4a23e8/fff.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
   </section>
    <section>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </section>
    <section id="lorem">
        <div><img src="../assets/1634966.jpg" alt=""></div>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet dolor sit amet tincidunt finibus. Integer dictum velit at elit ullamcorper semper. In condimentum interdum ante. Proin convallis egestas risus. Praesent in leo posuere, ultrices turpis a, egestas est. Cras metus est, sodales eget tellus et, convallis iaculis neque. Maecenas laoreet massa eu turpis rhoncus, sollicitudin venenatis ipsum pharetra. Mauris ut imperdiet ligula.</p>
            <p>In iaculis interdum eros sit amet rutrum. Cras at nulla blandit, interdum tellus mollis, rhoncus lectus. Sed pretium id lacus quis fermentum. Nulla mi leo, semper nec erat vel, hendrerit bibendum mauris. Praesent finibus ullamcorper feugiat. Sed volutpat ac mauris vel placerat. Fusce varius vulputate sapien, ac tempor eros sagittis eu. Maecenas eu tortor neque. Vivamus dolor ante, tempor non odio id, sodales pharetra lacus. Pellentesque vestibulum tortor iaculis suscipit lobortis.</p>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
    data: () => ({
        swiperOption: {
            slidesPerView: 4,
          spaceBetween: 50,
            loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1000: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            750: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
    }),
    computed: {
        swiper(){
            return this.$refs.mySwiper.swiper
        }
    },
    mounted(){
//        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(0, 1000, false)
    }
}
</script>

<style lang="scss">
    .home{
/*        height: 2222px;*/
    }
    section{
        width: 100%;
        position: relative;
        &#hero-img{
            height: 500px;
            background-image: url("../assets/hero-img.jpg");
            background-size: cover;
            background-position: center left;
            background-repeat: no-repeat;
            @media screen and (max-width: 600px){
                height: 350px;
            }
            &:before{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                top: 0;
                left: 0;
            }
            &:after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                transform: skew(30deg) translateX(-80%);
                width: 80%;
                height: 100%;
                background-image: linear-gradient(120deg, #C139F6, #FFAE01);
                background-color: #333;
                opacity: .5;
                @media screen and (max-width: 800px){
                    transform: skew(20deg) translateX(-90%);
                    width: 100%;
                }
                @media screen and (max-width: 600px){
                    transform: translateX(0%);
                    width: 100%;
                    left: 0;
                }
            }
            >*{
                position: absolute;
                transition: .25s;
            }
            >h1{
                color: white;
                font-weight: bold;
                top: 50%;
                transform: translateY(-50%);
                z-index: 10;
                text-align: left;
                margin: 0 20px;
                font-size: 48px;
                @media screen and (max-width: 1080px){
                    font-size: 36px;
                }
                @media screen and (max-width: 800px){
                    font-size: 24px;
                    margin: 0 10px;
                }
                @media screen and (max-width: 600px){
                    font-size: 24px;
                    text-align: center;
                    width: 100%;
                    margin: 0;
                }
            }
        }
        &#carousell{
            padding: 20px 0;
            background: rgb(220,220,220);
            .swiper-pagination{
                bottom: 0px;
                z-index: 99;
                position: relative;
                height: 25px;
            }
            .swiper-pagination-bullet-active{
                background: rgb(100,100,100);
            }
        }
        &#lorem{
            height: 400px;
            background-image: url("../assets/dummy-background-image.jpg");
            background-size: cover;
            background-position: center left;
            background-repeat: no-repeat;
            color: white;
            display: inline-flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            @media screen and (max-width: 600px){
                flex-direction: column;
                height: auto;
            }
            *{
                transition: .25s;
            }
            >div{
                align-self: center;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                display: flex;
                height: 100%;
                img{
                    height: 80%;
                }
                &:first-child{
                    flex-grow: 1;
                    padding: 0 15px;
                }
                &:last-child{
                    flex-grow: 2;
                    text-align: justify;
                    padding: 0 20px;
                }
                p{
                    padding: 10px 0;
                }
                @media screen and (max-width: 800px){
                    &:last-child{
                        flex-grow: 3;
                        padding: 0 15px;
                    }
                    p{
                        padding: 0;
                        margin: 5px 0;
                        font-size: 14px;
                    }
                    img{
                        height: 50%;
                    }
                }
                @media screen and (max-width: 600px){
                    img{
                        width: 100%;
                        height: auto;
                        padding: 20px 10px;
                        padding-bottom: 10px;
                        box-sizing: border-box;
                    }
                    &:first-child{
                        padding: 0;
                    }
                    &:last-child{
                        padding-top: 5px;
                        padding-bottom: 20px;
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            }
        }
    }
</style>

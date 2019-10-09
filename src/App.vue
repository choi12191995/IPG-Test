<template>
  <div id="app">
    <div id="nav">
    <div id="nav-logo">
        <img src="./assets/logo.png" alt="logo">
    </div>
     <div id="nav-content">
        <div id="desktop-nav">
            <ul>
                 <li><router-link to="/">Home</router-link></li>
                 <li><router-link to="/contact">Contact</router-link></li>
             </ul>
         </div>
        <div id="mobile-nav" :class="{active: mobileNav}">
           <div @click="mobileNavTrigger()">
               <span></span>
               <span></span>
               <span></span>
           </div>
           <transition name="wipe">
               <div v-if="mobileNav">
                   <ul>
                     <li @click="mobileNavTrigger()"><router-link to="/">Home</router-link></li>
                     <li @click="mobileNavTrigger()"><router-link to="/contact">Contact</router-link></li>
                 </ul>
                 <copyright>Dev. by <a href="https://portfo.samsonchoi.hk" target="_blank">Samson Choi</a>.</copyright>
               </div>
           </transition>
        </div>
     </div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  data: () => ({
    mobileNav: false
  }),
  methods: {
    mobileNavTrigger () {
      this.mobileNav = !this.mobileNav
    }
  },
    components:{
        Footer
    }
}

</script>

<style lang="scss">
    body {
        margin: 0 auto;
        background: rgb(150,150,150);
    }

    #nav {
        width: 100%;
        height: 70px;
        background: white;
        position: fixed;
        top: 0;
        border-bottom: solid 3px rgba(50, 50, 50, 0.5);
        user-select: none;
        z-index: 999;
        >#nav-logo {
            position: absolute;
            width: 200px;
            height: calc(100% - 10px);
            padding: 5px;
            z-index: 99;
            >img {
                height: 100%;
            }
        }
        >#nav-content {
            >#desktop-nav {
                display: block;
                @media screen and (max-width: 480px) {
                    display: none;
                }
            }
            >#mobile-nav {
                display: none;
                @media screen and (max-width: 480px) {
                    display: block;
                }
                >div {
                    transition: all 0.25s;
                    width: 44px;
                    height: 22px;
                    position: absolute;
                    right: 15px;
                    z-index: 10;
                    margin: 24px 0;
                    >span {
                        transition: all 0.25s;
                        display: block;
                        width: 22px;
                        height: 2px;
                        border-radius: 1px;
                        background: rgb(100,100,100);
                        margin-top: 4px;
                        margin-left: 11px;
                    }
                }
                &.active {
                    >div {
                        width: 38px;
                    }
                    span:first-child {
                        transform: rotate(45deg);
                        transform-origin: 10% 10%;
                    }
                    span:nth-child(2) {
                        opacity: 0;
                    }
                    span:last-child {
                        transform: rotate(-45deg);
                        transform-origin: 10% 90%;
                    }
                }
                >div:first-child{
                    cursor: pointer;
                }
                >div:nth-child(2) {
                    width: 100%;
                    height: 100%;
                    background: white;
                    margin: 0;
                    z-index: 5;
                    right: 0;
                    position: fixed;
                    border-left: solid 3px rgba(50, 50, 50, 0.5);
                    box-sizing: border-box;
                    >ul{
                        margin-top: 70px;
                        width: 100%;
                        left: 0;
                        padding: 0;
                        >li{
                            display: block;
                            text-align: left;
                            padding: 0;
                            transition: all .15s;
                            &:hover{
                                background: rgb(240,240,240);
                            }
                            a{
                                height: 100%;
                                width: 100%;
                                display: block;
                                padding: 0 20px;
                            }
                        }
                    }
                }
            }
            ul {
                margin: 0;
                list-style: none;
                position: absolute;
                width: 300px;
                right: 15px;
                text-align: right;
                line-height: 70px;
                >li {
                    display: inline-block;
                    padding: 0 15px;
                    >a {
                        font-weight: bold;
                        text-decoration: none;
                        color: rgb(100, 100, 100);
                        &:hover {
                            color: rgb(125, 125, 125);
                        }
                    }
                }
            }
        }
    }

    .router-view {
        margin-top: 70px;
    }

    #app {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*  margin-top: 60px;*/
        background: white;
    }

    .wipe-enter-active {
        transition: all .5s;
    }

    .wipe-leave-active {
        transition: opacity 1s, filter .5s;
    }

    .wipe-enter {
        transform: translateX(100%);
        opacity: 0;
    }

    .wipe-leave-to {
        transform: translateX(100%);
        opacity: 0;
        filter: grayscale(1);
    }

    copyright{
        position: absolute;
        bottom: 0;
        display: block;
        padding: 20px;
        font-size: 12px;
        >a{
            font-weight: bold;
            text-decoration: none;
            color: rgb(100, 100, 100);
        }
    }
</style>

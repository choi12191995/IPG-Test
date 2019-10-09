<template>
  <footer>
      <img src="@/assets/1086px-Firefox_logo,_2019.png" alt="footer logo">
      <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div>
          © 2019 <a href="https://portfo.samsonchoi.hk" target="_blank">SamsonChoi.hk</a>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    footer{
        position: inherit;
        bottom: 0;
        width: 100%;
/*        height: 500px;*/
        background: rgb(150,150,150);
        padding: 20px 0;
        img{
            width: 60px;
        }
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            >li{
                display: inline-block;
                padding: 15px;
                >a{
                    font-weight: bold;
                    text-decoration: none;
                    color: white;
                }
                &:after{
                    content: "";
                    position: absolute;
                    width: 1px;
                    height: 18px;
                    background: white;
                    margin-left: 15px;
                }
                &:last-child:after{
                    width: 0;
                    height: 0;
                    margin: 0;
                }
            }
        }
        @media screen and (min-width: 480px){
            img{
                text-align: left;
                position: inherit;
                float: left;
                margin-left: 10px;
            }
            >div{
                display: block;
                text-align: right;
                position: inherit;
                right: 10px;
                &:last-child{
                    padding-right: 15px;
                }
                ul{
                    height: 40px;
                }
            }
        }
    }
    a{
        font-weight: bold;
        text-decoration: none;
        color: inherit;
        }
</style>

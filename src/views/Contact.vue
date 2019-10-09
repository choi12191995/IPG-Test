<template>
  <div class="contact router-view">
    <section id="contact-title">
        <h1>Contact Form</h1>
        <div>
            <fieldset></fieldset>
        </div>
    </section>
  </div>
</template>


<script>
    export default{

    }
</script>


<style lang="scss">
    #contact-title{
/*        height: 200px;*/
        background-image: url("../assets/dummy-background-image.jpg");
        background-size: cover;
        background-position: center left;
        background-repeat: no-repeat;
        color: white;
        padding-bottom: 30px;
/*
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
*/
        h1{
            padding: 50px 0;
            font-size: 48px;
            margin: 0;
        }
        >div{
            position: relative;
            max-width: 800px;
            height: 300px;
            background: yellow;
            margin: 0 auto;
            fieldset{
                border: none;
            }
        }
    }
</style>

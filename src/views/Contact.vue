<template>
  <div class="contact router-view">
    <section id="contact-title">
        <h1>Contact Form</h1>
        <div>
            <form action="submit-to-server-here" method="POST" autocomplete="off" id="form" enctype="multipart/form-data">
                <fieldset>
                    <input type="text" placeholder="First Name" v-validate="{required: true, regex: /^[a-zA-Z]+$/}" name="first_name" data-vv-as="First Name" v-model="first_name">
                   <span :class="{'invalid': errors.has('first_name'), 'valid': !errors.has('first_name')}">{{errors.first('first_name')}}<span v-if="(!errors.has('first_name') && first_name.length > 0)">First Name</span></span>
                   <br><br>
                   <input type="text" placeholder="Last Name" v-validate="{required: true, regex: /^[a-zA-Z-/w']+$/}" name="last_name" data-vv-as="Last Name" v-model="last_name">
                   <span :class="{'invalid': errors.has('last_name'), 'valid': !errors.has('last_name')}">{{errors.first('last_name')}}<span v-if="(!errors.has('last_name') && last_name.length > 0)">Last Name</span></span>
                   <br><br>
                   <input type="text" placeholder="Email" v-validate="{required: true, email: true}" name="email" data-vv-as="Email" v-model="email">
                   <span :class="{'invalid': errors.has('email'), 'valid': !errors.has('email')}">{{errors.first('email')}}<span v-if="(!errors.has('email') && email.length > 0)">Email</span></span>
                   <br><br>
                   <input type="text" placeholder="US Zip Code" v-validate="{required: true, regex: /^[0-9]{5}(?:-[0-9]{4})?$/}" name="us_zip_code" data-vv-as="US Zip Code" v-model="us_zip_code">
                   <span :class="{'invalid': errors.has('us_zip_code'), 'valid': !errors.has('us_zip_code')}">{{errors.first('us_zip_code')}}<span v-if="(!errors.has('us_zip_code') && us_zip_code.length > 0)">US Zip Code</span></span>
                   <br><br>
                   <input type="text" placeholder="US States" v-model="stateSearch" @keyup="searchState(); setDisplayState();" class="input-list-triggle">
                   <input type="text" v-validate="{required: true, usState: true}" name="us_state" data-vv-as="US States" v-model="us_state_formatted" v-show>
                   <div class="dropdown-list-container">
                       <div class="dropdown-list" v-for="state in filteredState" @click="selectedState(state.name)">
                           <span>{{state.name}}</span>
                       </div>
                   </div>
                   <span :class="{'invalid': errors.has('us_state'), 'valid': !errors.has('us_state')}">{{errors.first('us_state')}}<span v-if="(!errors.has('us_state') && us_state.length > 0)">US States</span></span>
                   <br><br>
                   <div class="submit" @click="checkSubmit()">Submit</div>
                </fieldset>
            </form>
        </div>
    </section>
  </div>
</template>


<script>
    export default {
        data: () => ({
            first_name: "",
            last_name: "",
            email: "",
            us_zip_code: "",
            stateSearch: "",
            us_state: "",
            us_state_formatted: "",
            usStates: [
                { name: "Alabama", alpha: "AL" },
                { name: "Alaska", alpha: "AK" },
                { name: "Arizona", alpha: "AZ" },
                { name: "Arkansas", alpha: "AR" },
                { name: "California", alpha: "CA" },
                { name: "Colorado", alpha: "CO" },
                { name: "Connecticut", alpha: "CT" },
                { name: "Delaware", alpha: "DE" },
                { name: "District of Columbia", alpha: "DC" },
                { name: "Florida", alpha: "FL" },
                { name: "Georgia", alpha: "GA" },
                { name: "Hawaii", alpha: "HI" },
                { name: "Idaho", alpha: "ID" },
                { name: "Illinois", alpha: "IL" },
                { name: "Indiana", alpha: "IN" },
                { name: "Iowa", alpha: "IA" },
                { name: "Kansa", alpha: "KS" },
                { name: "Kentucky", alpha: "KY" },
                { name: "Lousiana", alpha: "LA" },
                { name: "Maine", alpha: "ME" },
                { name: "Maryland", alpha: "MD" },
                { name: "Massachusetts", alpha: "MA" },
                { name: "Michigan", alpha: "MI" },
                { name: "Minnesota", alpha: "MN" },
                { name: "Mississippi", alpha: "MS" },
                { name: "Missouri", alpha: "MO" },
                { name: "Montana", alpha: "MT" },
                { name: "Nebraska", alpha: "NE" },
                { name: "Nevada", alpha: "NV" },
                { name: "New Hampshire", alpha: "NH" },
                { name: "New Jersey", alpha: "NJ" },
                { name: "New Mexico", alpha: "NM" },
                { name: "New York", alpha: "NY" },
                { name: "North Carolina", alpha: "NC" },
                { name: "North Dakota", alpha: "ND" },
                { name: "Ohio", alpha: "OH" },
                { name: "Oklahoma", alpha: "OK" },
                { name: "Oregon", alpha: "OR" },
                { name: "Pennsylvania", alpha: "PA" },
                { name: "Rhode Island", alpha: "RI" },
                { name: "South Carolina", alpha: "SC" },
                { name: "South Dakota", alpha: "SD" },
                { name: "Tennessee", alpha: "TN" },
                { name: "Texas", alpha: "TX" },
                { name: "Utah", alpha: "UT" },
                { name: "Vermont", alpha: "VT" },
                { name: "Virginia", alpha: "VA" },
                { name: "Washington", alpha: "WA" },
                { name: "West Virginia", alpha: "WV" },
                { name: "Wisconsin", alpha: "WI" },
                { name: "Wyoming", alpha: "WY" }
              ],
        }),
        created(){
            this.$validator.extend("usState", {
                getMessage: (field) => "Please fill up or select correct " + field,
                validate: (input, args) => {
                    for(var i = 0; i < this.usStates.length; i++){
                        if(this.usStates[i].name == input){
                            return true;
                        }
                    }
                    return false;
                }
            })
        },
        computed: {
            filteredState(){
                return this.usStates.filter((list) => {
                    return list.name.toLowerCase().includes(this.stateSearch.toLowerCase())
                })
            }
        },
        methods:{
            searchState(){
                let searchVal = this.stateSearch;
                let StatesList = this.usStates;
                this.us_state_formatted = searchVal;
                for (var i = 0; i < StatesList.length; i++){
                    if(StatesList[i] == searchVal){
                        this.us_state_formatted = StatesList[i].value;
                    }
                }
            },
            setDisplayState(){
                this.us_state = this.stateSearch;
            },
            selectedState(state){
                this.stateSearch = state;
                this.us_state = state;
                this.us_state_formatted = state;
            },
            checkSubmit(){
                this.$validator.validateAll().then((result) => {
                    if(result){
                        alert("Vaildation Passed and Submit the form.")
                    }
                });
            }
        }
    }

</script>


<style lang="scss">
    $validColor: #33DB40;
    $invalidColor: #FF1A1A;
    #contact-title {
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
        h1 {
            padding: 50px 0;
            font-size: 48px;
            margin: 0;
        }
        >div {
            position: relative;
            max-width: 600px;
/*            height: 300px;*/
            /*            background: yellow;*/
            margin: 0 auto;
            fieldset {
                border: none;
                padding: 12px;
                position: relative;
            }
        }
    }

    input, select {
        border: none;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        outline: none;
        padding: 17.5px 0 7px 0;
        font-size: 16px;
        color: white;
        height: 100%;
        width: 100%;
        display: block;
        text-align: center;
        background: none;
        border-bottom: 1px solid white;
    }
    select{
/*        display: none;*/
        appearance: none;
        border-radius: 0;
        margin: 0;
        display: block;
        width: 100%;
/*        padding: 12px 55px 15px 15px;*/
        font-size: 16px;
        color: white;
/*
        text-align-last: center;
        text-align-last: center;
       text-align: center;
       -ms-text-align-last: center;
       -moz-text-align-last: center;
*/
        padding-left: 50%;
        &:after {
          position: absolute;
          content: "";
          top: 14px;
          right: 10px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-color: #fff transparent transparent transparent;
        }
        option{
            text-align: center;
            text-align-last: center;
           text-align: center;
           -ms-text-align-last: center;
           -moz-text-align-last: center;
        }
    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: white;
    }

    fieldset>span.valid {
        color: $validColor;
    }

    fieldset>span.invalid {
        color: $invalidColor
    }

    .dropdown-list-container{
        position: relative;
/*        width: calc(100% - 24px);*/
        width: 100%;
        max-height: 0px;
        overflow: auto;
        margin: 5px 0;
/*
        left: 12px;
        top: calc(100% - 20px);
*/
        background-image: url("../assets/dummy-background-image.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 10;
        visibility: hidden;
/*        display: none;*/
        transition: all 0.1s;
        transition-delay: 0.1s;
    }
    .input-list-triggle:focus ~ .dropdown-list-container{
        visibility: visible;
        max-height: 200px;
/*        display: block;*/
    }
    .dropdown-list{
        height: 33px;
        box-sizing: border-box;
        padding: 10px;
        cursor: pointer;
    }
    .dropdown-list > span{
        border-bottom: 1px solid white;
        width: 100%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dropdown-list:last-child{
        margin-bottom: 10px;
    }
    .dropdown-list:last-child > span{
        border-bottom: none;
    }
    .submit{
        margin-top: 20px;
        display: inline-block;
        padding: 10px;
        cursor: pointer;
        border: 1px solid white;
        border-radius: 5px;
        transition: all .25s;
        &:hover{
            background: rgba(255,255,255,0.2);
        }
    }

</style>

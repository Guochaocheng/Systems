<template>
    <div id="Header">
        <nav v-bind:class="active" v-on:click.prevent>
            <a href="/home" class="Home" v-on:click="makeActive('Home')">Home</a>
            <a href="#" class="Research" v-on:click="makeActive('Research')">Research</a>
            <a href="#" class="Publication" v-on:click="makeActive('Publication')">Publication</a>
            <a href="#" class="People" v-on:click="makeActive('People')">People</a>
            <a href="#" class="ContactUs" v-on:click="makeActive('ContactUs')">Contact Us</a>
            <a href="#" class="Resources" v-on:click="makeActive('Resources')">Resources</a>
        </nav>
    </div>
</template>

<script>
export default{
    name: "Header"
}
/*
var demo = new Vue({
    el: "#Header",
    data:{
        active: 'home',
    },
    methods:{
        makeActive: function(item){
            this.active = item;
        }
    }
});
*/
</script>

<style scoped>
#Header{
    position: absolute;
    top: 0%;
    left: 30%;
}

*{
    margin:0;
    padding:0;
}
/*
body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align: center;
}
*/
a, a:visited{
    outline:none;
    color:#389dc1;
}
a:hover{
    text-decoration: none;
}
nav{
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 60px auto 45px;
    background-color: #5597b4;
    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
}
nav a{
    display: inline-block;
    padding: 18px 30px;
    color: #fff !important;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none !important;
    line-height: 1;
    text-transform: uppercase;
    background-color: transparent;

    -webkit-transition: background-color 0.25s;
    -moz-transition: background-color 0.25s;
    transition: background-color 0.25s;
}
nav a:first-child{
    border-radius: 2px 0 0 2px;
}

</style>
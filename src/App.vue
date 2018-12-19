<template>
  <div id="app">
    <Navbar />  
   
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

import Footer from "@/components/Footer"
export default {
  name: 'App',
  components: {
    Navbar,
    
    Footer
  }
}
</script>

<style>

*,
*::before,
*::after {
box-sizing: border-box;
}

body {
  font-size: 14px;
  font-family: 'Cabin','Helvetica Neue','Calibri Light','Roboto','sans-serif';
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #263238;
  background: #eee;
}
</style>

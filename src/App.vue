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

<style>‚
html {
  line-height: 100px;
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

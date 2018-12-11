<template>
    <nav class="nav-extended indigo teal accent-4">
      <div class="nav-wrapper">
        <div class="nav-content">
            <router-link to="">
              <div class="logo">Vue Actors</div>
            </router-link>
          </div>
      </div>
    </nav>    
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {

        }
    }
}
</script>


<style scoped>

nav {
    top: 0;
    height: 10em;
    
}
.logo {
    float: left;
    font-family: 'Cabin Sketch', cursive;
    font-size: 24px;
    width: 100px;
    height: 100px;
    padding: 15px 8px 0;
    background: #222222;
    text-align: left;
    border-radius: 50%;
    color: #ccc;
    margin: 25px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
}

</style>

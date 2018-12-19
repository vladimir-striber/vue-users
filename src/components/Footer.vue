<template>
  <footer>
    <p class="copyright">
        © 2018 <strong>Strippy</strong>. All Rights Reserved
      </p>
  </footer>
  
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {

        }
    }
}
</script>


<style scoped>
  footer {
    bottom: 0;
    height: 100px;
    width: 100%;
    line-height: 100px;
    background: #323337;
  }
  footer p {
    font-size: 18px;
    color: #888;
    margin: 0;
  }


</style>

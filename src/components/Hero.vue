<template>
  <section class="hero">
    <div class="heroOverlay"></div>
    <div class="container">
      <div class="row">
        <div class="col s12 xl7">
          <p><strong>Find a local</strong></p>
          <p>To show you around</p>
          <form>
            <i class="material-icons prefix">location_searching</i>
            <span class="imput-field">              
              <input placeholder="Where next?" id="location" type="text" class="validate">
            </span>
          </form>
        </div>
        <div class="col s12 xl5">
          <p><strong>Find a local</strong></p>
          <p>To show you around</p>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
    name: "Hero",
    data() {
        return {

        }
    }
}
</script>


<style scoped>
.hero {
  background-image: url("https://showaroundoriginal.imgix.net/places/ChIJD7fiBh9u5kcRYJSMaMOCCwQknitr.jpg?w=1400&dpr=1&or=0&bri=0&con=0&q=0");
  height: 540px;
  position: relative;
  height: 629px;
  overflow: hidden;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.heroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: linear-gradient(135deg,rgba(3,169,244,.35) 0,rgba(167,219,216,.35) 44%,rgba(243,134,48,.35) 100%) rgba(0,0,0,.15);
}

</style>
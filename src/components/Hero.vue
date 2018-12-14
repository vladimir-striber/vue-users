<template>
  <section class="hero">
    <div class="heroOverlay"></div>
    <div class="heroContainer container"> 
      <div class="row">    
          <div class="col s12 xl7 heroContainer__intro">
            <p>Find a local</p>
            <p>To show you around</p>
            <form>
              <span class="input-field">   
                <!-- <i class="material-icons prefix locationSearch">location_searching</i>            -->
                <input placeholder="Where next?" id="location" type="text" class="validate">
                <button class="browseLocalsBtn">Browse locals</button>
              </span>
            </form>
          </div> 
          <div class="col xl5 heroContainer__howItWorks">
            <img src="@/assets/images/how_it_works.png" alt="">
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
  height: 330px;
  overflow: hidden;
  color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 50px;
  width: 100%;
}
@media screen and (min-width: 768px) {
  .hero {
    height: 540px;
  }
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
.heroContainer {
  width: 80%;
  position: relative;
  transform: translateY(-50%); 
  top: 50%;
  z-index: 5;
  margin: 0 auto;
}
.heroContainer__intro p {  
  text-transform: uppercase;
  text-align: left;
  margin: 0;
  line-height: 1;
}
.heroContainer__intro p:nth-child(1) {
    font-size: 38px;
    font-weight: 700;
  }
@media screen and (min-width: 768px) {
  .heroContainer__intro p:nth-child(1) {
    font-size: 66px;
    font-weight: 700;
  }
}
.heroContainer__intro p:nth-child(2) {
    font-size: 24px;
  }
@media screen and (min-width: 768px) {
  .heroContainer__intro p:nth-child(2) {
    font-size: 44px;
  }
}
.heroContainer__intro form {
  margin-top: 30px;
  text-align: left;  
}
.heroContainer__intro form .locationSearch {
  position: absolute;
  width: 3rem;
  font-size: 2rem;
  -webkit-transition: color .2s;
  transition: color .2s;
  top: -6px;
}
.heroContainer__intro input {
  background: #fff;
  width: 90%;
  border: none;
  padding-left: 20px;
  height: 45px;
}
.heroContainer__intro input:focus:not([readonly]) {
  border-bottom: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
@media screen and (min-width: 584px) {
  .heroContainer__intro input {
    width: 60%;
  }
}
.browseLocalsBtn {
  height: 45px;
  border: none;
  bottom: 1px;
  position: relative;
  background: #03a9f4;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  transition: ease-in-out .2s;
  padding: 0 20px;
}
.browseLocalsBtn:hover {
  background: #2ebcfc;
}
.heroContainer__howItWorks {
    display: none;
  }
@media screen and (min-width: 1201px) {
  .heroContainer__howItWorks {
    display: block;
  }
}


</style>
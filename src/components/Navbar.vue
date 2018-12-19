<template>
    <nav class="topNav">  
        <div class="mobileMenu">
          <i class="material-icons">dehaze</i>  
        </div>   
        <div class="topNav__content">
          <a href="#">
            <router-link :to="{ name: 'Index' }">              
                <img src="@/assets/images/showaround_logo.png" alt="" class="topNav__logo">             
            </router-link>
          </a>
          <div class="location">
            <i class="material-icons prefix">search</i>
            <span class="imput-field">              
              <input placeholder="Where next?" id="location" type="text" class="validate">
            </span>
          </div>
          <div class="mobileMenu">
            <i class="material-icons">dehaze</i>  
          </div>
          <div class="topNav__group">
          <ul>
            <li>
              <a href="">Meet a local</a>              
            </li>
            <li>
              <a href="">Blog</a>              
            </li>
            <li>
              <a href="">About us</a>              
            </li>
          </ul>  
          <div class="topNav__btn">        
            <a href="#" class="primaryBtn topNav__btn--connect">Connect</a>
            <a href="#" class="primaryBtn topNav__btn--signUp">Sign up as a local</a>
          </div>
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
nav ul a:hover {
  background-color: none;
}
.topNav {
  background: #fff;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 20;
}
.mobileMenu {
  display: block;
  float: left;
  width: 0;	
  margin: 0 15px;
  color:#888;
}
@media screen and (min-width: 768px) {
  .mobileMenu {
    display: none;
  }
}
.topNav__content {
  display: none;
}
@media screen and (min-width: 768px) {
  .topNav__content {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  .topNav__content {
    justify-content: space-between;
  }
}
.location {
  display: flex;
  height: 60px;
  line-height: 60px;  
}
.location i {
  margin: 0 10px;
  color: #888;
}
.location input, 
.location input:focus:not([readonly]) {
  border-bottom: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}
@media screen and (min-width: 768px) {
  .topNav__content .mobileMenu {
    display: block;
    margin-right: 5px;
  }
}
@media screen and (min-width: 1000px) {
  .topNav__content .mobileMenu {
    display: none;
  }
}
.topNav__content ul li a {
  padding: 0 10px;
  color: #888;
  font-weight: bold;
  font-size: 14px;
}
.topNav__content ul li a:hover {
  color: #444;
}
.topNav__content ul {
  height: 40px;
  line-height: 40px;
}
@media screen and (min-width: 768px) {
  .topNav__content ul {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .topNav__content ul {
    display: block;
  }
}
.topNav__logo {
  float: left;
  padding: 8px 8px 0;
  margin: 10px;
}
.topNav__group {
  display: flex;
  padding: 9px;
}
.topNav__btn {
  display: flex;
  margin: 5px 0;
  height: 32px;
}
.primaryBtn {
  font-family: 'Cabin', Georgia, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  font-size: 13px;
  transition: ease-in-out 0.2s;
}
.topNav__btn--connect {
  width: 115px;
  height: 32px;	
  line-height: 28px;
  border: 2px solid #888;  
  margin: 0 10px;
  color: #888;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
}
.topNav__btn--connect:hover {
  background: #888;
  color: #fff;
}
.topNav__btn--signUp {
  width: 170px;
  height: 32px;	
  line-height: 28px;
  background: #f38630;
  border: 2px solid #f38630;
  color: #eee;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
}
.topNav__btn--signUp:hover {
  background: #e36b0d;
  border-color: #e36b0d;
}
</style>

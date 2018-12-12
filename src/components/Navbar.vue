<template>
    <nav class="topNav">  
        <div class="mobileMenu">
          <i class="material-icons">dehaze</i>  
        </div>   
        <div class="topNav__content">
          <a href="#">
            <router-link to="">              
                <img src="@/assets/images/showaround_logo.png" alt="" class="topNav__logo">             
            </router-link>
          </a>
          <div class="topNav__group">
          <ul>
            <li>
              <a href="">Meet a local</a>              
            </li>
            <li>
              <a href="">Blog</a>              
            </li>
            <li>
              <a href="">About Us</a>              
            </li>
          </ul>  
          <div class="topNav__btn">        
            <a href="#" class="primaryBtn topNav__btn--connect">Connect</a>
            <a href="#" class="primaryBtn topNav__btn--signUp">Sign up as a local</a>
            <!-- </div> -->
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


.topNav {
  background: #eee;
  height: 55px;
  position: fixed;
  top: 0;
}
.mobileMenu {
  display: block;
  float: left;
  width: 40px;	
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
.topNav__content ul li a {
  padding: 0 10px;
  color: #888;
  font-weight: bold;
  font-size: 14px;
}
.topNav__content ul li a:hover {
  color: #323337;
}
.topNav__content ul {
  height: 40px;
  line-height: 40px;
}
.topNav__logo {
  float: left;
  padding: 8px 8px 0;
  margin: 10px;
}
.topNav__group {
  display: flex;
  padding: 8px;
}
.topNav__btn {
  display: flex;
  margin: 3px 0 0 10px ;
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
  border-radius: 2px;
  color: #eee;
}
.topNav__btn--signUp:hover {
  background: #e36b0d;
  border-color: #e36b0d;
}


</style>

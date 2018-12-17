<template>
<div>
   <Hero />  
<div class="container mainContent">
    <p>Showaround locals can tailor your activities and give you an insider's view on where to go and what to see</p>
    <div class="row">
      <div class="col s12 m6 l4" v-for="user in users" :key="user.id">
        <div class="card">
          <div class="cardContent">
            <div class="userTitle">
            <!-- This is for dummy users -->
              <input v-if="user.edit" v-model="user.first_name" placeholder="First name" class="darken-4-text center-align">
              <p v-else> {{ user.first_name }} </p>
              <input v-if="user.edit" v-model="user.last_name" class="darken-4-text center-align">
              <p v-else class="darken-4-text center-align">{{ user.last_name }}</p>
              
            <!-- This is for api users without edit -->
              <!-- <p class="darken-4-text center-align">{{ user.first_name }}</p>           
              <p class="darken-4-text center-align">{{ user.last_name }}</p> -->
            </div>
            <!-- <img v-bind:src="user.img" alt=""> -->
            <img v-bind:src="user.avatar" alt="">
          </div>
          <button v-if="user.edit" class="editButton btn-flat" @click = "user.edit = false;">Ok</button>
          <button v-else class="editButton btn-flat" @click = "user.edit = true;">Edit</button>
          <button class="deleteButton btn-flat" @click="deleteUser(user.id)">Delete</button>
        </div>
      </div>
      
    </div>
    <!-- <a href="#" id="addBtn" class="addButton btn-floating btn-large" @scroll="scrollFunction"> -->
    <a href="#" id="addBtn" class="addButton btn" @scroll="scrollFunction">
      <router-link :to="{ name: 'AddUser' }">
        <!-- <i class="material-icons">add</i> -->
        <span>Add new user</span>
      </router-link>
    </a>
    
  </div>
</div>
</template>

<script>
import Hero from "@/components/Hero"
import axios from "axios" 
export default {
  name: 'Index',
  components: {
    Hero
  },
  data () {
    return {
      // users: [
      //     // This is just a dummy data
      //   { firstName: "Michael", lastName: "Douglas", id: "1", img: "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg", alt: "Michael Douglas", edit: false },
      //   { firstName: "Robert", lastName: "De Niro", id: "2", img: "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg", alt: "Robert De Niro", edit: false },
      //   { firstName: "Brad", lastName: "Pitt", id: "3", img: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", alt: "Brad Pitt", edit: false },
      //   { firstName: "George", lastName: "Clooney", id: "4", img: "https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg", alt: "George Clooney", edit: false },
      //   { firstName: "Al", lastName: "Pacino", id: "5", img: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg", alt: "Al Pacino", edit: false },
      //   { firstName: "Clive", lastName: "Owen", id: "6", img: "https://m.media-amazon.com/images/M/MV5BMjA4MzAyOTc5Ml5BMl5BanBnXkFtZTcwOTQ5NzEzMg@@._V1_UY317_CR13,0,214,317_AL_.jpg", alt: "Clive Owen", edit: false },       
      //   { firstName: "Sigourney", lastName: "Weaver", id: "8", img: "https://m.media-amazon.com/images/M/MV5BMTk1MTcyNTE3OV5BMl5BanBnXkFtZTcwMTA0MTMyMw@@._V1_UY317_CR12,0,214,317_AL_.jpg", alt: "Sigourney Weaver", edit: false },
      //    { firstName: "Owen", lastName: "Wilson", id: "7", img: "https://m.media-amazon.com/images/M/MV5BMTgwMzQ4ODYxMV5BMl5BanBnXkFtZTcwNDAwMTc2NQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", alt: "Owen Wilson", edit: false },
      //   { firstName: "Winona", lastName: "Ryder", id: "9", img: "https://m.media-amazon.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_UY317_CR9,0,214,317_AL_.jpg", alt: "Winona Rider", edit: false }

      // ],
      users: [],
      editedUser: null
    }
  },
    methods: {
      deleteUser(og) {
        alert("Do you realy want to delete user?")
          if(alert) {
          this.users = this.users.filter( user => {
              return user.id != og      
          })
        }
      },
      editUser: function(user) {
        this.editedUser = user
      },
      // addEdit() {
      //   this.users.map(function(o) {
      //     o.edit = false;
      //     return o
      //     console.log(this.users)
      //   })
      // },
      scrollFunction () {
        console.log(200)
      }
    },
    mounted() {
      let self = this
      axios.get("https://reqres.in/api/users?per_page=12")
      .then(function(res) {
        self.users = res.data.data
        console.log(self.users)
      })
      .catch(function(error) {
        console.log("Error: ", error);
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mainContent {
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 100px;
    min-height: calc(100vh - 156px);
  }
 

  .mainContent > p {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1.5px;
    width: 80%;
    font-weight: 600;
    color: #323337;
    margin: 20px auto;
  }
  .card {
    background:  #e9e9e9;
    -webkit-box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
    box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    padding-bottom: 25px;
  }
  .card:hover {
    -webkit-box-shadow: 10px 10px 25px rgba(73, 78, 92, 0.15);
    box-shadow: 10px 10px 25px rgba(73, 78, 92, 0.15);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
  }
  .cardContent {
    padding: 22px 22px 0;
    height: 400px; 
  }
  @media screen and (min-width: 768px) {
    .cardContent {
      height: 440px; 
    }
  }
  @media screen and (min-width: 992px) {
    .cardContent {
      height: 400px; 
    }
  }  
  .cardContent i {
    float: right;
  }
  .userTitle p {
    font-size: 30px;
    line-height: 28px;
    letter-spacing: 1.5px;
    width: 80%;
    margin: 0 auto 18px;
  } 
  .userTitle input {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1.5px;
    color: #263238;
    margin: 0 auto 18px;
    /* border: none; */
}
  /* .userTitle input:focus:not([readonly]) {
    border: none;
  } */
  .cardContent img {
    -webkit-filter: brightness(80%);
    filter: brightness(80%);   
    width: 165px;
    height: 240px;
  }
  @media screen and (min-width: 768px) {
    .cardContent img { 
      width: 240px;
      height: 300px;
    }
  }
  @media screen and (min-width: 992px) {
    .cardContent img { 
      width: 170px;
      height: 240px;
    }
  }
  .addButton {
    position: relative;
    z-index: 100;
    background:  #546e7a ;
    transition: ease-in-out 0.2s;
    margin: 0 auto;
    right: 0;
  }
  .addButton a {
    color: #eee;
  }  
  .addButton:hover {
    background:  #487e85 ;
  }
  .editButton {
    background:  #c1c1c1 ;
  }
  .editButton:hover {
    background:  #a0a0a0 ;
  }
  .deleteButton {
    background:  #de8080 ;
  }
  .deleteButton:hover {
    background:  #da6161 ;
  }


</style>

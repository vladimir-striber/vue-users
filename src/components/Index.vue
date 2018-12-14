<template>
  <div class="container mainContent">
    <p>Showaround locals can tailor your activities and give you an insider's view on where to go and what to see</p>
    <a href="#" class="addButton btn-floating btn-large halfway-fab blue-grey darken-1">
      <router-link :to="{ name: 'AddUser' }">
        <i class="material-icons">add</i>
      </router-link>
    </a>
    <div class="row">
      <div class="col s12 m6 l4" v-for="user in users" :key="user.id">
        <div class="card">
          <div class="cardContent">
            <p class="darken-4-text center-align">{{ user.firstName }}</p>
            <p class="darken-4-text center-align">{{ user.lastName }}</p>
            <img v-bind:src="user.img" alt="">
          </div>
          <button class="editButton btn-flat">Edit</button>
          <button class="deleteButton btn-flat" @click="deleteUser(user.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      users: [
          // This is just a dummy data
        { firstName: "Michael", lastName: "Douglas", id: "1", img: "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg", alt: "Michael Douglas" },
        { firstName: "Robert", lastName: "De Niro", id: "2", img: "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg", alt: "Robert De Niro" },
        { firstName: "Brad", lastName: "Pitt", id: "3", img: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", alt: "Brad Pitt" },
        { firstName: "George", lastName: "Clooney", id: "4", img: "https://m.media-amazon.com/images/M/MV5BMjEyMTEyOTQ0MV5BMl5BanBnXkFtZTcwNzU3NTMzNw@@._V1_UY317_CR9,0,214,317_AL_.jpg", alt: "George Clooney" },
        { firstName: "Al", lastName: "Pacino", id: "5", img: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg", alt: "Al Pacino" },
        { firstName: "Clive", lastName: "Owen", id: "6", img: "https://m.media-amazon.com/images/M/MV5BMjA4MzAyOTc5Ml5BMl5BanBnXkFtZTcwOTQ5NzEzMg@@._V1_UY317_CR13,0,214,317_AL_.jpg", alt: "Clive Owen" },
       
        { firstName: "Sigourney", lastName: "Weaver", id: "8", img: "https://m.media-amazon.com/images/M/MV5BMTk1MTcyNTE3OV5BMl5BanBnXkFtZTcwMTA0MTMyMw@@._V1_UY317_CR12,0,214,317_AL_.jpg", alt: "Sigourney Weaver" },
         { firstName: "Owen", lastName: "Wilson", id: "7", img: "https://m.media-amazon.com/images/M/MV5BMTgwMzQ4ODYxMV5BMl5BanBnXkFtZTcwNDAwMTc2NQ@@._V1_UX214_CR0,0,214,317_AL_.jpg", alt: "Owen Wilson" },
        { firstName: "Winona", lastName: "Ryder", id: "9", img: "https://m.media-amazon.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_UY317_CR9,0,214,317_AL_.jpg", alt: "Winona Rider" }

      ]
    }
  },
  methods: {
    deleteUser(og) {
      this.users = this.users.filter( user => {
          return user.id != og      
      })
    },
    
    addUser() {
      let newUser = { firstName: "", lastName: "", id: "10", img: "" }
      this.users.push(newUser)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .mainContent {
    width: 80%;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 200px;
    min-height: calc(100vh - 156px);
  }
  .mainContent p {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1.5px;
    width: 80%;
    margin: 0 auto;
  }  
  .hero-section {
    margin-bottom: 100px;
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
    height: 435px;
  }
  .cardContent i {
    float: right;
  }
  .cardContent p {
    margin: 15px 0;
    font-size: 40px;
    width: 100%;
  }
  .cardContent p:nth-child(2) {
    margin-bottom: 30px;
  }
  .cardContent img {
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
    width: 180px;
  }

  .addButton {
    position: fixed;
    top: 250px;
    right: 30px;
    z-index: 100;
  }
  .editButton {
    background:  #c1c1c1 ;
  }
  .deleteButton {
    background:  #de8080 ;
  }


</style>

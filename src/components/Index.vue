<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ mainText }}</p>
    <div class="index">
        <a href="#" class="add-button btn-floating btn-large halfway-fab blue-grey darken-1">
          <router-link to="">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      <div class="card" v-for="user in users" :key="user.id">
        <div class="card-content">
          <!-- <i class="material-icons">delete</i> -->
          <p class="darken-4-text center-align">{{ user.firstName }}</p>
          <p class="darken-4-text center-align">{{ user.lastName }}</p>
          <img v-bind:src="user.img" alt="">
        </div>
        <button class="edit-button btn-flat">Edit</button>
        <button class="delete-button btn-flat" @click="deleteUser(user.id)">Delete</button>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      title: "Vue Actors",
      mainText: "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.",      
      users: [
          // This is just a dummy data
        { firstName: "Michael", lastName: "Douglas", id: "1", img: "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg" },
        { firstName: "Robert", lastName: "De Niro", id: "2", img: "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg" },
        { firstName: "Brad", lastName: "Pitt", id: "3", img: "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg" },
        { firstName: "Denzel", lastName: "Washington", id: "4", img: "https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY317_CR12,0,214,317_AL_.jpg" },
        { firstName: "Al", lastName: "Pacino", id: "5", img: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX214_CR0,0,214,317_AL_.jpg" },
        { firstName: "Clive", lastName: "Owen", id: "6", img: "https://m.media-amazon.com/images/M/MV5BMjA4MzAyOTc5Ml5BMl5BanBnXkFtZTcwOTQ5NzEzMg@@._V1_UY317_CR13,0,214,317_AL_.jpg" },
       
        { firstName: "Sigourney", lastName: "Weaver", id: "8", img: "https://m.media-amazon.com/images/M/MV5BMTk1MTcyNTE3OV5BMl5BanBnXkFtZTcwMTA0MTMyMw@@._V1_UY317_CR12,0,214,317_AL_.jpg" },
         { firstName: "Owen", lastName: "Wilson", id: "7", img: "https://m.media-amazon.com/images/M/MV5BMTgwMzQ4ODYxMV5BMl5BanBnXkFtZTcwNDAwMTc2NQ@@._V1_UX214_CR0,0,214,317_AL_.jpg" },
        { firstName: "Winona", lastName: "Ryder", id: "9", img: "https://m.media-amazon.com/images/M/MV5BMTQ3NzM3MTc2NF5BMl5BanBnXkFtZTcwODMxNjA0NA@@._V1_UY317_CR9,0,214,317_AL_.jpg" }

      ]
    }
  },
  methods: {
    deleteUser(og) {
      this.users = this.users.filter( user => {
          return user.id != og      
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



    @media screen and (min-width: 768px) {
    .container {
      width: 50%;
    }
  }
  .container p {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 1.5px;
    width: 80%;
    margin: 0 auto;
  }

  
  .index {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    -ms-grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 30px;
    margin: 60px 0;
  }
  .card {
    background:  #e9e9e9;
    box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
    transition: 0.4s;
    padding-bottom: 25px;
  }
  .card:hover {
    box-shadow: 10px 10px 25px rgba(73, 78, 92, 0.15);
    transform: translateY(-5px);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
  }
  .card-content i {
    float: right;
  }
  .card-content p {
    margin: 15px 0;
    font-size: 40px;
    width: 100%;
  }
  .card-content img {
    filter: brightness(80%);
  }
  .add-button {
    position: fixed;
    top: 250px;
    right: 30px;
  }
  .edit-button {
    background:  #c1c1c1 ;
  }
  .delete-button {
    background:  #de8080 ;
  }


</style>

<template>
<div class="mainContent container">
  <h2>Create new user</h2>
  <form @click.prevent="user">
    <div class="createUserInput field title">
      <label for="name">Full name</label>
      <input type="text" name="name" class="validate" v-model="name">
      
    </div>
    <div class="addImg">
      <p>Drag and drop image</p>
      <img src="https://via.placeholder.com/250x400" alt="placeholder">
    </div>
    <p class="warning red-text" v-if="warning">{{ warning }}</p>
    <div class="field center-align">
      <button class="btn" @click="addUser">Add user</button>
    </div>
    </form>

  
</div>
  
</template>

<script>
export default {
    name: "AddUser",
    data() {
        return {
          name: null,
          fullName: [],
          warning: null
        }
    },
    methods: {
      user() {
        console.log(this.title)
      },
      addUser() {
        if(this.name){
          this.fullName.push(this.name)
          this.name = null
          this.warning = null 
        } else {
          this.warning = "Please enter the users full name!"
        }
        
      }
    }
}
</script>


<style scoped>
  .mainContent {
    width: 80%;
    margin: 60px auto;
    /* padding-top: 20px; */
    max-width: 500px;
    padding-bottom: 100px;
  }
  .mainContent h2{  
    float: left;  
    color: 444;
    text-align: left;
    margin-bottom: 60px;
  }
  .mainContent button {  
    background:  #f38630;
    float: left;
  }
   .mainContent button:hover {  
    background:  #e36b0d;
    
  }
  .createUserInput label {
    font-size: 36px;
    line-height: 36px;
    color: #888;
    float: left;
  }
  .createUserInput input {
    font-size: 36px;
    color: 444;
  }
  .addImg {
    margin-bottom: 20px;
    text-align: left;
  }
  .addImg p {    
    font-size: 34px;
    line-height: 36px;
    color: #888;
  }
  .warning {
    line-height: 36px;
    text-align: left;
  }
  .addUserBtn {
  font-family: 'Cabin', Georgia, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 4px;
  font-size: 13px;
  transition: ease-in-out 0.2s;
}

</style>
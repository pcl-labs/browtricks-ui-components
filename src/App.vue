<template>
   <router-view></router-view>
  <!-- <HomeCustomer /> -->
   <!-- <ForgotPassword />  -->
  <!-- <Login /> -->
  <!-- <CreateAccount /> -->
  <!-- <ul class="post-grid">
    <li v-for="(post, index) in filteredPosts" :key="index">
      <h3>{{post.title}}</h3>
      <template v-if="countWords(post.desc) > 21">
        <p>
          <span v-if="!post.readActivated">
          <strong>{{post.desc.split(' ').slice(0,14).join(' ')}}...</strong>
          <i>{{post.desc.split(' ').slice(14, post.desc.length).join('')}}</i>
          </span>
          <span v-else>{{post.desc}}</span>
          <span class="read-more-label" v-if="countWords(post.desc) > 21" @click="post.readActivated = !post.readActivated">{{!post.readActivated ? 'Read More' : 'Read Less'}}</span>
        </p>
      </template>
      <template v-else>
        <p>{{post.desc}}</p>
      </template>
    </li>
  </ul> -->
</template>

<script>
// import HomeCustomer from './components/HomeCustomer.vue';
// import CreateAccount from './components/CreateAccount.vue';
// import Login from './components/Login.vue';
import ForgotPassword from './components/ForgotPassword.vue';
export default {
  name: 'App',
  components: {
    // HomeCustomer,
    // CreateAccount,
    // Login,
    // ForgotPassword,
  },
  data () {
    return {
      readActivated: false,
      posts: [
        {
          'title': 'title 1',
          'desc': '<strong>Lorem ipsum</strong>, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta.'
        },
        {
          'title': 'title 2',
          'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.'
        },
        {
          'title': 'title 3',
          'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.'
        },
        {
          'title': 'title 4',
          'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta.'
        },
        {
          'title': 'title 5',
          'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.'
        },
        {
          'title': 'title 6',
          'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta officiis.'
        },
        {
          'title': 'title 7',
          'desc': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.'
        },
      ],
      filteredPosts: '',
    }
  },
  methods: {
    countWords(str) {
      return str.trim().split(/\s+/).length;
    },
    loadData(){
      this.filteredPosts = this.posts;
      for (const post of this.filteredPosts) {
        post.readActivated = false;
      }
      return this.filteredPosts;
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>
<!-- 
<style>
strong, i {
  word-break: break-word;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-logo {
  width: 70px;
}
.post-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding-left: 0;
}
.post-grid li {
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 3px 3px 7px #ececec;
  transition: all 0.27s ease-in-out;
}
.post-grid li:hover{
  box-shadow: 3px 3px 7px #ccc;
}
h3 {
  text-transform: capitalize;
}
.read-more-label {
   cursor: pointer;
   font-weight: bold;
   font-size: 14px;
   margin-left: 10px;
}
</style> -->

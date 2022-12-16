<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      readActivated: false,
      posts: [
        {
          title: 'title 1',
          desc: '<strong>Lorem ipsum</strong>, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta.',
        },
        {
          title: 'title 2',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.',
        },
        {
          title: 'title 3',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.',
        },
        {
          title: 'title 4',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta.',
        },
        {
          title: 'title 5',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.',
        },
        {
          title: 'title 6',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta officiis.',
        },
        {
          title: 'title 7',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestias quisquam culpa, iste pariatur ullam ab, accusamus id deserunt expedita dicta. Cumque ullam modi optio quibusdam dignissimos unde, animi officiis.',
        },
      ],
      filteredPosts: '',
    };
  },
  methods: {
    countWords(str) {
      return str.trim().split(/\s+/).length;
    },
    loadData() {
      this.filteredPosts = this.posts;
      for (const post of this.filteredPosts) {
        post.readActivated = false;
      }
      return this.filteredPosts;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

import { defineStore } from 'pinia';
// import axios from '~/plugins/axios';
import axios from 'axios';
export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        this.posts = response.data;
        console.log(this.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
});
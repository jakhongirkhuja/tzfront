<template>
    <div class="container">
      
      <section class="hero">
        <h1>Welcome to the Blog</h1>
        <p>Discover the latest articles, news, and tutorials.</p>
      </section>
  
      <section class="posts">
        <h2>Recent Posts</h2>
        <div v-if="posts.length" class="post-list">
          <div
            v-for="post in posts"
            :key="post.id"
            class="post-card"
          >
            <router-link :to="'/posts/' + post.slug" class="post-link">
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt || post.slug }}</p>
            </router-link>
          </div>
        </div>
        <p v-else>No posts available.</p>
      </section>
    </div>
  </template>
  
  <script setup>
  import { usePostsStore } from '~/store/posts';
  import { onMounted, computed } from 'vue';
  
  const store = usePostsStore();
  const posts = computed(() => store.posts);
   
  onMounted(() => {
    store.fetchPosts();
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
  }
  .hero {
    text-align: center;
    margin-bottom: 2em;
    padding: 2em 1em;
    background: linear-gradient(135deg, #ff6b6b, #ffd93d);
    border-radius: 8px;
    color: #fff;
  }
  .hero h1 {
    font-size: 2.5em;
    margin: 0 0 0.5em;
  }
  .hero p {
    font-size: 1.1em;
  }
  .posts h2 {
    font-size: 1.8em;
    margin-bottom: 1em;
    text-align: center;
  }
  .post-list {
    display: grid;
    gap: 1.5em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .post-card {
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 1.5em;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
  .post-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  .post-link {
    text-decoration: none;
    color: inherit;
  }
  .post-link h3 {
    font-size: 1.5em;
    margin: 0 0 0.5em;
  }
  .post-link p {
    color: #666;
    font-size: 1em;
    line-height: 1.6;
  }
  .post-link:hover h3 {
    color: #ff6b6b;
  }
  </style>
  
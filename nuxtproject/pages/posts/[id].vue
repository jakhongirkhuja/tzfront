<template>
   
    <div v-if="loading" class="loading">
      Loading post...
    </div>
    <div v-else-if="post" class="post-container">
        <Head>
            <Title>{{ post.title }}</Title>
            <Meta name="keywords" :content="post.keywords" />
        </Head>
       
       
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-slug">{{ post.slug }}</p>
      <p class="post-content" v-html="post.content"></p>
    </div>
    <div v-else class="error-message">
      <p>Post not found.</p>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const post = ref(null);
  const loading = ref(true);
  
  onMounted(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/posts?slug=${route.params.id}`);
      console.log(response.data.length);
      if(response.data.length>0){
        console.log(response.data);
        post.value = response.data[0];
      }
      
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      loading.value = false;
    }
  });
  useHead({
    meta: [
    { name: 'title', content: post.title },
        { name: 'description', content: post.title }
    ],
    })
//   definePageMeta({
//         title: 'My Blog | Discover Interesting Articles and Stories',
//         meta: [
//             { name: 'keywords', content: 'blog, articles, stories, interesting topics, recent posts, popular blogs' },
//         ],
//     });
  </script>
  
  <style scoped>
  .post-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    font-family: Arial, sans-serif;
  }
  
  .loading,
  .error-message {
    text-align: center;
    font-size: 1.2em;
    color: #666;
    padding: 2em;
  }
  
  .post-title {
    font-size: 2em;
    color: #333;
    margin: 0 0 0.5em;
    text-align: center;
  }
  
  .post-slug {
    font-size: 1em;
    color: #888;
    margin-bottom: 1em;
    text-align: center;
  }
  
  .post-content {
    font-size: 1.1em;
    line-height: 1.6;
    color: #555;
    margin-top: 1.5em;
  }
  </style>
  
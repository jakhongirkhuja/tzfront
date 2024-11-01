<template>
    <div>
      <div class="pagetitle">
        <h1>Page</h1>
        <p v-if="post">{{ post.title }}</p>
      </div>
  
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p><strong>Slug:</strong> {{ post.slug }}</p>
                <p><strong>Keywords:</strong> {{ Array.isArray(post.keywords) ? post.keywords.join(', ') : post.keywords }}</p>
                <p><strong>Created At:</strong> {{ new Date(post.created_at).toLocaleString() }}</p>
                <p><strong>Content:</strong></p>
                <div v-html="post.content"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <button @click="goBack" class="btn btn-secondary">Back to Posts</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostView',
    data() {
      return {
        post: null, 
      };
    },
    mounted() {
      this.fetchPost();
    },
    methods: {
      async fetchPost() {
        const postId = this.$route.params.id; 
        try {
          const response = await fetch(`http://localhost:3000/posts/${postId}`);
          if (!response.ok) throw new Error('Failed to fetch post');
          this.post = await response.json();
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      },
      goBack() {
        this.$router.replace('/pages');
      },
    },
  };
  </script>
  
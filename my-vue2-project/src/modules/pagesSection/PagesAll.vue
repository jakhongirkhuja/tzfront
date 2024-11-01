<template>
    <div>
      <div class="pagetitle">
        <h1>Pages</h1>
      </div>
  
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="text-end w-100">
                    <RouterLink class="btn btn-primary mt-3" to="/pages/add">Add page</RouterLink>
                
                </div>
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Slug</th>
                      <th>Keywords</th>
                      <th>Created Time</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="post in posts" :key="post.id">
                      <td>{{ post.title }}</td>
                      <td>{{ post.slug }}</td>
                      <td>{{ post.keywords}}</td>
                      <td>{{ new Date(post.created_at).toLocaleString() }}</td>
                      <td>
                        <button @click="viewPost(post.id)" class="btn btn-success">View</button>
                        <button @click="editPost(post.id)" class="btn btn-info mx-1 ">Edit</button>
                        <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PagesAll',
    data() {
      return {
        posts: [], // Store posts
      };
    },
    mounted() {
      this.fetchPosts(); // Load posts on mount
    },
    methods: {
      async fetchPosts() {
        try {
          const response = await fetch('http://localhost:3000/posts');
          if (!response.ok) throw new Error('Failed to fetch posts');
          this.posts = await response.json();
          console.log(this.posts);
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      },
      async deletePost(id) {
        if (!confirm("Are you sure you want to delete this post?")) return;
        
        try {
          const response = await fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });
          if (!response.ok) throw new Error('Failed to delete post');
          this.posts = this.posts.filter(post => post.id !== id);
          alert("Post deleted successfully!");
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      },
      viewPost(id) {
        this.$router.push({ name: 'main.pages.show', params: { id } });
      },
      editPost(id) {
        this.$router.push({ name: 'main.pages.edit', params: { id } });
      },
    },
  };
  </script>
  
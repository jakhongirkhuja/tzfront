<template>
    <form class="row g-3 needs-validation" ref="form" @submit.prevent="checkForm" novalidate>
      <div class="col-md-12 position-relative">
        <label for="validationTooltip01" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          id="validationTooltip01"
          required
        />
        <div class="invalid-feedback">Please provide a title.</div>
      </div>
      <div class="col-md-12 position-relative">
        <label for="validationTooltip02" class="form-label">Slug</label>
        <input
          type="text"
          class="form-control"
          v-model="slug"
          id="validationTooltip02"
          readonly
          required
        />
        <div class="invalid-feedback">Please provide a slug.</div>
      </div>
      <div class="col-md-12 position-relative">
        <label for="validationTooltipKeywords" class="form-label">Keywords</label>
        <div class="input-group has-validation">
          <input
            type="text"
            class="form-control"
            v-model="keywords"
            id="validationTooltipKeywords"
            required
          />
          <div class="invalid-feedback">Please provide keywords.</div>
        </div>
      </div>
      <h5 class="card-title">Content</h5>
      <Editor required
        v-model="editorContent"
        api-key="98rflj1mxxvlq4fjga2n5edc4jiqvpwp3qvdf9yz2t08991g"
        :init="{
          toolbar_mode: 'sliding',
          plugins: 'lists link image table code help wordcount'
        }"
      />
      <div class="invalid-feedback">Please provide content.</div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </template>
  
  <script>
  import Editor from '@tinymce/tinymce-vue';
  
  export default {
    components: {
      Editor,
    },
    data() {
      return {
        title: '',
        slug: '',
        keywords: '',
        editorContent: '',
      };
    },
    watch: {
      title(newTitle) {
        this.slug = this.generateSlug(newTitle);
      },
    },
    methods: {
      generateSlug(text) {
        return text
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');
      },
      checkForm() {
        const isValid = this.$refs.form.checkValidity();
        if (!isValid) {
          this.showValidationFeedback();
          return;
        }
        this.submitForm();
      },
      showValidationFeedback() {
        const inputs = this.$el.querySelectorAll('.form-control');
        inputs.forEach(input => {
          if (!input.checkValidity()) {
            input.classList.add('is-invalid');
          } else {
            input.classList.remove('is-invalid');
          }
        });
      },
      async fetchPost() {
        const postId = this.$route.params.id; 
        const response = await fetch(`http://localhost:3001/posts/${postId}`);
        if (!response.ok) throw new Error('Failed to fetch post');
        const data = await response.json();
        this.title = data.title;
        this.slug = data.slug;
        this.keywords = data.keywords;
        this.editorContent = data.content;
      },
      async submitForm() {
        try {
          const postId = this.$route.params.id; 
          const response = await fetch(`http://localhost:3001/posts/${postId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title: this.title,
              slug: this.slug,
              keywords: this.keywords,
              content: this.editorContent,
            }),
          });
  
          if (!response.ok) {
            throw new Error('check log');
          }
          alert('Success');
          this.$router.replace('/pages');
        } catch (error) {
          console.error('Error:', error);
        }
      },
    },
    mounted() {
      this.fetchPost();
    },
  };
  </script>
  
  <style>
  .is-invalid {
    border-color: red;
  }
  </style>
  
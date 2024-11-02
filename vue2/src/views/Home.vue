
<template>
   <div>
    <p v-if="getUserInfo">Hello, {{ getUserInfo.name }}</p>
   </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'HomeView',
    computed: {
        ...mapGetters('user', ['getUserInfo']),
    },
    methods: {
        ...mapActions('user', ['fetchUserInfo']),
    },
    created() {
        this.fetchUserInfo();
    },
   
  };
  </script>
  
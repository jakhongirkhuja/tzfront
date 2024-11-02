<template>
    <header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <a href="index.html" class="logo d-flex align-items-center">
    
    <span class="d-none d-lg-block">Panel</span>
  </a>
  
</div><!-- End Logo -->


<nav class="header-nav ms-auto">
  <ul class="d-flex align-items-center">

    <li class="nav-item pe-3">

     
       
        <span class="d-none d-md-block  ps-2" v-if="getUserInfo"> {{ getUserInfo.name }}</span>
     
    </li>
   

  </ul>
</nav>

</header>
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
<!-- src/App.vue -->
<template>
  <div id="app">

   
    <HeaderComponent />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <SideBarComponent />
    <main id="main" class="main">
      <p v-if="getUserInfo">Hello, {{ getUserInfo.name }}</p>
      <router-view />
    </main>
   
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import HeaderComponent from './components/HeaderComponent.vue';
import SideBarComponent from './components/SideBarComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    SideBarComponent,
  },
  computed: {
    ...mapGetters('user', ['getUserInfo']),
  },
  methods: {
    ...mapActions('user', ['fetchUserInfo']),
  },
  created() {
    this.fetchUserInfo(); // Fetch user info when the app is created
  },
};
</script>
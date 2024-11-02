
<template>
  <div id="app">

   
    <HeaderComponent />
    <SideBarComponent />
    <main id="main" class="main">
      
      <router-view />
    </main>
   
  </div>
</template>
<script>

import HeaderComponent from './components/HeaderComponent.vue';
import SideBarComponent from './components/SideBarComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    SideBarComponent,
  },
};
</script>
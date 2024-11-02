<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <router-link
          to="/"
          class="nav-link"
          :class="{ 'collapsed': $route.path !== '/' }"
        >
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/pages"
          class="nav-link"
          :class="{ 'collapsed': $route.path !== '/pages' }"
        >
          <i class="bi bi-pages"></i>
          <span>Pages</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

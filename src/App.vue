<template>
  <div class="app-container">
    <NavbarComp />
    
    <main class="main-content">
      <router-view /> <!-- This will render your pages dynamically -->

      <router-view /> <!-- Dynamically loads page content -->

    </main>
    
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style>

/* Ensures the footer stays at the bottom */
/* Ensures footer moves down when needed */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

.main-content {
  flex: 1; /* Pushes footer to the bottom */
  padding: 20px; /* Add spacing for content */

  flex-grow: 1; /* Expands to push the footer down */
  padding: 20px;
}
</style>
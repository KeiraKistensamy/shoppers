<template>
  <ul class="nav justify-content-center custom-navbar">
    <li class="nav-item">
      <router-link class="nav-link active" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about">About</router-link>
    </li>

    <!-- Products Dropdown (Opens on Hover) -->
    <li 
      class="nav-item dropdown" 
      @mouseenter="showDropdown = true" 
      @mouseleave="showDropdown = false"
    >
      <a class="nav-link dropdown-toggle" href="/products" role="button">Products</a>
      <ul class="dropdown-menu" :class="{ show: showDropdown }">
        <li><router-link class="dropdown-item" to="/luxury">Luxury</router-link></li>
        <li><router-link class="dropdown-item" to="/affordable">Affordable</router-link></li>
        <li><router-link class="dropdown-item" to="/sporty">Sporty</router-link></li>
      </ul>
    </li>

    <li class="nav-item">
      <router-link class="nav-link" to="/contactus">Contact</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavbarComp',
  data() {
    return {
      showDropdown: false, // Controls dropdown visibility
    };
  },
};
</script>

<style scoped>
/* Navbar styling */
.custom-navbar {
  background-color: #b5b9bd;
  padding: 10px;
  border-radius: 8px;
  height: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  color: rgb(0, 0, 0);
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #f8f9fa;
}

/* Dropdown menu styling */
.dropdown-menu {
  background-color: white;
  border-radius: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 150px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Show dropdown on hover */
.dropdown-menu.show {
  visibility: visible;
  opacity: 1;
}

.dropdown-item {
  color: black;
  transition: background-color 0.3s ease;
  padding: 8px 15px;
  display: block;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}
</style>

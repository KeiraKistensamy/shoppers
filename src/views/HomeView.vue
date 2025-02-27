<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted } from 'vue'

import store from '@/store'

onMounted(() => {
  store.dispatch('getProducts')
  console.log(store.state.productssw2)
})

</script>

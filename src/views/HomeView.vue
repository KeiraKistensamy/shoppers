<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import store from '@/store'

onMounted(() => {
  store.dispatch('getProducts')
  console.log(store.state.productssw2)
})

</script>

<template>
  <div style="background-color: yellow;">
    <h1>This is a DEMO2 page</h1>
    <input/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.matched)
</script>
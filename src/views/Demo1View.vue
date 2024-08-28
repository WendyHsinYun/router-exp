<template>
  <div style="background-color: lightblue;">
    <h1>This is a DEMO1 page</h1>
    <input/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.matched)
</script>
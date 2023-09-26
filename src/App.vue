<script setup>
  import { RouterView } from 'vue-router'
  import { ref, onMounted } from 'vue'
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
  <RouterView />
</template>

<script>
  export default {
    mounted() {
      let bootstrapScript = document.createElement('script')
      bootstrapScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
      document.head.appendChild(bootstrapScript)
    },
  }
</script>
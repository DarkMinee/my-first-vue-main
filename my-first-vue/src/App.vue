<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      let bootstrapScript = document.createElement('script')
      bootstrapScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js')
      document.head.appendChild(bootstrapScript)
    },
  }
</script>

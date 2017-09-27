<template>
  <div>
    <md-button class="md-raised md-primary"
      href="https://www.instagram.com/oauth/authorize/?client_id=e9d5d8a38bc94b56856b41206200e240&redirect_uri=http://localhost:8080&response_type=token&scope=public_content">
      Login with Instagram
    </md-button>
  </div>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>
</style>

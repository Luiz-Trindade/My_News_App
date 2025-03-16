<template>
  <!--Configuração do conteúdo principal-->
  <v-main>
    <v-container class="fade-in d-flex flex-column flex-wrap justify-center align-center fill-height">
      <router-view />
    </v-container>
  </v-main>

  <!--Navbar Footer-->
  <AppFooter />
</template>

<script setup>
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.25s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

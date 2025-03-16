<template>
  <!--Barra de navegação-->
  <v-bottom-navigation v-model="selectedButton">
    <v-btn value="home" @click="redirect_to('/')">
      <v-icon>mdi-home</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn value="favorites" @click="redirect_to('/favorites')">
      <v-icon>mdi-heart</v-icon>

      <span>Favorites</span>
    </v-btn>

    <v-btn value="topics" @click="redirect_to('/topics')">
      <v-icon>mdi-text-search</v-icon>

      <span>Topics</span>
    </v-btn>

    <v-btn value="about" @click="redirect_to('/about')">
      <v-icon>mdi-information</v-icon>

      <span>About</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "AppFooter",

  data() {
    return {
      selectedButton: "home",  // Define o botão 'home' como selecionado por padrão
    };
  },

  mounted() {
  },

  methods: {
    redirect_to(location) {
      this.$router.push(location);
    }
  },
}
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>

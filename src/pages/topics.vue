<template>
    <v-container class="fade-in">
        <div class="d-flex align-center">
            <v-text-field label="Topic" class="mr-2"></v-text-field>
            <v-btn>
                <v-icon color="green">mdi-plus</v-icon>
            </v-btn>
        </div>
        
        <ul v-for="topic in saved_topics">
            <li>
                {{ topic }}
            </li>
        </ul>

    </v-container>
</template>
  
<script>
export default {
    name: "topics",

    data() {
        return {
            saved_topics: localStorage.getItem("topics") || ["Ciência", "Tecnologia"],
        }
    },

    mounted() {
    },

    methods: {
    }
}
</script>
  
<style scoped>
</style>
  
<template>
    <v-container class="fade-in">
        <p class="text-justify fade-in">
            <b>News Collection</b> is a news application created by <b>Luiz Trindade</b> using <b>Vue.js</b> and <b>Vuetify</b>,
            designed to provide a modern, fast, and intuitive news-reading experience. With a sleek and functional
            interface, the app allows users to explore the latest global events in real-time, filter content by topics,
            and save favorite articles for later reading. Built with cutting-edge technology, <b>News Collection</b>
            reflects my passion for developing efficient and accessible solutions for consuming information.
        </p>
        <br>
        <v-row>
            <v-col>
                <v-btn @click="copy_text('bc1qnphgupzfwuz5m64jej0gf3gh30dagt2qntxq2w')">
                    <v-icon class="mr-1">mdi-bitcoin</v-icon>
                    <span>
                        Donate
                    </span>
                </v-btn>
            </v-col>
    
            <v-col>
                <v-btn @click="copy_text('0x286007c8eE5D951a42A270E0c34c5fCBe270c317')">
                    <v-icon class="mr-1">mdi-ethereum</v-icon>
                    <span>
                        Donate
                    </span>
                </v-btn>
            </v-col>
        </v-row>

        <!-- Feedback Visual  
        <v-snackbar v-model="snackbar" color="green" top class="text-center">
            Text copied successfully!
        </v-snackbar>
        -->
    </v-container>

</template>

<script>
export default {
    name: "about",

    data() {
        return {
            snackbar: false, // Controle do snackbar
        }
    },

    mounted() {
    },

    methods: {
        copy_text(link) {
            navigator.clipboard.writeText(link).then(() => {
                this.snackbar = true; // Exibe o feedback visual
                console.log("Texto copiado!");
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
            });
        }
    }
}
</script>

<style scoped></style>

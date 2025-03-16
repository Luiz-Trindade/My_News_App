<template>
    <v-card
        class="mx-auto mb-3 pa-2"
        :prepend-icon="icon"
        :subtitle="subtitle"
        width="auto"
    >
        <template v-slot:title>
            <v-card-title class="text-h6 text-center text-wrap">
                {{ title }}
            </v-card-title>
        </template>
        
        <v-container>
            <!-- A imagem vai ocupar 100% da largura do contêiner com altura automática -->
            <img :src="image" alt="" style="width: 100%; height: auto; border-radius: 10px;">
        </v-container>
        
        <v-card-text class="bg-surface-light pt-4 text-justify mb-2" style="border-radius: 10px;">
            {{ text }}
            <br><br>
            {{ publishedAt }}
        </v-card-text>
        
        <!--Ações de Notícia-->
        <v-row justify="center" align="center" class="mt-4">
            <v-col cols="auto">
                <v-btn variant="tonal" elevation="2" @click="read_more(link)">
                    <v-icon color="green">mdi-newspaper</v-icon>
                    <span>Read</span>
                    <!--
                    -->
                </v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn variant="tonal" elevation="2" @click="favorite(news_element)">
                    <v-icon color="red">mdi-heart</v-icon>
                    <span>Save</span>
                    <!--
                    -->
                </v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn variant="tonal" elevation="2" @click="copy_text(link)">
                    <v-icon color="blue">mdi-content-copy</v-icon>
                    <span>Copy</span>
                    <!--
                    -->
                </v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "NewsCard",

    props: {
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        text: {
            type: String,
        },
        icon: {
            type: String,
            default: "mdi-newspaper"
        },
        link: {
            type: String,
        },
        image: {
            type: String
        },
        news_element: {
            type: JSON
        },
        publishedAt: {
            type: String
        }
    },

    methods: {
        read_more(link) {
            window.open(link, "_blank");
        },

        favorite(news_element) {
            console.log(news_element)
        },
        
        copy_text(link) {
            navigator.clipboard.writeText(link).then(() => {
                console.log("Texto copiado!");
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
            });
        }
    }
}
</script>

<style scoped>
</style>

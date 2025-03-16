<template>
    <v-row>
        <v-col class="text-center">
            <div v-if="list_of_news.length > 0" v-for="news in list_of_news" :key="news.title">
                <NewsCard 
                    :title          = "news.title" 
                    :subtitle       = "news.subtitle" 
                    :text           = "news.description" 
                    :link           = "news.url" 
                    :image          = "news.urlToImage"
                    :news_element   = "news"
                    :publishedAt    = "format_date(news.publishedAt)"
                />
            </div>
        
            <div v-else>
                <span>No news now, come back later :/</span>
            </div>
        
            <v-btn class="mt-5" @click="change_page()">
                <v-icon>mdi-newspaper</v-icon>
                <span>Load more</span>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "index",

    data() {
        return {
            page        : 1,
            list_of_news: []
        }
    },

    mounted() {
        this.say_hello();
        this.list_news(this.page);
    },

    methods: {
        say_hello() {
            console.log("Hello :)");
        },

        change_page() {
            this.page += 1;
            this.list_news(this.page);
        },

        async list_news(page) {
            this.$nprogress.start();

			// News api keys
            const api_keys_list = [
                "NEWS_API_KEY_1", 
                "NEWS_API_KEY_2",
            ];
            const api_key = api_keys_list[Math.floor(Math.random() * api_keys_list.length)];
            const query     = "Ciência e Tecnologia";
            const sortBy    = "recent";
            const pageSize  = 10;

            const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=${sortBy}&page=${page}&pageSize=${pageSize}&apiKey=${api_key}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Erro HTTP: ${response.status}`);
                }

                const data = await response.json();

                if (data.articles?.length) {
                    this.list_of_news = this.list_of_news.concat(data.articles);
                }

                console.log(this.list_news.length)
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
                this.list_news(page);
            } finally {
                this.$nprogress.done();
            }
        },

        format_date(date_entry) {
            const date = new Date(date_entry);
            const pad = (num) => num.toString().padStart(2, "0");
            const formattedDate = `às ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())} de ${pad(date.getUTCDate())}/${pad(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`;
            return `Publicado ${formattedDate}`;
        },
    }
}
</script>

<style scoped>
</style>

<template>
    <div>
        <div class="container-fluid p-0">
            <div class="headerCategories">
                <div class="brand">
                    LIVE SCORE
                </div>
                <h2>Category : {{this.title}}</h2>
            </div>
        </div>

        <div class="container-fluid categories p-0">
            <div class="row content-section">
                <div v-for="item in data" id="my-table" :per-page="per_page" :current-page="current_page" :key="item.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                    <div class="content-inside">
                        <a :href=" 'https://www.livescore.com/en/native/news/' + '-' +  item.seo.slug  + '-' + item.id " target="_blank">
                            <img :src="item.image.data.urls.uploaded.thumbnail" alt="">
                            <div class="story-title">{{item.title}}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" class="customPagination mt-4" aria-controls="my-table" active-bg-color="red">

            <template #first-text><span>First</span></template>
            <template #prev-text><span>Prev</span></template>
            <template #next-text><span>Next</span></template>
            <template #last-text><span>Last</span></template>
            <template #page="{ page, active }">
                <b v-if="active" class="activecolor">{{ page }}</b>
                <i v-else>{{ page }}</i>
            </template>
        </b-pagination>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CategoriesPage',
    data() {
        return {
            title: '',
            data: [],
            base_url: 'https://www.livescore.com/en/native/news/',
            ids: [],
            totalItems: 8,
            // tutorials: [...],
            totalPages: 3,
            currentPage: 1
        }
    },
    async mounted() {
        let id1 = (this.$route.params.id).toString()
        let page1 = (this.$route.params.page).toString()
        // console.log(id1)
        const result = await axios.get(
            'https://livescore6.p.rapidapi.com/news/v2/list-by-sport/',
            {
                headers: {
                    'X-RapidAPI-Key': '688eb0beeemsh8c7daafd5c3556ep15a70cjsn064a2a646b55',
                    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                },
                params: { category: id1, page: page1 }
            },
        );
        // params: { category: '2021020913321150030', page: '1' }
        // params : { params1 }
        console.log(result.data)
        // console.log(result.data)
        // this.title = result.data.data.category.title
        this.title = result.data.data[0].category.title
        this.data = result.data.data
        this.current_page = result.data.meta.pagination.current_page
        this.per_page = result.data.meta.pagination.per_page
        this.count = result.data.meta.pagination.count
        this.total_pages = result.data.meta.pagination.total_pages
        this.total = result.data.meta.pagination.total
        // this.data = result.data.data
        // this.title = result.data[0].title
        // this.title = result.data.category.title
        // console.log(this.title)
        // this.topStories = result.data.topStories
        // this.featuredArticles = result.data.featuredArticles
        // this.categories = result.data.categories
        // console.log(this.topStories)

    },
    computed: {
        rows() {
            return this.data.length
        }
    }

}
</script>

<style scoped>
.headerCategories {
    width: 100%;
    height: 80px;
    display: inline-block;
    padding: 0;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid black;
}

.headerCategories h2 {
    margin: 12px;
}

.brand {
    float: left;
    height: 50px;
    font-size: 1em;
    font-weight: 900;
    padding: 12px 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 3px;
    border: 2px solid black;
    margin: 12px 10px;
}
</style>
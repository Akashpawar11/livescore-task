<template>
    <div>
        <header-nav />
        <h2>Category : {{this.title}}</h2>

        <!-- loader starts -->
        <div class="lds-roller" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <!-- loader ends -->

        <div v-if="!loading" class="container-fluid categories p-0">
            <div class="row content-section m-0">
                <div v-for="item in data" :key="item.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                    <div class="content-inside" id="my-table">
                        <a :href=" 'https://www.livescore.com/en/native/news/' + '-' +  item.seo.slug  + '-' + item.id " target="_blank">
                            <img :src="item.image.data.urls.uploaded.thumbnail" alt="">
                            <div class="story-title">{{item.title}}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="overflow-auto">
            <!-- pagination starts -->
            <nav aria-label="...">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link " :href=" `/categories/` + this.id + '/' + this.pageNum" @click="previous">Previous</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '1'">1</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '2'">2</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '3'">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + this.pageNum" @click="next">Next</a>
                    </li>
                </ul>
            </nav>
            <!-- pagination ends -->

            <!--  -->
            <p class="mt-3">Current Page: {{ currentPage }}</p>   

        </div>

        <!-- Pagination Ends -->


        <!-- Modal -->
    </div>
</template>

<script>
import HeaderNav from './Header.vue'
import axios from 'axios'
export default {
    name: 'CategoriesPage',
    components: {
        HeaderNav
    },
    data() {
        return {
            loading: false,
            title: '',
            data: [],
            base_url: 'https://www.livescore.com/en/native/news/',
            id: '',
            page: '',
            totalItems: 8,
            // tutorials: [...],
            totalPages: 3,
            currentPage: 1,
            per_page: '',
            pageNum: ''
        }
    },
    methods: {
        next() {
            let a = parseInt(this.$route.params.page)
            let b = a + 1
            this.pageNum = b
        },
        previous() {
            let c = parseInt(this.$route.params.page)
            let d = c - 1
            this.pageNum = d
        }
    },
    async mounted() {
        this.loading = true
        var id1 = (this.$route.params.id).toString()
        var page1 = (this.$route.params.page).toString()
        console.log('id :' + id1)
        console.log('page number :' + (page1))
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
        this.id = id1
        this.page = page1
        // params: { category: '2021020913321150030', page: '1' }
        // params : { params1 }
        console.log(result.data)
        // console.log(result.data)
        // this.title = result.data.data.category.title
        this.title = result.data.data[0].category.title
        this.data = result.data.data
        this.currentPage = result.data.meta.pagination.current_page
        this.per_page = result.data.meta.pagination.per_page
        this.count = result.data.meta.pagination.count
        this.total_pages = result.data.meta.pagination.total_pages
        this.total = result.data.meta.pagination.total
        this.loading = false   //Makes loader disable after page is loaded 
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

h2 {
    margin: 12px;
}

.pagination {
    padding-top: 1rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
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
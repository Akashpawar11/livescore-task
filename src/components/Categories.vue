<template>
    <div>
        <header-nav />
        <h2 id="categoriesTitle">Category : {{this.title}}</h2>

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
        <h2 v-if="error">Error 404 ,PAGE NOT FOUND<br>{{this.errorMsg}}</h2>
        <!-- loader ends -->

        <div v-if="!loading" class="container-fluid categories p-0">
            <div class="row content-section m-0">
                <div v-for="item in data" :key="item.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content content-categories">
                    <div class="content-inside" id="my-table">
                        <a :href=" 'https://www.livescore.com/en/native/news/' + '-' +  item.seo.slug  + '-' + item.id " target="_blank">
                            <img :src="item.image.data.urls.uploaded.thumbnail" alt="">
                            <div class="content-title mx-auto">{{item.title}}</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!error" class="overflow-auto">
            <!-- pagination starts -->
            <nav  class='pagination-nav' aria-label="...">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link bg-success" :href=" `/categories/` + this.id + '/' + '1'">First</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link bg-warning" :href=" `/categories/` + this.id + '/' + this.pageNum" @click="previous">Previous</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '1'">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '2'">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '3'">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '4'">4</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '5'">5</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '6'">6</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '7'">7</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '8'">8</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '9'">9</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" :href=" `/categories/` + this.id + '/' + '10'">10</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link bg-warning" :href=" `/categories/` + this.id + '/' + this.pageNum" @click="next">Next</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link bg-success" :href=" `/categories/` + this.id + '/' + this.totalPages">Last</a>
                    </li>
                </ul>
            </nav>
            <!-- pagination ends -->

            <h2 class="mt-3">Current Page : {{ currentPage }}</h2>   

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
            totalPages: 500,
            currentPage: '',
            per_page: '',
            pageNum: '',
            errorMsg: '',
            error: false
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
        this.error = false
        try {
            
            var id1 = (this.$route.params.id).toString()
            var page1 = (this.$route.params.page).toString()
            console.log('id :' + id1)
            console.log('page number :' + (page1))
            const result = await axios.get(
                'https://livescore6.p.rapidapi.com/news/v2/list-by-sport/',
                {
                    headers: {
                        'X-RapidAPI-Key': '4019c68f6fmsh2280c1edd5d1458p1a4489jsnbb84be4d501a',
                        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                    },
                    params: { category: id1, page: page1 }
                },
            );
            this.id = id1
            this.page = page1
            this.title = result.data.data[0].category.title
            this.data = result.data.data
            this.currentPage = result.data.meta.pagination.current_page
            this.per_page = result.data.meta.pagination.per_page
            this.count = result.data.meta.pagination.count
            this.totalPages = result.data.meta.pagination.total_pages
    
            this.total = result.data.meta.pagination.total
            this.loading = false   //Makes loader disable after page is loaded 
        } catch (error) {
            console.log(error)
            this.error = true
            this.errorMsg = ("Invalid Page Number")
        }
    },
    computed: {
        rows() {
            return this.data.length
        }
    }

}
</script>

<style scoped>

#categoriesTitle{
   
    padding: 18px 0 0 0;

}
.content-categories{
    height: 14rem;
}
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

a.page-link:focus{
    background-color: #1877f2;
    color:white;
    font-weight: bold;
}
.page-link{

    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: 1px;
    line-height: 1.25;
    color: #141414;
    border-radius: 6px;
    font-weight: 700;
    background-color: #fff;
    border: 0px solid #2e2b29;
    padding: 10px 19px;
}
    .pagination {
    padding-top: 1rem;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.pagination-nav{
    background-color: #e4e4d5;
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
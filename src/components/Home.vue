<template>
    <div>
        <!-- Navbar -->
        <div>
            <HeaderNav />
        </div>

        <!-- Loader -->
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
        <!-- Error Message -->
        <h2 v-if="error">Error 404 ,PAGE NOT FOUND<br>{{this.errorMsg}}</h2>
        <!-- Page Content -->
        <section>

            <div class="container-fluid" v-if="!loading">
                <!-- Page Information section -->
                <div class="row page-heading">
                    <h2 class="m-auto col-12">Latest Sports News &amp; Today's Headlines</h2>
                    <h5 class="col-12 m-auto ">We cover the most up to date Sports stories in unmissable detail.</h5>
                </div>
                <!-- Top Stories Section -->
                <div class="container-fluid top-stories p-0">
                    <!-- Top Stories - title bar -->
                    <div class="row section-title">
                        <h4>Top Stories</h4>
                    </div>
                    <!-- Top Stories - Content  -->
                    <div class="row content-section">
                        <div v-for="item in topStories" :key="item.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                            <div class="content-inside">
                                <img class="mx-auto" :src="item.mainMedia.thumbnail.url" :alt="item.mainMedia.thumbnail.alt">
                                <div class="content-title mx-auto">{{item.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Featured News Section -->
                <div class="container-fluid featured-news p-0">
                    <!-- Featured news - title bar -->
                    <div class="row section-title">
                        <h4>Featured News</h4>
                    </div>
                    <!-- Featured News - Content -->
                    <div class="row content-section">
                        <div v-for="article in featuredArticles" :key="article.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                            <div class="content-inside">
                                <img class="mx-auto" :src="article.mainMedia.thumbnail.url" :alt="article.mainMedia.thumbnail.alt">
                                <div class="content-title mx-auto">{{article.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Categories Section -->
                <div class="container-fluid categories p-0">
                    <!-- Categories Section -  title bar -->
                    <div class="row section-title">
                        <h4>Categories</h4>
                    </div>
                    <!-- Categories Section - Content -->
                    <div class="row content-section">
                        <div v-for="category in categories" :key="category.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                            <div class="content-inside">
                                <router-link :to=" `/categories/` + category.id + '/' + '1'">
                                    <img class="mx-auto" src="../assets/fallback.jpg" alt="">
                                    <div class="category-title mx-auto">{{category.initialTitle}}</div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Category section ends -->
            </div>
        </section>
        <!-- Page Content ends -->
    </div>

</template>

<script>
import HeaderNav from './Header.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    components: {
        HeaderNav
    },
    data() {
        return {
            topStories: [],
            featuredArticles: [],
            categories: [],
            errorMsg: '',
            loading: false,
            error: false
        }
    },

    async mounted() {
        this.loading = true
        this.error = false
        // API fetching in try block
        try {
            const result = await axios.get(
                'https://livescore6.p.rapidapi.com/news/v2/list',
                {
                    headers: {
                        'X-RapidAPI-Key': '4019c68f6fmsh2280c1edd5d1458p1a4489jsnbb84be4d501a',
                        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                    }
                });
            console.log(result)
            this.topStories = result.data.topStories
            this.featuredArticles = result.data.featuredArticles
            this.categories = result.data.categories
            this.loading = false
        } catch (error) {               //Catch block to show error/s
            console.log(error)
            this.error = true
            this.errorMsg = error.message
        }
    }
}
</script>
    
<style>
/* Image styling */
img {
    text-align: center;
    height: 120px;
    width: 191px;
    border-radius: 10px;
    border: 2px solid black;

}
img:hover{
    transform: scale(1.10);
}

/* Header Page title and other h2s  */
h2 {
    font-family: 'Secular One', sans-serif;
}

/* Page Information heading */
.page-heading {
    background-color: #e4e4d5;
    padding: 27px 0;
    text-align: center;
    border-bottom:#008695
}

/* Sections - Title bar */
.section-title {
    background-color: #108282;
    color: aliceblue;
    font-family: calibri;
    font-weight: 600;
    padding: 8px 0 8px 20px;
    text-align: left;
    border-bottom: 6px solid #58ff02;
}

.section-title h4 {
    font-family: 'Secular One', sans-serif;
    margin: 0;
    padding: 3px 0;
}

/* Title of each content block from topstories, featured */
.content-title {
    font-size: 0.8rem;
    color: black;
    width: 78%;
    padding-top: 10px;
}

.category-title {
    font-size: 1rem;
    color: black;
    width: 89%;
    font-weight: bolder;
    /* margin-right: auto;
    margin-left: auto; */
    padding-top: 10px;
    transition: 0.1s;
}

.category-title a:hover {
    transform: scale(1.2);
    text-decoration: none;
    background-color: #108282;
    color: #ffffff;
}

.content {
    height: 12.5rem;
    width: 100%;
    border-radius: 3px;
    padding: 0;
}

.row.content-section {
    padding: 20px 0;
}

.content a {
    color: black;
}

.content-inside {
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    margin: 6px auto;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
.content-inside a:hover{
    text-decoration: none;
}
/* Loader starts */
.lds-roller {
    display: inline-block;
    position: relative;
    width: 7%;
    height: 20vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 12%;
}

.lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
}

.lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(4, 32, 48);
    margin: -4px 0 0 -4px;
}

.lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
}

.lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
}

.lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
}

.lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
}

.lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
}

.lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
}

.lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
}

.lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
}

.lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
}

.lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
}

.lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
}

.lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
}

.lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
}

.lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
}

.lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
}

.lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
}

@keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
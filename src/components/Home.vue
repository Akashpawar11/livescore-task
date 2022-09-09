<template>
    <div>
        <HeaderNav />
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
        <div class="container-fluid" v-if="!loading">

            <div class="row page-heading">The world’s leading live score service for football, cricket, tennis, basketball and hockey</div>

            <div class="container-fluid top-stories p-0">
                <div class="row section-title pl-2">Top Stories</div>
                <div class="row content-section">
                    <div v-for="item in topStories" :key="item.id" class="col-sm-4 col-md-4 col-lg-3 col-xl-2 content">
                        <div class="content-inside">
                            <img :src="item.mainMedia.thumbnail.url" :alt="item.mainMedia.thumbnail.alt">
                            <!-- <a :href="`https://www.livescore.com/`+item.url"> -->
                            <div class="story-title">{{item.title}}</div>
                            <!-- </a> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid featured-news p-0">
                <div class="row section-title">Featured News</div>
                <div class="row content-section">
                    <div v-for="article in featuredArticles" :key="article.id" class="col-sm-4 col-md-4 col-lg-3 col-xl-2 content">
                        <div class="content-inside">
                            <img :src="article.mainMedia.thumbnail.url" :alt="article.mainMedia.thumbnail.alt">
                            <!-- <a :href="`https://www.livescore.com/`+article.url"> -->
                            <div class="story-title">{{article.title}}</div>
                            <!-- </a> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid categories p-0">
                <div class="row section-title">Categories</div>
                <div class="row content-section">
                    <div v-for="category in categories" :key="category.id" class="col-sm-4 col-md-4 col-lg-3 col-xl-2 content">
                        <div class="content-inside">
                            <router-link :to=" `/categories/` + category.id + '/' + '1'">
                                <img src="../assets/fallback.jpg" alt="">
                                <div class="categories-title">{{category.initialTitle}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import HeaderNav from './Header.vue'
// import CategorySection from './CategorySection.vue'
// import CategoriesList from './Categorieslist.vue'
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
            loading: false
        }
    },
    
    async mounted() {
        this.loading = true

        const result = await axios.get(
            'https://livescore6.p.rapidapi.com/news/v2/list',
            {
                headers: {
                    'X-RapidAPI-Key': '688eb0beeemsh8c7daafd5c3556ep15a70cjsn064a2a646b55',
                    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                }
            }
        );
        this.topStories = result.data.topStories
        this.featuredArticles = result.data.featuredArticles
        this.categories = result.data.categories
        this.loading = false
    }
}
</script>
    
<style>

img {
    text-align: center;
    height: 60%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    border: 2px solid black
}
.page-heading {
    padding: 12px;
    text-align: center;
}

.section-title {
    background-color: #222;
    color: aliceblue;
    font-family: calibri;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 8px 0 8px 20px;
}

.content-section {
    padding: 12px;
}

.story-title {
    font-size: 0.75rem;
    color: black;
    width: 89%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 5px;
}
.categories-title{
    font-size: 1rem;
    color: black;
    width: 89%;
    font-weight: bolder;
    margin-right: auto;
    margin-left: auto;
    padding-top: 10px;
}
.content {
    height: 12.5rem;
    width: 100%;
    border-radius: 3px;
    padding: 0;
}
.content a{
    color: black;
}

.content-inside{
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    margin : 6px auto;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}
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
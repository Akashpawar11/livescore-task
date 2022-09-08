<template>
    <div>
        <HeaderNav />
        <div class="container-fluid">

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
                            <!-- <a :href="`https://www.livescore.com/`+category.pathname"> -->
                            <router-link :to=" `/categories/` + category.id + '/2' ">
                                <img src="../assets/fallback.jpg" alt="">
                                <div class="story-title">{{category.initialTitle}}</div>
                            </router-link>
                            <!-- </a> -->
                        </div>
                    </div>
                </div>
            </div>

        </div>

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
            categoryTitle: '',
            current_page : ''
        }
    },
    async created() {
        // let id1 = (this.$route.params.id).toString()
        // let page1 = (this.$route.params.page).toString()
        // // console.log(id1)
        // const result1 = await axios.get(
        //     'https://livescore6.p.rapidapi.com/news/v2/list-by-sport/',
        //     {
        //         headers: {
        //             'X-RapidAPI-Key': '688eb0beeemsh8c7daafd5c3556ep15a70cjsn064a2a646b55',
        //             'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        //         },
        //         params: { category: id1, page: page1 }
        //     },
        // );
        // // params: { category: '2021020913321150030', page: '1' }
        // // params : { params1 }
        // console.log(result1.data)
        // // console.log(result.data)
        // // this.title = result.data.data.category.title
        // this.title = result1.data.data[0].category.title
        // this.data = result1.data.data
        // this.current_page = result1.data.meta.pagination.current_page
        // this.per_page = result1.data.meta.pagination.per_page
        // this.count = result1.data.meta.pagination.count
        // this.total_pages = result1.data.meta.pagination.total_pages
        // this.total = result1.data.meta.pagination.total

        const result = await axios.get(
            'https://livescore6.p.rapidapi.com/news/v2/list',
            {
                headers: {
                    'X-RapidAPI-Key': '688eb0beeemsh8c7daafd5c3556ep15a70cjsn064a2a646b55',
                    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                }
                // params: {category: 'all', count: '10'}
            }
        );
        // console.log(result.data)
        this.topStories = result.data.topStories
        this.featuredArticles = result.data.featuredArticles
        this.categories = result.data.categories
        // console.log(this.topStories)
        // console.log(this.categories)
    }
}
</script>

<style>
img {
    text-align: center;
    height: 98px;
    width: 180px;
}

/* height: 100%;
    width: 100%; */

.page-heading {
    padding: 12px 0 12px 0;
    text-align: center;
}

.section-title {
    background-color: #222;
    color: aliceblue;
    font-size: 16px;
    font-weight: 400;
    padding: 5px 0 5px 15px;
}

.content-section {
    padding: 20px 10px;
}

.story-title {
    padding: 10px 0;
}

.content {
    height: 11.5rem;
    width: 100%;
    border: 1px solid black;
    border-radius: 3px;
    /* border: 1px solid rgb(175, 70, 0); */
}

.content a {
    color: black;
}

.content-inside {
    font-size: 0.8rem;
    /* color: black; */
    /* border: 1px solid black; */
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 100%;
    height: 70%;
    margin: 6px auto;

}
</style>
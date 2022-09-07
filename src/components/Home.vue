<template>
    <div>
        <HeaderNav />
        <div class="container-fluid">
            <div class="row page-heading">The world’s leading live score service for football, cricket, tennis, basketball and hockey</div>
            <div class="container-fluid top-stories p-0">
                <div class="row section-title">Top Stories</div>
                <div class="row content-section">
                    <div v-for="item in topStories" :key="item.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                        <div class="content-inside">
                            <img :src="item.mainMedia.thumbnail.url" alt="">
                            <a :href="`https://www.livescore.com/`+item.url">
                                <div class="story-title">{{item.title}}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid featured-news p-0">
                <div class="row section-title">Featured News</div>
                <div class="row content-section">
                    <div v-for="item in featuredArticles" :key="item.id" class="col-sm-6 col-md-4 col-lg-3 col-xl-2 content">
                        <div class="content-inside">
                            <img :src="item.mainMedia.thumbnail.url" alt="">
                            <a :href="`https://www.livescore.com/`+item.url">
                                <div class="story-title">{{item.title}}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="categories">
                <div class="row section-title">Categories</div>
                <div class="row  content-section ">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-2 content"></div>
                            <div class="col-2 content"></div>
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
            featured: [],
            categories: [],
            categoryTitle: ''
        }
    },
    async mounted() {
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
        // const options = {
        //   method: 'GET',
        //   url: 'https://livescore6.p.rapidapi.com/news/v2/list',
        //   headers: {
        //     'X-RapidAPI-Key': 'd4903c298emshd5d047f07ca52bdp13d08ejsn0b2611e63d82',
        //     'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        //   }
        // };

        // let result = await axios.request(options).then(function (response) {
        //   console.log(response.data);
        // });
        console.log(result.data)
        this.topStories = result.data.topStories
        // this.TSimg = result.data.topStories.mainMedia.thumbnail.url
        // console.log(this.TSimg)
        console.log(this.topStories)

    }
}
</script>

<style>
img {
    text-align: center;
    height: 100px;
    width: 171px;
    /* height: 100%;
    width: 100%; */
}

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

.story-title{
    padding: 10px 0;
}
.content {
    height: 10rem;
    width: 100%;
    /* border: 1px solid rgb(175, 70, 0); */
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
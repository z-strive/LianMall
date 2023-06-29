<template>
    <div class="header">
        <div class="banner">
            <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="item in swiperData" :key="item.categoryId">
                <img :src="item.imgUrl" />
            </van-swipe-item>
            </van-swipe>
        </div>
        <div class="search">
            <van-search
                placeholder="请输入搜索关键词"
                input-align="center"
                />
                <van-icon name="service-o" class="icon" color="#fff"/>
        </div>
    </div>
    <div class="scrollBanner">
        <van-swipe :loop="false" :width="260" :show-indicators="false">
            <van-swipe-item v-for="item in swiperData" :key="item.categoryId"><img :src="item.imgUrl" alt=""></van-swipe-item>
        </van-swipe>
    </div>
    <div>
        <nav v-for="item in navList" :key="item">
            <img src="" alt="">
            <span></span>
        </nav>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import {getHomeData} from '../api/index'
let swiperData = ref([])
let scrollBanner = ref([])
let navList = ref([])
getHomeData().then(res=>{
    if(res.code===200){
        swiperData.value = res.banners
        scrollBanner.value = res.banners2
        navList.value = res.tabList
    }
    console.log(res)
});
getHomeData()
// axios.get('/sugrec?prod=pc&wd=b').then(res => {console.log(res)}).catch(
//     err => {
//         console.log(err)
//         showDialog({
//             message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
//             theme: 'round-button',
//         })
//     }    
// )
// axios.get('/sugrec?').then(res=>console.log(res))

</script>

<style scoped>
.header{
    position: relative;
}
.my-swipe .van-swipe-item {
    color: #fff;
    width: 100%;
    height: 260px;
    background-color: #39a9ed;
  }
.banner img{
    width: 100%;
    height: 100%;
}
.search {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    top: 10px;
}
.van-search{
    background:none;
}
.icon{
    margin-left: 20px;
}
.scrollBanner van-swipe{
    display: flex;
}
.scrollBanner .van-swipe-item{
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 260px !important; */
}
.scrollBanner img{
    width: 222px;
    height: 90px;
    border-radius: 16px;
}
</style>
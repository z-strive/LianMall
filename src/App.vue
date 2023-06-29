<template>
  <van-tabbar route v-model="active">
    <van-tabbar-item v-for=" ( item,index) in tabbarList" :to="item.to" :key="item.id">
      <span>{{ item.name }}</span>
      <template #icon="props" >
        <img :src="props.active ? item.active : item.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>

  <RouterView></RouterView>
</template>

<script setup>
import {RouterView} from 'vue-router'
import { ref } from 'vue'
const active = ref(0);
const tabbarList = ref([
  {
    id:0,
    name:'首页',
    active:'/src/images/tabbar/home_active.png',
    inactive:'/src/images/tabbar/home.png',
    to:'/Home'
  },
  {
    id:1,
    name:'分类',
    active:'/src/images/tabbar/classify_active.png',
    inactive:'/src/images/tabbar/classify.png',
    to:'/type'
  },
  {
    id:2,
    name:'购物车',
    active:'/src/images/tabbar/cart_active.png',
    inactive:'/src/images/tabbar/cart.png',
    to:'/Cart',
  },
  {
    id:3,
    name:'我的',
    active:'/src/images/tabbar/mine_active.png',
    inactive:'/src/images/tabbar/mine.png',
    to:'/mine'
  }
])
</script>

<style scoped lang="less">

</style>
<template>
  <RouterView :key="$route.fullPath"></RouterView>
  <van-tabbar route v-model="active" active-color="#ee0a24" v-if="$route.meta.showTab">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="orders-o" to="/Type">分类</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/Cart" badge="0">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/Mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0);
</script>

<style scoped lang="less"></style>
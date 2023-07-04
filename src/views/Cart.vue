<template>
    <h3>购物车</h3>
    <template v-if="!shopArr">
        <div>空空当当</div>
    </template>
    <template v-for="i in shopArr">
        <van-swipe-cell>
            <van-card num="2" :price="i.price" :desc="i.name" :title="i.title" :thumb="i.img" />
            <template #right>
                <van-button square text="删除" type="danger" class="delete-button" @click="remove(i)" />
            </template>
        </van-swipe-cell>
    </template>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    <van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel"
        @select="goPay" :overlay="true" />
</template>

<script setup>
import { ref } from 'vue'
import { showToast, showLoadingToast } from 'vant';
import { useRouter } from 'vue-router';
let router = useRouter()
const show = ref(false);
let shopArr = ref(JSON.parse(localStorage.getItem('shopArr')))
const onSubmit = () => show.value = true;

function remove(item) {
    shopArr.value = shopArr.value.filter(i => {
        return i.title !== item.title
    })
    localStorage.setItem('shopArr', JSON.stringify(shopArr.value))
}


const actions = [
    { name: '微信' },
    { name: '支付宝' },
    { name: '银行卡' },
];
const onCancel = () => showToast('取消');
function goPay(action, index) {
    if (action.name == "微信") {
        showLoadingToast({
            message: '加载中...',
            forbidClick: true,
            onClose(){
                router.push({path:'/order'})
            }
        })
        
    }
}
</script>

<style scoped>
.goods-card {
    margin: 0;
}

.delete-button {
    height: 100%;
}

.van-submit-bar {
    bottom: 50px;
}

h3 {
    margin: 10px auto;
    text-align: center;
    font-size: 16px;
}
</style>
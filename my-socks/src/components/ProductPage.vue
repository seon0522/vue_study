<!-- 상품정보 페이지와 카트를 포함하는 페이지 -->
<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div class="cart">
    <p>Cart{{ cart.length }}</p>
    </div>
    <Product @add-to-cart="addToCart"></Product>
  </div>
</template>



<script>
import Product from "./Product";

export default {
  name: 'ProductPage',
  components: {Product},
  data(){
    return {cart:[]}
  },
  methods:{
    addToCart(variantId){
      this.cart.push(variantId)
    }
  }
}
</script>
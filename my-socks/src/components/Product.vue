<!-- 상품정보페이지 -->
<template>
  <div class="product">
    <div class="product-image">
      <img :src="image">
    </div>
    <div class="product-info">
      <h1>{{ product }}</h1>
      <p v-if="inStock == false">Out of Stock</p>
      <p v-else> In Stock</p>
      <p>Shipping: {{ shipping }}</p>
      <ul>
        <li v-for="(detail, i) in details" :key="i">{{ detail }}</li>
      </ul>
      <div v-for="(variant,index) in variants"
           :key="variant.variantId"
           class="color-box"
           :style="{backgroundColor:variant.variantColor}"
           @mouseover="updateProduct(index)"
      >
      </div>
      <button @click="addToCart"
              :disabled="!inStock"
              :class="{disabledButton:!inStock}">Add to Cart
      </button>
    </div>
    <div class="product-comment">
      작성자: <input type="text" v-model="user">
      코멘트: <input type="text" v-model="comment">
      <button @click="addTocomment">save</button>
      <ul>
        <li v-for="msg in comments" v-bind:key="msg.user">
          <p>{{ msg.user}} : {{msg.comment}}</p>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      comment: null,
      comments:[],
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: require('@/assets/images/socks_green.jpg'),
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: require('@/assets/images/socks_blue.jpg'),
          variantQuantity: 10
        }
      ],
    }
  },
  methods: {
    addTocomment(){
      const s = {user: this.user, comment: this.comment}

      this.comments.unshift(s);
      this.user = null
      this.comment = null
    },
    addToCart: function () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct: function (index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + '' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
};
</script>



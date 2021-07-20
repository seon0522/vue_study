Vue.component("product", {
    template: `<div class="product">
        <div class="product-image">
            <img v-bind:src="image">
        </div>
        <div class="product-info">
            <p v-if="inStock == false">Out of Stock</p>
            <p v-else> In Stock</p>
            <h1>{{ title }}</h1>
            <ul>
                <li v-for="s in details">{{ s }}</li>
            </ul>
            <div v-for="(variant,index) in variants"
                 :key="variant.variantId"
                 class="color-box"
                 :style="{backgroundColor:variant.variantColor}"
                 @mouseover="updateProduct(index)"
            >
            </div>
            <button @click="localAddtoCart"
            :disabled="!inStock"
            :class="{disabledButton:!inStock}">Add to Cart</button>
<!--            <div class="cart">-->
<!--                <p>Cart : {{cart}} </p>-->
<!--            </div>-->
        </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: '브랜드 제품',
            selectdVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/images/socks_green.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: './assets/images/socks_blue.jpg',
                    variantQuantity: 15
                }],
        }
    },
    methods: {
        localAddtoCart() {
            let CartId = this.variants[this.selectdVariant].variantId;
            this.$emit('event-add-cart', CartId);

        },
        updateProduct(index) {
            this.selectdVariant = index
        }
    },
    //그냥 변수처럼 사용 가능
    computed: {
        inStock() {
            return this.variants[this.selectdVariant].variantQuantity
        },
        title() {
            return this.brand + " : " + this.product
        },
        image() {
            return this.variants[this.selectdVariant].variantImage
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        cart: []
    },
    methods: {
        addToCart(id) {
            this.cart.push(id)
        }
    }
});
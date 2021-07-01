const ProductDetails = Vue.component('Product-Details', {
  template: `
    <div class="product-details">
      <h3>Product Details</h3>
    </div>
  `,
});

const Product = Vue.component('Product', {
  template: `
    <div class="product">
      <h3>{{product.name}}</h3>
      <img
        :src="getImage(product)"
      />

      <p>{{product.description}}</p>
      <ul>
        <li v-for="feature in product.features">{{feature}}</li>
      </ul>

      <p>&pound;{{product.price}}</p>

      <div class="promo-blocks__actions">
        <router-link to="/products/{{product.productId}}" className="button--anchor">Full details</router-link>
        <button
          :disabled="product.stockLevel === 0"
          :class="{'button--disabled': product.stockLevel === 0}"
          @click="addToCart(product)"
          >
          {{product.addedToCart ? "Remove from cart" : "Add to cart"}}
        </button>
        <span v-if="product.stockLevel === 0">Out of stock :(</span>
      </div>
    </div>
  `,
  props: ['product', 'updateCart'],
  methods: {
    getImage(product) {
      return product.images[0].imageSrc;
    },
    addToCart(product) {
      product.addedToCart = !product.addedToCart;
      this.$emit('add-to-cart', product);
    },
  },
});

const Home = Vue.component('Home', {
  template: `
    <div>
      <h2>Popular plants</h2>
      <p>
        Want to "fernish" your home? Then you're in the right place! Take a
        look at our selection of plants below.
      </p>

      <div class="promo-blocks products">
        <product
          v-for="product in products"
          :key="product.productId"
          :product="product"
          @add-to-cart="updateCart"
        ></product>
      </div>

      <div class="houseplants-promo promo">
        <h2>Why keep houseplants?</h2>
        <p>
          Plants are known to have a calming effect on our nervous systems,
          but the benefits don't stop there.
        </p>
        <div class="promo-blocks">
          <div>
            <h3>Pure air</h3>
            <img src="./images/fresh_air_sm.jpg" />
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam eaque ipsa
            </p>
          </div>
          <div>
            <h3>Pure air</h3>
            <img src="./images/fresh_air_sm.jpg" />
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam eaque ipsa
            </p>
          </div>
          <div>
            <h3>Pure air</h3>
            <img src="./images/fresh_air_sm.jpg" />
            <p>
              Sed ut perspiciatis, unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam eaque ipsa
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['products', 'addToCart'],
  methods: {
    updateCart(product) {
      this.$emit('update-cart', product);
    },
  },
});

const Products = Vue.component('products', {
  template: `
    <div>
      <h2>Our plants</h2>
    </div>
  `,
});

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      props: true,
    },
    { path: '/products', component: Products },
    { path: '/products/:id', component: ProductDetails },
  ],
});

new Vue({
  methods: {
    updateCart(product) {
      if (!this.cart.includes(product.productId)) {
        return this.cart.push(product.productId);
      }

      this.cart.splice(this.cart.indexOf(product.productId), 1);
    },
  },
  data: {
    cart: [],
    products: [
      {
        productId: 1,
        name: 'Boston Fern',
        description:
          'Jagged green fronds - perfect for a bathroom or light windowsill.',
        features: ['Moisture loving', 'Easy care', 'Dislikes direct sun'],
        stockLevel: 5,
        images: [
          {
            imageId: 1,
            size: 'small',
            title: 'Small Boston Fern',
            imageSrc: './images/boston_fern_sm.jpg',
          },
          {
            imageId: 2,
            size: 'large',
            title: 'Large Boston Fern',
            imageSrc: './images/boston_fern_lg.jpg',
          },
        ],
        price: 1.99,
        addedToCart: false,
      },
      {
        productId: 2,
        name: 'Maidenhair Fern',
        description:
          'Jagged green fronds - perfect for a bathroom or light windowsill.',
        features: ['Moisture loving', 'Easy care', 'Dislikes direct sun'],
        stockLevel: 5,
        images: [
          {
            id: 1,
            size: 'small',
            title: 'Small Boston Fern',
            imageSrc: './images/boston_fern_sm.jpg',
          },
          {
            id: 2,
            size: 'large',
            title: 'Large Boston Fern',
            imageSrc: './images/boston_fern_lg.jpg',
          },
        ],
        price: 6.99,
        addedToCart: false,
      },
      {
        productId: 3,
        name: 'Tree Fern',
        description:
          'Jagged green fronds - perfect for a bathroom or light windowsill.',
        features: ['Moisture loving', 'Easy care', 'Dislikes direct sun'],
        stockLevel: 5,
        images: [
          {
            id: 1,
            size: 'small',
            title: 'Small Boston Fern',
            imageSrc: './images/boston_fern_sm.jpg',
          },
          {
            id: 2,
            size: 'large',
            title: 'Large Boston Fern',
            imageSrc: './images/boston_fern_lg.jpg',
          },
        ],
        price: 3.99,
        addedToCart: false,
      },
    ],
  },
  router,
}).$mount('#app');

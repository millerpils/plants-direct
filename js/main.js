/* next steps


Use methods when you want to change data
Use computer properties when you need to change the presentation of existing data

*/

Vue.component('product', {
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
        <a href="{{product.link}}" class="button--anchor">Full details</a>
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
  props: ['product'],
  methods: {
    getImage(product) {
      return product.images[0].imageSrc;
    },
    addToCart(product) {
      product.addedToCart = !product.addedToCart;
      this.$emit('add-to-cart', product);
    },
  },
  data() {
    return {};
  },
});

var app = new Vue({
  el: '#app',
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
        link: '/products/boston-fern',
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
        link: '/products/boston-fern',
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
        link: '/products/boston-fern',
        addedToCart: false,
      },
    ],
  },
});

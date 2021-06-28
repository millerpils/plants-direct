Vue.component('products', {
  template: `
  <div class="promo-blocks products">
    <div class="product" v-for="(product, index) in products" :key="product.productId">
      <h3>{{product.name}}</h3>

      <img
        :src="getImage(index)"
      />

      <p>{{product.description}}</p>
      <ul>
        <li v-for="feature in product.features">{{feature}}</li>
      </ul>

      <p v-if="product.price">&pound;{{product.price}}</p>

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
  </div>
  `,

  methods: {
    getImage(index) {
      return this.products[index].images[0].imageSrc;
    },
    addToCart(product) {
      this.cart.push(product.productId);
      product.addedToCart = true;
    },
    updatePrice(product, price) {
      product.price = price;
    },
  },
  data() {
    return {
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
          price: null,
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
          price: null,
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
          price: null,
          link: '/products/boston-fern',
          addedToCart: false,
        },
      ],
    };
  },
});

var app = new Vue({
  el: '#app',
  data: {
    cart: [],
  },
});

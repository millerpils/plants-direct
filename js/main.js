Vue.component('product', {
  template: `
    {{ product.name}}
  `,

  methods: {
    // addToCart(product) {
    //   this.cart.push(product.productId);
    //   product.addedToCart = true;
    // },
    // updatePrice(product, price) {
    //   product.price = price;
    // },
  },
});

var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    products: [
      {
        id: 1,
        name: 'Boston Fern',
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
        id: 2,
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
        id: 3,
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
  },
});

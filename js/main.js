var app = new Vue({
  el: '#app',
  data: {
    name: 'Boston Fern',
    description:
      'Jagged green fronds - perfect for a bathroom or light windowsill.',
    features: ['Moisture loving', 'Easy care', 'Dislikes direct sun'],
    price: 3.99,
    stockLevel: 0,
    imageSrc: './images/boston_fern_sm.jpg',
    link: '/products/boston-fern',
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
  },
});

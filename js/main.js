var app = new Vue({
  el: '#app',
  data: {
    name: 'Boston Fern',
    description:
      'Jagged green fronds - perfect for a bathroom or light windowsill.',
    features: ['Moisture loving', 'Easy care', 'Dislikes direct sun'],
    price: null,
    stockNotice: null,
    sizes: [
      { name: 'Small 20cm', price: 3.99, stockLevel: 0 },
      { name: 'Medium 30cm', price: 6.99, stockLevel: 10 },
    ],
    imageSrc: './images/boston_fern_sm.jpg',
    link: '/products/boston-fern',
    cart: 0,
  },
  methods: {
    addToCart: function (e) {
      this.cart += 1;
    },
    checkStock: function (size) {
      if (size.stockLevel > 0) {
        return this.updatePrice(size.price);
      }

      this.price = null;
      this.stockNotice = 'Sorry, we are out of stock';
    },
    updatePrice: function (itemPrice) {
      this.stockNotice = null;
      this.price = itemPrice;
    },
  },
});

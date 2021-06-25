var app = new Vue({
  el: '#app',
  data: {
    plants: [
      {
        name: 'Boston Fern',
        description:
          'Jagged green fronds - perfect for a bathroom or light windowsill.',
        features: ['Moisture loving', 'Easy care', 'Dislikes direct sun'],
        variants: [
          { name: 'Small 20cm', price: 3.99, stockLevel: 0 },
          { name: 'Medium 30cm', price: 6.99, stockLevel: 10 },
        ],
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
        link: '/products/boston-fern',
      },
    ],
    price: null,
    stockNotice: null,
    cart: 0,
  },
  methods: {
    addToCart: function (e) {
      this.cart += 1;
    },
    checkStock: function (variant) {
      if (variant.stockLevel > 0) {
        return this.updatePrice(variant.price);
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

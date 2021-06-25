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
          { id: 1, name: 'Small 20cm', price: 3.99, stockLevel: 0 },
          { id: 2, name: 'Medium 30cm', price: 6.99, stockLevel: 10 },
        ],
        selectedVariant: 1,
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
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updatePrice(plant, price) {
      plant.price = price;
    },
  },
});

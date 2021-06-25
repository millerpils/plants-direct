var app = new Vue({
  el: '#app',
  data: {
    plants: [
      {
        productId: 1,
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
    cart: [],
  },
  methods: {
    addToCart(plant) {
      // get id, find in cart and go from there

      this.cart.push(plant.productId);
      plant.addedToCart = true;
    },
    updatePrice(plant, price) {
      plant.price = price;
    },
  },
});

const currency = '$';
const path = './images/';
const imgType = '.svg';

const Kitchen = { category: 'kitchen' };
const Devices = { category: 'devices' };
const Cosmetics = { category: 'cosmetics' };

const kitchenProducts = [
  {
    type: 'grater',
    price: 10,
  },
  {
    type: 'pastry-bag',
    price: 25,
  },
  {
    type: 'scale',
    price: 5,
  },
  {
    type: 'whisk',
    price: 15,
  },
];

const devicesProducts = [
  {
    type: 'desktop',
    price: [100, 1000],
  },
  {
    type: 'laptop',
    price: [50, 1500],
  },
  {
    type: 'smartphone',
    price: [80, 2000],
  },
  {
    type: 'tablet',
    price: [20, 1300],
  },
];

const cosmeticsProducts = [
  {
    type: 'blush',
    price: 100,
  },
  {
    type: 'eyeshadow',
    price: 50,
  },
  {
    type: 'lipstick',
    price: 80,
  },
  {
    type: 'nail-polish',
    price: 200,
  },
  {
    type: 'perfume',
    price: 300,
  },
];

kitchenProducts.forEach((product) => {
  product.__proto__ = Kitchen;
});

devicesProducts.forEach((product) => {
  product.__proto__ = Devices;
});

cosmeticsProducts.forEach((product) => {
  product.__proto__ = Cosmetics;
});

function getProductHTML(product) {
  return `
    <div class="product">
      <div class="product-img"><img src="${path}${product.type.toLowerCase()}${imgType}"></div>
      <div class="product-category">Name: <span class="product-category-value">${product.type}</span></div>
      <div class="product-category">Price: <span class="product-category-value">${currency}${product.price}</span></div>
    </div>`;
}

function getCategoryHTML(category, products) {
  const productsHTML = products.map(getProductHTML).join('');
  return `
    <div class="category">
      <h2 class="category-title">Category: ${category.category}</h2>
      <div class="products">
        ${productsHTML}
      </div>
    </div>`;
}

const kitchenHTML = getCategoryHTML(Kitchen, kitchenProducts);
const devicesHTML = getCategoryHTML(Devices, devicesProducts);
const cosmeticsHTML = getCategoryHTML(Cosmetics, cosmeticsProducts);

const productsContainer = document.getElementById('products-container');
productsContainer.innerHTML = kitchenHTML + devicesHTML + cosmeticsHTML;

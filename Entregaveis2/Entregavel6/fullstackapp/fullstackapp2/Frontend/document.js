
document.addEventListener('DOMContentLoaded', () => {

  const products = [

    {
      id: 1,
      name: 'Wireless Earbuds',
      category: 'Eletrônicos',
      price: 49.99,
      description: 'Fones com cancelamento de ruído.',
      image: 'https://images.unsplash.com/photo-1518446845634-f974e3ccd382?auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 2,
      name: 'Yoga Mat',
      category: 'Fitness',
      price: 24.99,
      description: 'Tapete confortável para exercícios.',
      image: 'https://images.unsplash.com/photo-1549575812-084b4e0dc2f2?auto=format&fit=crop&w=800&q=80'
    },

    {
      id: 3,
      name: 'Smart Lamp',
      category: 'Casa',
      price: 39.99,
      description: 'Luminária inteligente moderna.',
      image: ''
    },

    {
      id: 4,
      name: 'Travel Backpack',
      category: 'Acessórios',
      price: 59.99,
      description: 'Mochila resistente para viagens.',
      image: 'https://images.unsplash.com/photo-1529516547153-46e25f6fab92?auto=format&fit=crop&w=800&q=80'
    }

  ];

  const cart = {};

  const productsContainer =
    document.getElementById('products-container');

  function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  function createCard(product) {

    return `
      <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="content">

          <h3>${product.name}</h3>

          <p>${product.description}</p>

          <span class="price">
            ${formatCurrency(product.price)}
          </span>

        </div>

        <button onclick="addToCart(${product.id})">
          Adicionar
        </button>

      </div>
    `;
  }

  function renderProducts() {

    const categories = {};

    products.forEach(product => {

      if (!categories[product.category]) {
        categories[product.category] = [];
      }

      categories[product.category].push(product);

    });

    productsContainer.innerHTML = '';

    Object.keys(categories).forEach(category => {

      const section = document.createElement('section');

      section.className = 'category-section';

      section.innerHTML = `
        <h2 class="category-title">
          ${category}
        </h2>

        <div class="product-grid">
          ${categories[category]
            .map(product => createCard(product))
            .join('')}
        </div>
      `;

      productsContainer.appendChild(section);

    });

  }

  window.addToCart = function(productId) {

    const product =
      products.find(p => p.id === productId);

    if (!cart[productId]) {
      cart[productId] = {
        ...product,
        quantity: 0
      };
    }

    cart[productId].quantity++;

    updateCart();

  };

   
function updateCart() {

  const items = Object.values(cart);

  const totalItems =
    items.reduce((sum, item) =>
      sum + item.quantity, 0);

  const totalPrice =
    items.reduce((sum, item) =>
      sum + item.quantity * item.price, 0);

  document.getElementById('cart-count')
    .textContent = totalItems;

  document.getElementById('cart-total')
    .textContent = formatCurrency(totalPrice);

  const cartList =
    document.getElementById('cart-list');

  const checkoutBtn =
    document.getElementById('checkout-btn');

  if (items.length === 0) {

    cartList.innerHTML =
      '<li>Nenhum item adicionado.</li>';

    checkoutBtn.disabled = true;

    return;
  }

  cartList.innerHTML = '';

  items.forEach(item => {

    const li = document.createElement('li');

    li.innerHTML = `
      ${item.name}

      <span class="cart-item-count">
        ${item.quantity} ×
        ${formatCurrency(item.price)}
      </span>
    `;

    cartList.appendChild(li);

  });

  checkoutBtn.disabled = false;

}
 

  renderProducts();
  updateCart();
 

});

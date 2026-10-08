const products = [
  {
    id: 1,
    name: 'Jugo / Extracto de Sábila 1L',
    category: 'Bebidas y Extractos',
    price: 45,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    description: 'Refrescante, energético y favorecedor para tu bienestar diario.',
    variants: ['Con Azúcar', 'Con Stevia'],
    quantity: [1, 2, 3]
  },
  {
    id: 2,
    name: 'Stevia Líquida 100ml',
    category: 'Endulzantes Naturales',
    price: 35,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
    description: 'Endulza tus recetas sin azúcar y sin comprometer el sabor.',
    variants: ['Gotero 100ml'],
    quantity: [1, 2]
  },
  {
    id: 3,
    name: 'Miel de Abeja Pura 500g',
    category: 'Superalimentos',
    price: 50,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1589987608340-6ec2f3f10f13?auto=format&fit=crop&w=900&q=80',
    description: 'Naturaleza pura, ideal para tus infusiones y desayunos saludables.',
    variants: ['Frasco 500g', 'Frasco 1000g (Bs. 90)'],
    quantity: [1, 2]
  },
  {
    id: 4,
    name: 'Té Verde Orgánico',
    category: 'Infusiones',
    price: 30,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    description: 'Ideal para acompañar una rutina saludable y relajante.',
    variants: ['Caja 20 sobres', 'Frasco 100g'],
    quantity: [1, 2, 3]
  },
  {
    id: 5,
    name: 'Aloe Vera Natural',
    category: 'Cuidado Personal',
    price: 60,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    description: 'Hidratación y cuidado natural para piel y cabello.',
    variants: ['Botella 250ml', 'Botella 500ml'],
    quantity: [1, 2]
  },
  {
    id: 6,
    name: 'Chía Premium',
    category: 'Semillas y Granos',
    price: 28,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80',
    description: 'Fuente de fibra, omega 3 y energía para cada día.',
    variants: ['Bolsa 250g', 'Bolsa 500g'],
    quantity: [1, 2, 3]
  },
  {
    id: 7,
    name: 'Ginseng y Spirulina',
    category: 'Suplementos',
    price: 75,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    description: 'Apoya resistencia, energía natural y vitalidad general.',
    variants: ['Frasco 60 cápsulas', 'Frasco 120 cápsulas'],
    quantity: [1, 2]
  },
  {
    id: 8,
    name: 'Aceite de Coco Virgen',
    category: 'Cocina Natural',
    price: 68,
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1604908556852-6e8d7d8f5c2f?auto=format&fit=crop&w=900&q=80',
    description: 'Versátil para cocina, belleza y cuidado diario.',
    variants: ['Botella 250ml', 'Botella 500ml'],
    quantity: [1, 2]
  }
];

const productGrid = document.getElementById('productGrid');
const categoryFilters = document.getElementById('categoryFilters');
const searchInput = document.getElementById('searchInput');

const categories = ['Todos', ...new Set(products.map((product) => product.category))];
let selectedCategory = 'Todos';

function formatPrice(value) {
  return `Bs. ${value.toFixed(2)}`;
}

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesText =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchesCategory && matchesText;
  });
}

function buildCategoryFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-btn ${category === selectedCategory ? 'active' : ''}"
          type="button"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join('');

  categoryFilters.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.dataset.category;
      buildCategoryFilters();
      renderProducts();
    });
  });
}

function getWhatsAppLink(product, variant, quantity) {
  const message = encodeURIComponent(
    `Hola Organika Bio Market, me gustaría pedir ${quantity} unidad(es) de ${product.name} (${variant}).`
  );

  return `https://wa.me/59178000000?text=${message}`;
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; background: white; border: 1px solid rgba(23,59,42,0.08); border-radius: 24px; padding: 2rem; text-align: center; color: var(--muted); box-shadow: var(--card-shadow);">
        <h3 style="color: var(--green-800); margin-bottom: 0.5rem;">No encontramos productos</h3>
        <p>Prueba con otra palabra clave o cambia la categoría.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-content">
            <span class="product-category">${product.category}</span>
            <h3 class="product-title">${product.name}</h3>

            <div class="product-meta">
              <span class="product-price">${formatPrice(product.price)}</span>
              <span class="product-rating">★ ${product.rating}</span>
            </div>

            <p class="product-description">${product.description}</p>

            <div class="product-selects">
              <select aria-label="Selecciona una variante de ${product.name}" data-product-id="${product.id}" data-variant>
                ${product.variants
                  .map((variant) => `<option value="${variant}">${variant}</option>`)
                  .join('')}
              </select>

              <select aria-label="Selecciona la cantidad de ${product.name}" data-product-id="${product.id}" data-quantity>
                ${product.quantity
                  .map((qty) => `<option value="${qty}">${qty} ${qty === 1 ? 'Unidad' : 'Unidades'}</option>`)
                  .join('')}
              </select>
            </div>

            <button
              class="product-action"
              type="button"
              data-product-id="${product.id}"
            >
              Pedir por WhatsApp
            </button>
          </div>
        </article>
      `
    )
    .join('');

  productGrid.querySelectorAll('.product-action').forEach((button) => {
    button.addEventListener('click', () => {
      const product = products.find((item) => item.id === Number(button.dataset.productId));
      const productCard = button.closest('.product-card');
      const variant = productCard.querySelector('[data-variant]').value;
      const quantity = productCard.querySelector('[data-quantity]').value;
      const link = getWhatsAppLink(product, variant, quantity);
      window.open(link, '_blank', 'noopener');
    });
  });
}

searchInput.addEventListener('input', renderProducts);

buildCategoryFilters();
renderProducts();
																																																																																																																																									"},{
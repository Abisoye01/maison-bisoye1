const perfumeImages = [
  'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563170351-bc7d8a8b0d30?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80'
];

const rawProducts = [
  { id: 1, name: 'Velvet Rose', brand: 'Maison Lune', category: 'women', price: 119, notes: ['rose', 'amber', 'musk'], description: 'A luminous floral with rose petals, soft amber warmth, and a lingering musky finish.' },
  { id: 2, name: 'Noir Elixir', brand: 'Aurelian', category: 'men', price: 149, notes: ['cedar', 'bergamot', 'sandalwood'], description: 'Dark, intoxicating, and elegantly masculine with deep woods and a spicy spark.' },
  { id: 3, name: 'Golden Oud', brand: 'Saffron Atelier', category: 'unisex', price: 169, notes: ['oud', 'saffron', 'vanilla'], description: 'A rich oriental signature with saffron glow, warm oud, and velvety vanilla.' },
  { id: 4, name: 'Citrus Bloom', brand: 'Pera & Co', category: 'women', price: 99, notes: ['jasmine', 'citrus', 'white musk'], description: 'Fresh and polished with sparkling citrus, petals, and a clean musk trail.' },
  { id: 5, name: 'Midnight Reserve', brand: 'Vanta', category: 'men', price: 178, notes: ['pepper', 'leather', 'smoke'], description: 'Powerful and smoky with peppered leather notes and a dark cedar finish.' },
  { id: 6, name: 'Silk Mirage', brand: 'Étoile', category: 'unisex', price: 124, notes: ['peony', 'pear', 'cashmere'], description: 'A soft cloud of floral sweetness underlined with creamy cashmere elegance.' },
  { id: 7, name: 'Amber Dusk', brand: 'Lumière', category: 'women', price: 136, notes: ['amber', 'tonka', 'rose'], description: 'Golden amber at dawn with rose petals and a cozy, sensual tonka base.' },
  { id: 8, name: 'Terre Noir', brand: 'Maison Vale', category: 'men', price: 156, notes: ['vetiver', 'oakmoss', 'black pepper'], description: 'Earthy, sophisticated, and grounding with vetiver and polished oakmoss.' },
  { id: 9, name: 'Pearl Bloom', brand: 'Céleste', category: 'women', price: 118, notes: ['pear', 'peony', 'white cedar'], description: 'Fresh yet feminine, blending juicy pear with airy florals and clean woods.' },
  { id: 10, name: 'Desert Aura', brand: 'Noura', category: 'unisex', price: 164, notes: ['sandalwood', 'benzoin', 'amber'], description: 'Warm desert spices and creamy woods create a golden, lingering trail.' },
  { id: 11, name: 'Velvet Ember', brand: 'Noor', category: 'women', price: 133, notes: ['plum', 'vanilla', 'amber'], description: 'Dark fruit meets creaminess and amber warmth in an intimate veil.' },
  { id: 12, name: 'Frost Cedar', brand: 'Northline', category: 'men', price: 141, notes: ['cedar', 'pink pepper', 'iris'], description: 'Cool, refined, and crisp with aromatic woods and a peppery lift.' },
  { id: 13, name: 'Moonlit Petal', brand: 'Lunea', category: 'women', price: 125, notes: ['iris', 'rose', 'skin musk'], description: 'An airy floral-soft musk composition with powdery elegance and glow.' },
  { id: 14, name: 'Cinder Wood', brand: 'Aster', category: 'men', price: 152, notes: ['birch', 'woods', 'tonka'], description: 'Smoky birch and tonka bean create a warm, memorable masculine finish.' },
  { id: 15, name: 'Blush Nectar', brand: 'Arielle', category: 'women', price: 111, notes: ['nectarine', 'jasmine', 'musk'], description: 'A juicy, sunny blend with floral elegance and a soft musk trail.' },
  { id: 16, name: 'Royal Reserve', brand: 'Vénero', category: 'unisex', price: 185, notes: ['bergamot', 'labdanum', 'cashmere'], description: 'Luxurious and opulent with bright bergamot, resinous labdanum, and cashmere woods.' },
  { id: 17, name: 'Silver Iris', brand: 'Prisma', category: 'women', price: 131, notes: ['iris', 'pear', 'white woods'], description: 'Powdery iris and airy fruits lend a refined and polished floral profile.' },
  { id: 18, name: 'Dune Signature', brand: 'Sahara', category: 'men', price: 147, notes: ['cardamom', 'sandalwood', 'amber'], description: 'A bold, smart signature with spice, resin, and rich woody warmth.' },
  { id: 19, name: 'Breeze Bloom', brand: 'Lacquer', category: 'unisex', price: 109, notes: ['green tea', 'grape', 'iris'], description: 'A modern fresh scent with green tea brightness and elegant florals.' },
  { id: 20, name: 'Saffron Veil', brand: 'Maro', category: 'women', price: 138, notes: ['saffron', 'rose', 'amber'], description: 'A golden floral veil where saffron glows against rose and amber.' },
  { id: 21, name: 'Monarch Spice', brand: 'Regent', category: 'men', price: 162, notes: ['clove', 'cognac', 'cedar'], description: 'A charismatic gourmand-woody statement with spice and warmth.' },
  { id: 22, name: 'Velvet Bloom', brand: 'Cressida', category: 'women', price: 127, notes: ['lily', 'peony', 'musk'], description: 'A lush floral with creamy petals and a soft musky base.' },
  { id: 23, name: 'Storm Leather', brand: 'Harrow', category: 'men', price: 171, notes: ['leather', 'cypress', 'labdanum'], description: 'Leather-smooth and smoky with crisp green woods and resinous depth.' },
  { id: 24, name: 'Petal Glow', brand: 'Mira', category: 'women', price: 116, notes: ['peony', 'white peach', 'amber'], description: 'Radiant petals, peach softness, and warm amber for a luminous finish.' },
  { id: 25, name: 'Basalt Drift', brand: 'Nomad', category: 'unisex', price: 166, notes: ['bergamot', 'sage', 'patchouli'], description: 'An aromatic, earthy composition with fresh top notes and a herbal finish.' },
  { id: 26, name: 'Luna Silk', brand: 'Onyx M', category: 'women', price: 129, notes: ['white flower', 'almond', 'cashmere'], description: 'Silky and calm, blending creamy floral notes with soft almond sweetness.' },
  { id: 27, name: 'Ember Court', brand: 'Rivale', category: 'men', price: 176, notes: ['cinnamon', 'tobacco', 'oak'], description: 'Spicy and polished with tobacco richness and warm cedar depth.' },
  { id: 28, name: 'Iris Mist', brand: 'Aurelia', category: 'women', price: 121, notes: ['iris', 'violet', 'white musk'], description: 'Powdery, clean, and elegantly soft with a luminous musky dry-down.' },
  { id: 29, name: 'Oak Signal', brand: 'The Forge', category: 'men', price: 159, notes: ['oak', 'black pepper', 'vetiver'], description: 'A crisp signature with woody intensity and peppery dynamic energy.' },
  { id: 30, name: 'Dew Mirage', brand: 'Élan', category: 'unisex', price: 112, notes: ['cucumber', 'water lily', 'musk'], description: 'Clean and fluid with watery florals and a cool, airy musky finish.' },
  { id: 31, name: 'Rose Atelier', brand: 'Maison Lune', category: 'women', price: 145, notes: ['rose', 'teakwood', 'amber'], description: 'A couture take on rose, grounded by teakwood and glowing amber.' },
  { id: 32, name: 'Cedar Cove', brand: 'Coastline', category: 'men', price: 154, notes: ['cedar', 'sea salt', 'amber'], description: 'Coastal freshness meets wood and amber warmth in a tailored finish.' },
  { id: 33, name: 'Bloom Reserve', brand: 'Soleil', category: 'women', price: 139, notes: ['gardenia', 'pear', 'vanilla'], description: 'Creamy gardenia with sweet pear and vanillic warmth for an elevated finish.' },
  { id: 34, name: 'Dust & Pine', brand: 'Northline', category: 'unisex', price: 146, notes: ['pine', 'earth', 'moss'], description: 'A crisp woodland escape centered on airy pine and earthy moss.' },
  { id: 35, name: 'Golden Bloom', brand: 'Aurelian', category: 'women', price: 155, notes: ['orange blossom', 'sandalwood', 'honey'], description: 'Golden florals, smooth woods, and warm honeyed sweetness.' },
  { id: 36, name: 'Noir Cedar', brand: 'Vanta', category: 'men', price: 168, notes: ['cedar', 'patchouli', 'tobacco'], description: 'A rich, polished dark aromatic with smoky tobacco presence.' },
  { id: 37, name: 'Pistachio Silk', brand: 'Étoile', category: 'unisex', price: 119, notes: ['pistachio', 'fig', 'woods'], description: 'Gourmand warmth and soft woods create a luxurious, comforting trail.' },
  { id: 38, name: 'Velvet Oud', brand: 'Saffron Atelier', category: 'women', price: 177, notes: ['oud', 'rose', 'vanilla'], description: 'Soft rose beauty with deep oud and creamy vanilla in the base.' },
  { id: 39, name: 'Forest Reverie', brand: 'Pera & Co', category: 'men', price: 149, notes: ['fir', 'moss', 'amber'], description: 'A gorgeous evergreen composition with resinous depth and amber warmth.' },
  { id: 40, name: 'Champagne Bloom', brand: 'Céleste', category: 'women', price: 135, notes: ['champagne', 'rose', 'jasmine'], description: 'Elegant and sparkling, with effervescent floral brilliance and soft wood.' },
  { id: 41, name: 'Heritage Oud', brand: 'Maison Vale', category: 'men', price: 189, notes: ['oud', 'smoke', 'sandalwood'], description: 'A majestic composition with smoky depth and noble wood structure.' },
  { id: 42, name: 'Lacquer Rose', brand: 'Lumière', category: 'unisex', price: 128, notes: ['rose', 'tea', 'amber'], description: 'Soft floral elegance with a polished tea accord and amber glow.' },
  { id: 43, name: 'Pure Cedar', brand: 'Noor', category: 'men', price: 143, notes: ['cedar', 'saffron', 'musk'], description: 'A clean woody profile with a refined saffron note and subtle musk.' },
  { id: 44, name: 'Ivory Musk', brand: 'Prisma', category: 'women', price: 117, notes: ['white musk', 'pear', 'iris'], description: 'Creamy and elegant with clean floral air and soft powdery warmth.' },
  { id: 45, name: 'Velvet Smoke', brand: 'The Forge', category: 'men', price: 165, notes: ['smoke', 'cypress', 'leather'], description: 'A layered dark scent with smoke, green cypress, and polished leather.' },
  { id: 46, name: 'Pearl Nectar', brand: 'Arielle', category: 'women', price: 122, notes: ['pear', 'nectarine', 'musk'], description: 'A luminous fruity floral with juicy sweetness and clean skin musk.' },
  { id: 47, name: 'Monsoon Woods', brand: 'Nomad', category: 'unisex', price: 160, notes: ['rainwood', 'cedar', 'green tea'], description: 'Cool and refined with green botanical freshness and a woody base.' },
  { id: 48, name: 'Sunlit Iris', brand: 'Cressida', category: 'women', price: 126, notes: ['iris', 'bergamot', 'amber'], description: 'A bright iris composition with golden atmosphere and a polished finish.' },
  { id: 49, name: 'Oak Reserve', brand: 'Regent', category: 'men', price: 173, notes: ['oak', 'sandalwood', 'spice'], description: 'Warm, robust, and regal with rich oak depth and sophisticated spice.' },
  { id: 50, name: 'Soft Ember', brand: 'Mira', category: 'women', price: 132, notes: ['amber', 'rose', 'vanilla'], description: 'Warm, elegant, and softly seductive with a glowing amber heart.' }
];

const productCatalog = rawProducts.map((product, index) => ({
  ...product,
  image: perfumeImages[index % perfumeImages.length]
}));

const STORE_EMAIL = 'yourbrand@example.com';

const currencyRates = {
  USD: 1,
  NGN: 1500,
  GBP: 0.79,
  EUR: 0.92,
  AED: 3.67,
  CAD: 1.36,
  JPY: 157,
  INR: 83.5,
  ZAR: 18.1
};

const currencySymbols = {
  USD: '$',
  NGN: '₦',
  GBP: '£',
  EUR: '€',
  AED: 'د.إ',
  CAD: 'C$',
  JPY: '¥',
  INR: '₹',
  ZAR: 'R'
};

const productById = Object.fromEntries(productCatalog.map(product => [product.id, product]));

function readCart() {
  try {
    return JSON.parse(localStorage.getItem('perfumeCart') || '[]');
  } catch {
    return [];
  }
}

function writeCart(cart) {
  localStorage.setItem('perfumeCart', JSON.stringify(cart));
}

function getSelectedCurrency() {
  const saved = localStorage.getItem('perfumeCurrency');
  return saved || 'NGN';
}

function setSelectedCurrency(code) {
  localStorage.setItem('perfumeCurrency', code);
  document.querySelectorAll('.currency-select').forEach(select => {
    select.value = code;
  });
}

function formatMoney(amount, currency = getSelectedCurrency()) {
  const rate = currencyRates[currency] || 1;
  const converted = amount * rate;

  if (currency === 'JPY') {
    return `${currencySymbols[currency]}${Math.round(converted).toLocaleString('en-US')}`;
  }

  return `${currencySymbols[currency]}${converted.toLocaleString('en-US', {
    minimumFractionDigits: currency === 'USD' || currency === 'GBP' || currency === 'EUR' || currency === 'CAD' || currency === 'AED' || currency === 'NGN' ? 2 : 2,
    maximumFractionDigits: 2
  })}`;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 1800);
}

function updateCartBadge() {
  const cart = readCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    el.textContent = count;
  });
}

function addToCart(productId, quantity = 1) {
  const cart = readCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }

  writeCart(cart);
  updateCartBadge();
  showToast('Added to cart');
}

function removeFromCart(productId) {
  const cart = readCart().filter(item => item.id !== productId);
  writeCart(cart);
  renderCart();
  updateCartBadge();
}

function changeQuantity(productId, delta) {
  const cart = readCart();
  const item = cart.find(existing => existing.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  writeCart(cart);
  renderCart();
  updateCartBadge();
}

function getCartItemsWithDetails() {
  return readCart().map(item => {
    const product = productById[item.id];
    return { ...item, product };
  }).filter(item => item.product);
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const filtered = activeFilter === 'all'
    ? productCatalog
    : productCatalog.filter(product => product.category === activeFilter);

  grid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-body">
        <div class="product-tags">
          <span>${product.brand}</span>
          <span>${product.category}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.notes.join(' • ')}</p>
        <div class="meta-row">
          <span class="price-tag">${formatMoney(product.price)}</span>
          <span class="rating">★★★★★</span>
        </div>
        <div class="product-actions">
          <button class="btn secondary-btn" data-view-product="${product.id}">View</button>
          <button class="btn btn-primary" data-add-cart="${product.id}">Add</button>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('[data-add-cart]').forEach(button => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.addCart)));
  });

  document.querySelectorAll('[data-view-product]').forEach(button => {
    button.addEventListener('click', () => {
      const product = productById[Number(button.dataset.viewProduct)];
      showProductDetail(product);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function showProductDetail(product) {
  const detail = document.getElementById('productDetail');
  if (!detail) return;

  detail.innerHTML = `
    <div class="detail-panel">
      <img class="detail-image" src="${product.image}" alt="${product.name}">
      <div class="detail-content">
        <div class="kicker">Featured fragrance</div>
        <h2>${product.name}</h2>
        <div class="price-tag">${formatMoney(product.price)}</div>
        <p>${product.description}</p>
        <ul class="detail-list">
          <li><strong>Brand:</strong> ${product.brand}</li>
          <li><strong>Category:</strong> ${product.category}</li>
          <li><strong>Top notes:</strong> ${product.notes.join(', ')}</li>
        </ul>
        <div class="hero-actions">
          <button class="btn btn-primary" data-add-cart="${product.id}">Add to cart</button>
          <button class="btn btn-secondary" onclick="window.location.href='cart.html'">View cart</button>
        </div>
      </div>
    </div>
  `;

  const addBtn = detail.querySelector('[data-add-cart]');
  if (addBtn) addBtn.addEventListener('click', () => addToCart(product.id));
}

function renderCart() {
  const cartBody = document.getElementById('cartTableBody');
  const summary = document.getElementById('cartSummary');
  if (!cartBody || !summary) return;

  const items = getCartItemsWithDetails();
  if (!items.length) {
    cartBody.innerHTML = `
      <tr>
        <td colspan="5">
          <p>Your cart is empty. Explore our luxury collection.</p>
        </td>
      </tr>
    `;
    summary.innerHTML = `
      <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(0)}</strong></div>
      <div class="summary-row"><span>Shipping</span><strong>${formatMoney(0)}</strong></div>
      <div class="summary-row total"><span>Total</span><strong>${formatMoney(0)}</strong></div>
    `;
    return;
  }

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 18 : 0;
  const total = subtotal + shipping;

  cartBody.innerHTML = items.map(item => `
    <tr>
      <td>
        <div class="cart-product">
          <img src="${item.product.image}" alt="${item.product.name}">
          <div>
            <strong>${item.product.name}</strong><br>
            <small>${item.product.brand}</small>
          </div>
        </div>
      </td>
      <td>${formatMoney(item.product.price)}</td>
      <td>
        <div class="qty-box">
          <button data-change-qty="${item.id}" data-delta="-1">−</button>
          <span>${item.quantity}</span>
          <button data-change-qty="${item.id}" data-delta="1">+</button>
        </div>
      </td>
      <td>${formatMoney(item.product.price * item.quantity)}</td>
      <td><button class="btn secondary-btn" data-remove-cart="${item.id}">Remove</button></td>
    </tr>
  `).join('');

  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><strong>${formatMoney(subtotal)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${formatMoney(shipping)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>${formatMoney(total)}</strong></div>
  `;

  document.querySelectorAll('[data-change-qty]').forEach(button => {
    button.addEventListener('click', () => {
      const productId = Number(button.dataset.changeQty);
      const delta = Number(button.dataset.delta);
      changeQuantity(productId, delta);
    });
  });

  document.querySelectorAll('[data-remove-cart]').forEach(button => {
    button.addEventListener('click', () => removeFromCart(Number(button.dataset.removeCart)));
  });
}

function initCurrencySelectors() {
  const currencyValue = getSelectedCurrency();
  document.querySelectorAll('.currency-select').forEach(select => {
    select.value = currencyValue;
    select.addEventListener('change', (event) => {
      setSelectedCurrency(event.target.value);
      renderProducts();
      renderCart();
      renderFeaturedAfterCurrency();
      updateHomepageStats();
    });
  });
}

function renderFeaturedAfterCurrency() {
  document.querySelectorAll('[data-product-price]').forEach(el => {
    const product = productById[Number(el.dataset.productPrice)];
    if (product) {
      el.textContent = formatMoney(product.price);
    }
  });
}

function updateHomepageStats() {
  const summaryAmount = document.getElementById('summaryAmount');
  if (summaryAmount) {
    summaryAmount.textContent = formatMoney(1200);
  }
}

function sendDemoOrder(formData) {
  const email = formData.email?.trim() || STORE_EMAIL;
  const payload = {
    _subject: 'New perfume order',
    name: formData.name,
    email,
    cardholder: formData.cardholder,
    amount: formData.amount,
    items: formData.items,
    message: `Demo checkout for ${formData.name} (${email}) | Total: ${formData.amount}`
  };

  return fetch(`https://formsubmit.co/ajax/${encodeURIComponent(STORE_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(async (response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).catch(() => {
    const subject = encodeURIComponent('New perfume order');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${email}\nCardholder: ${formData.cardholder}\nAmount: ${formData.amount}\nItems: ${formData.items}`
    );
    window.location.href = `mailto:${STORE_EMAIL}?subject=${subject}&body=${body}`;
    return { ok: true };
  });
}

function renderPaymentForm() {
  const container = document.getElementById('demoPaymentBlock');
  if (!container) return;

  const items = getCartItemsWithDetails();
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 18 : 0;
  const total = subtotal + shipping;

  container.innerHTML = `
    <div class="payment-demo">
      <h4>Demo payment</h4>
      <form id="demoCheckoutForm">
        <div class="payment-row">
          <label>Full name</label>
          <input type="text" name="name" placeholder="Jane Doe" required />
        </div>
        <div class="payment-row">
          <label>Email address</label>
          <input type="email" name="email" placeholder="your@email.com" required />
        </div>
        <div class="payment-row">
          <label>Cardholder name</label>
          <input type="text" name="cardholder" placeholder="Jane Doe" required />
        </div>
        <div class="payment-row">
          <label>Card number</label>
          <input type="text" name="cardNumber" placeholder="4242 4242 4242 4242" maxlength="19" required />
        </div>
        <div class="payment-split">
          <div class="payment-row">
            <label>Expiry</label>
            <input type="text" name="expiry" placeholder="MM/YY" maxlength="5" required />
          </div>
          <div class="payment-row">
            <label>CVV</label>
            <input type="text" name="cvv" placeholder="123" maxlength="4" required />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;margin-top:8px;">Pay ${formatMoney(total)} (Demo)</button>
        <div id="paymentStatus" class="payment-status"></div>
      </form>
    </div>
  `;

  const form = document.getElementById('demoCheckoutForm');
  const cardNumber = form.querySelector('input[name="cardNumber"]');
  const expiry = form.querySelector('input[name="expiry"]');
  const cvv = form.querySelector('input[name="cvv"]');

  cardNumber.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  });

  expiry.addEventListener('input', (event) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 4);
    event.target.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  });

  cvv.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 4);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = document.getElementById('paymentStatus');
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const cardholder = form.cardholder.value.trim();
    const cardDigits = form.cardNumber.value.replace(/\s+/g, '');
    const expiryValue = form.expiry.value.trim();
    const cvvValue = form.cvv.value.trim();

    if (!name || !email || !cardholder || cardDigits.length < 16 || expiryValue.length < 5 || cvvValue.length < 3) {
      status.textContent = 'Please complete the demo payment form correctly.';
      status.className = 'payment-status error';
      return;
    }

    status.textContent = 'Processing your demo payment...';
    status.className = 'payment-status';

    await sendDemoOrder({
      name,
      email,
      cardholder,
      amount: formatMoney(total),
      items: items.map(item => `${item.product.name} x${item.quantity}`).join(', ')
    });

    status.textContent = 'Demo payment successful! Your luxury order is confirmed and sent to the configured email.';
    status.className = 'payment-status success';
    localStorage.removeItem('perfumeCart');
    renderCart();
    updateCartBadge();
    showToast('Payment successful');
  });
}

function init() {
  updateCartBadge();
  initCurrencySelectors();

  const emailCaptureForm = document.getElementById('emailCaptureForm');
  if (emailCaptureForm) {
    emailCaptureForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('subscriberEmail').value.trim();
      const status = document.getElementById('newsletterStatus');
      if (!email) {
        status.textContent = 'Please enter a valid email.';
        return;
      }

      const subject = encodeURIComponent('New perfume subscriber');
      const body = encodeURIComponent(`Email: ${email}`);
      status.textContent = 'Thanks! Your email has been saved for the demo list.';
      window.location.href = `mailto:${STORE_EMAIL}?subject=${subject}&body=${body}`;
    });
  }

  const page = document.body.dataset.page;
  if (page === 'catalog') {
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn === button));
        renderProducts();
      });
    });
    renderProducts();
    const productId = Number(new URLSearchParams(window.location.search).get('id'));
    if (productId && productById[productId]) {
      showProductDetail(productById[productId]);
    }
  }

  if (page === 'cart') {
    renderCart();
    renderPaymentForm();
  }

  if (page === 'home') {
    updateHomepageStats();
    renderFeaturedAfterCurrency();
  }

  document.querySelectorAll('[data-add-cart]').forEach(button => {
    button.addEventListener('click', () => addToCart(Number(button.dataset.addCart)));
  });

  document.querySelectorAll('[data-view-product]').forEach(button => {
    button.addEventListener('click', () => {
      const product = productById[Number(button.dataset.viewProduct)];
      window.location.href = `products.html?id=${product.id}`;
    });
  });

  const filterCategory = document.getElementById('filterCategory');
  if (filterCategory) {
    filterCategory.addEventListener('change', renderProducts);
  }
}

document.addEventListener('DOMContentLoaded', init);

/**
 * EcoCrafts - Simple, Sober DIY Kits Storefront Logic
 */

// 1. Curated DIY Kits Data
const CRAFT_PRODUCTS = [
  {
    id: "kit-fluted",
    name: "Fluted Paper Lantern Kit",
    category: "paper",
    categoryLabel: "Papercraft",
    price: 28.0,
    time: "45 mins",
    difficulty: "Beginner",
    image: "assets/lantern-nordic.svg",
    description: "A minimalist cylinder lantern with gentle vertical fluting that diffuses warm ambient light across any room. Comes with pre-creased cardstock, wood base, and flameless LED candle.",
    contents: [
      "Pre-scored heavy cardstock shade panels",
      "Natural birch wood top and bottom rings",
      "Warm LED candle puck with battery included",
      "Organic cotton hanging cord",
      "Non-toxic craft adhesive & creasing tool",
      "Visual step-by-step assembly guide"
    ]
  },
  {
    id: "kit-timber",
    name: "Timber Frame Lantern Kit",
    category: "wood",
    categoryLabel: "Wood & Paper",
    price: 34.0,
    time: "50 mins",
    difficulty: "Beginner Friendly",
    image: "assets/lantern-kyoto.svg",
    description: "An architectural tabletop lantern combining interlocking natural timber ribs with translucent parchment paper. Emits a soft, geometric glow.",
    contents: [
      "Precision-cut natural timber interlocking frame",
      "Heavyweight textured light-diffusing paper",
      "Warm ambient fairy light strand",
      "Quick-bonding water-based wood paste",
      "Detailed photographic guide"
    ]
  },
  {
    id: "kit-botanical",
    name: "Pressed Botanical Flower Lantern Kit",
    category: "floral",
    categoryLabel: "Pressed Flora",
    price: 32.0,
    time: "45 mins",
    difficulty: "Beginner Friendly",
    image: "assets/lantern-botanical.svg",
    description: "Embed real dried ferns, larkspur petals, and meadow blossoms into translucent vellum, bordered by warm metallic hoops. A mini botanical piece that glows.",
    contents: [
      "Assorted packet of real dried meadow flowers & ferns",
      "Translucent vellum lantern sleeve",
      "Brushed brass circular mounting hoops",
      "Clear botanical adhesive medium & brush",
      "Warm flameless LED light with soft flicker",
      "Brass hanging arch & cord"
    ]
  },
  {
    id: "kit-geometric",
    name: "Geometric Fold Paper Lantern Kit",
    category: "paper",
    categoryLabel: "Origami",
    price: 29.0,
    time: "40 mins",
    difficulty: "Beginner",
    image: "assets/lantern-geometric.svg",
    description: "A sculptural folded lantern featuring diamond facets that cast clean geometric shadows. Folds flat and expands easily onto its wooden base disc.",
    contents: [
      "Pre-creased textured cotton paper sheet",
      "Solid beech wood base disc",
      "USB rechargeable warm LED module",
      "Creasing folder tool",
      "Step-by-step visual folding tutorial"
    ]
  },
  {
    id: "kit-celestial",
    name: "Star Pierced Constellation Lantern Kit",
    category: "paper",
    categoryLabel: "Night Light",
    price: 26.0,
    time: "40 mins",
    difficulty: "Beginner",
    image: "assets/lantern-celestial.svg",
    description: "A deep navy lantern featuring constellation stencils. Pierced pinholes cast delicate star patterns onto nearby walls and ceiling.",
    contents: [
      "Deep navy heavyweight cardstock with printed star map",
      "Precision piercing tool with comfort handle",
      "Natural wooden cylinder forming rings",
      "Warm LED candle with automatic timer",
      "Piercing mat & illustrated guide"
    ]
  },
  {
    id: "kit-rattan",
    name: "Woven Rattan Cane Lantern Kit",
    category: "wood",
    categoryLabel: "Woven Cane",
    price: 38.0,
    time: "60 mins",
    difficulty: "Intermediate",
    image: "assets/lantern-rattan.svg",
    description: "Learn tactile cane weaving around timber hoops with an inner parchment diffuser. Creates an earthy, warm ambient accent.",
    contents: [
      "Pre-soaked natural flexible rattan cane splines",
      "Inner parchment light diffuser sleeve",
      "Pre-drilled wooden hoop rings",
      "Weaving guide pin & jute handle",
      "Warm micro-LED fairy light wire",
      "Illustrated step-by-step weaving guide"
    ]
  }
];

// 2. Application State
const state = {
  cart: [],
  selectedCategory: "all"
};

// 3. LocalStorage persistence for Cart
const CART_STORAGE_KEY = "ecocrafts_cart_v1";

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY) || localStorage.getItem("atelier_craft_cart_v1");
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
  } catch (e) {
    console.warn("Could not save cart:", e);
  }
}

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderProducts();
  updateCartUI();
  setupEventListeners();
});

// 5. Render Products
function renderProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const filtered = state.selectedCategory === "all" 
    ? CRAFT_PRODUCTS 
    : CRAFT_PRODUCTS.filter(p => p.category === state.selectedCategory);

  container.innerHTML = filtered.map(p => `
    <article class="kit-card">
      <div class="kit-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button class="kit-quick-look" onclick="openQuickView('${p.id}')">Quick View</button>
      </div>
      <div class="kit-content">
        <div class="kit-meta">
          <span>${p.categoryLabel}</span>
          <span>•</span>
          <span>${p.difficulty}</span>
          <span>•</span>
          <span>${p.time}</span>
        </div>
        <h3 class="kit-title">${p.name}</h3>
        <p class="kit-desc">${p.description}</p>
        <div class="kit-foot">
          <span class="kit-price">$${p.price.toFixed(2)}</span>
          <button class="btn btn-add" onclick="addToCart('${p.id}')">Add to Bag</button>
        </div>
      </div>
    </article>
  `).join("");
}

// 6. Cart Operations
function addToCart(productId) {
  const product = CRAFT_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" to your bag`);
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.getElementById("cartCount");
  const itemsContainer = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartSubtotal");
  const drawerFooter = document.getElementById("cartFooter");

  const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (countBadge) {
    countBadge.textContent = totalCount;
    countBadge.style.display = totalCount > 0 ? "inline-flex" : "none";
  }

  if (totalAmountEl) {
    totalAmountEl.textContent = `$${subtotal.toFixed(2)}`;
  }

  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty">
          <p class="empty-title">Your craft bag is empty</p>
          <p class="empty-sub">Explore our DIY lantern kits to start creating.</p>
          <button class="btn btn-primary" onclick="toggleCart(false)" style="margin-top: 1rem;">Browse Kits</button>
        </div>
      `;
      if (drawerFooter) drawerFooter.style.display = "none";
    } else {
      if (drawerFooter) drawerFooter.style.display = "block";
      itemsContainer.innerHTML = state.cart.map(item => `
        <div class="cart-line-item">
          <img src="${item.image}" alt="${item.name}" class="cart-thumb">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            <div class="qty-stepper">
              <button onclick="updateQuantity('${item.id}', -1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-remove-btn" onclick="removeItem('${item.id}')" title="Remove">&times;</button>
        </div>
      `).join("");
    }
  }
}

function toggleCart(open) {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// 7. Quick View Modal
function openQuickView(productId) {
  const product = CRAFT_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickModal");
  const modalBody = document.getElementById("quickModalBody");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="quick-grid">
      <div class="quick-img-box">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quick-details">
        <div class="kit-meta" style="margin-bottom: 0.5rem;">
          <span>${product.categoryLabel}</span> • <span>${product.difficulty}</span> • <span>${product.time}</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-dark);">${product.name}</h2>
        <div style="font-size: 1.25rem; font-weight: 700; color: var(--accent); margin-bottom: 1rem;">$${product.price.toFixed(2)}</div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.25rem;">${product.description}</p>
        
        <div style="font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">What's in the box:</div>
        <ul class="kit-includes-list">
          ${product.contents.map(c => `<li>✓ ${c}</li>`).join("")}
        </ul>

        <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeQuickModal();" style="width: 100%; margin-top: 1.5rem;">
          Add Kit to Bag — $${product.price.toFixed(2)}
        </button>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeQuickModal() {
  const modal = document.getElementById("quickModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// 8. Checkout Modal
function openCheckout() {
  if (state.cart.length === 0) return;
  toggleCart(false);

  const modal = document.getElementById("checkoutModal");
  const summaryList = document.getElementById("checkoutItemsList");
  const totalAmount = document.getElementById("checkoutFinalTotal");

  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (summaryList) {
    summaryList.innerHTML = state.cart.map(i => `
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; padding: 0.35rem 0;">
        <span>${i.name} &times; ${i.quantity}</span>
        <strong>$${(i.price * i.quantity).toFixed(2)}</strong>
      </div>
    `).join("");
  }

  if (totalAmount) {
    totalAmount.textContent = `$${subtotal.toFixed(2)}`;
  }

  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCheckout() {
  const modal = document.getElementById("checkoutModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  closeCheckout();
  state.cart = [];
  saveCart();
  updateCartUI();

  const ref = "EC-" + Math.floor(100000 + Math.random() * 900000);
  const successModal = document.getElementById("orderSuccessModal");
  const refEl = document.getElementById("orderRefNum");

  if (refEl) refEl.textContent = ref;
  if (successModal) {
    successModal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// 9. Category Filtering & Listeners
function setupEventListeners() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedCategory = btn.dataset.category;
      renderProducts();
    });
  });

  const newsForm = document.getElementById("newsletterForm");
  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsForm.querySelector("input[type='email']");
      if (input && input.value) {
        showToast("Thank you for subscribing to EcoCrafts!");
        input.value = "";
      }
    });
  }
}

// 10. Minimalist Toast
function showToast(message) {
  let toast = document.getElementById("minimalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "minimalToast";
    toast.className = "minimal-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

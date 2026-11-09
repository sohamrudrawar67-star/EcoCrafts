/**
 * EcoCrafts - Interactive Application Logic
 */

// 1. Products Data
const CRAFT_PRODUCTS = [
  {
    id: "kit-nordic",
    name: "Nordic Fluted Paper Lantern Kit",
    category: "lanterns",
    categoryLabel: "Papercraft Lantern",
    price: 28.0,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    badgeType: "terracotta",
    image: "assets/lantern-nordic.svg",
    time: "45 mins",
    difficulty: "Beginner Friendly",
    description: "An elegant, fluted cylinder lantern inspired by Scandinavian minimalist lighting. Features pre-scored heavy weight FSC-certified cardstock, a solid birchwood base, and a soft warm LED puck.",
    contents: [
      "12 Pre-scored cream fluted paper panels",
      "Handcrafted solid birch wood top & bottom rings",
      "Warm ambient LED candle with long-life battery",
      "Natural hemp suspension cord & wooden bead",
      "Craft glue bottle & wooden folding bone",
      "QR code for step-by-step 4K video guide"
    ]
  },
  {
    id: "kit-kyoto",
    name: "Kyoto Hexagonal Washi Lantern",
    category: "lanterns",
    categoryLabel: "Traditional Washi",
    price: 34.0,
    rating: 5.0,
    reviewsCount: 98,
    badge: "Artisanal Choice",
    badgeType: "terracotta",
    image: "assets/lantern-kyoto.svg",
    time: "60 mins",
    difficulty: "Intermediate",
    description: "Handmade mulberry Kozo paper paired with interlocking bamboo lattice ribs (Kumiko style) and a silken carmine tassel. Emits an enchanting, meditative geometry.",
    contents: [
      "Authentic handmade Japanese Kozo mulberry paper",
      "Precision laser-cut bamboo structural frame",
      "Traditional crimson silken hanging tassel",
      "Micro-copper LED fairy string with 8 warm glow modes",
      "Non-toxic rice starch craft paste",
      "Detailed illustrated diagram booklet"
    ]
  },
  {
    id: "kit-botanical",
    name: "Botanical Pressed Flower Lantern Kit",
    category: "botanical",
    categoryLabel: "Pressed Flora",
    price: 32.0,
    rating: 4.85,
    reviewsCount: 84,
    badge: "Real Botanicals",
    badgeType: "sage",
    image: "assets/lantern-botanical.svg",
    time: "50 mins",
    difficulty: "Beginner Friendly",
    description: "Embed genuine pressed ferns, wild larkspur petals, and golden marigolds into translucent architectural vellum, framed in warm brushed brass hoops.",
    contents: [
      "Assorted packet of dried real meadow flowers & ferns",
      "Heavy translucent parchment vellum cylinder",
      "2x Brushed brass circular mounting hoops",
      "Clear botanical adhesive medium & camelhair brush",
      "Warm flameless tea light with flicker effect",
      "Brass hanging arch & twine"
    ]
  },
  {
    id: "kit-geometric",
    name: "Minimalist Geometric Origami Lantern",
    category: "origami",
    categoryLabel: "Origami Paper",
    price: 29.0,
    rating: 4.8,
    reviewsCount: 110,
    badge: "Modern Craft",
    badgeType: "terracotta",
    image: "assets/lantern-geometric.svg",
    time: "45 mins",
    difficulty: "Beginner Friendly",
    description: "Pleated diamond tessellation lantern that folds flat for storage and expands into a modern architectural light sculpture. Casts mesmerizing diamond shadows.",
    contents: [
      "Heavyweight textured cotton rag paper with pre-creased score lines",
      "Magnetic closure snaps for easy bulb changing",
      "Solid beech wood disc base",
      "USB rechargeable LED module (3 warm dimming levels)",
      "Bamboo creasing folder",
      "Step-by-step video instruction tutorial"
    ]
  },
  {
    id: "kit-celestial",
    name: "Celestial Star-Pierced Paper Lantern",
    category: "origami",
    categoryLabel: "Pierced Papercraft",
    price: 26.0,
    rating: 4.9,
    reviewsCount: 76,
    badge: "Night Light",
    badgeType: "terracotta",
    image: "assets/lantern-celestial.svg",
    time: "40 mins",
    difficulty: "Beginner Friendly",
    description: "Craft your own bedside planetarium. Deep twilight indigo stock featuring celestial perforation stencils that project the night sky constellations onto surrounding walls.",
    contents: [
      "Indigo cardstock with printed astronomical charts",
      "Precision piercing tool with safety cork handle",
      "Sturdy wooden cylinder forming hoops",
      "Warm amber core LED candle with timer function",
      "Natural jute suspension cord",
      "Piercing mat & instruction sheet"
    ]
  },
  {
    id: "kit-rattan",
    name: "Woven Rattan & Paper Lantern Duo",
    category: "weaving",
    categoryLabel: "Cane Weaving",
    price: 38.0,
    rating: 4.95,
    reviewsCount: 64,
    badge: "Premium Set",
    badgeType: "terracotta",
    image: "assets/lantern-rattan.svg",
    time: "75 mins",
    difficulty: "Intermediate",
    description: "Learn tactile cane weaving around natural timber rings, lined with a parchment inner diffuser for an earthy, Mediterranean boho glow.",
    contents: [
      "Natural flexible rattan cane splines (pre-treated)",
      "Parchment inner light diffuser sleeve",
      "2 Solid pine wooden rings with pre-drilled holes",
      "Weaving guide pin & natural jute handle",
      "Warm micro-LED fairy light wire",
      "Illustrated weaving masterclass guide"
    ]
  },
  {
    id: "kit-origami-trio",
    name: "Petal Bloom Origami Lantern Trio",
    category: "origami",
    categoryLabel: "Origami Set",
    price: 35.0,
    rating: 4.8,
    reviewsCount: 52,
    badge: "3-in-1 Value",
    badgeType: "sage",
    image: "assets/kit-origami-trio.svg",
    time: "60 mins",
    difficulty: "All Levels",
    description: "A delightful trio of hanging lanterns in muted terracotta, soft sage, and linen cream. Hang them together from the included wooden branch or display individually.",
    contents: [
      "Paper sheets for 3 distinct lantern shapes (teardrop, lotus, diamond)",
      "Natural finished wooden dowel hanging branch",
      "3x Mini battery-operated LED light drops",
      "Colored embroidery floss tassels (sage, clay, mustard)",
      "Double-sided archival craft tape runner",
      "Full photographic guide"
    ]
  },
  {
    id: "kit-cyanotype",
    name: "Solar Cyanotype Botanical Lantern",
    category: "botanical",
    categoryLabel: "Sun Print Art",
    price: 31.0,
    rating: 4.9,
    reviewsCount: 47,
    badge: "Sun Art Kit",
    badgeType: "sage",
    image: "assets/kit-cyanotype.svg",
    time: "55 mins",
    difficulty: "Beginner Friendly",
    description: "Harness the power of sunlight to create rich Prussian blue botanical silhouette prints, then fold them into a radiant table or hanging cylinder lantern.",
    contents: [
      "Pre-treated light-sensitive cyanotype watercolor paper sheets",
      "Acrylic solar contact print frame with clamps",
      "Pressed botanical foliage stencils (eucalyptus & ferns)",
      "Copper wire support frame & wooden base ring",
      "Warm LED puck lamp with battery",
      "Sun-printing chemistry & development guide"
    ]
  }
];

// 2. Application State
const state = {
  cart: [],
  selectedCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  isNightMode: false,
  heroGlowOn: true,
  simulatorMode: "natural", // natural, sunset, candle
  simulatorPaper: "cream",  // cream, terracotta, sage, indigo
  activeModal: null,
  discount: 0,
  appliedPromo: "",
  giftWrap: false
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

// 5. Render Products Catalog
function renderProducts() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  let filtered = CRAFT_PRODUCTS.filter((product) => {
    const matchesCat = state.selectedCategory === "all" || product.category === state.selectedCategory;
    const matchesQuery = !state.searchQuery || 
      product.name.toLowerCase().includes(state.searchQuery) ||
      product.description.toLowerCase().includes(state.searchQuery) ||
      product.categoryLabel.toLowerCase().includes(state.searchQuery);
    return matchesCat && matchesQuery;
  });

  // Sort
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.15rem; margin-bottom: 0.5rem; font-family: var(--font-serif);">No DIY Kits Found</p>
        <p style="font-size: 0.88rem;">Try clearing your search or switching categories to explore our lantern collection.</p>
        <button class="btn btn-outline" style="margin-top: 1.25rem;" onclick="resetFilters()">View All Kits</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p) => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-thumb">
        <span class="card-badge craft-tag ${p.badgeType === 'sage' ? 'sage' : ''}">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button class="quick-view-overlay-btn" onclick="openQuickView('${p.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          Quick Look
        </button>
      </div>

      <div class="product-info">
        <div class="product-craft-meta">
          <span class="difficulty-bullet">${p.difficulty}</span>
          <span>⏱ ${p.time}</span>
        </div>

        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        
        <div class="product-kit-contents">
          Includes all pre-cut papers, frame & warm LED
        </div>

        <div class="product-bottom-bar">
          <div class="product-price">
            $${p.price.toFixed(2)}
            <small>complete kit</small>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Add Kit
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// 6. Shopping Cart Operations
function addToCart(productId) {
  const product = CRAFT_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = state.cart.find((item) => item.id === productId);
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
  showToast(`Added "${product.name}" to your craft bag!`);
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((i) => i.id !== productId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((i) => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast("Item removed from your bag");
}

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Badges in header
  const badge = document.getElementById("cartCountBadge");
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "flex" : "none";
  }

  // Items container
  const itemsContainer = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const grandTotalEl = document.getElementById("cartGrandTotal");
  const shippingTrackEl = document.getElementById("shippingBarFill");
  const shippingMsgEl = document.getElementById("shippingMeterMsg");

  if (itemsContainer) {
    if (state.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.4rem; font-family: var(--font-serif);">Your Craft Bag is Empty</h4>
          <p style="font-size: 0.85rem; margin-bottom: 1.25rem;">Pick a DIY lantern kit to bring a cozy, handmade glow to your room.</p>
          <button class="btn btn-primary btn-sm" onclick="toggleCartDrawer(false)">Explore All Kits</button>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = state.cart.map((item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p>$${(item.price * item.quantity).toFixed(2)}</p>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="remove-item-btn" title="Remove" onclick="removeFromCart('${item.id}')">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      `).join("");
    }
  }

  // Subtotals
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping tracker ($50 threshold)
  const freeThreshold = 50.0;
  if (shippingTrackEl && shippingMsgEl) {
    if (subtotal >= freeThreshold) {
      shippingTrackEl.style.width = "100%";
      shippingMsgEl.innerHTML = `🌿 <strong>Congratulations!</strong> You qualify for <strong>Free Carbon-Neutral Shipping!</strong>`;
    } else {
      const remaining = freeThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
      shippingTrackEl.style.width = `${pct}%`;
      shippingMsgEl.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more to unlock <strong>Free Shipping</strong>`;
    }
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// 7. Quick View Modal
function openQuickView(productId) {
  const product = CRAFT_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-gallery">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="quick-view-details">
        <span class="craft-tag ${product.badgeType === 'sage' ? 'sage' : ''}" style="margin-bottom: 0.6rem;">${product.categoryLabel} • ${product.badge}</span>
        <h2>${product.name}</h2>
        <div class="quick-view-price">$${product.price.toFixed(2)}</div>
        <p style="font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1rem;">${product.description}</p>
        
        <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-main); margin-bottom: 0.5rem;">
          What's Inside The DIY Box:
        </div>
        <ul class="kit-checklist">
          ${product.contents.map(c => `
            <li>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              ${c}
            </li>
          `).join("")}
        </ul>

        <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1.5rem;">
          <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeModal('quickViewModal');" style="flex: 1;">
            Add Kit to Bag - $${product.price.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// 8. Checkout Flow
function openCheckout() {
  if (state.cart.length === 0) {
    showToast("Please add at least one DIY kit before checking out!");
    return;
  }

  toggleCartDrawer(false);
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemsSummary = document.getElementById("checkoutSummaryList");
  const totalAmount = document.getElementById("checkoutTotalAmount");

  if (itemsSummary) {
    itemsSummary.innerHTML = state.cart.map(i => `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.4rem 0; border-bottom: 1px dashed var(--border-dashed);">
        <span>${i.name} (x${i.quantity})</span>
        <strong>$${(i.price * i.quantity).toFixed(2)}</strong>
      </div>
    `).join("");
  }

  if (totalAmount) {
    totalAmount.textContent = `$${subtotal.toFixed(2)}`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const modal = document.getElementById("checkoutModal");
  
  // Show confirmation alert
  modal.classList.remove("active");
  state.cart = [];
  saveCart();
  updateCartUI();
  document.body.style.overflow = "";

  const orderNum = "AK-" + Math.floor(100000 + Math.random() * 900000);
  showToast(`🎉 Order Placed! Confirmation #${orderNum} sent.`);

  // Open Thank You Dialog
  const successModal = document.getElementById("orderSuccessModal");
  const orderNumEl = document.getElementById("successOrderNum");
  if (successModal) {
    if (orderNumEl) orderNumEl.textContent = orderNum;
    successModal.classList.add("active");
  }
}

// 9. Interactive Lighting / Glow Studio
function setSimulatorMode(mode) {
  state.simulatorMode = mode;
  const visual = document.getElementById("simulatorVisual");
  const modeBtns = document.querySelectorAll(".lighting-modes-bar .mode-btn");

  modeBtns.forEach(b => b.classList.toggle("active", b.dataset.mode === mode));

  if (!visual) return;

  if (mode === "natural") {
    visual.className = "simulator-visual";
  } else if (mode === "sunset") {
    visual.className = "simulator-visual";
    visual.style.background = "#F9EDE0";
  } else if (mode === "candle") {
    visual.className = "simulator-visual night-view";
  }
}

function setSimulatorPaper(paper) {
  state.simulatorPaper = paper;
  const swatches = document.querySelectorAll(".swatch-btn");
  swatches.forEach(s => s.classList.toggle("active", s.dataset.paper === paper));

  const simImg = document.getElementById("simulatorLanternImg");
  if (!simImg) return;

  if (paper === "cream") simImg.src = "assets/lantern-nordic.svg";
  else if (paper === "terracotta") simImg.src = "assets/kit-origami-trio.svg";
  else if (paper === "sage") simImg.src = "assets/lantern-botanical.svg";
  else if (paper === "indigo") simImg.src = "assets/lantern-celestial.svg";
}

function toggleHeroGlow() {
  state.heroGlowOn = !state.heroGlowOn;
  const card = document.getElementById("heroLanternCard");
  const btn = document.getElementById("heroGlowBtn");
  if (!card) return;

  if (state.heroGlowOn) {
    card.classList.add("glowing");
    if (btn) btn.innerHTML = `<span class="glow-dot"></span> Light: On`;
  } else {
    card.classList.remove("glowing");
    if (btn) btn.innerHTML = `<span class="glow-dot"></span> Light: Off`;
  }
}

function toggleCozyNightMode() {
  state.isNightMode = !state.isNightMode;
  document.body.classList.toggle("cozy-night-mode", state.isNightMode);
  
  const toggleBtn = document.getElementById("cozyToggleBtn");
  if (toggleBtn) {
    toggleBtn.innerHTML = state.isNightMode
      ? `☀️ Daytime Light`
      : `🕯️ Evening Glow Mode`;
  }
}

// 10. Filter & Search Handlers
function setupEventListeners() {
  // Category tabs
  const tabBtns = document.querySelectorAll(".category-tabs .tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("catalogSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Mobile navigation hamburger toggle
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Newsletter form
  const clubForm = document.getElementById("clubForm");
  if (clubForm) {
    clubForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = clubForm.querySelector("input[type='email']");
      if (input && input.value) {
        showToast("🌿 Welcome to the Slow Craft Club! Check your inbox for your first paper pattern.");
        input.value = "";
      }
    });
  }
}

function resetFilters() {
  state.selectedCategory = "all";
  state.searchQuery = "";
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) searchInput.value = "";

  const tabBtns = document.querySelectorAll(".category-tabs .tab-btn");
  tabBtns.forEach(b => b.classList.toggle("active", b.dataset.category === "all"));

  renderProducts();
}

// 11. Toast Notifications
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <path d="m9 11 3 3L22 4"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}


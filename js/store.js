// Default Catalog Data
const defaultProducts = [
    {
        id: 'stealth-earphones',
        title: 'Titanium Earbuds X1',
        category: 'Earphones',
        price: 299,
        originalPrice: 399,
        rating: 4.9,
        reviews: 142,
        image: 'images/stealth_earphones.png',
        desc: 'Audiophile-grade wireless earphones engineered with custom 11mm planar drivers, active noise cancellation, and dark titanium acoustic chambers.',
        isBestseller: false,
        specs: {
            'Driver': '11mm Planar Magnetic',
            'Frequency': '10Hz - 45kHz Ultra-Wide',
            'Distortion': '<0.01% THD',
            'Battery': '38 Hours Total (ANC Off)',
            'Codec': 'LDAC / LHDC 5.0 / aptX Adaptive',
            'Weight': '4.8g per earbud',
            'Chassis': 'Grade 5 Titanium #1A1A24'
        }
    },
    {
        id: 'stealth-smartwatch',
        title: 'Chronos Chronograph V',
        category: 'Smartwatches',
        price: 649,
        originalPrice: 799,
        rating: 5.0,
        reviews: 284,
        image: 'images/stealth_smartwatch.png',
        desc: 'Flagship smart horology featuring a forged titanium chassis, sapphire crystal display, dual-frequency GPS, and 14-day ultra endurance battery.',
        isBestseller: true,
        specs: {
            'Display': '1.43" AMOLED Sapphire',
            'Chassis': 'Forged Titanium #1A1A24',
            'Processor': 'Dual-Core CyberHorology V',
            'Water Res': '10 ATM / 100 Meters',
            'Sensors': 'ECG, SpO2, Temp, Altimeter, Barometer',
            'Endurance': '14 Days Ultra Mode'
        }
    },
    {
        id: 'stealth-mobile-skin',
        title: 'CyberTitan Armor Skin',
        category: 'Mobile Skins',
        price: 49,
        originalPrice: 69,
        rating: 4.8,
        reviews: 95,
        image: 'images/stealth_mobile_skin.png',
        desc: 'Textured matte skin infused with military-grade 3M vinyl. Features precision geometric electric orange tracings and zero-residue removal.',
        isBestseller: false,
        specs: {
            'Material': '3M Architectural Matrix',
            'Thickness': '0.22mm Ultra-Thin',
            'Texture': 'Micro-Etched Matte Matrix',
            'Fit': 'Laser Precision Cut',
            'Adhesive': 'Zero-Residue CyberBond'
        }
    },
    {
        id: 'stealth-headphones',
        title: 'Planar Headphone Z',
        category: 'Earphones',
        price: 899,
        originalPrice: 1099,
        rating: 4.9,
        reviews: 76,
        image: 'images/stealth_earphones.png',
        desc: 'Over-ear flagship planar magnetic headphones featuring 90mm ultra-thin diaphragms, open-back dark titanium grilles, and supreme acoustic fidelity.',
        isBestseller: false,
        specs: {
            'Driver': '90mm Planar Array',
            'Frequency': '5Hz - 50kHz Master',
            'Impedance': '32 Ohms',
            'Sensitivity': '102 dB/mW',
            'Chassis': 'Grade 5 Titanium #1A1A24',
            'Pads': 'Lambskin Leather'
        }
    },
    {
        id: 'stealth-smartwatch-stealth',
        title: 'Chronos Stealth Phantom X',
        category: 'Smartwatches',
        price: 799,
        originalPrice: 949,
        rating: 4.9,
        reviews: 112,
        image: 'images/stealth_smartwatch.png',
        desc: 'Limited run tactical smartwatch featuring a matte black ceramic bezel, night-vision optimized AMOLED display, and military telemetry tracking.',
        isBestseller: false,
        specs: {
            'Display': '1.5" AMOLED Night-Vision',
            'Chassis': 'Matte Ceramic & Forged Titanium',
            'Processor': 'Quantum CyberHorology VI',
            'Water Res': '20 ATM / 200 Meters',
            'Sensors': 'Advanced Bio-Telemetry Matrix',
            'Endurance': '21 Days Tactical Mode'
        }
    },
    {
        id: 'stealth-earphones-pro',
        title: 'CyberBuds Pro IEM',
        category: 'Earphones',
        price: 399,
        originalPrice: 499,
        rating: 4.8,
        reviews: 88,
        image: 'images/stealth_earphones.png',
        desc: 'Professional in-ear monitors equipped with tribrid electrostatic planar drivers, custom titanium acoustic nozzles, and lossless LDAC transmission.',
        isBestseller: false,
        specs: {
            'Driver': 'Tribrid Electrostatic Planar',
            'Frequency': '5Hz - 50kHz Master',
            'Distortion': '<0.005% THD',
            'Battery': '42 Hours Total',
            'Codec': 'Lossless LDAC / aptX Lossless',
            'Chassis': 'Titanium / Resin Hybrid'
        }
    },
    {
        id: 'stealth-skin-orange',
        title: 'Electric Matrix Skin',
        category: 'Mobile Skins',
        price: 55,
        originalPrice: 75,
        rating: 4.7,
        reviews: 64,
        image: 'images/stealth_mobile_skin.png',
        desc: 'High-visibility architectural skin dominated by electric orange #FF5722 honeycomb tracings. Offers maximum tactile grip and zero thermal throttling.',
        isBestseller: false,
        specs: {
            'Material': '3M Textured Honeycomb Matrix',
            'Thickness': '0.25mm Tactical Grip',
            'Thermal': 'Zero Throttling Mesh',
            'Fit': 'Laser Precision Cut',
            'Adhesive': 'Zero-Residue CyberBond'
        }
    },
    {
        id: 'stealth-smartwatch-solar',
        title: 'Chronos Solar Horizon',
        category: 'Smartwatches',
        price: 899,
        originalPrice: 1199,
        rating: 5.0,
        reviews: 156,
        image: 'images/stealth_smartwatch.png',
        desc: 'Ultra-premium horology powered by invisible solar-harvesting sapphire crystal. Features deep violet shadow titanium accents and infinite battery life.',
        isBestseller: false,
        specs: {
            'Display': '1.43" Solar Sapphire Glass',
            'Chassis': 'Grade 5 Titanium #0F0F15',
            'Harvesting': 'Quantum Solar Mesh',
            'Water Res': '10 ATM / 100 Meters',
            'Sensors': 'Dual-Frequency GPS & ECG',
            'Endurance': 'Infinite (Solar Assisted)'
        }
    }
];

// Default Orders Data
const defaultOrders = [
    { id: 'ORD-8492', customer: 'Alexander Wright', email: 'alex@wright.io', total: 649, items: 1, status: 'completed', date: '2026-05-18' },
    { id: 'ORD-8491', customer: 'Sarah Jenkins', email: 's.jenkins@domain.com', total: 348, items: 2, status: 'processing', date: '2026-05-17' },
    { id: 'ORD-8490', customer: 'Michael Chen', email: 'mchen@techcorp.com', total: 299, items: 1, status: 'pending', date: '2026-05-16' }
];

// App State Management
class StoreManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('stealth_cart')) || [];
        this.products = JSON.parse(localStorage.getItem('stealth_products')) || defaultProducts;
        this.orders = JSON.parse(localStorage.getItem('stealth_orders')) || defaultOrders;
        
        // Ensure newly added products in defaultProducts are merged into localStorage if missing
        // And ensure existing products inherit rating, reviews, and originalPrice fields
        defaultProducts.forEach(dp => {
            const existing = this.products.find(p => p.id === dp.id);
            if (!existing) {
                this.products.push(dp);
            } else {
                existing.originalPrice = dp.originalPrice;
                existing.rating = dp.rating;
                existing.reviews = dp.reviews;
            }
        });
        localStorage.setItem('stealth_products', JSON.stringify(this.products));
        
        if (!localStorage.getItem('stealth_orders')) {
            localStorage.setItem('stealth_orders', JSON.stringify(this.orders));
        }
        
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindEvents();
            this.updateCartBadge();
            this.renderCart();
            this.initSpecDrawers();
            this.initShopGrid();
            this.initAdmin();
            this.initCheckout();
            this.initFAQ();
            this.initContactForm();
            this.initAuth();
        });
    }

    getBasePath() {
        const path = window.location.pathname;
        if (path.includes('/storefront/') || path.includes('/admin/') || path.includes('/legal/')) {
            return '../';
        }
        return './';
    }

    initAuth() {
        const navAuthBtn = document.getElementById('navAuthBtn');
        const navAuthText = document.getElementById('navAuthText');
        const user = JSON.parse(localStorage.getItem('stealth_user'));

        if (navAuthBtn && navAuthText) {
            if (user && user.name) {
                navAuthText.textContent = `Operative: ${user.name}`;
                navAuthBtn.className = 'btn btn-accent';
                navAuthBtn.href = '#';
                navAuthBtn.title = 'Click to Sign Out of Armory';
                navAuthBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (confirm('Initiate cryptographic logout from the Stealth Matte Armory?')) {
                        localStorage.removeItem('stealth_user');
                        this.showToast('Session Terminated. Biometric Telemetry Disconnected.');
                        setTimeout(() => {
                            window.location.reload();
                        }, 1200);
                    }
                });
            } else {
                navAuthText.textContent = 'Operative Login';
                navAuthBtn.className = 'btn btn-secondary';
                navAuthBtn.href = `${this.getBasePath()}storefront/login.html`;
            }
        }
    }

    bindEvents() {
        // Cart Toggle
        const cartBtns = document.querySelectorAll('.cart-btn');
        const cartOverlay = document.getElementById('cartOverlay');
        const closeCartBtn = document.getElementById('closeCart');

        cartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCart(true);
            });
        });

        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => this.toggleCart(false));
        }

        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                if (e.target === cartOverlay) this.toggleCart(false);
            });
        }

        // Add to Cart Buttons
        document.addEventListener('click', (e) => {
            const addBtn = e.target.closest('.add-to-cart-btn');
            if (addBtn) {
                const id = addBtn.dataset.id;
                this.addToCart(id);
            }
        });
    }

    // --- Toast Notifications ---
    showToast(message) {
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="fas fa-check-circle text-accent"></i>
            <span>${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3500);
    }

    // --- Cart Operations ---
    toggleCart(show) {
        const overlay = document.getElementById('cartOverlay');
        if (overlay) {
            if (show) {
                overlay.classList.add('active');
                this.renderCart();
            } else {
                overlay.classList.remove('active');
            }
        }
    }

    addToCart(productId, qty = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existing = this.cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += qty;
        } else {
            this.cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: qty
            });
        }

        this.saveCart();
        this.updateCartBadge();
        this.renderCart();
        this.showToast(`Added ${product.title} to Cart`);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartBadge();
        this.renderCart();
        this.showToast('Removed item from cart');
    }

    updateQty(productId, delta) {
        const item = this.cart.find(i => i.id === productId);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            this.removeFromCart(productId);
        } else {
            this.saveCart();
            this.updateCartBadge();
            this.renderCart();
        }
    }

    saveCart() {
        localStorage.setItem('stealth_cart', JSON.stringify(this.cart));
    }

    updateCartBadge() {
        const totalQty = this.cart.reduce((sum, item) => sum + item.qty, 0);
        document.querySelectorAll('.cart-badge').forEach(badge => {
            badge.textContent = totalQty;
            badge.style.display = totalQty > 0 ? 'flex' : 'none';
        });
    }

    renderCart() {
        const cartBody = document.getElementById('cartBody');
        const cartTotalEl = document.getElementById('cartTotal');
        if (!cartBody) return;

        if (this.cart.length === 0) {
            cartBody.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>Your Cart is Empty</h3>
                    <p>Discover our premium selection and elevate your setup.</p>
                </div>
            `;
            if (cartTotalEl) cartTotalEl.textContent = '$0';
            return;
        }

        let html = '';
        let total = 0;

        this.cart.forEach(item => {
            total += item.price * item.qty;
            html += `
                <div class="cart-item">
                    <img src="${this.getBasePath() + item.image}" alt="${item.title}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price * item.qty}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="store.updateQty('${item.id}', -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="store.updateQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="store.removeFromCart('${item.id}')">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
        });

        cartBody.innerHTML = html;
        if (cartTotalEl) cartTotalEl.textContent = `$${total}`;

        const checkoutBtn = document.getElementById('cartCheckoutBtn');
        if (checkoutBtn) {
            checkoutBtn.href = `${this.getBasePath()}storefront/checkout.html`;
        }
    }

    // --- Spec Sheet Expansion Drawer ---
    initSpecDrawers() {
        document.addEventListener('click', (e) => {
            const toggleBtn = e.target.closest('.spec-toggle-btn');
            if (toggleBtn) {
                const card = toggleBtn.closest('.product-card');
                const drawer = card.querySelector('.spec-drawer');
                if (drawer) {
                    const isExpanded = drawer.classList.contains('expanded');
                    if (isExpanded) {
                        drawer.classList.remove('expanded');
                        toggleBtn.classList.remove('active');
                    } else {
                        drawer.classList.add('expanded');
                        toggleBtn.classList.add('active');
                    }
                }
            }
        });
    }

    // --- FAQ Accordion ---
    initFAQ() {
        document.addEventListener('click', (e) => {
            const header = e.target.closest('.faq-header');
            if (header) {
                const item = header.closest('.faq-item');
                item.classList.toggle('active');
            }
        });
    }

    // --- Contact Form Simulation ---
    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showToast('Transmission Received. Elite Concierge will respond shortly.');
                contactForm.reset();
            });
        }
    }

    // --- Shop Grid & Live Filtering / Search ---
    initShopGrid() {
        const shopGrid = document.getElementById('shopGrid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('searchCatalogInput');
        if (!shopGrid) return;

        let currentCategory = 'all';
        let searchQuery = '';

        const renderProducts = () => {
            let filtered = currentCategory === 'all' 
                ? this.products 
                : this.products.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());

            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
            }

            if (filtered.length === 0) {
                shopGrid.innerHTML = `<div class="col-span-full text-center py-12 text-muted" style="grid-column: span 4; text-align: center; padding: 4rem 0; color: var(--text-muted); font-size: 1.25rem;">No cybernetic hardware matches your query.</div>`;
                return;
            }

            const basePath = this.getBasePath();

            shopGrid.innerHTML = filtered.map(product => `
                <div class="product-card ${product.isBestseller ? 'bestseller-card' : ''}">
                    ${product.isBestseller ? `<div class="product-badge bestseller"><i class="fas fa-crown"></i> Best Seller</div>` : ''}
                    <a href="${basePath}storefront/product.html?id=${product.id}" class="product-image-wrapper">
                        <img src="${basePath + product.image}" alt="${product.title}" class="product-image">
                    </a>
                    <div class="product-content">
                        <div>
                            <div class="product-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <span class="product-category">${product.category}</span>
                                <div style="display: flex; align-items: center; gap: 0.4rem; color: #FFD700; font-size: 0.9rem; font-weight: 700;">
                                    <i class="fas fa-star"></i>
                                    <span>${product.rating || '4.9'}</span>
                                    <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 500;">(${product.reviews || '128'})</span>
                                </div>
                            </div>
                            <h3 class="product-title"><a href="${basePath}storefront/product.html?id=${product.id}">${product.title}</a></h3>
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                <span class="product-price" style="font-size: 1.5rem; font-weight: 800; color: white;">$${product.price}</span>
                                ${product.originalPrice ? `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 1.1rem; font-family: var(--font-mono);">$${product.originalPrice}</span>
                                <span style="background: rgba(255, 87, 34, 0.15); border: 1px solid var(--border-accent); color: var(--accent); font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 100px;">SAVE $${product.originalPrice - product.price}</span>` : ''}
                            </div>
                            <p class="product-desc">${product.desc}</p>
                        </div>
                        <div class="product-footer">
                            <button class="btn btn-accent add-to-cart-btn" data-id="${product.id}" ${product.isBestseller ? 'style="padding: 1.1rem 2rem; font-size: 1.1rem;"' : ''}>
                                <i class="fas fa-shopping-cart"></i> ${product.isBestseller ? 'Secure Best Seller' : 'Add to Cart'}
                            </button>
                            <button class="spec-toggle-btn" title="View Hardware Specs" ${product.isBestseller ? 'style="width: 54px; height: 54px;"' : ''}>
                                <i class="fas fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                    <div class="spec-drawer">
                        <div class="spec-grid">
                            ${Object.entries(product.specs).map(([key, val]) => `
                                <div class="spec-item">
                                    <span class="spec-label">${key}</span>
                                    <span class="spec-value">${val}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        };

        renderProducts();

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim();
                renderProducts();
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active', 'btn-accent'));
                filterBtns.forEach(b => b.classList.add('btn-secondary'));
                
                btn.classList.add('active', 'btn-accent');
                btn.classList.remove('btn-secondary');
                
                currentCategory = btn.dataset.filter;
                renderProducts();
            });
        });
    }

    // --- Checkout Simulation ---
    initCheckout() {
        const checkoutForm = document.getElementById('checkoutForm');
        const orderSummaryEl = document.getElementById('checkoutOrderSummary');
        const applyDiscountBtn = document.getElementById('applyDiscountBtn');
        const discountInput = document.getElementById('discountCode');

        if (!checkoutForm || !orderSummaryEl) return;

        let discount = 0;

        const renderCheckoutSummary = () => {
            const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
            const discountAmount = subtotal * discount;
            const shipping = subtotal > 0 ? 15 : 0;
            const total = subtotal - discountAmount + shipping;

            orderSummaryEl.innerHTML = `
                <div class="cart-body" style="padding: 0; max-height: 300px; overflow-y: auto; margin-bottom: 2rem;">
                    ${this.cart.map(item => `
                        <div class="cart-item" style="margin-bottom: 1rem;">
                            <img src="${this.getBasePath() + item.image}" alt="${item.title}" class="cart-item-img" style="width: 60px; height: 60px;">
                            <div class="cart-item-info">
                                <div class="cart-item-title">${item.title}</div>
                                <div class="cart-item-price">$${item.price} x ${item.qty}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid var(--border-glass); padding-top: 1.5rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted)">Subtotal</span>
                        <span class="mono">$${subtotal.toFixed(2)}</span>
                    </div>
                    ${discount > 0 ? `
                        <div style="display: flex; justify-content: space-between; color: var(--accent);">
                            <span>Discount (${discount * 100}%)</span>
                            <span class="mono">-$${discountAmount.toFixed(2)}</span>
                        </div>
                    ` : ''}
                    <div style="display: flex; justify-content: space-between;">
                        <span style="color: var(--text-muted)">Premium Insured Shipping</span>
                        <span class="mono">$${shipping.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; font-size: 1.5rem; font-weight: 800; border-top: 1px solid var(--border-glass); padding-top: 1.5rem; color: white;">
                        <span>Total</span>
                        <span class="mono">$${total.toFixed(2)}</span>
                    </div>
                </div>
            `;
        };

        renderCheckoutSummary();

        if (applyDiscountBtn && discountInput) {
            applyDiscountBtn.addEventListener('click', () => {
                const code = discountInput.value.trim().toUpperCase();
                if (code === 'STEALTH20') {
                    discount = 0.20;
                    renderCheckoutSummary();
                    this.showToast('20% Discount Applied!');
                } else {
                    this.showToast('Invalid Discount Code');
                }
            });
        }

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (this.cart.length === 0) {
                this.showToast('Your cart is empty');
                return;
            }

            const formData = new FormData(checkoutForm);
            const customerName = formData.get('fullName');
            const customerEmail = formData.get('email');
            const subtotal = this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
            const total = subtotal - (subtotal * discount) + 15;

            const newOrder = {
                id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
                customer: customerName,
                email: customerEmail,
                total: Math.round(total),
                items: this.cart.reduce((sum, item) => sum + item.qty, 0),
                status: 'processing',
                date: new Date().toISOString().split('T')[0]
            };

            this.orders.unshift(newOrder);
            localStorage.setItem('stealth_orders', JSON.stringify(this.orders));

            // Store current order for success page
            localStorage.setItem('stealth_last_order', JSON.stringify(newOrder));
            
            // Clear cart
            this.cart = [];
            this.saveCart();

            this.showToast('Processing Secure Payment...');
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 1500);
        });
    }

    // --- Admin Operations ---
    initAdmin() {
        const productsTableEl = document.getElementById('adminProductsTable');
        const ordersTableEl = document.getElementById('adminOrdersTable');
        const addProductForm = document.getElementById('addProductForm');
        const aiGenerateBtn = document.getElementById('aiGenerateBtn');

        // Render Admin Products
        if (productsTableEl) {
            productsTableEl.innerHTML = this.products.map(p => `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <img src="${this.getBasePath() + p.image}" style="width: 48px; height: 48px; border-radius: 10px; object-fit: cover; background: var(--bg-dark);">
                            <div>
                                <div style="font-weight: 700; color: white;">${p.title}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">${p.category}</div>
                            </div>
                        </div>
                    </td>
                    <td class="mono">$${p.price}</td>
                    <td><span class="status-badge status-completed">In Stock (85)</span></td>
                    <td>
                        <button class="btn btn-secondary" style="padding: 0.5rem 1rem;" onclick="store.deleteProduct('${p.id}')">
                            <i class="fas fa-trash text-accent"></i>
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        // Render Admin Orders
        if (ordersTableEl) {
            ordersTableEl.innerHTML = this.orders.map(o => `
                <tr>
                    <td class="mono" style="font-weight: 700; color: white;">${o.id}</td>
                    <td>
                        <div>${o.customer}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">${o.email}</div>
                    </td>
                    <td>${o.date}</td>
                    <td class="mono">$${o.total}</td>
                    <td>
                        <select class="form-control" style="padding: 0.35rem 0.85rem; width: auto; font-size: 0.85rem;" onchange="store.updateOrderStatus('${o.id}', this.value)">
                            <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="processing" ${o.status === 'processing' ? 'selected' : ''}>Processing</option>
                            <option value="completed" ${o.status === 'completed' ? 'selected' : ''}>Completed</option>
                        </select>
                    </td>
                    <td>
                        <a href="https://wa.me/1234567890?text=Hi%20${encodeURIComponent(o.customer)},%20regarding%20your%20order%20${o.id}" target="_blank" class="btn btn-secondary" style="padding: 0.5rem 1rem;">
                            <i class="fab fa-whatsapp" style="color: #25D366;"></i> Chat
                        </a>
                    </td>
                </tr>
            `).join('');
        }

        // AI Description Generator Simulation
        if (aiGenerateBtn) {
            aiGenerateBtn.addEventListener('click', () => {
                const titleInput = document.getElementById('prodTitle');
                const descInput = document.getElementById('prodDesc');
                if (!titleInput.value) {
                    this.showToast('Please enter a product title first');
                    return;
                }
                aiGenerateBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Generating...`;
                setTimeout(() => {
                    descInput.value = `Engineered for the elite, the ${titleInput.value} integrates aerospace-grade titanium architecture with quantum acoustic optimization. Immerse yourself in hyper-detailed fidelity accompanied by deep violet shadow acoustics and electric orange visual accents.`;
                    aiGenerateBtn.innerHTML = `<i class="fas fa-magic"></i> AI Generate`;
                    this.showToast('AI Description Generated!');
                }, 1200);
            });
        }

        // Add Product Form
        if (addProductForm) {
            addProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(addProductForm);
                const newProd = {
                    id: `prod-${Date.now()}`,
                    title: formData.get('title'),
                    category: formData.get('category'),
                    price: parseFloat(formData.get('price')),
                    image: defaultProducts[0].image, // default image
                    desc: formData.get('desc'),
                    isBestseller: false,
                    specs: {
                        'Material': 'Forged Titanium',
                        'Architecture': 'Stealth Cybernetic',
                        'Warranty': '2 Years Elite',
                        'Edition': 'Limited Run'
                    }
                };

                this.products.push(newProd);
                localStorage.setItem('stealth_products', JSON.stringify(this.products));
                this.showToast('Product Added Successfully!');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            });
        }
    }

    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        localStorage.setItem('stealth_products', JSON.stringify(this.products));
        this.showToast('Product Deleted');
        setTimeout(() => window.location.reload(), 800);
    }

    updateOrderStatus(id, status) {
        const order = this.orders.find(o => o.id === id);
        if (order) {
            order.status = status;
            localStorage.setItem('stealth_orders', JSON.stringify(this.orders));
            this.showToast(`Order ${id} status updated to ${status}`);
        }
    }
}

// Initialize Global Store
const store = new StoreManager();

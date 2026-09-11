// ---------- SVG ornament helpers ----------

function starOrnamentSVG(size = 48, color = '#B87333', opacity = 0.6) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" style="opacity:${opacity}">
    <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="${color}" />
    <polygon points="50,18 58,42 84,42 63,56 71,80 50,66 29,80 37,56 16,42 42,42" fill="none" stroke="${color}" stroke-width="1" />
  </svg>`
}

function eightStarSVG(size = 60, color = '#B87333', opacity = 0.3) {
  const r = 40
  const r2 = 18
  const points = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * Math.PI) / 8 - Math.PI / 2
    const radius = i % 2 === 0 ? r : r2
    return `${50 + radius * Math.cos(angle)},${50 + radius * Math.sin(angle)}`
  }).join(' ')
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none" style="opacity:${opacity}">
    <polygon points="${points}" fill="${color}" />
    <polygon points="${points}" fill="none" stroke="${color}" stroke-width="1.5" opacity="0.5" />
  </svg>`
}

function geometricDividerHTML(color = '#B87333') {
  return `
    <div class="line left"></div>
    ${eightStarSVG(20, color, 1)}
    <div class="line right"></div>
  `
}

function starsRow(count, size, color, opacity) {
  let html = ''
  for (let i = 0; i < count; i++) html += eightStarSVG(size, color, opacity)
  return html
}

// ---------- Static ornament placements ----------

document.getElementById('hero-ornament').innerHTML = starOrnamentSVG(36, '#D4924A', 0.9)
document.getElementById('hero-divider').innerHTML = geometricDividerHTML('#B87333')
document.getElementById('heritage-divider').innerHTML = geometricDividerHTML('#B87333')

document.getElementById('heritage-top-stars').innerHTML = starsRow(5, 16, '#B87333', 0.5)
document.getElementById('health-top-stars').innerHTML = starsRow(9, 14, '#B87333', 0.4)
document.getElementById('values-top-stars').innerHTML = starsRow(5, 16, '#B87333', 0.4)
document.getElementById('footer-stars-left').innerHTML = starsRow(3, 14, '#B87333', 0.4)
document.getElementById('footer-stars-right').innerHTML = starsRow(3, 14, '#B87333', 0.4)

// Hero background decorative stars
const heroStars = document.getElementById('hero-stars')
let heroStarsHtml = ''
for (let i = 0; i < 6; i++) {
  heroStarsHtml += eightStarSVG(120 + i * 40, '#B87333', 0.04 + i * 0.015)
}
heroStarsHtml += `<div class="star-center">${eightStarSVG(600, '#B87333', 0.04)}</div>`
heroStarsHtml += `<div class="corner-star corner-tl">${eightStarSVG(80, '#B87333', 0.12)}</div>`
heroStarsHtml += `<div class="corner-star corner-tr">${eightStarSVG(80, '#B87333', 0.12)}</div>`
heroStarsHtml += `<div class="corner-star corner-bl">${eightStarSVG(60, '#B87333', 0.1)}</div>`
heroStarsHtml += `<div class="corner-star corner-br">${eightStarSVG(60, '#B87333', 0.1)}</div>`
heroStars.innerHTML = heroStarsHtml

// Quote section star
document.getElementById('quote-bg-star').innerHTML = eightStarSVG(500, '#B87333', 0.05)
document.getElementById('quote-star').innerHTML = eightStarSVG(36, '#E8C88A', 0.7)

// ---------- Store configuration (EDIT ME) ----------
// Change prices, delivery fee, and payment/contact details here as your business grows.

const STORE = {
  currency: 'EGP',
  deliveryFee: 50,          // flat delivery fee, all over Egypt
  freeDeliveryOver: null,   // e.g. set to 1500 to offer free delivery above a threshold; null = disabled
  orderEmail: 'gomaajr@gmail.com',   // where order form submissions are sent
  instapayNumber: '01022428111',     // InstaPay / Vodafone Cash number
  instapayEmail: 'gomaajr@gmail.com',
}

// FormSubmit.co lets a static site send form submissions to an email with
// no backend. The FIRST submission after this site goes live will trigger a
// one-time "activate form" confirmation email to STORE.orderEmail — it must
// be clicked once before orders start arriving normally.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${STORE.orderEmail}`

// ---------- Products ----------

const products = [
  {
    id: 'medjool',
    nameAr: 'المجدول',
    nameEn: 'Medjool',
    tagline: 'The King of Dates',
    taglineAr: 'ملك التمور',
    desc: "Large, plump, and extraordinarily sweet with a rich caramel depth — the Medjool is TAYYIB's crown jewel. Grown in the fertile oases of El Wadi El Jedid, each date is hand-selected at peak ripeness for its signature softness and complex flavor.",
    note: 'Flagship · Hand-harvested · Limited season',
    img: 'https://images.unsplash.com/photo-1494675595046-ae42af7dc2ce?w=600&h=800&fit=crop&auto=format',
    accent: '#B87333',
    bg: '#2C1206',
    badge: true,
    sizes: [
      { label: '250g', price: 400 },
      { label: '500g', price: 400 },
      { label: '1kg', price: 400 },
    ],
  },
  {
    id: 'natural',
    nameAr: 'تمور طبيعية',
    nameEn: 'Natural Dates',
    tagline: 'Pure Desert Sweetness',
    taglineAr: 'حلاوة الصحراء',
    desc: 'Our classic Egyptian dates — firm yet yielding, with a clean honeyed sweetness. Dried naturally under the desert sun, these dates retain every mineral and antioxidant the earth poured into them. The everyday companion for a nourished life.',
    note: 'Year-round · Sun-dried · Rich in iron',
    img: 'https://images.unsplash.com/photo-1609687992670-6232aa115e27?w=600&h=800&fit=crop&auto=format',
    accent: '#7A8C5C',
    bg: '#1E2A14',
    badge: false,
    sizes: [
      { label: '250g', price: 400 },
      { label: '500g', price: 400 },
      { label: '1kg', price: 400 },
    ],
  },
  {
    id: 'nuts',
    nameAr: 'تمور بالمكسرات',
    nameEn: 'Dates with Nuts',
    tagline: 'Nourishment, Elevated',
    taglineAr: 'التغذية في أسمى صورها',
    desc: 'Premium Medjool dates filled with whole almonds, walnuts, or pistachios — a marriage of textures and flavors rooted in the Levantine and Egyptian gift-giving tradition. Each piece is a small act of generosity.',
    note: 'Gift boxes available · Almond · Walnut · Pistachio',
    img: 'https://images.unsplash.com/photo-1778488028552-be65c47f8d1a?w=600&h=800&fit=crop&auto=format',
    accent: '#9B6B3A',
    bg: '#2A1A08',
    badge: false,
    sizes: [
      { label: '250g box', price: 400 },
      { label: '500g box', price: 400 },
    ],
  },
]

// Per-product selection state: which size index and quantity is picked
const productSelection = {}
products.forEach((p) => {
  productSelection[p.id] = { sizeIndex: 0, qty: 1 }
})

// ---------- Products grid (all shown at once) ----------

function minPrice(p) {
  return Math.min(...p.sizes.map((s) => s.price))
}

function renderProductsGrid(filterQuery = '') {
  const grid = document.getElementById('products-grid')
  const emptyMsg = document.getElementById('products-empty')
  const q = filterQuery.trim().toLowerCase()

  const visible = products.filter((p) => {
    if (!q) return true
    return (
      p.nameEn.toLowerCase().includes(q) ||
      p.nameAr.includes(filterQuery.trim()) ||
      p.tagline.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    )
  })

  emptyMsg.hidden = visible.length !== 0
  grid.innerHTML = visible
    .map(
      (p) => `
    <div class="product-card" data-id="${p.id}" style="background:${p.bg}">
      <div class="product-card-image">
        <img src="${p.img}" alt="${p.nameEn}" />
        <div class="product-card-gradient" style="background:linear-gradient(to top, ${p.bg} 0%, transparent 55%)"></div>
        ${p.badge ? '<div class="product-badge show">★ Signature</div>' : ''}
        <div class="product-card-hover">
          <button type="button" class="quick-add-btn" data-quick-add="${p.id}" style="background:${p.accent}">Quick Add</button>
          <span class="view-hint">Tap to view &amp; choose size</span>
        </div>
      </div>
      <div class="product-card-info">
        <p class="product-card-nameAr">${p.nameAr}</p>
        <p class="product-card-nameEn">${p.nameEn}</p>
        <p class="product-card-tagline" style="color:${p.accent}">${p.tagline}</p>
        <p class="product-card-price">From ${formatPrice(minPrice(p))}</p>
      </div>
    </div>`
    )
    .join('')

  grid.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', () => {
      location.hash = `product-${card.dataset.id}`
    })
  })
  grid.querySelectorAll('[data-quick-add]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const p = products.find((pr) => pr.id === btn.dataset.quickAdd)
      addToCart(p, p.sizes[0], 1)
    })
  })
}

function renderSidebarCategories() {
  const el = document.getElementById('sidebar-categories')
  el.innerHTML = products
    .map(
      (p) => `<a href="#product-${p.id}" class="sidebar-category" style="border-color:${p.accent}">${p.nameEn}</a>`
    )
    .join('')
}

// ---------- Product detail "page" ----------

function renderProductPage(id) {
  const p = products.find((pr) => pr.id === id)
  if (!p) return closeProductPage()
  const sel = productSelection[p.id]
  const size = p.sizes[sel.sizeIndex]
  const inner = document.getElementById('product-page-inner')

  inner.innerHTML = `
    <button type="button" class="product-page-back" id="product-page-back">&larr; Back to all products</button>
    <div class="product-page-grid">
      <div class="product-image" style="background:${p.bg}">
        <img src="${p.img}" alt="${p.nameEn}" />
        <div class="gradient" style="background:linear-gradient(to top, ${p.bg} 0%, transparent 60%)"></div>
        <div class="product-badge${p.badge ? ' show' : ''}">★ Signature</div>
      </div>
      <div>
        <p class="product-nameAr">${p.nameAr}</p>
        <p class="product-taglineAr" style="color:${p.accent}">${p.taglineAr}</p>
        <h3 class="product-tagline">${p.tagline}</h3>
        <div class="divider" style="--divider-color:${p.accent}">${geometricDividerHTML(p.accent)}</div>
        <p class="product-desc">${p.desc}</p>
        <div class="product-note-row">
          ${eightStarSVG(18, p.accent, 1)}
          <span>${p.note}</span>
        </div>

        <div class="product-options">
          <div class="size-row" id="size-row">
            ${p.sizes
              .map(
                (s, i) => `
              <button type="button" class="size-btn${i === sel.sizeIndex ? ' active' : ''}" data-size-index="${i}">
                ${s.label}
                <span class="p">${formatPrice(s.price)}</span>
              </button>`
              )
              .join('')}
          </div>
          <div class="buy-row">
            <div class="qty-control">
              <button type="button" id="qty-minus" aria-label="Decrease quantity">&minus;</button>
              <span id="qty-value">${sel.qty}</span>
              <button type="button" id="qty-plus" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="add-to-cart-btn" id="add-to-cart" style="background:${p.accent}">
              Add to Cart — ${formatPrice(size.price * sel.qty)}
            </button>
          </div>
        </div>
      </div>
    </div>
  `

  inner.querySelector('#product-page-back').addEventListener('click', () => history.back())
  inner.querySelectorAll('.size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      sel.sizeIndex = parseInt(btn.dataset.sizeIndex, 10)
      renderProductPage(id)
    })
  })
  inner.querySelector('#qty-minus').addEventListener('click', () => {
    sel.qty = Math.max(1, sel.qty - 1)
    renderProductPage(id)
  })
  inner.querySelector('#qty-plus').addEventListener('click', () => {
    sel.qty = Math.min(20, sel.qty + 1)
    renderProductPage(id)
  })
  inner.querySelector('#add-to-cart').addEventListener('click', () => {
    addToCart(p, size, sel.qty)
    sel.qty = 1
    renderProductPage(id)
  })
}

function openProductPage(id) {
  renderProductPage(id)
  const page = document.getElementById('product-page')
  page.classList.add('open')
  page.setAttribute('aria-hidden', 'false')
  page.scrollTop = 0
  document.body.classList.add('no-scroll')
}

function closeProductPage() {
  const page = document.getElementById('product-page')
  page.classList.remove('open')
  page.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('no-scroll')
}

function handleRoute() {
  const hash = location.hash
  if (hash.startsWith('#product-')) {
    openProductPage(hash.replace('#product-', ''))
  } else {
    closeProductPage()
  }
}

window.addEventListener('hashchange', handleRoute)

renderProductsGrid()
renderSidebarCategories()
handleRoute()

// ---------- Health benefits ----------

const benefits = [
  { ar: 'طاقة طبيعية', en: 'Natural Energy', desc: 'Rich in natural sugars — fructose and glucose — that fuel the body without a spike, sustained and steady as the desert sun.' },
  { ar: 'عناصر غذائية', en: 'Rich in Minerals', desc: 'Potassium, magnesium, iron, copper, and zinc in every bite. Dates have been prescribed by scholars and physicians for millennia.' },
  { ar: 'مضادات الأكسدة', en: 'Antioxidants', desc: "Flavonoids, carotenoids, and phenolic acids — nature's defense compounds present in abundance in sun-ripened Egyptian dates." },
  { ar: 'ألياف طبيعية', en: 'Dietary Fiber', desc: 'A generous source of soluble and insoluble fiber, supporting digestion and long-lasting satiety the way nature intended.' },
  { ar: 'بلا إضافات', en: 'Nothing Added', desc: 'No preservatives. No added sugar. No processing beyond careful drying under the Egyptian sun. طيب — pure, as the name says.' },
  { ar: 'تراث نبوي', en: 'Prophetic Tradition', desc: 'The date holds a unique place in Islamic tradition — mentioned in the Quran, beloved by the Prophet ﷺ, and eaten to break the fast for over 1,400 years.' },
]

document.getElementById('benefits-grid').innerHTML = benefits
  .map(
    (b) => `
    <div class="benefit-card">
      <div class="benefit-head">
        ${eightStarSVG(24, '#B87333', 0.8)}
        <div>
          <div class="ar">${b.ar}</div>
          <div class="en">${b.en}</div>
        </div>
      </div>
      <p>${b.desc}</p>
    </div>`
  )
  .join('')

// ---------- Values ----------

const values = [
  {
    ar: 'طاهر', en: 'PURE',
    img: 'https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?w=500&h=600&fit=crop&auto=format',
    text: 'No additives. No shortcuts. Purity is not a marketing promise — it is the meaning of our name.',
  },
  {
    ar: 'أصيل', en: 'AUTHENTIC',
    img: 'https://images.unsplash.com/photo-1712699718948-106bdba13fc2?w=500&h=600&fit=crop&auto=format',
    text: 'Rooted in the Arabic tradition of hospitality and generosity. Dates are how we welcome, celebrate, and sustain one another.',
  },
  {
    ar: 'طبيعي', en: 'NATURAL',
    img: 'https://images.unsplash.com/photo-1759654495250-484495f69238?w=500&h=600&fit=crop&auto=format',
    text: 'Grown in ancient oasis soil, fed by subterranean springs, harvested under open sky. Nature does the work; we simply honor it.',
  },
]

document.getElementById('values-grid').innerHTML = values
  .map(
    (v, i) => `
    <div class="value-card${i < 2 ? ' bordered' : ''}">
      <div class="value-image-wrap">
        <img src="${v.img}" alt="${v.en}" />
        <div class="gradient"></div>
        <div class="value-labels">
          <div class="ar">${v.ar}</div>
          <div class="en">${v.en}</div>
        </div>
      </div>
      <div class="value-text"><p>${v.text}</p></div>
    </div>`
  )
  .join('')

// ---------- Active nav section highlighting ----------

const navLinks = document.querySelectorAll('#nav-links a, .sidebar-nav a')
const sections = document.querySelectorAll('section[id]')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.dataset.section === id)
        })
      }
    })
  },
  { threshold: 0.3 }
)
sections.forEach((s) => observer.observe(s))

// ---------- Sidebar (menu, search, categories) ----------

const sidebar = document.getElementById('sidebar')
const sidebarOverlay = document.getElementById('sidebar-overlay')

function openSidebar() {
  sidebar.classList.add('open')
  sidebarOverlay.classList.add('open')
  sidebar.setAttribute('aria-hidden', 'false')
}
function closeSidebar() {
  sidebar.classList.remove('open')
  sidebarOverlay.classList.remove('open')
  sidebar.setAttribute('aria-hidden', 'true')
}

document.getElementById('sidebar-toggle').addEventListener('click', openSidebar)
document.getElementById('sidebar-close').addEventListener('click', closeSidebar)
sidebarOverlay.addEventListener('click', closeSidebar)
sidebar.querySelectorAll('.sidebar-nav a').forEach((a) => a.addEventListener('click', closeSidebar))
sidebar.querySelectorAll('.sidebar-category').forEach((a) => a.addEventListener('click', closeSidebar))

const sidebarSearchInput = document.getElementById('sidebar-search-input')
sidebarSearchInput.addEventListener('input', () => {
  renderProductsGrid(sidebarSearchInput.value)
})
sidebarSearchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    closeSidebar()
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' })
  }
})

// ---------- Contact form (general inquiries — sends via FormSubmit) ----------

const form = document.getElementById('contact-form')
const status = document.getElementById('form-status')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const [nameInput, emailInput, phoneInput, messageInput] = form.querySelectorAll('input, textarea')
  const submitBtn = form.querySelector('button')
  const original = submitBtn.textContent
  submitBtn.textContent = 'Sending…'
  submitBtn.disabled = true

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: 'TAYYIB — New inquiry from website',
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
      }),
    })
    if (!res.ok) throw new Error('Request failed')
    status.textContent = 'Thank you — your inquiry has been sent. We will be in touch soon.'
    form.reset()
  } catch (err) {
    status.textContent = "Something went wrong sending that. Please email us directly at hello@tayyib.com."
  } finally {
    submitBtn.textContent = original
    submitBtn.disabled = false
  }
})

/* ==========================================================================
   CART + CHECKOUT
   ========================================================================== */

function formatPrice(n) {
  return `${n.toLocaleString('en-US')} ${STORE.currency}`
}

// Builds a wa.me link to TAYYIB's WhatsApp number, pre-filled with a message.
// Egyptian numbers need the country code (20) with the leading 0 dropped.
function whatsAppLink(message) {
  const digits = STORE.instapayNumber.replace(/\D/g, '')
  const intlNumber = digits.startsWith('0') ? `2${digits.slice(1)}` : digits
  return `https://wa.me/${intlNumber}?text=${encodeURIComponent(message)}`
}

let lastOrderWhatsAppLink = null

// ---------- Cart state (persisted in localStorage) ----------

let cart = loadCart()
let checkoutStep = 'cart' // 'cart' | 'checkout' | 'success'

function loadCart() {
  try {
    const raw = localStorage.getItem('tayyib_cart')
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

function saveCart() {
  try {
    localStorage.setItem('tayyib_cart', JSON.stringify(cart))
  } catch (e) {
    /* storage unavailable — cart still works for this session */
  }
}

function addToCart(product, size, qty) {
  const key = `${product.id}__${size.label}`
  const existing = cart.find((item) => item.key === key)
  if (existing) {
    existing.qty += qty
  } else {
    cart.push({
      key,
      productId: product.id,
      nameEn: product.nameEn,
      nameAr: product.nameAr,
      sizeLabel: size.label,
      price: size.price,
      qty,
      img: product.img,
      accent: product.accent,
    })
  }
  saveCart()
  updateCartCount()
  showToast(`Added ${product.nameEn} (${size.label}) to your order`)
  if (checkoutStep === 'cart') renderCartBody()
}

function removeFromCart(key) {
  cart = cart.filter((item) => item.key !== key)
  saveCart()
  updateCartCount()
  renderCartBody()
}

function changeCartQty(key, delta) {
  const item = cart.find((i) => i.key === key)
  if (!item) return
  item.qty = Math.max(1, Math.min(20, item.qty + delta))
  saveCart()
  updateCartCount()
  renderCartBody()
}

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0)
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0)
}

function currentDeliveryFee() {
  if (STORE.freeDeliveryOver !== null && cartSubtotal() >= STORE.freeDeliveryOver) return 0
  return cart.length ? STORE.deliveryFee : 0
}

function updateCartCount() {
  const el = document.getElementById('cart-count')
  const n = cartCount()
  el.textContent = n
  el.classList.toggle('empty', n === 0)
  el.classList.add('bump')
  setTimeout(() => el.classList.remove('bump'), 200)
}

// ---------- Drawer open/close ----------

const cartDrawer = document.getElementById('cart-drawer')
const cartOverlay = document.getElementById('cart-overlay')

function openCart() {
  checkoutStep = cart.length ? checkoutStep : 'cart'
  if (checkoutStep === 'success') checkoutStep = 'cart'
  renderCartBody()
  cartDrawer.classList.add('open')
  cartOverlay.classList.add('open')
  cartDrawer.setAttribute('aria-hidden', 'false')
}

function closeCart() {
  cartDrawer.classList.remove('open')
  cartOverlay.classList.remove('open')
  cartDrawer.setAttribute('aria-hidden', 'true')
}

document.getElementById('cart-toggle').addEventListener('click', openCart)
document.getElementById('cart-close').addEventListener('click', closeCart)
cartOverlay.addEventListener('click', closeCart)

// ---------- Render: cart list view ----------

function renderCartBody() {
  const body = document.getElementById('cart-body')

  if (checkoutStep === 'success') {
    body.innerHTML = `
      <div class="order-success">
        <div class="mark">✓</div>
        <h3>Order received</h3>
        <p>Thank you — we've received your order and will contact you shortly to confirm details and delivery.
        If you chose InstaPay / Vodafone Cash, please make sure you've sent the payment to <b>${STORE.instapayNumber}</b>.</p>
        <a class="whatsapp-btn" id="whatsapp-confirm" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.4C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.1.9.9-3-.2-.3c-.9-1.4-1.4-3.1-1.4-4.8C3.1 7.1 7.1 3.1 12 3.1S20.9 7.1 20.9 12 16.9 20.2 12 20.2z"/></svg>
          Confirm this order on WhatsApp
        </a>
      </div>
    `
    const waBtn = document.getElementById('whatsapp-confirm')
    if (waBtn) waBtn.href = lastOrderWhatsAppLink || whatsAppLink('Hi TAYYIB, following up on my order.')
    return
  }

  if (checkoutStep === 'checkout') {
    renderCheckoutForm(body)
    return
  }

  // default: cart view
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <p>Your order is empty.<br />Browse our dates and add something to your cart.</p>
      </div>
    `
    return
  }

  const itemsHtml = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.nameEn}" />
      <div>
        <div class="cart-item-name">${item.nameEn}</div>
        <div class="cart-item-size">${item.sizeLabel} · ${formatPrice(item.price)} each</div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button type="button" data-action="minus" data-key="${item.key}">&minus;</button>
            <span>${item.qty}</span>
            <button type="button" data-action="plus" data-key="${item.key}">+</button>
          </div>
          <button type="button" class="cart-item-remove" data-action="remove" data-key="${item.key}">Remove</button>
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>`
    )
    .join('')

  const subtotal = cartSubtotal()
  const delivery = currentDeliveryFee()
  const total = subtotal + delivery

  body.innerHTML = `
    ${itemsHtml}
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="cart-summary-row"><span>Delivery (all over Egypt)</span><span>${delivery === 0 ? 'Free' : formatPrice(delivery)}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
    </div>
    <button type="button" class="checkout-btn" id="go-checkout">Proceed to Checkout</button>
  `

  body.querySelectorAll('[data-action="minus"]').forEach((btn) =>
    btn.addEventListener('click', () => changeCartQty(btn.dataset.key, -1))
  )
  body.querySelectorAll('[data-action="plus"]').forEach((btn) =>
    btn.addEventListener('click', () => changeCartQty(btn.dataset.key, 1))
  )
  body.querySelectorAll('[data-action="remove"]').forEach((btn) =>
    btn.addEventListener('click', () => removeFromCart(btn.dataset.key))
  )
  document.getElementById('go-checkout').addEventListener('click', () => {
    checkoutStep = 'checkout'
    renderCartBody()
  })
}

// ---------- Render: checkout form ----------

function renderCheckoutForm(body) {
  const subtotal = cartSubtotal()
  const delivery = currentDeliveryFee()
  const total = subtotal + delivery

  body.innerHTML = `
    <button type="button" class="checkout-back" id="back-to-cart">&larr; Back to cart</button>

    <form class="checkout-form" id="checkout-form">
      <div>
        <label for="cf-name">Full name</label>
        <input type="text" id="cf-name" required />
      </div>
      <div class="field-row">
        <div>
          <label for="cf-phone">Phone number</label>
          <input type="tel" id="cf-phone" required />
        </div>
        <div>
          <label for="cf-city">City</label>
          <input type="text" id="cf-city" required />
        </div>
      </div>
      <div>
        <label for="cf-address">Delivery address</label>
        <textarea id="cf-address" rows="2" required></textarea>
      </div>
      <div>
        <label for="cf-notes">Order notes (optional)</label>
        <textarea id="cf-notes" rows="2"></textarea>
      </div>

      <div>
        <label>Payment method</label>
        <div class="pay-options">
          <label class="pay-option" id="pay-cod-label">
            <input type="radio" name="payment" value="Cash on Delivery" checked />
            Cash on Delivery
          </label>
          <label class="pay-option" id="pay-instapay-label">
            <input type="radio" name="payment" value="InstaPay / Vodafone Cash" />
            InstaPay / Vodafone Cash
          </label>
        </div>
        <div class="instapay-details" id="instapay-details">
          Send <b>${formatPrice(total)}</b> via InstaPay or Vodafone Cash to:<br />
          Number: <b>${STORE.instapayNumber}</b><br />
          InstaPay ID: <b>${STORE.instapayEmail}</b><br />
          Please place your order first, then send payment — we'll confirm once received.
        </div>
      </div>

      <div class="cart-summary">
        <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
        <div class="cart-summary-row"><span>Delivery</span><span>${delivery === 0 ? 'Free' : formatPrice(delivery)}</span></div>
        <div class="cart-summary-row total"><span>Total</span><span>${formatPrice(total)}</span></div>
      </div>

      <button type="submit" class="place-order-btn" id="place-order-btn">Place Order</button>
      <p class="checkout-note">By placing your order you agree to be contacted by TAYYIB to confirm delivery details.</p>
    </form>
  `

  document.getElementById('back-to-cart').addEventListener('click', () => {
    checkoutStep = 'cart'
    renderCartBody()
  })

  const payLabels = body.querySelectorAll('.pay-option')
  const instapayDetails = document.getElementById('instapay-details')
  function syncPayUI() {
    const checked = body.querySelector('input[name="payment"]:checked').value
    payLabels.forEach((l) => l.classList.toggle('active', l.querySelector('input').checked))
    instapayDetails.classList.toggle('show', checked === 'InstaPay / Vodafone Cash')
  }
  body.querySelectorAll('input[name="payment"]').forEach((r) => r.addEventListener('change', syncPayUI))
  syncPayUI()

  document.getElementById('checkout-form').addEventListener('submit', handleCheckoutSubmit)
}

async function handleCheckoutSubmit(e) {
  e.preventDefault()
  const btn = document.getElementById('place-order-btn')
  const original = btn.textContent
  btn.disabled = true
  btn.textContent = 'Placing order…'

  const name = document.getElementById('cf-name').value
  const phone = document.getElementById('cf-phone').value
  const city = document.getElementById('cf-city').value
  const address = document.getElementById('cf-address').value
  const notes = document.getElementById('cf-notes').value
  const payment = document.querySelector('input[name="payment"]:checked').value

  const subtotal = cartSubtotal()
  const delivery = currentDeliveryFee()
  const total = subtotal + delivery

  const orderSummary = cart
    .map((item) => `${item.nameEn} (${item.sizeLabel}) x${item.qty} — ${formatPrice(item.price * item.qty)}`)
    .join('\n')

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `TAYYIB — New order from ${name}`,
        customer_name: name,
        phone,
        city,
        address,
        notes,
        payment_method: payment,
        order_items: orderSummary,
        subtotal: formatPrice(subtotal),
        delivery_fee: delivery === 0 ? 'Free' : formatPrice(delivery),
        total: formatPrice(total),
      }),
    })
    if (!res.ok) throw new Error('Request failed')

    lastOrderWhatsAppLink = whatsAppLink(
      `Hi TAYYIB, I just placed an order on the website.\n\nName: ${name}\nPhone: ${phone}\nCity: ${city}\nAddress: ${address}\n\n${orderSummary}\n\nTotal: ${formatPrice(total)}\nPayment: ${payment}${notes ? `\nNotes: ${notes}` : ''}`
    )

    cart = []
    saveCart()
    updateCartCount()
    checkoutStep = 'success'
    renderCartBody()
  } catch (err) {
    btn.disabled = false
    btn.textContent = original
    showToast("Couldn't send your order — please check your connection and try again, or contact us directly.")
  }
}

// ---------- Toast ----------

let toastTimer = null
function showToast(message) {
  const el = document.getElementById('toast')
  el.textContent = message
  el.classList.add('show')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600)
}

// ---------- Init ----------

updateCartCount()

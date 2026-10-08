:root {
  --green-900: #173b2a;
  --green-800: #1f5638;
  --green-700: #2d714d;
  --green-600: #3c8c5d;
  --green-500: #5dbf7d;
  --green-100: #edf8ee;
  --green-50: #f7fbf7;
  --cream: #fffaf5;
  --text: #1a2a23;
  --muted: #5f6d66;
  --white: #ffffff;
  --shadow: 0 18px 45px rgba(15, 47, 31, 0.12);
  --card-shadow: 0 14px 30px rgba(21, 58, 38, 0.08);
  --border: rgba(23, 59, 42, 0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #f8fff8 0%, #f3f8f4 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.78);
  border-bottom: 1px solid rgba(23, 59, 42, 0.08);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--green-600), var(--green-800));
  color: var(--white);
  font-size: 1.35rem;
  box-shadow: var(--shadow);
}

.brand-name {
  display: block;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.brand small {
  display: block;
  font-size: 0.73rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
  font-weight: 600;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--green-800);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--green-700), var(--green-600));
  color: var(--white);
  padding: 0.9rem 1.5rem;
  box-shadow: 0 12px 20px rgba(60, 140, 93, 0.22);
}

.btn-secondary {
  border: 1px solid rgba(23, 59, 42, 0.1);
  background: rgba(255, 255, 255, 0.8);
  padding: 0.9rem 1.5rem;
  color: var(--text);
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 4.5rem 0 3rem;
  background:
    radial-gradient(circle at top left, rgba(93, 191, 125, 0.18), transparent 30%),
    linear-gradient(180deg, #edf9ee 0%, #f7fbf8 100%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 2rem;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(93, 191, 125, 0.12);
  color: var(--green-800);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.eyebrow-alt {
  background: rgba(61, 146, 92, 0.1);
}

.hero-copy h1 {
  margin-top: 1rem;
  font-size: clamp(2.6rem, 4vw, 4.5rem);
  line-height: 1.06;
  letter-spacing: -0.06em;
}

.hero-copy p {
  margin-top: 1rem;
  max-width: 560px;
  font-size: 1.08rem;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 2rem;
}

.hero-stats li {
  min-width: 120px;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--card-shadow);
}

.hero-stats strong {
  display: block;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--green-800);
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.product-showcase {
  position: relative;
  width: min(100%, 500px);
  padding: 1rem;
  border-radius: 32px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(237, 248, 238, 0.9));
  border: 1px solid rgba(23, 59, 42, 0.08);
  box-shadow: var(--shadow);
}

.product-showcase img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 24px;
}

.showcase-badge {
  position: absolute;
  left: 2rem;
  top: 2rem;
  z-index: 1;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--green-800);
  font-weight: 700;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
}

.showcase-card {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 220px;
  padding: 1rem 1.1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: var(--shadow);
}

.showcase-card p {
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.showcase-card strong {
  font-size: 1.15rem;
  color: var(--text);
}

.showcase-card span {
  color: var(--green-800);
  font-weight: 700;
}

.catalog-section,
.benefits {
  padding: 4.5rem 0;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin-top: 0.8rem;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.center {
  text-align: center;
}

.toolbar {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  margin-bottom: 2rem;
}

.search-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.9rem 1rem;
  box-shadow: var(--card-shadow);
}

.search-wrap input {
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  color: var(--text);
  font-size: 1rem;
}

.category-filters {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.filter-btn {
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.85);
  color: var(--muted);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active,
.filter-btn:hover,
.filter-btn:focus-visible {
  background: var(--green-800);
  border-color: var(--green-800);
  color: var(--white);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 35px rgba(25, 61, 41, 0.12);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.product-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1.2rem 1.1rem 1.1rem;
}

.product-category {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--green-700);
}

.product-title {
  margin-top: 0.45rem;
  font-size: 1.28rem;
  line-height: 1.3;
}

.product-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin: 0.7rem 0 1rem;
}

.product-price {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--green-800);
}

.product-rating {
  color: #f1b200;
  font-weight: 700;
}

.product-description {
  margin-bottom: 1rem;
  color: var(--muted);
  font-size: 0.96rem;
}

.product-selects {
  display: grid;
  gap: 0.7rem;
  margin-top: auto;
}

.product-selects select {
  width: 100%;
  border: 1px solid rgba(23, 59, 42, 0.1);
  border-radius: 12px;
  background: var(--green-50);
  padding: 0.8rem 0.9rem;
  color: var(--text);
  outline: none;
}

.product-action {
  margin-top: 1rem;
  width: 100%;
  border: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--green-600), var(--green-700));
  color: var(--white);
  padding: 0.9rem 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.product-action:hover,
.product-action:focus-visible {
  transform: translateY(-1px);
  opacity: 0.96;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 1.8rem 1.4rem;
  box-shadow: var(--card-shadow);
}

.icon {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(93, 191, 125, 0.18), rgba(61, 146, 92, 0.12));
  font-size: 2rem;
}

.benefit-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.3rem;
}

.benefit-card p {
  color: var(--muted);
}

.site-footer {
  background: linear-gradient(180deg, var(--green-900), #0f2d20);
  color: rgba(255, 255, 255, 0.9);
  padding-top: 3rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
}

.footer-brand {
  margin-bottom: 1rem;
}

.site-footer p,
.site-footer li {
  color: rgba(255, 255, 255, 0.8);
}

.site-footer h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.site-footer ul {
  list-style: none;
  display: grid;
  gap: 0.65rem;
}

.copyright {
  padding: 1rem 1.25rem 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.75);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

@media (max-width: 900px) {
  .hero-grid,
  .footer-grid,
  .benefits-grid,
  .toolbar {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .site-header {
    position: static;
  }

  .product-showcase img {
    height: 420px;
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: 3rem;
  }

  .hero-copy h1 {
    font-size: 2.5rem;
  }

  .hero-actions,
  .hero-stats {
    flex-direction: column;
    align-items: stretch;
  }

  .btn,
  .product-action {
    width: 100%;
  }

  .showcase-card {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
}
																																																																																																																																																																																																																									"},{
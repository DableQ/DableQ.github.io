document.getElementById('year').textContent = new Date().getFullYear();
const cfg = window.GHOSTGUARD_CONFIG || {};
const buy = document.getElementById('buyButton');
if (buy) {
  const url = (cfg.checkoutUrl || '').trim();
  if (url && !url.includes('REPLACE_WITH_STRIPE_PAYMENT_LINK')) {
    buy.href = url;
    buy.rel = 'noopener';
  } else {
    buy.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Stripe checkout is not connected yet. Add your Payment Link URL in config.js.');
    });
  }
}

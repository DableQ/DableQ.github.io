document.getElementById('year').textContent = new Date().getFullYear();
const buy = document.getElementById('buyButton');
if (buy) {
  buy.addEventListener('click', (e) => {
    const url = buy.dataset.checkout;
    if (!url || url.includes('YOUR_LEMON_SQUEEZY_CHECKOUT_URL')) {
      e.preventDefault();
      alert('Checkout will be enabled after the Lemon Squeezy product is connected.');
    } else {
      buy.href = url;
    }
  });
}

(function() {
  function initLoader() {
    if (document.getElementById('pl-indicator')) return;

    const style = document.createElement('style');
    style.textContent = `
      #pl-indicator { position: fixed; top: 26px; left: 50%; display: flex; gap: 8px; z-index: 999999; pointer-events: none; opacity: 1; transition: opacity 0.3s ease; }
      .pl-dot { width: 10px; height: 10px; border-radius: 50%; animation: plBounce 1.2s ease-in-out infinite; }
      .pl-dot:nth-child(1) { background: #ff4d4d; }
      .pl-dot:nth-child(2) { background: #ff9f43; animation-delay: 0.15s; }
      .pl-dot:nth-child(3) { background: #2ecc71; animation-delay: 0.3s; }
      @keyframes plBounce { 0%, 100% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(-8px); opacity: 0.8; } }
    `;
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.id = 'pl-indicator';
    container.innerHTML = '<div class="pl-dot"></div><div class="pl-dot"></div><div class="pl-dot"></div>';
    document.body.appendChild(container);

    setTimeout(() => {
      container.style.opacity = '0';
      setTimeout(() => container.remove(), 300);
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader);
  } else {
    initLoader();
  }
})();

(function() {
  if (document.querySelector('.fixed-corner-link')) return; // prevent duplicates
  
  // --- STRIPE BACKGROUND ---
  const stripe = document.createElement('div');
  stripe.className = 'fixed-corner-stripe';
  stripe.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px; /* Adjust to cover image + padding */
    background: rgba(255, 255, 255, 0.5);
    z-index: 999; /* Below the link (1000) */
    pointer-events: none; /* Let clicks pass through to content below */
  `;
  document.body.appendChild(stripe);
  // --- END STRIPE ---
  
  const link = document.createElement('a');
  link.href = 'https://theattn.com';
  link.className = 'fixed-corner-link';
  link.style.cssText = 'position:fixed;bottom:26px;left:50%;transform:translateX(-50%);z-index:1000;display:block;';
  
  const img = document.createElement('img');
  img.src = 'opthead.png';
  img.alt = 'theattn.com';
  img.className = 'fixed-corner-img';
  img.style.cssText = 'display:block;height:20px;width:auto;';
  
  link.appendChild(img);
  document.body.appendChild(link);
})();

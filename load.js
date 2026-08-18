(function() {
  function init() {
    // --- UNIFIED STYLES ---
    if (!document.getElementById('pl-unified-styles')) {
      const style = document.createElement('style');
      style.id = 'pl-unified-styles';
      style.textContent = `
        /* --- Loader --- */
        #pl-indicator { position: fixed; top: 26px; right: 26px; display: flex; flex-direction: column; gap: 8px; z-index: 999999; pointer-events: none; transition: opacity 0.3s ease; }
        .pl-dot { width: 10px; height: 10px; animation: plBounce 1.2s ease-in-out infinite; }
        .pl-dot:nth-child(1) { background: #ff4d4d; }
        .pl-dot:nth-child(2) { background: #ff9f43; animation-delay: 0.15s; }
        .pl-dot:nth-child(3) { background: #2ecc71; animation-delay: 0.3s; }
        @keyframes plBounce { 0%, 100% { transform: translateY(0); opacity: 1; } 50% { transform: translateY(-8px); opacity: 0.8; } }
        
        /* --- Floating Badge --- */
        #pl-footer { 
          position: fixed; 
          top: 6px; 
          left: 6px; 
          background: rgba(255, 255, 255, 0.98); 
          border-radius: 8px; 
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 9999; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center;
          padding: 6px 10px;
          transform: scale(0);
          opacity: 0;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease; 
        }
        #pl-footer.show { 
          transform: scale(1); 
          opacity: 1;
        }
        #pl-footer a { 
          color: #000; 
          text-decoration: none; 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          justify-content: center;
          width: 100%;
        }
        #pl-footer img { 
          max-height: 24px; 
          max-width: 24px; 
          object-fit: contain; 
          display: block; 
        }
        #pl-page-title {
          font-size: 11px;
          font-weight: 600;
          color: #000000;
          margin-top: 4px;
          text-align: center;
          line-height: 1.2;
          max-width: 120px;
          word-break: break-word;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
      `;
      document.head.appendChild(style);
    }
    
    // --- LOADER ---
    if (!document.getElementById('pl-indicator')) {
      const loader = document.createElement('div');
      loader.id = 'pl-indicator';
      loader.innerHTML = '<div class="pl-dot"></div><div class="pl-dot"></div><div class="pl-dot"></div>';
      document.body.appendChild(loader);

      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 400); 
      }, 3000);
    }

    // --- FOOTER ---
    if (!document.getElementById('pl-footer')) {
      // Capture title at the exact moment of injection, with fallbacks
      const rawTitle = document.title || (document.querySelector('title') ? document.querySelector('title').textContent : '');
      const cleanTitle = rawTitle.trim();
      
      // Fallback to URL path if title is genuinely empty
      const pageTitle = cleanTitle || window.location.pathname.split('/').pop().replace('.html', '') || 'attn:invoice';

      const footer = document.createElement('div');
      footer.id = 'pl-footer';
      footer.innerHTML = `
        <a href="https://theattn.com/" rel="noopener" title="Contact Us">
          <img src="https://theattn.com/footer.png" alt="theattn">
          <div id="pl-page-title">${pageTitle}</div>
        </a>
      `;
      document.body.appendChild(footer);
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          footer.classList.add('show');
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

(function() {
  function init() {
    // --- UNIFIED STYLES ---
    if (!document.getElementById('pl-bottombar-styles')) {
      const style = document.createElement('style');
      style.id = 'pl-bottombar-styles';
      style.textContent = `
        /* --- Loader --- */
        #pl-indicator {
          position: fixed;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: row;
          gap: 6px;
          z-index: 999999;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .pl-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d90000;
          opacity: 0;
          animation: plSweep 1.2s ease-in-out infinite;
        }
        .pl-dot:nth-child(1) { animation-delay: 0.0s; }
        .pl-dot:nth-child(2) { animation-delay: 0.1s; }
        .pl-dot:nth-child(3) { animation-delay: 0.2s; }
        .pl-dot:nth-child(4) { animation-delay: 0.3s; }
        .pl-dot:nth-child(5) { animation-delay: 0.4s; }
        @keyframes plSweep {
          0% { transform: translateX(-30px); opacity: 0; }
          20% { opacity: 1; }
          50% { transform: translateX(0); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(30px); opacity: 0; }
        }
        
        /* --- Fixed Bottom Bar --- */
        #pl-bottombar { 
          position: fixed; 
          bottom: 0; 
          left: 0; 
          right: 0; 
          height: 50px; 
          background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 30%, rgba(255, 255, 255, 0) 100%);
          z-index: 99999; 
          display: flex; 
          align-items: center; 
          padding: 0 20px; 
          box-sizing: border-box;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); 
        }
        #pl-bottombar.show { 
          transform: translateY(0); 
        }
        #pl-bottombar a { 
          display: flex; 
          align-items: center; 
          text-decoration: none; 
          color: #000; 
          width: 100%;
        }
        #pl-bottombar img { 
          height: 28px; 
          width: auto; 
          object-fit: contain; 
          margin-right: 12px; 
          display: block; 
        }
        #pl-page-title {
          font-size: 15px;
          font-weight: 600;
          color: #111111;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 400px;
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
        }
      `;
      document.head.appendChild(style);
    }
    
    // --- LOADER ---
    if (!document.getElementById('pl-indicator')) {
      const loader = document.createElement('div');
      loader.id = 'pl-indicator';
      loader.innerHTML = '<div class="pl-dot"></div><div class="pl-dot"></div><div class="pl-dot"></div><div class="pl-dot"></div><div class="pl-dot"></div>';
      document.body.appendChild(loader);

      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 400); 
      }, 2500);
    }

    // --- BOTTOM BAR ---
    if (!document.getElementById('pl-bottombar')) {
      const rawTitle = document.title || (document.querySelector('title') ? document.querySelector('title').textContent : '');
      const cleanTitle = rawTitle.trim();
      const pageTitle = cleanTitle || window.location.pathname.split('/').pop().replace('.html', '') || 'attn:invoice';

      document.body.style.paddingBottom = '50px';

      const bottombar = document.createElement('div');
      bottombar.id = 'pl-bottombar';
      bottombar.innerHTML = `
        <a href="https://theattn.com/" rel="noopener" title="Contact Us">
          <img src="https://theattn.com/footer.png" alt="theattn">
          <span id="pl-page-title">${pageTitle}</span>
        </a>
      `;
      
      document.body.appendChild(bottombar);
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bottombar.classList.add('show');
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

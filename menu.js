(function() {
    // 1. Prevent duplicate injection
    if (document.getElementById('hamburgerMenu')) {
        return;
    }
      
    // 2. Auto-load Font Awesome if not already present
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(fa);
    }

    // 2b. Auto-load Barlow Condensed if not already present
    if (!document.querySelector('link[href*="Barlow+Condensed"]')) {
        const bf = document.createElement('link');
        bf.rel = 'stylesheet';
        bf.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&display=swap';
        document.head.appendChild(bf);
    }

   // 3. Inject CSS
        const style = document.createElement('style');
        style.textContent = `
            .hamburger-btn, .hamburger-menu {
                --hm-card: #fff;                          /* fallback if blur is unsupported */
                --hm-glass: rgba(255, 255, 255, 0.6);     /* glass fill */
                --hm-glass-line: rgba(255, 255, 255, 0.45);
                --hm-tint: rgba(2, 132, 199, 0.16);       /* hover / pressed highlight */
                --hm-tint-strong: rgba(2, 132, 199, 0.28);
                --hm-text: #14202b;
                --hm-line: #d9e0e6;
                --hm-accent: #0284C7;
                --hm-accent-h: #0EA5E9;
                --hm-accent-t: #fff;
                --hm-shadow: 0 4px 24px rgba(20, 32, 43, 0.14);
            }
            @media (prefers-color-scheme: dark) {
                :root:not([data-theme="light"]) .hamburger-btn,
                :root:not([data-theme="light"]) .hamburger-menu {
                    --hm-card: #18222b;
                    --hm-glass: rgba(24, 34, 43, 0.55);
                    --hm-glass-line: rgba(255, 255, 255, 0.1);
                    --hm-tint: rgba(53, 183, 194, 0.2);
                    --hm-tint-strong: rgba(53, 183, 194, 0.32);
                    --hm-text: #e8eef3;
                    --hm-line: #2b3a46;
                    --hm-accent: #35b7c2;
                    --hm-accent-h: #67d3dc;
                    --hm-accent-t: #06242a;
                    --hm-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
                }
            }
            :root[data-theme="dark"] .hamburger-btn,
            :root[data-theme="dark"] .hamburger-menu {
                --hm-card: #18222b;
                --hm-glass: rgba(24, 34, 43, 0.55);
                --hm-glass-line: rgba(255, 255, 255, 0.1);
                --hm-tint: rgba(53, 183, 194, 0.2);
                --hm-tint-strong: rgba(53, 183, 194, 0.32);
                --hm-text: #e8eef3;
                --hm-line: #2b3a46;
                --hm-accent: #35b7c2;
                --hm-accent-h: #67d3dc;
                --hm-accent-t: #06242a;
                --hm-shadow: 0 4px 24px rgba(0, 0, 0, 0.45);
            }

            /* --- Button (glass circle, accent-colored icon) --- */
            .hamburger-btn {
                position: fixed;
                top: calc(16px + env(safe-area-inset-top, 0px));
                right: 16px;
                z-index: 10000;
                width: 48px;
                height: 48px;
                padding: 0;
                border-radius: 999px;
                border: 1px solid var(--hm-glass-line);
                background: var(--hm-glass);
                -webkit-backdrop-filter: blur(14px) saturate(160%);
                backdrop-filter: blur(14px) saturate(160%);
                color: var(--hm-accent);
                font: 600 1.5rem/1 'Barlow Condensed', sans-serif;
                cursor: pointer;
                box-shadow: var(--hm-shadow);
                transition: background .15s, transform .1s;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .hamburger-btn:active {
                background: var(--hm-tint-strong);
                transform: scale(.95);
            }
            @media (hover: hover) {
                .hamburger-btn:hover { background: var(--hm-tint); }
            }

            /* --- Menu panel (glass card) --- */
            .hamburger-menu {
                position: fixed;
                top: calc(72px + env(safe-area-inset-top, 0px));
                right: 16px;
                z-index: 9999;
                width: min(280px, calc(100vw - 32px));
                max-height: calc(100vh - 90px);
                overflow-y: auto;
                background: var(--hm-glass);
                -webkit-backdrop-filter: blur(14px) saturate(160%);
                backdrop-filter: blur(14px) saturate(160%);
                border: 1px solid var(--hm-glass-line);
                border-radius: 16px;
                padding: 8px;
                box-shadow: var(--hm-shadow);
                opacity: 0;
                visibility: hidden;
                transform: translateY(-8px);
                transition: opacity .15s, transform .15s, visibility .15s;
            }
            .hamburger-menu.active {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            /* browsers without backdrop-filter get a solid, readable fallback */
            @supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
                .hamburger-btn,
                .hamburger-menu {
                    background: var(--hm-card);
                    border-color: var(--hm-line);
                }
            }

            .menu-links {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            .menu-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 14px;
                border-radius: 10px;
                color: var(--hm-text);
                text-decoration: none;
                font-family: 'Barlow Condensed', sans-serif;
                font-size: 1.1rem;
                font-weight: 600;
                letter-spacing: .03em;
                text-transform: uppercase;
                transition: background .15s, color .15s;
            }
            .menu-item i {
                width: 1.4em;
                text-align: center;
                color: var(--hm-accent);
                transition: color .15s;
            }
            /* tinted highlight instead of a solid block, so the glass stays visible */
            .menu-item:active {
                background: var(--hm-tint-strong);
            }
            @media (hover: hover) {
                .menu-item:hover {
                    background: var(--hm-tint);
                }
            }
            .hamburger-btn:focus-visible,
            .menu-item:focus-visible {
                outline: 3px solid var(--hm-accent);
                outline-offset: 2px;
            }
        `;
        document.head.appendChild(style);

    // 4. Inject HTML with the new links
    const menuHTML = `
        <button class="hamburger-btn" id="menuBtn" aria-label="Menu">☰</button>
        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="menu-links">
                <a href="https://theattn.com" class="menu-item">
                    <i class="fas fa-home" aria-hidden="true"></i> TheAttn: News
                </a>
                <a href="https://shamsi.co.za" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-house-chimney" aria-hidden="true"></i> Properties
                </a>
                <a href="https://shamsi.co.za/ad" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-rectangle-ad" aria-hidden="true"></i> AdStudio
                </a>
                <a href="https://theattn.com/poster" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-image" aria-hidden="true"></i> Poster Maker
                </a>
                <a href="https://theattn.com/invoice" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-file-invoice-dollar" aria-hidden="true"></i> Invoice Maker
                </a>
                <a href="https://itesteye.com/letter" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-file-pen" aria-hidden="true"></i> Letter Maker
                </a>
                <a href="https://akhtar.co.za/search" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-magnifying-glass" aria-hidden="true"></i> File Search
                </a>
                <a href="https://gbps.me" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-gauge-high" aria-hidden="true"></i> Tools Home
                </a>
                <a href="https://akhtar.co.za/halal" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-moon" aria-hidden="true"></i> Halal Stay
                </a>
                <a href="https://theattn.com/chromia.html" class="menu-item">
                    <i class="fas fa-swatchbook" aria-hidden="true"></i> Chromia
                </a>
                <a href="https://gbps.me/map" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-globe" aria-hidden="true"></i> Map Tool
                </a>
                <a href="https://theattn.com/profit.html" class="menu-item">
                    <i class="fas fa-chart-line" aria-hidden="true"></i> Profit Calculator
                </a>
                <a href="https://itesteye.com/" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-eye" aria-hidden="true"></i> Optometry Tools
                </a>
                <a href="https://instagram.com/itesteye" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fab fa-instagram" aria-hidden="true"></i> Follow Akhtar
                </a>
            </div>
        </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = menuHTML;
    document.body.appendChild(wrapper);

    // 5. Add Event Listeners
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('hamburgerMenu');

    function closeMenu() {
        menu.classList.remove('active');
        btn.classList.remove('active');
        btn.innerHTML = '☰';
    }

    function toggleMenu(e) {
        if (e) e.stopPropagation();
        menu.classList.toggle('active');
        btn.classList.toggle('active');
        btn.innerHTML = menu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '☰';
    }

    btn.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });

    // Close menu on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });

    // Close menu when a same-tab link is clicked
    menu.querySelectorAll('.menu-item').forEach(link => {
        link.addEventListener('click', function() {
            if (this.getAttribute('target') !== '_blank') closeMenu();
        });
    });
})();

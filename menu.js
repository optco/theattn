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

    // 3. Inject CSS
    const style = document.createElement('style');
    style.textContent = `
        .hamburger-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            background: rgba(255, 255, 255, 0.75);
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            padding: 10px 14px;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            backdrop-filter: blur(8px);
            color: rgba(30, 30, 40, 0.95);
        }
        .hamburger-btn:hover {
            background: rgba(255, 255, 255, 0.95);
            transform: translateY(-1px);
        }
        .hamburger-btn.active {
            background: rgba(59, 130, 246, 0.1);
            border-color: rgba(59, 130, 246, 0.3);
            color: #2563eb;
        }
        .hamburger-menu {
            position: fixed;
            top: 0;
            right: -320px;
            width: 280px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(12px);
            box-shadow: -4px 0 24px rgba(0,0,0,0.1);
            z-index: 9999;
            transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding-top: 80px;
            border-left: 1px solid rgba(255, 255, 255, 0.5);
            overflow-y: auto;
        }
        .hamburger-menu.active {
            right: 0;
        }
        .menu-links {
            display: flex;
            flex-direction: column;
            padding: 0 16px 24px 16px;
            gap: 8px;
        }
        .menu-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 14px 16px;
            color: rgba(30, 30, 40, 0.95);
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            border-radius: 8px;
            transition: all 0.2s ease;
        }
        .menu-item:hover {
            background: rgba(59, 130, 246, 0.1);
            color: #2563eb;
            transform: translateX(4px);
        }
        .menu-item i {
            width: 20px;
            text-align: center;
            font-size: 1.1rem;
        }
        @media (max-width: 768px) {
            .hamburger-menu {
                width: 100%;
                right: -100%;
            }
        }
    `;
    document.head.appendChild(style);

    // 4. Inject HTML with the new links
    const menuHTML = `
        <button class="hamburger-btn" id="menuBtn" aria-label="Menu">☰</button>
        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="menu-links">
                <a href="/" class="menu-item">
                    <i class="fas fa-home" aria-hidden="true"></i> Home
                </a>
                <a href="https://shamsi.co.za" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-house-chimney" aria-hidden="true"></i> Properties
                </a>
                <a href="https://shamsi.co.za/ad" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-rectangle-ad" aria-hidden="true"></i> AdStudio
                </a>
                <a href="https://akhtar.co.za/poster" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-image" aria-hidden="true"></i> Poster Maker
                </a>
                <a href="https://theattn.com/invoice" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-file-invoice-dollar" aria-hidden="true"></i> Invoice Maker
                </a>
                <a href="https://itesteye.com/sicknote" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-file-pen" aria-hidden="true"></i> SickNote Maker
                </a>
                <a href="https://akhtar.co.za/search" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-magnifying-glass" aria-hidden="true"></i> File Search
                </a>
                <a href="https://gbps.me" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-gauge-high" aria-hidden="true"></i> Speed Test
                </a>
                <a href="https://akhtar.co.za/halal" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-moon" aria-hidden="true"></i> Halal Stay
                </a>
                <a href="chromia.html" class="menu-item">
                    <i class="fas fa-swatchbook" aria-hidden="true"></i> Chromia
                </a>
                <a href="https://gbps.me/map" target="_blank" rel="noopener noreferrer" class="menu-item">
                    <i class="fas fa-globe" aria-hidden="true"></i> Map Tool
                </a>
                <a href="profit.html" class="menu-item">
                    <i class="fas fa-chart-line" aria-hidden="true"></i> Profit Calculator
                </a>
                <a href="https://itesteye.com/optometry" target="_blank" rel="noopener noreferrer" class="menu-item">
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

    function toggleMenu(e) {
        if (e) e.stopPropagation();
        menu.classList.toggle('active');
        btn.classList.toggle('active');
        btn.innerHTML = menu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '☰';
    }

    btn.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('active');
            btn.classList.remove('active');
            btn.innerHTML = '☰';
        }
    });

    // Close menu when a same-tab link is clicked
    const links = menu.querySelectorAll('.menu-item');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (!this.getAttribute('target') || this.getAttribute('target') !== '_blank') {
                menu.classList.remove('active');
                btn.classList.remove('active');
                btn.innerHTML = '☰';
            }
        });
    });
})();

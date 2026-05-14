/**
 * Dynamic Agent Profile Loader
 * Fetches agent data from JSON and populates the template
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  initThemeToggle();
  
  // Load agent data
  loadAgentData();
});

/**
 * Initialize theme toggle with localStorage persistence
 */
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/**
 * Extract agent name from URL path
 * Supports: /javeria, /agent/javeria, ?agent=javeria
 */
// In agent.js, replace getAgentName() with:
function getAgentName() {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash) return hash;
  const query = new URLSearchParams(window.location.search);
  return query.get('d') || 'javeria'; // fallback
}

/**
 * Load and render agent data from JSON
 */
async function loadAgentData() {
  const agentName = getAgentName();
  const jsonPath = `agents/${agentName}.json`;
  
  try {
    const response = await fetch(jsonPath);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    const data = await response.json();
    renderAgent(data);
    
    // Update page title
    document.title = `${data..name} | Evolate Properties`;
    
  } catch (error) {
    console.error('Failed to load agent data:', error);
    renderError(agentName);
  }
}

/**
 * Render agent data to DOM
 */
function renderAgent(data) {
  // Profile section
  document.getElementById('agentName').textContent = data.agent.name;
  document.getElementById('agentTitle').textContent = data.agent.title;
  document.getElementById('agentBadge').innerHTML = `<i class="fas fa-award"></i>${data.agent.badge}`;
  document.getElementById('avatarLink').href = data.agent.shortLinkUrl || '#';
  document.getElementById('shortLink').href = data.agent.shortLinkUrl || '#';
  document.getElementById('shortLinkText').textContent = data.agent.shortLink;
  
  // Avatar with CSS variable fallback
  const avatar = document.getElementById('avatar');
  avatar.style.setProperty('--avatar-url', `url('${data.agent.avatar}')`);
  
  // Social links
  const socialContainer = document.getElementById('socialLinks');
  socialContainer.innerHTML = data.socials.map(social => `
    <a class="social-btn ${social.platform}" href="${social.url}" target="_blank" rel="noopener" aria-label="${social.platform}">
      <i class="${social.icon}"></i>
    </a>
  `).join('');
  
  // Mobile links (vertical list)
  const mobileContainer = document.getElementById('mobileLinks');
  mobileContainer.innerHTML = data.listings.map((item, index) => `
    <a class="link-btn" href="${item.url}" target="_blank" style="animation-delay: ${0.4 + index * 0.1}s">
      <i class="${item.icon || 'fas fa-external-link-alt'}"></i>
      <span>${item.title}</span>
    </a>
  `).join('');
  
  // Desktop cards (grid)
  const desktopContainer = document.getElementById('desktopCards');
  desktopContainer.innerHTML = data.listings.map((item, index) => `
    <a class="link-card" href="${item.url}" target="_blank" style="animation-delay: ${0.05 + index * 0.05}s">
      <div class="card-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="card-content">
        <h3><i class="${item.icon || 'fas fa-link'}"></i>${item.title}</h3>
        <p>${item.description}</p>
        <span class="card-cta">View → <i class="fas fa-arrow-right"></i></span>
      </div>
    </a>
  `).join('');
  
  // Company footer
  document.getElementById('companyLogo').src = data.company.logo;
  document.getElementById('companyLink').href = data.company.url;
  document.getElementById('companyName').href = data.company.url;
  document.getElementById('companyName').textContent = data.company.name;
  document.getElementById('companyTagline').textContent = data.company.tagline;
  document.getElementById('copyright').textContent = data.company.copyright;
}

/**
 * Render error state for missing/invalid agent
 */
function renderError(agentName) {
  document.getElementById('agentName').textContent = 'Agent Not Found';
  document.getElementById('agentTitle').textContent = `No profile exists for "${agentName}"`;
  document.getElementById('agentBadge').innerHTML = '<i class="fas fa-exclamation-triangle"></i>Check URL';
  document.getElementById('avatar').style.backgroundImage = 'none';
  document.getElementById('avatar').innerHTML = '<i class="fas fa-user" style="font-size:3rem;color:var(--text-muted)"></i>';
  document.getElementById('shortLink').style.display = 'none';
  document.getElementById('socialLinks').innerHTML = '';
  document.getElementById('mobileLinks').innerHTML = '<p style="text-align:center;color:var(--text-muted)">Contact support to create this profile.</p>';
  document.getElementById('desktopCards').innerHTML = '';
}

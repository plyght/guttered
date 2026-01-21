const routes = {
  home: `
    <div class="next-show">
      <div class="show-label">Next Show</div>
      <div class="show-date">02.15.26</div>
      <div class="show-venue">Legacy HiFi — Washington, DC</div>
      <a href="#" class="show-link">Tickets →</a>
    </div>
  `,
  listen: `
    <div class="listen-container">
      <div class="streaming-grid">
        <div class="streaming-card">
          <div class="streaming-embed">
            <div class="embed-placeholder">
              <div class="embed-icon">♪</div>
              <div class="embed-text">Spotify Player</div>
            </div>
          </div>
        </div>
        <div class="streaming-links">
          <a href="#" class="platform-link">Spotify</a>
          <a href="#" class="platform-link">Bandcamp</a>
          <a href="#" class="platform-link">Apple Music</a>
          <a href="#" class="platform-link">SoundCloud</a>
          <a href="#" class="platform-link">YouTube</a>
        </div>
      </div>
    </div>
  `,
  shows: `
    <div class="shows-container">
      <div class="shows-list">
        <div class="show-item">
          <div class="show-date-large">02.15.26</div>
          <div class="show-info">
            <div class="show-venue-name">Legacy HiFi</div>
            <div class="show-city">Washington, DC</div>
            <div class="show-lineup">w/ Total Wife, Mila Culpa</div>
          </div>
          <a href="#" class="show-ticket">Tickets</a>
        </div>
        <div class="show-item">
          <div class="show-date-large">03.08.26</div>
          <div class="show-info">
            <div class="show-venue-name">The Basement</div>
            <div class="show-city">Baltimore, MD</div>
            <div class="show-lineup">w/ Brain Tourniquet, Virtua DX</div>
          </div>
          <a href="#" class="show-ticket">Tickets</a>
        </div>
        <div class="show-item">
          <div class="show-date-large">03.22.26</div>
          <div class="show-info">
            <div class="show-venue-name">DIY Space</div>
            <div class="show-city">Philadelphia, PA</div>
            <div class="show-lineup">w/ Line of Sight, Expiration Date</div>
          </div>
          <a href="#" class="show-ticket">Tickets</a>
        </div>
        <div class="show-item">
          <div class="show-date-large">04.12.26</div>
          <div class="show-info">
            <div class="show-venue-name">Union Hall</div>
            <div class="show-city">Brooklyn, NY</div>
            <div class="show-lineup">w/ Reaper's Gong, Janedriver</div>
          </div>
          <a href="#" class="show-ticket">Tickets</a>
        </div>
      </div>
    </div>
  `,
  contact: `
    <div class="contact-container">
      <div class="contact-content">
        <div class="contact-section">
          <div class="contact-label">Email</div>
          <a href="mailto:contact@guttered.band" class="contact-link">contact@guttered.band</a>
        </div>
        <div class="contact-section">
          <div class="contact-label">Social</div>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Bandcamp</a>
            <a href="#" class="social-link">Spotify</a>
          </div>
        </div>
        <div class="contact-section">
          <div class="contact-label">Mailing List</div>
          <form class="mailing-form">
            <input type="email" placeholder="your@email.com" class="email-input" required />
            <button type="submit" class="submit-btn">Subscribe</button>
          </form>
        </div>
        <div class="contact-section">
          <div class="contact-label">Booking</div>
          <a href="mailto:booking@guttered.band" class="contact-link">booking@guttered.band</a>
        </div>
      </div>
    </div>
  `
};

const titles = {
  home: 'Guttered',
  listen: 'Listen — Guttered',
  shows: 'Shows — Guttered',
  contact: 'Contact — Guttered'
};

function navigate(route) {
  const app = document.getElementById('app');
  app.innerHTML = routes[route] || routes.home;
  document.title = titles[route] || titles.home;
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.route === route) {
      link.classList.add('active');
    }
  });
}

const BASE_PATH = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '' : '/guttered';

function router() {
  const path = window.location.pathname;
  const pathWithoutBase = path.replace(BASE_PATH, '') || '/';
  const route = pathWithoutBase === '/' ? 'home' : pathWithoutBase.slice(1).replace(/\/$/, '');
  navigate(route);
}

document.addEventListener('click', e => {
  const logoContainer = document.querySelector('.nav-logo-container');
  const isLogoClick = e.target.closest('.nav-logo-container') === logoContainer;
  const isNavLink = e.target.matches('.nav-link');
  
  if (isLogoClick && !isNavLink) {
    logoContainer.classList.toggle('active');
    return;
  }
  
  if (isNavLink) {
    e.preventDefault();
    const route = e.target.dataset.route;
    const path = route === 'home' ? (BASE_PATH || '/') : `${BASE_PATH}/${route}`;
    window.history.pushState({}, '', path);
    navigate(route);
    logoContainer.classList.remove('active');
    return;
  }
  
  if (!isLogoClick) {
    logoContainer.classList.remove('active');
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);

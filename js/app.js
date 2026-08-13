document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('portfolio-page')) {
    injectBio();
    injectStats();
    injectSkills();
    injectProjects();
    injectContact();
    animateSkillBars();
    
    // Initialise l'animation au scroll et le compteur de visites
    initScrollReveal();
    initVisitorCounter();
  }

  initNavbar();
  initMobileMenu();
});

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
}

function injectBio() {
  const data = portfolioData.bio;
  const container = document.getElementById('bio-content');
  if (!container) return;

  container.innerHTML = `
    <h3>Who am I?</h3>
    <p>${data.short}</p>
    <p>${data.long.replace(/\n/g, '<br>')}</p>
    <div class="bio-tags">
      ${data.tags.map(tag => `<span class="bio-tag">${tag}</span>`).join('')}
    </div>
  `;
}

function injectStats() {
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-label">${stat.label}</div>
      <div class="stat-number">${stat.number}</div>
      <div class="stat-desc">${stat.desc}</div>
    </div>
  `).join('');
}

function injectSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-percent">${skill.percent}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-width="${skill.percent}%"></div>
      </div>
    </div>
  `).join('');
}

function animateSkillBars() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const bars = entry.target.querySelectorAll('.skill-progress');
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
      } else {
        bars.forEach(bar => {
          bar.style.width = '0%';
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillsSection);
}

function injectProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        ${project.status ? `
          <div class="project-status">
            ${project.status}<span class="dots"><span>.</span><span>.</span><span>.</span></span>
          </div>
        ` : ''}
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.live}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Live</a>
          <a href="${project.code}" target="_blank" rel="noopener"><i class="fab fa-github"></i> Code</a>
        </div>
      </div>
    </div>
  `).join('');
}

function injectContact() {
  const data = portfolioData.contact;
  const infoContainer = document.getElementById('contact-info');
  if (!infoContainer) return;

  infoContainer.innerHTML = `
    <h3>Get in touch</h3>
    <p>Have a project idea or want to collaborate? Feel free to reach out.</p>
    
    <div class="contact-item">
      <i class="fas fa-envelope"></i>
      <span>${data.email}</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-phone"></i>
      <span>${data.phone}</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-map-marker-alt"></i>
      <span>${data.location}</span>
    </div>

    <div class="social-links">
      ${data.socials.map(s => `
        <a href="${s.url}" title="${s.name}" target="_blank" rel="noopener">
          <i class="${s.icon}"></i>
        </a>
      `).join('')}
    </div>
  `;
}

// --- Animation au Scroll (Bidirectionnelle + Support Reload) ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.section-header, .bio-grid, .stat-card, .skill-card, .project-card, .contact-grid, .tech-bar'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -20px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// --- Compteur de Visites en Ligne ---
function initVisitorCounter() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  const counterDiv = document.createElement('div');
  counterDiv.className = 'visitor-counter';
  counterDiv.innerHTML = `
    <i class="fas fa-eye"></i> Visites : <span id="visit-count">...</span>
  `;
  footer.appendChild(counterDiv);

  const namespace = "darkshadow-portfolio.dev"; 
  const key = "visits";

  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      const countSpan = document.getElementById('visit-count');
      if (countSpan && data.value) {
        countSpan.textContent = data.value.toLocaleString();
      }
    })
    .catch(() => {
      const countSpan = document.getElementById('visit-count');
      if (countSpan) countSpan.textContent = "1";
    });
}

// --- Gestionnaire du formulaire de contact ---
document.addEventListener('submit', (e) => {
  if (e.target.classList.contains('contact-form')) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    const original = btn.textContent;
    btn.textContent = 'Message sent ✓';
    btn.style.background = '#22c55e';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.style.color = '';
      e.target.reset();
    }, 2500);
  }
});
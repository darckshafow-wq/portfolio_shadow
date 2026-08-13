/* ============================================================
   DARK SHADOW - PORTFOLIO ENGINE (js/app.js)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Initialisation si on est sur la page portfolio ou si la grille existe
  if (document.body.classList.contains('portfolio-page') || document.getElementById('projects-grid')) {
    injectBio();
    injectStats();
    injectSkills();
    injectContact();

    // Gestion dynamique des projets et de la modale
    initProjectsAndModal();

    // Initialisation des animations et compteurs
    initScrollReveal();
    animateSkillBars();
    initAnimatedCounters();
    initVisitorCounter();
  }

  // Navbar & Menu Mobile
  initNavbar();
  initMobileMenu();
});

/* ============================================================
   NAVBAR & MENU MOBILE
   ============================================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isActive = links.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    
    const icon = toggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars', !isActive);
      icon.classList.toggle('fa-times', isActive);
    }
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  });
}

/* ============================================================
   PROJETS & POPUP MODALE (INJECTION DYNAMIQUE 100% CLIENT-SIDE)
   ============================================================ */
function initProjectsAndModal() {
  const projectsGrid = document.getElementById('projects-grid');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-dynamic-content') || modal?.querySelector('.modal-container');
  const closeModalBtn = document.getElementById('modal-close-btn');

  // Supporte indifféremment portfolioData.projects ou projectsData
  const projectsList = (typeof portfolioData !== 'undefined' && portfolioData.projects) 
    ? portfolioData.projects 
    : (typeof projectsData !== 'undefined' ? projectsData : null);

  if (!projectsGrid || !projectsList) return;

  // 1. Génération dynamique des cartes de la grille avec badge de statut
  projectsGrid.innerHTML = projectsList.map(project => {
    const isDeployed = project.status && project.status.toLowerCase().includes('déployé');
    const statusClass = isDeployed ? 'status-deployed' : 'status-pending';

    return `
      <div class="project-card" data-id="${project.id}">
        <div class="project-image">
          <img src="${project.image || 'asset/image.jpeg'}" alt="${project.title || 'Projet'}" loading="lazy">
          
          <!-- Badge de Statut sur l'image -->
          ${project.status ? `<span class="project-status-badge ${statusClass}">${project.status}</span>` : ''}
        </div>
        <div class="project-content">
          <span class="project-badge">${project.badge || project.type || 'Projet'}</span>
          <h3 class="project-title">${project.title || 'Titre du projet'}</h3>
          <p class="project-desc">${project.subtitle || project.shortDesc || ''}</p>
          <div class="project-tags">
            ${project.tags ? project.tags.map(t => `<span class="project-tag">${t}</span>`).join('') : ''}
          </div>
          <button class="btn-open-modal" type="button" aria-label="Détails du projet ${project.title || ''}">
            Détails du projet <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (!modal || !modalBody) return;

  // 2. Fonction d'ouverture & d'injection du contenu dans la modale
  function openModal(projectId) {
    const project = projectsList.find(p => String(p.id) === String(projectId));
    if (!project) return;

    modalBody.innerHTML = `
      <div class="project-detail-wrapper">
        
        <!-- En-tête -->
        <header class="detail-header">
          <div class="detail-badge-group">
            <span class="detail-badge">${project.badge || project.type || 'Projet'}</span>
            ${project.status ? `<span class="detail-status">${project.status}</span>` : ''}
          </div>
          <h1 class="detail-title">${project.title || ''}</h1>
          ${project.subtitle ? `<p class="detail-subtitle">${project.subtitle}</p>` : ''}
        </header>

        <!-- Aperçu Média -->
        <div class="detail-banner">
          <img src="${project.image || 'asset/image.jpeg'}" alt="${project.title || 'Aperçu'}" class="detail-img">
        </div>

        <!-- Métadonnées -->
        <div class="detail-meta-grid">
          <div class="meta-box">
            <span class="meta-title">Rôle</span>
            <span class="meta-value">${project.role || 'Développeur'}</span>
          </div>
          <div class="meta-box">
            <span class="meta-title">Type</span>
            <span class="meta-value">${project.type || 'Application Web'}</span>
          </div>
          <div class="meta-box meta-full">
            <span class="meta-title">Technologies Clés</span>
            <div class="tech-tags">
              ${(project.tags || project.techs) ? (project.tags || project.techs).map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
            </div>
          </div>
        </div>

        <!-- Contenu Principal -->
        <div class="detail-body">
          <section class="detail-section">
            <h2><i class="fa-solid fa-circle-info"></i> À propos du projet</h2>
            <p>${project.about || project.fullDesc || project.shortDesc || 'Aucune description fournie.'}</p>
          </section>

          ${project.features && project.features.length > 0 ? `
            <section class="detail-section">
              <h2><i class="fa-solid fa-list-check"></i> Fonctionnalités Clés</h2>
              <ul class="detail-features">
                ${project.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}
              </ul>
            </section>
          ` : ''}
        </div>

        <!-- Liens / Actions -->
        <footer class="detail-actions">
          ${(project.live && project.live !== '#') || (project.demoUrl && project.demoUrl !== '#') ? `
            <a href="${project.live || project.demoUrl}" class="btn-primary" target="_blank" rel="noopener">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Démo En Ligne
            </a>
          ` : ''}
          ${(project.code && project.code !== '#') || (project.githubUrl && project.githubUrl !== '#') ? `
            <a href="${project.code || project.githubUrl}" class="btn-secondary" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i> Code Source
            </a>
          ` : ''}
        </footer>

      </div>
    `;

    // Afficher la modale & bloquer le défilement
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Événement Clic sur la grille
  projectsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.project-card');
    if (card) {
      const projectId = card.dataset.id;
      openModal(projectId);
    }
  });

  // Gestion des fermetures
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ============================================================
   INJECTIONS ANNEXES (BIO, STATS, SKILLS, CONTACT)
   ============================================================ */
function injectBio() {
  if (typeof portfolioData === 'undefined' || !portfolioData.bio) return;
  const data = portfolioData.bio;
  const container = document.getElementById('bio-content');
  if (!container) return;

  container.innerHTML = `
    <h3>Who am I?</h3>
    <p>${data.short || ''}</p>
    <p>${data.long ? data.long.replace(/\n/g, '<br>') : ''}</p>
    <div class="bio-tags">
      ${data.tags ? data.tags.map(tag => `<span class="bio-tag">${tag}</span>`).join('') : ''}
    </div>
  `;
}

function injectStats() {
  if (typeof portfolioData === 'undefined' || !portfolioData.stats) return;
  const container = document.getElementById('stats-grid');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(stat => {
    const strVal = String(stat.number || '');
    const hasDigits = /\d/.test(strVal);

    if (hasDigits) {
      const rawNumber = parseInt(strVal.replace(/[^0-9]/g, ''), 10) || 0;
      const suffix = strVal.replace(/[0-9]/g, '');

      return `
        <div class="stat-card">
          <div class="stat-label">${stat.label}</div>
          <div class="stat-number" data-target="${rawNumber}" data-suffix="${suffix}">0</div>
          <div class="stat-desc">${stat.desc || ''}</div>
        </div>
      `;
    } else {
      return `
        <div class="stat-card">
          <div class="stat-label">${stat.label}</div>
          <div class="stat-number static-stat">${strVal}</div>
          <div class="stat-desc">${stat.desc || ''}</div>
        </div>
      `;
    }
  }).join('');
}

function injectSkills() {
  if (typeof portfolioData === 'undefined' || !portfolioData.skills) return;
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-percent">${skill.percent}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-progress="${skill.percent}"></div>
      </div>
    </div>
  `).join('');
}

function injectContact() {
  if (typeof portfolioData === 'undefined' || !portfolioData.contact) return;
  const data = portfolioData.contact;
  const infoContainer = document.getElementById('contact-info');
  if (!infoContainer) return;

  infoContainer.innerHTML = `
    <h3>Prenez contact</h3>
    <p>Un projet à développer ou une question ? N'hésitez pas à m'envoyer un message.</p>
    <div class="contact-item">
      <i class="fas fa-envelope"></i>
      <span>${data.email || ''}</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-map-marker-alt"></i>
      <span>${data.location || ''}</span>
    </div>
    <div class="social-links">
      ${data.socials ? data.socials.map(s => `
        <a href="${s.url}" title="${s.name}" target="_blank" rel="noopener">
          <i class="${s.icon}"></i>
        </a>
      `).join('') : ''}
    </div>
  `;
}

/* ============================================================
   SCROLL REVEAL & ANIMATIONS
   ============================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    'section.reveal, .tech-bar, .stat-card, .skill-card, .project-card, .highlight-item'
  );

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

function animateSkillBars() {
  const skillsSection = document.getElementById('skills') || document.getElementById('skills-grid');
  if (!skillsSection) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-progress');
        bars.forEach(bar => {
          const val = bar.dataset.progress || '0';
          bar.style.width = val.includes('%') ? val : `${val}%`;
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(skillsSection);
}

function initAnimatedCounters() {
  const statsSection = document.getElementById('stats') || document.getElementById('stats-grid');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numbers = entry.target.querySelectorAll('.stat-number:not(.static-stat)');
        numbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          const duration = 1500;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            counter.textContent = `${prefix}${current}${suffix}`;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              counter.textContent = `${prefix}${target}${suffix}`;
            }
          }

          requestAnimationFrame(update);
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(statsSection);
}

/* ============================================================
   VISITOR COUNTER & FORM
   ============================================================ */
function initVisitorCounter() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  let counterDiv = footer.querySelector('.visitor-counter');
  if (!counterDiv) {
    counterDiv = document.createElement('div');
    counterDiv.className = 'visitor-counter';
    counterDiv.style.marginTop = '0.8rem';
    counterDiv.style.fontSize = '0.85rem';
    counterDiv.style.color = 'var(--text-muted, #a1a1aa)';
    counterDiv.innerHTML = `<i class="fas fa-eye"></i> Visites : <span id="visit-count">...</span>`;
    footer.appendChild(counterDiv);
  }

  const namespace = "darkshadow_portfolio";
  const key = "visits";

  fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
    .then(res => res.json())
    .then(data => {
      const countSpan = document.getElementById('visit-count');
      if (countSpan && data.count) {
        countSpan.textContent = Number(data.count).toLocaleString();
      }
    })
    .catch(() => {
      let localCount = parseInt(localStorage.getItem('page_visits') || '120', 10) + 1;
      localStorage.setItem('page_visits', localCount.toString());
      const countSpan = document.getElementById('visit-count');
      if (countSpan) countSpan.textContent = localCount.toLocaleString();
    });
}

document.addEventListener('submit', (e) => {
  if (e.target.classList.contains('contact-form')) {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    if (!btn) return;
    
    const originalText = btn.textContent;
    btn.textContent = 'Message envoyé ✓';
    btn.style.background = '#22c55e';
    btn.style.color = '#ffffff';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      e.target.reset();
    }, 2500);
  }
});
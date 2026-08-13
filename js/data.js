/* ============================================================
   DARK SHADOW - PORTFOLIO DATA (js/data.js)
   ============================================================ */

const portfolioData = {
  bio: {
    short: "Étudiant en Informatique et Développement d'Applications, passionné par la création de solutions logicielles modernes et performantes.",
    long: "Spécialisé dans la conception d'applications web, mobiles et desktop, je combine une rigueur d'architecture logicielle avec une interface utilisateur soignée.",
    tags: ["Application Development", "Full-Stack", "Mobile First", "Clean Code", "Linux Environments"]
  },

  stats: [
    { label: "PROJETS DÉPLOYÉS", number: "12+", desc: "Applications web et mobiles fonctionnelles" },
    { label: "STACK PRINCIPALE", number: "6+", desc: "Technologies maîtrisées au quotidien" },
    { label: "ENVIRONNEMENTS", number: "Linux", desc: "Workflows optimisés & sur-mesure" }
  ],

  skills: [
    { name: "Flutter & Cross-Platform", percent: 88 },
    { name: "Python & FastAPI", percent: 85 },
    { name: "PHP (Native & Modern)", percent: 82 },
    { name: "PostgreSQL & MySQL", percent: 80 },
    { name: "JavaScript & Frontend", percent: 78 },
    { name: "Linux Administration", percent: 85 }
  ],

  // PROJETS AVEC STATUS ET TYPE INTÉGRÉS POUR L'INJECTION DYNAMIQUE
  projects: [
    {
      id: "market-piece",
      title: "Market_piece",
      type: "E-Commerce / SaaS",
      status: "En développement...",
      badge: "E-Commerce & BDD",
      subtitle: "Plateforme e-commerce avec catalogue interactif et base de données conteneurisée.",
      role: "Lead Développeur / DB Architect",
      image: "asset/image.jpeg",
      tags: ["PHP", "PostgreSQL", "Docker", "JavaScript"],
      about: "<strong>Market_piece</strong> est une plateforme de marché conçue pour fluidifier la navigation dans un catalogue de produits volumineux. Le projet intègre une gestion optimisée des requêtes de recherche et repose sur un environnement sous conteneurs pour garantir des performances et un déploiement rapides.",
      features: [
        "Catalogue interactif avec filtres multi-critères en temps réel.",
        "Conteneurisation de la base de données PostgreSQL via Docker.",
        "Architecture logicielle modulaire garantissant la sécurité des données.",
        "Interface utilisateur totalement adaptative (mobile & desktop)."
      ],
      live: "#",
      code: "#"
    },
    {
      id: "garage-2000",
      title: "Garage 2000",
      type: "Application Multiplateforme / SaaS",
      status: "En développement...",
      badge: "Desktop & Mobile App",
      subtitle: "Suite applicative multi-appareil centralisée pour le suivi d'atelier et diagnostic automobile.",
      role: "Software Architect & Lead Dev",
      image: "asset/image.jpeg",
      tags: ["Flutter", "FastAPI", "PostgreSQL"],
      about: "<strong>Garage 2000</strong> centralise l'ensemble des flux de travail d'un atelier d'entretien mécanique : enregistrement des véhicules, diagnostics techniques automatisés, devis et gestion du planning de réparations.",
      features: [
        "Interface Flutter unifiée pour postes Desktop et appareils mobiles.",
        "Backend REST FastAPI sécurisé communiquant avec PostgreSQL.",
        "Module de diagnostic rapide et édition de fiches d'intervention.",
        "Synchronisation multi-utilisateurs en temps réel."
      ],
      live: "#",
      code: "#"
    },
    {
      id: "freeflow",
      title: "FreeFlow",
      type: "SaaS",
      status: "Déployé",
      badge: "SaaS / Management",
      subtitle: "Plateforme de suivi des jalons de prestations indépendantes et sécurisation financière.",
      role: "Fullstack Developer",
      image: "asset/image.jpeg",
      tags: ["PHP", "MySQL", "JavaScript"],
      about: "<strong>FreeFlow</strong> simplifie la relation entre freelances et clients en découpant les projets en jalons contrôlés. Le paiement est validé étape par étape selon l'avancement réel des livrables.",
      features: [
        "Découpage dynamique des contrats en jalons de livraison.",
        "Tableau de bord interactif en JavaScript réactif.",
        "Suivi rigoureux des statuts de transaction en PHP / MySQL.",
        "Notifications et validations d'étapes en temps réel."
      ],
      live: "#",
      code: "#"
    },
    {
      id: "secured-event-tickets",
      title: "Secured Event Tickets",
      type: "Application Web / Sécurité",
      status: "Déployé",
      badge: "Cybersecurity / Web",
      subtitle: "Plateforme de billetterie sécurisée avec validation en temps réel et haute résilience.",
      role: "Backend & Security Dev",
      image: "asset/image.jpeg",
      tags: ["Python", "PHP", "Security"],
      about: "<strong>Secured Event Tickets</strong> répond aux problématiques de fraude et d'affluence lors d'événements. Elle garantit l'authenticité de chaque billet électronique grâce à des algorithmes de vérification instantanée.",
      features: [
        "Génération et contrôle de billets cryptographiquement uniques.",
        "Traitement fluide des requêtes lors des pics d'affluence.",
        "Prévention contre le double accès et la réutilisation de QR codes.",
        "Validation en temps réel via terminal d'accès mobile."
      ],
      live: "#",
      code: "#"
    },
    {
      id: "afrojapon",
      title: "AfroJapon",
      type: "Site Vitrine / Média",
      status: "Déployé",
      badge: "Portail Média / Web UI",
      subtitle: "Portail média interculturel avec cartes d'activités dynamiques et flux d'actualités.",
      role: "Frontend Developer",
      image: "asset/image.jpeg",
      tags: ["Web UI", "JavaScript", "CSS3"],
      about: "<strong>AfroJapon</strong> met en valeur les échanges culturels à travers un portail média interactif, présentant des actualités, événements et médias sous forme de cartes fluides et réactives.",
      features: [
        "Agencement UI moderne en grille de cartes dynamiques.",
        "Intégration de flux média en direct avec chargement optimisé.",
        "Animations fluides en CSS3 & JavaScript pur.",
        "Design mobile-first très performant."
      ],
      live: "#",
      code: "#"
    },
    {
      id: "system-gestion-scolaire",
      title: "System de Gestion Scolaire",
      type: "Application Web",
      status: "Déployé",
      badge: "Dashboard / Admin",
      subtitle: "Plateforme d'administration avec routeur d'accès personnalisé et modules statistiques.",
      role: "Fullstack Developer",
      image: "asset/image.jpeg",
      tags: ["PHP", "SQL", "Dashboard"],
      about: "Plateforme complète destinée aux établissements scolaires pour piloter la scolarité : gestion des élèves, inscriptions, suivi des notes, présence et génération d'indicateurs de performance.",
      features: [
        "Routeur d'accès sur-mesure pour le contrôle des rôles et droits.",
        "Tableaux de bord statistiques avec compteurs d'informations.",
        "Couche d'abstraction de données pour sécuriser les requêtes SQL.",
        "Gestion centralisée des récapitulatifs de notes et bulletins."
      ],
      live: "#",
      code: "#"
    }
  ],

  contact: {
    email: "contact@darkshadow.dev",
    phone: "+225 00 00 00 00 00",
    location: "Côte d'Ivoire",
    socials: [
      { name: "GitHub", icon: "fab fa-github", url: "https://github.com" },
      { name: "Discord", icon: "fab fa-discord", url: "https://discord.com" },
      { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "https://linkedin.com" }
    ]
  }
};
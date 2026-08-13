/* ============================================================
   DARK SHADOW - PORTFOLIO DATA (js/data.js)
   ============================================================ */

const portfolioData = {
  // Informations personnelles et biographie
  bio: {
    short: "Étudiant en Informatique et Développement d'Applications, passionné par la création de solutions logicielle modernes et performantes.",
    long: "Spécialisé dans la conception d'applications web, mobiles et desktop, je combine une rigueur d'architecture logicielle avec une interface utilisateur soignée. Mon objectif est d'apporter de la valeur concrète à travers des systèmes scalables et réactifs.",
    tags: [
      "Application Development",
      "Full-Stack",
      "Mobile First",
      "Clean Code",
      "Linux Environments"
    ]
  },

  // Statistiques et accomplissements (Section My Earnings / Impact)
  stats: [
    {
      label: "PROJETS DÉPLOYÉS",
      number: "12+",
      desc: "Applications web et mobiles fonctionnelles"
    },
    {
      label: "STACK PRINCIPALE",
      number: "6+",
      desc: "Technologies maîtrisées au quotidien"
    },
    {
      label: "ENVIRONNEMENTS",
      number: "Linux",
      desc: "Workflows optimisés & sur-mesure"
    }
  ],

  // Compétences techniques (Niveaux en %)
  skills: [
    { name: "Flutter & Cross-Platform", percent: 88 },
    { name: "Python & FastAPI", percent: 85 },
    { name: "PHP (Native & Modern)", percent: 82 },
    { name: "PostgreSQL & MySQL", percent: 80 },
    { name: "JavaScript & Frontend", percent: 78 },
    { name: "Linux Administration", percent: 85 }
  ],

  // Projets mis en avant
  projects: [
    {
      title: "Garage 2000",
      description: "Suite applicative multi-appareil centralisée permettant la gestion fluide du flux de travail, du diagnostic automobile et du planning de réparations.",
      image: "asset/image.jpeg",
      status: "In Development",
      tags: ["Flutter", "FastAPI", "PostgreSQL"],
      live: "#",
      code: "#"
    },
    {
      title: "FreeFlow",
      description: "Plateforme de suivi des jalons de prestations indépendantes avec gestion sécurisée des statuts de transactions.",
      image: "asset/image.jpeg",
      status: null,
      tags: ["PHP", "MySQL", "JavaScript"],
      live: "#",
      code: "#"
    },
    {
      title: "Market_piece",
      description: "Marketplace moderne avec catalogue de produits interactif et base de données conteneurisée pour des requêtes haute performance.",
      image: "asset/image.jpeg",
      status: null,
      tags: ["Docker", "PostgreSQL", "FastAPI"],
      live: "#",
      code: "#"
    },
    {
      title: "Secured Event Tickets",
      description: "Plateforme de billetterie sécurisée gérant la validation en temps réel des accès et le traitement des requêtes à fort trafic.",
      image: "asset/image.jpeg",
      status: null,
      tags: ["Python", "PHP", "Security"],
      live: "#",
      code: "#"
    },
    {
      title: "AfroJapon",
      description: "Portal média intégrant des flux en direct et une présentation dynamique sous forme de cartes d'activités communautaires.",
      image: "asset/image.jpeg",
      status: null,
      tags: ["Web UI", "JavaScript", "CSS3"],
      live: "#",
      code: "#"
    },
    {
      title: "System de Gestion Scolaire",
      description: "Plateforme d'administration avec routeur d'accès, modules statistiques et abstration de données pour la gestion d'établissements.",
      image: "asset/image.jpeg",
      status: null,
      tags: ["PHP", "SQL", "Dashboard"],
      live: "#",
      code: "#"
    }
  ],

  // Coordonnées de contact & réseaux sociaux
  contact: {
    email: "contact@darkshadow.dev",
    phone: "+225 00 00 00 00 00",
    location: "Côte d'Ivoire",
    socials: [
      {
        name: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com"
      },
      {
        name: "Discord",
        icon: "fab fa-discord",
        url: "https://discord.com"
      },
      {
        name: "LinkedIn",
        icon: "fab fa-linkedin-in",
        url: "https://linkedin.com"
      },
      {
        name: "Twitter / X",
        icon: "fab fa-x-twitter",
        url: "https://x.com"
      }
    ]
  }
};
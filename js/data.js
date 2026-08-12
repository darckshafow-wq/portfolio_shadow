// ========================================
// PORTFOLIO DATA - DACKE SHADOW / DEVELOPPEUR FULLSTACK
// ========================================

const portfolioData = {
  name: "Dacke Shadow",
  title: "Développeur Fullstack & Designer UI/UX",
  tagline: "Architecture • Développement Web & Mobile • Solutions Digitales",

  bio: {
    short: "Passionné par le code propre et les architectures scalables, je conçois des applications web et mobiles performantes, élégantes et centrées sur l'expérience utilisateur.",
    long: `Étudiant et développeur Fullstack, je suis spécialisé dans la conception d'applications modernes, d'architectures orientées performances et d'interfaces fluides.
    
Mon approche combine la rigueur de la modélisation (Merise, UML), la maîtrise des technologies modernes (Flutter, PHP, Python, PostgreSQL) et un soin particulier apporté au design et à l'ergonomie.`,
    tags: ["Full Stack", "Flutter", "PHP / Laravel", "Python / FastAPI", "UI/UX Design", "PostgreSQL"]
  },

  stats: [
    { number: "6+", label: "PROJETS", desc: "Applications web et mobiles conçues" },
    { number: "100%", label: "SUR-MESURE", desc: "Architectures et bases de données optimisées" },
    { number: "Multi", label: "STACK", desc: "Expertise Frontend, Backend & Mobile" }
  ],

  skills: [
    { name: "Flutter / Dart", percent: 90 },
    { name: "PHP / Laravel", percent: 88 },
    { name: "HTML / CSS / JavaScript", percent: 92 },
    { name: "Python / FastAPI", percent: 80 },
    { name: "PostgreSQL & SQL", percent: 85 },
    { name: "MongoDB", percent: 75 },
    { name: "UI / UX Design & Figma", percent: 85 },
    { name: "Linux / DevOps", percent: 80 }
  ],

  projects: [
    {
      title: "MarketPiece",
      description: "Plateforme de marketplace digitale complète disposant d'un frontend Flutter interactif et d'un backend robuste gérant des bases de données hybrides (PostgreSQL & MongoDB).",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&q=80",
      tags: ["Flutter", "PostgreSQL", "MongoDB", "Marketplace"],
      live: "#",
      code: "#",
      status: "Terminé"
    },
    {
      title: "FreeFlow",
      description: "Plateforme de mise en relation pour freelances intégrant un suivi des étapes de projet et un système de validation administrative sécurisé pour le déblocage des paiements Mobile Money.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      tags: ["PHP", "Mobile Money", "Escrow", "UI/UX"],
      live: "#",
      code: "#",
      status: "En développement"
    },
    {
      title: "Projet Garage 2000",
      description: "Système complet de digitalisation pour atelier mécanique. Modélisé sous méthode Merise, il permet le suivi des diagnostics véhicules, la gestion des interventions et l'administration des rôles.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&q=80",
      tags: ["FastAPI", "Python", "PostgreSQL", "Merise"],
      live: "#",
      code: "#",
      status: "Terminé"
    },
    {
      title: "AfroJapon",
      description: "Interface web/mobile moderne pour un blog culturel. Mise en avant de flux d'articles sous forme de cartes dynamiques avec une charte graphique épurée et responsive.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
      tags: ["Flutter", "UI/UX", "Design", "Blog"],
      live: "#",
      code: "#",
      status: "Terminé"
    },
    {
      title: "Co-Voiturage",
      description: "Application collaborative de gestion de trajets partagés. Développement orienté backend avec gestion de réservations, itinéraires et interactions en temps réel.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
      tags: ["Laravel", "PHP", "PostgreSQL", "Git"],
      live: "#",
      code: "#",
      status: "En développement"
    },
    {
      title: "School Admin System",
      description: "Application de gestion académique locale dédiée à l'inscription des étudiants, au suivi administratif et à la structuration sécurisée des données scolaires.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
      tags: ["PHP Native", "PDO", "MySQL", "Architecture"],
      live: "#",
      code: "#",
      status: "Terminé"
    }
  ],

  contact: {
    email: "contact@dackeshadow.dev",
    phone: "+225 07 00 00 00 00",
    location: "Yamoussoukro, Côte d'Ivoire / Remote",
    socials: [
      { name: "GitHub", icon: "fab fa-github", url: "#" },
      { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
      { name: "Twitter / X", icon: "fab fa-x-twitter", url: "#" }
    ]
  }
};
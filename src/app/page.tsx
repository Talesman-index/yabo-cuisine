"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// SVGs for UI elements
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CoffeeBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="newsletter-icon">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const StylizedMapSvg = () => (
  <svg className="footer-card-map-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized region borders */}
    <path d="M40 80C50 65 75 55 100 50C125 45 150 55 160 70C170 85 155 110 145 125C135 140 120 160 100 165C80 170 60 155 50 140C40 125 30 95 40 80Z" stroke="#481616" strokeWidth="1.2" strokeDasharray="4 4" />
    <path d="M70 100C85 90 115 90 130 100C145 110 130 130 115 140C100 150 85 140 70 130C55 120 55 110 70 100Z" stroke="#481616" strokeWidth="0.8" />
    {/* Cergy Dot Pin */}
    <circle cx="100" cy="115" r="5" fill="#481616" />
    <circle cx="100" cy="115" r="10" stroke="#481616" strokeWidth="1.2" strokeDasharray="2 2" />
    {/* Secondary Dot Pin */}
    <circle cx="125" cy="85" r="4" fill="#481616" />
    <circle cx="125" cy="85" r="8" stroke="#481616" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const YaboLogoEmblem = () => (
  <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block' }}>
    <circle cx="50" cy="50" r="46" fill="var(--burgundy)" />
    <path d="M30 65 C 30 75, 70 75, 70 65 C 70 58, 30 58, 30 65 Z" fill="var(--mustard)" />
    <path d="M32 50 C 42 40, 48 60, 58 50 C 68 40, 78 50, 78 50" stroke="var(--mustard)" strokeWidth="4" strokeLinecap="round" />
    <path d="M42 35 C 45 25, 55 25, 58 35" stroke="var(--mustard)" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 35 C 53 25, 63 25, 66 35" stroke="var(--mustard)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SteamingBeignetIcon = () => (
  <svg width="68" height="68" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 32px auto', display: 'block' }}>
    {/* Outer golden glow */}
    <circle cx="60" cy="65" r="45" fill="url(#beignetGlow)" opacity="0.3" />
    {/* 3D Gold Beignet Body */}
    <path d="M60 25C82.0914 25 100 42.9086 100 65C100 87.0914 82.0914 105 60 105C37.9086 105 20 87.0914 20 65C20 42.9086 37.9086 25 60 25Z" fill="url(#beignetBody)" />
    {/* Crispy crust textures and highlight overlays */}
    <ellipse cx="60" cy="65" rx="35" ry="32" fill="url(#beignetHighlight1)" opacity="0.85" />
    <circle cx="50" cy="50" r="15" fill="url(#beignetSpecular)" opacity="0.9" />
    {/* Shadow crack details to simulate organic home-made look */}
    <path d="M45 55C50 58 70 58 75 55" stroke="#4a2202" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M50 75C55 78 65 78 70 75" stroke="#4a2202" strokeWidth="2" strokeLinecap="round" />
    {/* Gradients */}
    <defs>
      <radialGradient id="beignetGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="beignetBody" cx="45%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="60%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#78350f" />
      </radialGradient>
      <radialGradient id="beignetHighlight1" cx="40%" cy="35%" r="50%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="beignetSpecular" cx="35%" cy="35%" r="50%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const MarqueeSeparator = () => (
  <span className="marquee-separator" style={{ display: 'inline-flex', alignItems: 'center' }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 24px' }}>
      <circle cx="12" cy="12" r="10" fill="var(--burgundy)" />
      <path d="M12 6L13.2 10.8L18 12L13.2 13.2L12 18L10.8 13.2L6 12L10.8 10.8L12 6Z" fill="var(--mustard)" />
    </svg>
  </span>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const DribbbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
    <path d="M18.54 5.12c-3.72 4.35-8.94 5.66-16.88 5.85" />
    <path d="M1.5 12.87c3.5-.49 11.05 1 11.6 8.56" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: 'dokor' | 'plats';
  image: string;
  desc: string;
  fullDetails: {
    ingredients: string[];
    portion: string;
    prepTime: string;
    story: string;
  };
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: "dokor-14",
    name: "Dokor - 14 Pièces",
    price: "8€",
    category: "dokor",
    image: "/assets/top_pick_1.png",
    desc: "Nos célèbres beignets béninois dorés, croustillants dehors et infiniment moelleux dedans.",
    fullDetails: {
      ingredients: ["Farine de blé tamisée", "Levure boulangère", "Sucre de canne fin", "Arôme de vanille pure"],
      portion: "Idéal pour 1 à 2 personnes",
      prepTime: "Préparé frais 1h avant votre retrait",
      story: "Le Dokor est le roi du goûter béninois. Sa texture alvéolée unique provient d'une double fermentation lente de la pâte, lui conférant son moelleux légendaire."
    }
  },
  {
    id: "dokor-28",
    name: "Dokor - 28 Pièces",
    price: "14€",
    category: "dokor",
    image: "/assets/top_pick_1.png",
    desc: "La portion parfaite pour partager un instant de douceur ou satisfaire les grands gourmands.",
    fullDetails: {
      ingredients: ["Farine de blé tamisée", "Levure boulangère", "Sucre de canne fin", "Arôme de vanille pure"],
      portion: "Idéal pour 3 à 4 personnes",
      prepTime: "Préparé frais 1h avant votre retrait",
      story: "Parfait pour accompagner vos fins de journées ou vos petits déjeuners du week-end. Les Dokors se dégustent traditionnellement tièdes, saupoudrés de sucre glace."
    }
  },
  {
    id: "dokor-56",
    name: "Dokor - 56 Pièces",
    price: "25€",
    category: "dokor",
    image: "/assets/top_pick_1.png",
    desc: "Le format idéal pour regaler vos proches lors de vos fêtes ou rassemblements.",
    fullDetails: {
      ingredients: ["Farine de blé tamisée", "Levure boulangère", "Sucre de canne fin", "Arôme de vanille pure"],
      portion: "Format familial / Fête (6 à 8 personnes)",
      prepTime: "Préparation spéciale",
      story: "Notre plus grand panier de Dokor. Il apporte l'ambiance authentique des rassemblements familiaux de Cotonou directement à vos tables de fête à Cergy."
    }
  },
  {
    id: "shawarma-box",
    name: "Shawarma Box",
    price: "15€",
    category: "plats",
    image: "/assets/top_pick_2.png",
    desc: "2 Shawarmas copieux cuisinés avec une viande marinée tendre et notre sauce signature maison.",
    fullDetails: {
      ingredients: ["Viande de bœuf marinée", "Sauce crème sésame maison", "Pain libanais extra-fin", "Crudités croquantes"],
      portion: "Copieux pour 1 à 2 personnes (2 Shawarmas)",
      prepTime: "24h de marinade préalable requise",
      story: "Notre viande est marinée durant 24 heures dans un savant mélange de 7 épices locales. Saisi minute, chaque shawarma allie la tendreté de la viande à la douceur de notre sauce."
    }
  },
  {
    id: "jolof-rice",
    name: "Jolof Rice & Aloko",
    price: "15€",
    category: "plats",
    image: "/assets/top_pick_3.png",
    desc: "Riz parfumé braisé à la béninoise servi avec des plantains frites douces et caramélisées.",
    fullDetails: {
      ingredients: ["Riz parfumé long grain", "Tomates fraîches cuites au bouillon", "Bananes plantains mûres (Aloko)", "Épices Yabo secrètes"],
      portion: "Assiette individuelle généreuse",
      prepTime: "Cuisiné frais à la commande",
      story: "Le riz Jolof béninois se distingue par son bouillon de viande riche dans lequel le riz mijote lentement. Accompagné d'Alokos fondants pour un équilibre sucré-salé divin."
    }
  },
  {
    id: "atassi-poulet",
    name: "Atassi Spécial Poulet",
    price: "15€",
    category: "plats",
    image: "/assets/top_pick_4.png",
    desc: "Riz et haricots rouges mijotés selon la recette locale, accompagnés de poulet rôti juteux.",
    fullDetails: {
      ingredients: ["Riz blanc de qualité", "Haricots rouges mijotés tendres", "Poulet fermier rôti", "Sauce piment doux frite (Dja)"],
      portion: "Assiette individuelle très copieuse",
      prepTime: "Mijoté traditionnel",
      story: "L'Atassi est le plat réconfortant béninois par excellence. Le riz et les haricots fusionnent à la cuisson, servis avec la sauce Dja parfumée à l'oignon caramélisé et piment doux."
    }
  }
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'dokor' | 'plats'>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy active sections
      const sections = [
        { id: 'accueil', element: document.querySelector('.cafen-hero') },
        { id: 'menu', element: document.getElementById('menu') },
        { id: 'avis', element: document.getElementById('avis') }
      ];

      let currentSection = 'accueil';
      const scrollPosition = window.scrollY + 180; // offset for nav height

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-cream">
      {/* Retro Grain overlay */}
      <div className="vintage-grain" />

      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <span>Cergy Préfecture et Environs</span>
        <span style={{ color: 'var(--mustard)' }}>Saveurs authentiques du Bénin préparées à la commande</span>
        <span>Tous les jours dès 18h</span>
      </div>

      {/* Cafen Header Navigation */}
      <nav className={`cafen-nav ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#" className="cafen-nav-logo">
          <YaboLogoEmblem />
          <span className="cafen-logo-text">Yabo Cuisine</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="cafen-nav-links">
          <a href="#" className={`cafen-nav-link ${activeSection === 'accueil' ? 'active' : ''}`}>Accueil</a>
          <a href="#menu" className={`cafen-nav-link ${activeSection === 'menu' ? 'active' : ''}`}>Le Menu</a>
          <a href="#avis" className={`cafen-nav-link ${activeSection === 'avis' ? 'active' : ''}`}>Avis</a>
        </div>

        {/* Desktop Action Button */}
        <a href="#menu" className="cafen-nav-btn">
          Precommander
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="cafen-nav-hamburger" 
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <HamburgerIcon />
        </button>
      </nav>

      {/* Premium Sliding Mobile Drawer Menu */}
      <div className={`cafen-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button 
          className="cafen-mobile-menu-header" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          <CloseIcon />
        </button>

        {/* Drawer Links */}
        <div className="cafen-mobile-menu-links">
          <a 
            href="#" 
            className={`cafen-mobile-menu-link ${activeSection === 'accueil' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </a>
          <a 
            href="#menu" 
            className={`cafen-mobile-menu-link ${activeSection === 'menu' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Le Menu
          </a>
          <a 
            href="#avis" 
            className={`cafen-mobile-menu-link ${activeSection === 'avis' ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Avis
          </a>
        </div>

        {/* Direct Action inside drawer */}
        <a 
          href="#menu" 
          className="cafen-mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Precommander
        </a>
      </div>

      {/* Cafen Editorial Hero Section */}
      <section className="cafen-hero">
        <h1 className="cafen-hero-title">
          Bienvenue dans l’assiette d’une étudiante béninoise vivant en France...
        </h1>

        <a href="#menu" className="cafen-hero-btn">
          Explorer le menu
        </a>

        <div className="cafen-hero-showcase">
          <div className="cafen-hero-image-frame">
            <Image
              src="/assets/beninese_feast.png"
              alt="Un festin de gastronomie traditionnelle béninoise fait maison"
              fill
              style={{ objectFit: "cover" }}
              className="cafen-hero-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* Cafen Premium Statement Section */}
      <section className="cafen-statement-section">
        <SteamingBeignetIcon />

        <h2 className="cafen-statement-title">
          Yabo est née d'une idée simple : créer une cuisine où chacun peut savourer de <span className="oval-outline">délicieux plats</span> et partager de précieux instants.
        </h2>

        <p className="cafen-statement-desc">
          Yabo Cuisine est née d'une conviction profonde : que la gastronomie béninoise raconte une histoire de partage, de chaleur et d'amour. Nous avons imaginé ces recettes croustillantes pour vos soirées de retrouvailles, vos pauses gourmandes et chaque instant de pur délice.
        </p>
      </section>

      {/* Cafen Premium Infinite Marquee */}
      <div className="cafen-marquee">
        <div className="cafen-marquee-track">
          {[
            "Précommandez dès aujourd'hui",
            "Fait maison avec amour & passion",
            "Tous les jours dès 18h",
            "Retrait à Cergy Préfecture",
            "Saveurs authentiques du Bénin",
            "Les meilleurs dokor de France"
          ].map((item, idx) => (
            <span key={`m1-${idx}`} className="cafen-marquee-item">
              {item}
              <MarqueeSeparator />
            </span>
          ))}
          {[
            "Précommandez dès aujourd'hui",
            "Fait maison avec amour & passion",
            "Tous les jours dès 18h",
            "Retrait à Cergy Préfecture",
            "Saveurs authentiques du Bénin",
            "Les meilleurs dokor de France"
          ].map((item, idx) => (
            <span key={`m2-${idx}`} className="cafen-marquee-item">
              {item}
              <MarqueeSeparator />
            </span>
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section id="menu" className="section bg-cream py-24">
        <div className="container">
          <div className="elegant-menu-container">
            <div className="elegant-menu-header">
              <h2 className="elegant-menu-title">Le Choix des Gourmands</h2>
              <p className="elegant-menu-subtitle">Des spécialités béninoises authentiques, cuisinées à la commande pour une fraîcheur maximale.</p>
            </div>

            {/* Premium Category Filter Tabs */}
            <div className="elegant-menu-tabs">
              <div
                className={`elegant-menu-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                Tout le Menu
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'dokor' ? 'active' : ''}`}
                onClick={() => setActiveTab('dokor')}
              >
                Dokor Croustillants
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'plats' ? 'active' : ''}`}
                onClick={() => setActiveTab('plats')}
              >
                Plats & Shawarmas
              </div>
            </div>

            {/* Premium Bento Card Grid */}
            <div className="elegant-menu-cards-grid">
              {MENU_ITEMS.filter(item => activeTab === 'all' || item.category === activeTab).map(item => (
                <div
                  key={item.id}
                  className={`elegant-menu-card cursor-pointer group ${item.id === 'atassi-poulet' ? 'menu-card-featured-bento' : ''}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="elegant-menu-card-image-wrapper">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="elegant-menu-card-img"
                    />
                    <div className="elegant-menu-card-price-tag">
                      {item.price}
                    </div>
                    {item.fullDetails.portion && (
                      <div className="elegant-menu-card-badge">
                        {item.id.includes('56') ? 'Format Familial' : 'Fait Maison'}
                      </div>
                    )}
                  </div>
                  <div className="elegant-menu-card-content">
                    <h4 className="elegant-menu-card-title">{item.name}</h4>
                    <p className="elegant-menu-card-desc">{item.desc}</p>

                    <div className="elegant-menu-card-meta">
                      <span className="elegant-menu-card-portion-badge">
                        <span className="elegant-menu-card-portion-dot"></span>
                        {item.fullDetails.portion}
                      </span>
                    </div>

                    <div className="elegant-menu-card-footer">
                      <span className="elegant-menu-card-action-btn">
                        Détails & Commande
                        <svg className="w-3.5 h-3.5 ml-1.5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Aimé & Partagé par nos clients Testimonials Section */}
      <section id="avis" className="cafen-testimonials-section">
        <div className="cafen-testimonials-deco-1"></div>
        <div className="cafen-testimonials-deco-2"></div>

        <div className="cafen-testimonials-header">
          <span className="cafen-testimonials-badge">Avis & Partages</span>
          <h2 className="cafen-testimonials-title">
            Aimé & Partagé par nos clients
          </h2>
          <p className="cafen-testimonials-subtitle">
            Découvrez les retours gourmands de notre communauté de Cergy Préfecture et d'ailleurs.
          </p>
        </div>

        <div className="cafen-testimonials-grid">

          {/* Card 1 */}
          <div className="cafen-testimonial-card">
            <span className="cafen-testimonial-quote-icon">“</span>
            <div>
              <div className="cafen-testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="cafen-testimonial-text">
                "Les Dokors sont d'une légèreté et d'un moelleux incroyables, exactement comme ceux de mon enfance à Cotonou ! C'est devenu mon rituel de commande du week-end à Cergy."
              </p>
            </div>
            <div className="cafen-testimonial-author">
              <div className="cafen-testimonial-avatar">AL</div>
              <div className="cafen-testimonial-meta">
                <span className="cafen-testimonial-name">Amina L.</span>
                <span className="cafen-testimonial-role">Client Gourmand • Cergy</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cafen-testimonial-card">
            <span className="cafen-testimonial-quote-icon">“</span>
            <div>
              <div className="cafen-testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="cafen-testimonial-text">
                "Le Jolof Rice est parfaitement épicé et parfumé, et les Alokos caramélisés sont tout simplement divins. Une magnifique découverte de la gastronomie béninoise !"
              </p>
            </div>
            <div className="cafen-testimonial-author">
              <div className="cafen-testimonial-avatar">MD</div>
              <div className="cafen-testimonial-meta">
                <span className="cafen-testimonial-name">Marc D.</span>
                <span className="cafen-testimonial-role">Amateur de Saveurs • Pontoise</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cafen-testimonial-card">
            <span className="cafen-testimonial-quote-icon">“</span>
            <div>
              <div className="cafen-testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="cafen-testimonial-text">
                "En tant qu'étudiante originaire du Bénin, retrouver ces saveurs authentiques à Cergy me fait chaud au cœur. La commande sur WhatsApp est ultra simple et le retrait rapide."
              </p>
            </div>
            <div className="cafen-testimonial-author">
              <div className="cafen-testimonial-avatar">SB</div>
              <div className="cafen-testimonial-meta">
                <span className="cafen-testimonial-name">Sarah B.</span>
                <span className="cafen-testimonial-role">Étudiante Gourmande • Cergy</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Premium Split Bento Info Location & Contact Block */}
      <section id="retrait" className="section bg-cream py-24 border-t border-burgundy/5 relative overflow-hidden">
        <div className="container">
          <div className="elegant-info-grid">

            {/* Left Card: The Official Retrieval Ticket */}
            <div className="info-ticket-card">
              <div className="ticket-fringe"></div>
              <span className="ticket-serial">NO. 2026-YABO</span>
              <h3 className="ticket-title">Ticket de Collecte</h3>
              <p className="ticket-desc">
                Suivez ces trois étapes simples pour récupérer vos plats chauds sortis de la cuisine:
              </p>

              <div className="ticket-steps-list">
                <div className="ticket-step-item">
                  <span className="step-number">01</span>
                  <div className="step-content">
                    <h5>Commandez à l'avance</h5>
                    <p>Réservez votre panier au moins 24h à l'avance sur WhatsApp pour garantir la fraîcheur.</p>
                  </div>
                </div>
                <div className="ticket-step-item">
                  <span className="step-number">02</span>
                  <div className="step-content">
                    <h5>Recevez les détails</h5>
                    <p>Une fois validée, l'adresse de retrait exacte à Cergy vous est envoyée instantanément.</p>
                  </div>
                </div>
                <div className="ticket-step-item">
                  <span className="step-number">03</span>
                  <div className="step-content">
                    <h5>Collectez & Dégustez</h5>
                    <p>Vos Dokors et plats mijotés sont préparés minute pour être livrés chauds à l'heure convenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive Location Pin Card */}
            <div className="info-location-card">
              <div className="info-location-header">
                <div className="info-location-badge">📍 POINT CERGY</div>
                <h3 className="location-card-title">Retrait & Contact</h3>
              </div>

              <div className="location-card-body">
                <div className="location-detail-item">
                  <MapPinIcon />
                  <div>
                    <h5>Adresse de collecte</h5>
                    <p>Cergy Préfecture, 95000</p>
                  </div>
                </div>

                <div className="location-detail-item">
                  <PhoneIcon />
                  <div>
                    <h5>WhatsApp de précommande</h5>
                    <p className="font-display text-lg text-cream">+33 6 00 00 00 00</p>
                  </div>
                </div>

                <div className="location-detail-item">
                  <ClockIcon />
                  <div>
                    <h5>Horaires d'ouverture</h5>
                    <p>Semaine : dès 18h00</p>
                    <p>Week-end : service continu midi & soir</p>
                  </div>
                </div>
              </div>

              <div className="location-card-map-wrapper">
                <StylizedMapSvg />
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Social / Instagram Reels Collage Section */}
      <section id="social" className="section bg-cream py-32 border-t border-burgundy/5 relative overflow-hidden">
        <div className="container relative z-10 max-w-[1300px]">
          <div className="cafen-social-layout">

            {/* Left side: Reels 1 & 2 */}
            <div className="cafen-social-column left-cols">
              {/* Reel 1 */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <Image src="/assets/top_pick_2.png" alt="Préparation de l'Atassi" fill style={{ objectFit: "cover" }} />
                </div>
              </a>

              {/* Reel 2 */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <Image src="/assets/polaroid_2.png" alt="Savoir-faire Yabo" fill style={{ objectFit: "cover" }} />
                </div>
              </a>
            </div>

            {/* Center side: Instagram Badge & Title */}
            <div className="cafen-social-center">
              {/* Instagram colored icon */}
              <div className="cafen-instagram-badge-icon mb-6">
                <svg viewBox="0 0 100 100" className="w-10 h-10 rounded-2xl">
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="100%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <rect width="100" height="100" rx="22" fill="url(#ig-grad)" />
                  <rect x="18" y="18" width="64" height="64" rx="16" fill="none" stroke="#ffffff" strokeWidth="6.5" />
                  <circle cx="50" cy="50" r="16" fill="none" stroke="#ffffff" strokeWidth="6.5" />
                  <circle cx="71" cy="29" r="4.5" fill="#ffffff" />
                </svg>
              </div>
              <h2 className="elegant-menu-title max-w-sm mx-auto leading-tight mb-2">
                Suivez la gourmandise
              </h2>
              <span className="cafen-social-username block hover:text-mustard transition-colors">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  @YaboCuisine
                </a>
              </span>
            </div>

            {/* Right side: Reels 3 & 4 */}
            <div className="cafen-social-column right-cols">
              {/* Reel 3 */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <Image src="/assets/top_pick_1.png" alt="Festin Jolof" fill style={{ objectFit: "cover" }} />
                </div>
              </a>

              {/* Reel 4 */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <Image src="/assets/polaroid_4.png" alt="Dokor dorés" fill style={{ objectFit: "cover" }} />
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Redesigned Premium Cafen-Style Footer Section */}
      <section className="elegant-footer-section relative overflow-hidden py-24 bg-cream border-t border-burgundy/10">

        {/* Newsletter Signup Area */}
        <div className="cafen-footer-newsletter">
          <div className="cafen-footer-newsletter-icon">
            <CoffeeBagIcon />
          </div>
          <h3 className="cafen-footer-newsletter-title">
            Inscrivez-vous pour être informé des nouveautés du menu, des offres spéciales et des événements.
          </h3>
          <div className="cafen-footer-newsletter-form-wrapper">
            <form className="cafen-footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="hello@yourbrand.com"
                required
                className="cafen-footer-newsletter-input"
              />
              <button type="submit" className="cafen-footer-newsletter-btn">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Dual Cards Block */}
        <div className="cafen-footer-cards-grid">

          {/* Left Card: Warm cream background, hours & outline map */}
          <div className="cafen-footer-card-left">
            <div className="cafen-footer-left-content">
                <a href="#" className="cafen-footer-logo-row" style={{ textDecoration: 'none' }}>
                  <YaboLogoEmblem />
                  <span className="cafen-footer-logo-text">Yabo Cuisine</span>
                </a>

                <div className="cafen-footer-opening-hours">
                  <h4 className="cafen-footer-opening-title">Heures de Retrait</h4>
                  <p className="cafen-footer-opening-lines">
                    Mardi au Vendredi : de 18:00 à 22:00<br />
                    Samedi & Dimanche : de 12:00 à 22:00
                  </p>
                  <p className="cafen-footer-opening-note">
                    * Plats préparés chauds minute à récupérer à Cergy Préfecture.
                  </p>
                </div>

              <div className="cafen-footer-left-credits">
                Conçu avec amour pour Yabo Cuisine.
              </div>
            </div>

            {/* Map Column on the right of the card */}
            <div className="cafen-footer-map-col">
              <StylizedMapSvg />
              <div className="map-location-dot dot-1"></div>
              <div className="map-location-dot dot-2"></div>
            </div>
          </div>

          {/* Right Card: Solid bordeaux background, columns links */}
          <div className="cafen-footer-card-right">
            <div>
              <h4 className="cafen-footer-links-title">Navigation</h4>

              <div className="cafen-footer-links-cols">
                <div className="cafen-footer-links-col">
                  <a href="#" className="cafen-footer-link highlight">Accueil</a>
                  <a href="#menu" className="cafen-footer-link">Le Menu</a>
                  <a href="#retrait" className="cafen-footer-link">Point de Retrait</a>
                  <a href="#social" className="cafen-footer-link">Instagram</a>
                </div>

                <div className="cafen-footer-links-col">
                  <a href="#retrait" className="cafen-footer-link">Collecte</a>
                  <a href="#social" className="cafen-footer-link">Réseaux</a>
                  <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="cafen-footer-link">WhatsApp</a>
                  <a href="#" className="cafen-footer-link">Mentions</a>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="cafen-footer-socials">
              <a href="#" className="cafen-footer-social-link" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cafen-footer-social-link" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className="cafen-footer-social-link" aria-label="Dribbble"><DribbbleIcon /></a>
              <a href="#" className="cafen-footer-social-link" aria-label="Twitter"><TwitterIcon /></a>
            </div>
          </div>

        </div>

        {/* Framer-style Bottom Badges */}
        <div className="cafen-footer-badge-bar">
          <div className="cafen-footer-badge-pill">
            <span>Fait maison avec amour 🥯</span>
          </div>
          <div className="cafen-footer-badge-pill">
            <span>Cergy, France 🇫🇷</span>
          </div>
        </div>
      </section>

      {/* Editorial Detail Modal Overlay */}
      {selectedItem && (
        <div className="editorial-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="editorial-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="editorial-modal-close-btn" onClick={() => setSelectedItem(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="editorial-modal-image-side">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="editorial-modal-content-side">
              <div>
                <h3 className="editorial-modal-title">{selectedItem.name}</h3>
                <div className="editorial-modal-price">{selectedItem.price}</div>
                <p className="editorial-modal-story">{selectedItem.fullDetails.story}</p>

                <div className="editorial-modal-meta-section">
                  <div className="editorial-modal-meta-row">
                    <span className="editorial-modal-meta-label">Portion</span>
                    <span className="editorial-modal-meta-value">{selectedItem.fullDetails.portion}</span>
                  </div>
                  <div className="editorial-modal-meta-row">
                    <span className="editorial-modal-meta-label">Retrait</span>
                    <span className="editorial-modal-meta-value">{selectedItem.fullDetails.prepTime}</span>
                  </div>
                  <div className="editorial-modal-meta-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <span className="editorial-modal-meta-label" style={{ marginBottom: '6px' }}>Ingrédients clés</span>
                    <div className="editorial-modal-ingredients">
                      {selectedItem.fullDetails.ingredients.map((ing, i) => (
                        <span key={i} className="editorial-modal-tag">{ing}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="editorial-modal-actions w-full">
                <button
                  className="editorial-modal-btn-add w-full"
                  onClick={() => {
                    const text = `Bonjour Yabo Cuisine, je souhaite commander ce plat:\n- Plat: ${selectedItem.name} (${selectedItem.price})\n\nMerci de me recontacter pour finaliser l'heure de retrait à Cergy !`;
                    window.open(`https://wa.me/33600000000?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                >
                  Commander via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

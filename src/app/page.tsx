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
    {/* Lille Dot Pin */}
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
  category: 'supplements' | 'petite-faim' | 'vegan' | 'riz' | 'decouverte';
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
  // Les suppléments
  {
    id: "supp-wangashi",
    name: "Wangashi (2 morceaux)",
    price: "1,50€",
    category: "supplements",
    image: "/assets/polaroid_1.png",
    desc: "Fromage traditionnel béninois frit, croustillant à l'extérieur et tendre à l'intérieur.",
    fullDetails: {
      ingredients: ["Lait de vache frais", "Suc de Calotropis procera", "Sel fin", "Bain d'huile végétale"],
      portion: "Supplément gourmand (2 morceaux)",
      prepTime: "Frit minute à la commande",
      story: "Le Wangashi est le fromage traditionnel par excellence du Bénin, originaire des communautés Peulh. C'est l'encas salé parfait ou le supplément idéal pour sublimer vos plats."
    }
  },
  {
    id: "supp-aloko",
    name: "Aloko",
    price: "2,50€",
    category: "supplements",
    image: "/assets/top_pick_3.png",
    desc: "Bananes plantains mûres dorées et frites, naturellement sucrées et fondantes.",
    fullDetails: {
      ingredients: ["Bananes plantains bien mûres", "Sel fin", "Huile de friture végétale"],
      portion: "Portion d'accompagnement",
      prepTime: "Préparé minute",
      story: "L'Aloko est le péché mignon d'Afrique de l'Ouest. Caramélisé à la friture, il offre ce contraste unique de douceur sucrée-salée qui accompagne à merveille tous les plats."
    }
  },
  {
    id: "supp-frites",
    name: "Frites Classiques",
    price: "2,50€",
    category: "supplements",
    image: "/assets/polaroid_2.png",
    desc: "Frites de pommes de terre croustillantes, dorées à la perfection.",
    fullDetails: {
      ingredients: ["Pommes de terre fraîches", "Sel fin", "Bain de friture"],
      portion: "Portion individuelle",
      prepTime: "10-15 minutes",
      story: "Des frites dorées et craquantes, idéales pour combler une petite faim ou accompagner votre viande."
    }
  },
  {
    id: "supp-frites-patate",
    name: "Frites de Patate Douce",
    price: "2,50€",
    category: "supplements",
    image: "/assets/top_pick_1.png",
    desc: "Frites de patate douce coupées main, croustillantes à souhait avec une touche de douceur naturelle.",
    fullDetails: {
      ingredients: ["Patates douces sélectionnées", "Sel marin", "Épices Yabo douces"],
      portion: "Portion d'accompagnement généreuse",
      prepTime: "Préparé frais à la commande",
      story: "Une alternative croustillante et légèrement sucrée aux frites traditionnelles, parfumée aux épices douces."
    }
  },

  // Petite faim
  {
    id: "faim-frites-poulet",
    name: "Frites + Poulet",
    price: "6,50€",
    category: "petite-faim",
    image: "/assets/polaroid_3.png",
    desc: "Frites croustillantes servies avec un morceau de poulet tendre mariné et doré.",
    fullDetails: {
      ingredients: ["Cuisse de poulet marinée aux épices", "Frites classiques", "Sauce maison"],
      portion: "Format idéal petite faim",
      prepTime: "Préparé minute",
      story: "La formule parfaite pour un encas rapide et gourmand, alliant le fondant du poulet mariné au croustillant des frites."
    }
  },
  {
    id: "faim-aloko-poulet",
    name: "Aloko + Poulet",
    price: "6,50€",
    category: "petite-faim",
    image: "/assets/top_pick_3.png",
    desc: "Bananes plantains mûres frites accompagnées d'un morceau de poulet mariné juteux.",
    fullDetails: {
      ingredients: ["Cuisse de poulet marinée", "Bananes plantains mûres", "Oignons émincés", "Sauce Dja douce"],
      portion: "Format idéal petite faim",
      prepTime: "Cuisiné minute à la commande",
      story: "Le duo ouest-africain incontournable dans un format accessible aux étudiants pour un réconfort immédiat après les cours."
    }
  },

  // Vegan
  {
    id: "vegan-atassi",
    name: "Atassi Vegan",
    price: "8,50€",
    category: "vegan",
    image: "/assets/top_pick_4.png",
    desc: "Mélange traditionnel de riz et haricots rouges, servi avec la sauce tomate Dja et de l'Aloko fondant.",
    fullDetails: {
      ingredients: ["Riz long grain", "Haricots rouges mijotés", "Sauce tomate Dja (sans viande)", "Aloko (bananes plantains)"],
      portion: "Assiette végétarienne généreuse",
      prepTime: "Mijoté traditionnel",
      story: "Toute la richesse de la recette béninoise dans une version 100% végétale, saine, généreuse et pleine de protéines végétales."
    }
  },
  {
    id: "vegan-mafe",
    name: "Riz Sauce Mafé + Aloko",
    price: "8,50€",
    category: "vegan",
    image: "/assets/polaroid_4.png",
    desc: "Riz blanc parfumé servi avec une onctueuse sauce mafé aux cacahuètes et de l'Aloko fondant.",
    fullDetails: {
      ingredients: ["Riz blanc de qualité", "Pâte d'arachide premium", "Légumes mijotés", "Aloko (bananes plantains)"],
      portion: "Assiette végétarienne réconfortante",
      prepTime: "Bouillon lent à la cacahuète",
      story: "Une sauce mafé onctueuse et parfumée, préparée sans aucune matière animale, servie avec le riz et la touche sucrée de l'Aloko."
    }
  },
  {
    id: "vegan-jolof",
    name: "Jolof Rice + Aloko",
    price: "8,50€",
    category: "vegan",
    image: "/assets/top_pick_2.png",
    desc: "Riz parfumé cuit dans un bouillon de tomates et d'épices, servi avec sa portion d'Aloko.",
    fullDetails: {
      ingredients: ["Riz long grain", "Sauce tomate concentrée", "Poivrons et oignons", "Épices Yabo", "Aloko"],
      portion: "Assiette végétarienne parfumée",
      prepTime: "Cuit à l'étouffée",
      story: "Le fameux riz sénégalo-béninois dans une formule vegan pleine de pep's, mariant le piquant doux du riz aux plantains sucrés."
    }
  },

  // À base de riz
  {
    id: "riz-atassi-poulet",
    name: "Atassi + Poulet",
    price: "9,50€",
    category: "riz",
    image: "/assets/top_pick_4.png",
    desc: "Riz et haricots rouges mijotés à la béninoise, servis avec du poulet rôti mariné et de la sauce Dja.",
    fullDetails: {
      ingredients: ["Riz blanc", "Haricots rouges mijotés", "Poulet fermier mariné", "Sauce tomate Dja maison"],
      portion: "Assiette individuelle très copieuse",
      prepTime: "Marinade 24h & friture",
      story: "L'Atassi est le plat réconfortant béninois par excellence, qui allie le fondant du riz et des haricots à la gourmandise du poulet rôti."
    }
  },
  {
    id: "riz-atassi-poisson",
    name: "Atassi + Poisson",
    price: "9,50€",
    category: "riz",
    image: "/assets/polaroid_1.png",
    desc: "Le traditionnel Atassi (riz & haricots rouges) servi avec un poisson frit assaisonné et de la sauce Dja.",
    fullDetails: {
      ingredients: ["Riz blanc", "Haricots rouges", "Poisson frit mariné", "Sauce piment doux Dja"],
      portion: "Assiette individuelle gourmande",
      prepTime: "Poisson frit minute",
      story: "L'alliance parfaite entre le fondant de l'Atassi et le croustillant d'un poisson frit assaisonné à la béninoise."
    }
  },
  {
    id: "riz-jolof-poulet",
    name: "Jolof Rice + Poulet",
    price: "9,50€",
    category: "riz",
    image: "/assets/top_pick_2.png",
    desc: "Riz parfumé mijoté au bouillon de tomates et d'épices, servi avec un morceau de poulet mariné doré.",
    fullDetails: {
      ingredients: ["Riz long grain", "Concentré de tomate", "Poulet mariné rôti", "Bouillon d'épices maison"],
      portion: "Assiette copieuse et épicée",
      prepTime: "Cuisiné frais à la commande",
      story: "Notre version du riz gras de Cotonou, longuement mijoté au bouillon de légumes et d'épices, servi avec du poulet bien juteux."
    }
  },
  {
    id: "riz-jolof-poisson",
    name: "Jolof Rice + Poisson",
    price: "9,50€",
    category: "riz",
    image: "/assets/top_pick_3.png",
    desc: "Riz parfumé mijoté au bouillon rouge, accompagné d'un poisson frit mariné aux herbes locales.",
    fullDetails: {
      ingredients: ["Riz parfumé", "Bouillon de tomate", "Poisson mariné frit", "Oignons caramélisés"],
      portion: "Assiette généreuse et parfumée",
      prepTime: "Poisson frit à la commande",
      story: "Un classique des déjeuners en bord de mer au Bénin. Le riz parfumé cuit au bouillon de poisson s'accorde merveilleusement avec la chair tendre et grillée."
    }
  },
  {
    id: "riz-chicken-mafe",
    name: "Riz + Chicken Mafé",
    price: "9,50€",
    category: "riz",
    image: "/assets/polaroid_4.png",
    desc: "Riz blanc parfumé servi avec une onctueuse sauce mafé au beurre de cacahuète et morceaux de poulet tendres.",
    fullDetails: {
      ingredients: ["Riz blanc", "Poulet mijoté", "Pâte d'arachide pure", "Carottes et choux fondants"],
      portion: "Assiette onctueuse et consistante",
      prepTime: "Mijoté de 2h au beurre de cacahuète",
      story: "Une sauce riche à base de beurre de cacahuète et de tomates mijotées, où le poulet s'imprègne de saveurs douces et gourmandes."
    }
  },

  // Allons plus loin
  {
    id: "loin-ablo-poulet",
    name: "Ablo + Poulet",
    price: "9,50€",
    category: "decouverte",
    image: "/assets/polaroid_2.png",
    desc: "Petits pains de riz béninois cuits à la vapeur, légèrement sucrés, servis avec du poulet doré et du piment vert Monyo.",
    fullDetails: {
      ingredients: ["Farine de riz fermentée", "Poulet rôti mariné", "Oignons et tomates fraîches (Monyo)", "Piment vert doux"],
      portion: "3 pains Ablo + Poulet + Condiments",
      prepTime: "Fermentation artisanale de 12h",
      story: "L'Ablo est une spécialité vapeur unique à base de riz fermenté, légère et subtilement sucrée, adorée au Bénin et au Togo."
    }
  },
  {
    id: "loin-ablo-poisson",
    name: "Ablo + Poisson",
    price: "9,50€",
    category: "decouverte",
    image: "/assets/polaroid_1.png",
    desc: "Pains de riz vapeur Ablo accompagnés d'un poisson frit assaisonné et du piment frais Monyo.",
    fullDetails: {
      ingredients: ["Pains de riz Ablo", "Poisson frit mariné", "Monyo (sauce oignon/tomate)", "Piment local"],
      portion: "3 pains Ablo + Poisson + Condiments",
      prepTime: "Friture à la minute",
      story: "L'association de l'Ablo chaud vapeur avec le croustillant du poisson frit et la fraîcheur piquante du Monyo est un vrai chef-d'œuvre de street-food."
    }
  },
  {
    id: "loin-eba-poulet",
    name: "Eba + Poulet",
    price: "9,50€",
    category: "decouverte",
    image: "/assets/polaroid_3.png",
    desc: "Pâte de gari (semoule de manioc) cuite, servie avec une sauce tomate mijotée et du poulet mariné rôti.",
    fullDetails: {
      ingredients: ["Semoule de manioc (Gari)", "Poulet mariné", "Sauce tomate épicée", "Bouillon local"],
      portion: "Boule de pâte Eba + Poulet + Sauce",
      prepTime: "Préparé à chaud",
      story: "L'Eba est le plat quotidien incontournable en Afrique de l'Ouest, apportant une texture unique et un réconfort incomparable."
    }
  },
  {
    id: "loin-akassa-gborkpete",
    name: "Akassa + Gborkpètè",
    price: "9,50€",
    category: "decouverte",
    image: "/assets/polaroid_4.png",
    desc: "Pâte de maïs fermentée enveloppée dans des feuilles, servie avec la fameuse sauce Gborkpètè aux tripes et abats.",
    fullDetails: {
      ingredients: ["Pâte de maïs fermentée (Akassa)", "Tripes et abats marinés", "Sauce rouge traditionnelle", "Épices fortes"],
      portion: "1 boule d'Akassa + Sauce Gborkpètè riche",
      prepTime: "Fermentation lente & mijoté long",
      story: "Un plat traditionnel de caractère pour les connaisseurs et les amateurs de saveurs robustes et authentiques du Sud-Bénin."
    }
  },
  {
    id: "loin-akassa-monyo-poisson",
    name: "Akassa + Monyo + Poisson",
    price: "9,50€",
    category: "decouverte",
    image: "/assets/polaroid_1.png",
    desc: "Pâte d'Akassa fermentée servie avec un poisson frit croustillant et une sauce Monyo fraîche aux tomates et oignons.",
    fullDetails: {
      ingredients: ["Akassa (pâte de maïs)", "Poisson frit", "Tomates et oignons crus (Monyo)", "Piment vert frais"],
      portion: "1 boule d'Akassa + Poisson + Sauce Monyo",
      prepTime: "Frit à la commande",
      story: "L'accord parfait du piquant frais et craquant du Monyo avec l'acidité subtile de l'Akassa et la chair chaude du poisson."
    }
  }
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'supplements' | 'petite-faim' | 'vegan' | 'riz' | 'decouverte'>('all');
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-stagger");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeTab]);

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
        <span>Lille (Moulins) et Environs</span>
        <span style={{ color: 'var(--mustard)' }}>Saveurs authentiques du Bénin faites maison par une étudiante</span>
        <span>Mardi au samedi de 12h à 20h</span>
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
          Une étudiante béninoise en France qui partage les saveurs de son pays à travers une cuisine <span className="oval-outline">faite maison</span>, généreuse et authentique.
        </h2>

        <p className="cafen-statement-desc">
          Yabo Cuisine est le fruit d’une passion partagée par une étudiante béninoise vivant en France. C’est un repère gourmand pensé pour les étudiants africains, la diaspora en quête du goût du pays, et tous les curieux désireux de découvrir l'authenticité de la cuisine ouest-africaine. Préparés avec amour et générosité, nos plats vous régalent partout autour de Lille et Cergy.
        </p>
      </section>

      {/* Cafen Premium Infinite Marquee */}
      <div className="cafen-marquee">
        <div className="cafen-marquee-track">
          {[
            "Précommandez dès aujourd'hui",
            "Fait maison avec amour & passion",
            "Mardi au samedi • 12h à 20h",
            "Retrait à Lille (Moulins)",
            "Saveurs authentiques du Bénin",
            "Une étudiante béninoise aux fourneaux"
          ].map((item, idx) => (
            <span key={`m1-${idx}`} className="cafen-marquee-item">
              {item}
              <MarqueeSeparator />
            </span>
          ))}
          {[
            "Précommandez dès aujourd'hui",
            "Fait maison avec amour & passion",
            "Mardi au samedi • 12h à 20h",
            "Retrait à Lille (Moulins)",
            "Saveurs authentiques du Bénin",
            "Une étudiante béninoise aux fourneaux"
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
            <div className="elegant-menu-header scroll-reveal">
              <h2 className="elegant-menu-title">Le Choix des Gourmands</h2>
              <p className="elegant-menu-subtitle">Des spécialités béninoises authentiques, cuisinées à la commande pour une fraîcheur maximale.</p>
            </div>

            {/* Premium Category Filter Tabs */}
            <div className="elegant-menu-tabs scroll-reveal">
              <div
                className={`elegant-menu-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                Tout
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'supplements' ? 'active' : ''}`}
                onClick={() => setActiveTab('supplements')}
              >
                Suppléments
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'petite-faim' ? 'active' : ''}`}
                onClick={() => setActiveTab('petite-faim')}
              >
                Petite faim
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'vegan' ? 'active' : ''}`}
                onClick={() => setActiveTab('vegan')}
              >
                Vegan
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'riz' ? 'active' : ''}`}
                onClick={() => setActiveTab('riz')}
              >
                À base de riz
              </div>
              <div
                className={`elegant-menu-tab ${activeTab === 'decouverte' ? 'active' : ''}`}
                onClick={() => setActiveTab('decouverte')}
              >
                Allons plus loin
              </div>
            </div>

            {/* Premium Bento Card Grid */}
            <div className="elegant-menu-cards-grid scroll-reveal-stagger">
              {MENU_ITEMS.filter(item => activeTab === 'all' || item.category === activeTab).map((item, index) => (
                <div
                  key={item.id}
                  className={`elegant-menu-card cursor-pointer group scroll-reveal-item ${item.id === 'atassi-poulet' ? 'menu-card-featured-bento' : ''}`}
                  onClick={() => setSelectedItem(item)}
                  style={{ transitionDelay: `${index * 0.05}s` }}
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

        <div className="cafen-testimonials-header scroll-reveal">
          <span className="cafen-testimonials-badge">Avis & Partages</span>
          <h2 className="cafen-testimonials-title">
            Aimé & Partagé par nos clients
          </h2>
          <p className="cafen-testimonials-subtitle">
            Découvrez les retours gourmands de notre communauté de Lille et d'ailleurs.
          </p>
        </div>

        <div className="cafen-testimonials-grid scroll-reveal-stagger">

          {/* Card 1 */}
          <div className="cafen-testimonial-card scroll-reveal-item">
            <span className="cafen-testimonial-quote-icon">“</span>
            <div>
              <div className="cafen-testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="cafen-testimonial-text">
                "Retrouver la vraie cuisine béninoise faite maison à Lille est un pur bonheur. L'Atassi est copieux et délicieux, parfait pour mes repas d'étudiant !"
              </p>
            </div>
            <div className="cafen-testimonial-author">
              <div className="cafen-testimonial-avatar">AL</div>
              <div className="cafen-testimonial-meta">
                <span className="cafen-testimonial-name">Amina L.</span>
                <span className="cafen-testimonial-role">Client Gourmand • Lille</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="cafen-testimonial-card scroll-reveal-item">
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
                <span className="cafen-testimonial-role">Amateur de Saveurs • Lille</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="cafen-testimonial-card scroll-reveal-item">
            <span className="cafen-testimonial-quote-icon">“</span>
            <div>
              <div className="cafen-testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="cafen-testimonial-text">
                "En tant qu'étudiante originaire de Cotonou, retrouver la cuisine de mon pays à Lille me réchauffe le cœur. C'est généreux, fait maison et parfait pour notre budget étudiant."
              </p>
            </div>
            <div className="cafen-testimonial-author">
              <div className="cafen-testimonial-avatar">SB</div>
              <div className="cafen-testimonial-meta">
                <span className="cafen-testimonial-name">Sarah B.</span>
                <span className="cafen-testimonial-role">Étudiante Gourmande • Lille</span>
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
            <div className="info-ticket-card scroll-reveal slide-left">
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
                    <p>Une fois validée, l'adresse de retrait exacte à Lille vous est envoyée instantanément.</p>
                  </div>
                </div>
                <div className="ticket-step-item">
                  <span className="step-number">03</span>
                  <div className="step-content">
                    <h5>Collectez & Dégustez</h5>
                    <p>Vos plats mijotés sont préparés minute pour être livrés chauds à l'heure convenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Interactive Location Pin Card */}
            <div className="info-location-card scroll-reveal slide-right">
              <div className="info-location-header">
                <div className="info-location-badge">📍 POINT LILLE</div>
                <h3 className="location-card-title">Retrait & Contact</h3>
              </div>

              <div className="location-card-body">
                <div className="location-detail-item">
                  <MapPinIcon />
                  <div>
                    <h5>Adresse de collecte</h5>
                    <p>62 Bd de Belfort, 59000 Lille</p>
                  </div>
                </div>

                <div className="location-detail-item">
                  <PhoneIcon />
                  <div>
                    <h5>WhatsApp de précommande</h5>
                    <p className="font-display text-lg text-cream">07 52 49 47 74</p>
                  </div>
                </div>

                <div className="location-detail-item">
                  <ClockIcon />
                  <div>
                    <h5>Horaires d'ouverture</h5>
                    <p>Du mardi au samedi</p>
                    <p>De 12h00 à 20h00</p>
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
              <a href="https://www.tiktok.com/@yabo_cyrovanie/video/7633861406072376598" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <video
                    src="/assets/tiktok_video_1.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </a>

              {/* Reel 2 */}
              <a href="https://www.tiktok.com/@yabo_cyrovanie/video/7633383265033915670" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <video
                    src="/assets/tiktok_video_2.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </a>
            </div>

            {/* Center side: TikTok Badge & Title */}
            <div className="cafen-social-center">
              {/* TikTok neon styled icon */}
              <div className="cafen-instagram-badge-icon mb-6" style={{ background: '#000000', padding: '12px', borderRadius: '20px', boxShadow: '0px 0px 15px rgba(0, 242, 234, 0.4), 0px 0px 15px rgba(254, 44, 85, 0.4)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="#ffffff" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                </svg>
              </div>
              <h2 className="elegant-menu-title max-w-sm mx-auto leading-tight mb-2">
                Suivez la gourmandise
              </h2>
              <span className="cafen-social-username block hover:text-mustard transition-colors">
                <a href="https://www.tiktok.com/@yabo_cyrovanie" target="_blank" rel="noopener noreferrer">
                  @yabo_cyrovanie
                </a>
              </span>
            </div>

            {/* Right side: Reels 3 & 4 */}
            <div className="cafen-social-column right-cols">
              {/* Reel 3 */}
              <a href="https://www.tiktok.com/@yabo_cyrovanie/video/7640838303352229153" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <video
                    src="/assets/tiktok_video_3.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </a>

              {/* Reel 4 */}
              <a href="https://www.tiktok.com/@yabo_cyrovanie/video/7640504060176518433" target="_blank" rel="noopener noreferrer" className="cafen-reel-card">
                <div className="cafen-reel-play">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-burgundy ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div className="cafen-reel-image-wrapper">
                  <video
                    src="/assets/tiktok_video_4.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Redesigned Premium Cafen-Style Footer Section */}
      <section className="elegant-footer-section relative overflow-hidden py-24 bg-cream border-t border-burgundy/10">

        {/* Newsletter Signup Area */}
        <div className="cafen-footer-newsletter scroll-reveal">
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
                    Mardi au Samedi : de 12:00 à 20:00
                  </p>
                  <p className="cafen-footer-opening-note">
                    * Plats préparés chauds minute à récupérer à Lille (62 Bd de Belfort).
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
                  <a href="https://wa.me/33752494774" target="_blank" rel="noopener noreferrer" className="cafen-footer-link">WhatsApp</a>
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
            <span>Lille, France 🇫🇷</span>
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
              <div className="editorial-modal-scroll-content">
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
                    const text = `Bonjour Yabo Cuisine, je souhaite commander ce plat:\n- Plat: ${selectedItem.name} (${selectedItem.price})\n\nMerci de me recontacter pour finaliser l'heure de retrait à Lille !`;
                    window.open(`https://wa.me/33752494774?text=${encodeURIComponent(text)}`, "_blank");
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

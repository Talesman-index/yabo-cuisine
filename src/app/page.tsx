"use client";

import Image from "next/image";
import { useState } from "react";

// SVGs for UI elements
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Yabo Cuisine, je souhaite commander/réserver:\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nDate: ${formData.date}\nHeure: ${formData.time}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/33600000000?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="relative min-h-screen">
      {/* Top Retro Banner Strip */}
      <div className="bg-brown text-cream text-center py-3 text-xs uppercase tracking-widest font-bold z-50 relative border-b border-cream/10 flex flex-col md:flex-row justify-between px-10 gap-2">
        <span>Cergy Prefecture et Environs</span>
        <span className="text-yellow">Saveurs authentiques du Benin prepares a la commande</span>
        <span>Tous les jours des 18h</span>
      </div>

      {/* Navigation */}
      <nav className="brutalist-nav">
        <div className="brutalist-nav-group">
          <a href="#histoire" className="brutalist-nav-btn active">
            Histoire
          </a>
          <a href="#menu" className="brutalist-nav-btn">
            Le Menu
          </a>
        </div>
        
        <a href="#" className="brutalist-logo">
          <span className="brutalist-logo-top">Yabo</span>
          <span className="brutalist-logo-bottom">Cuisine</span>
        </a>

        <div className="brutalist-nav-group">
          <a href="#avis" className="brutalist-nav-btn">
            Avis
          </a>
          <a href="#preorder" className="brutalist-nav-btn">
            Precommander
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="brutalist-hero hero-gradient">
        {/* Giant Background Text layer */}
        <div className="hero-text-bg">
          YABO<br/>CUISINE
        </div>

        {/* Empty top spacing to balance the layout */}
        <div></div>

        {/* Main Hero Showcase */}
        <div className="brutalist-hero-centerpiece">
          <Image 
            src="/assets/hero_hand.png" 
            alt="Une main tenant un beignet dore croustillant"
            fill
            style={{ objectFit: "contain" }}
            className="drop-shadow-[0_30px_70px_rgba(44,26,4,0.55)] scale-105"
            priority
          />
        </div>

        {/* Bottom Actions - left-aligned for brutalist feel, responsive */}
        <div className="brutalist-hero-bottom">
          <a href="#preorder" className="brutalist-cta-btn">
            <span>Commander en ligne</span>
            <span className="plus-badge">+</span>
          </a>
          
          <span className="bg-brown text-[#facc15] uppercase text-[11px] tracking-[0.25em] font-bold px-4 py-2 border-2 border-brown-dark shadow-[3px_3px_0px_#000] rotate-2">
            Traiteur Artisanal Beninois
          </span>
        </div>
      </section>

      {/* Intro/Story Section */}
      <section id="histoire" className="section section-cream pt-24 pb-20">
        <div className="checkerboard-top"></div>
        
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="h2-title">Où chaque bouchée raconte une histoire</h2>
            <p className="subtitle">
              Je suis une etudiante beninoise passionnee de cuisine traditionnelle en France, et Yabo Cuisine est le fruit de mes racines. 
              Pour combler le manque du pays, j'ai recree les saveurs authentiques qui ont berce mon enfance : 
              le Dokor croustillant et genereux, le Shawarma de rue epice à la perfection, et des plats de fetes mijotes avec amour.
            </p>
            <a href="#menu" className="btn-transparent font-bold">
              Explorer le menu
            </a>
          </div>

          {/* Staggered Polaroid Scrapbook Grid */}
          <div className="scrapbook-grid">
            <div className="polaroid-card" style={{ transform: 'rotate(-4deg)' }}>
              <div style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image src="/assets/polaroid_1.png" alt="Partage de repas chaleureux" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="polaroid-caption">L'ambiance chaleureuse</div>
            </div>
            
            <div className="polaroid-card" style={{ transform: 'rotate(3deg)' }}>
              <div style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image src="/assets/polaroid_2.png" alt="Chef en cuisine beninoise" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="polaroid-caption">Main a la pate</div>
            </div>
            
            <div className="polaroid-card" style={{ transform: 'rotate(-2deg)' }}>
              <div style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image src="/assets/polaroid_3.png" alt="Ingredients frais et epices" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="polaroid-caption">Fraicheur & Epices</div>
            </div>
            
            <div className="polaroid-card" style={{ transform: 'rotate(5deg)' }}>
              <div style={{ position: "relative", width: "100%", height: "200px" }}>
                <Image src="/assets/polaroid_4.png" alt="Plat de Dokor pret a deguster" fill style={{ objectFit: "cover" }} />
              </div>
              <div className="polaroid-caption">Nos precieux Dokor</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section section-brown pt-24 pb-20">
        <div className="checkerboard-top"></div>
        <div className="container">
          <h2 className="h2-title text-yellow">Le Choix des Gourmands</h2>
          <p className="subtitle text-cream opacity-85">
            Chaque plat est prepare a la commande pour garantir une fraicheur incomparable.
          </p>

          {/* Premium Framed Menu Card */}
          <div className="menu-card mt-12">
            <div className="grid grid-cols-2 gap-12 md:gap-16">
              
              {/* Left Column: Beignets */}
              <div>
                <h3 className="menu-section-title">Dokor croustillants</h3>
                
                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Dokor - 14 Pieces</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">8€</span>
                  </div>
                  <span className="menu-desc">Nos celebres beignets beninois croustillants a l'exterieur et hyper moelleux a l'interieur.</span>
                </div>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Dokor - 28 Pieces</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">14€</span>
                  </div>
                  <span className="menu-desc">La quantite ideale a partager en famille ou pour les petits gourmands.</span>
                </div>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Dokor - 56 Pieces</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">25€</span>
                  </div>
                  <span className="menu-desc">Le format parfait pour vos soirees, anniversaires ou reunions entre amis.</span>
                </div>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Dokor - 100 Pieces</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">35€</span>
                  </div>
                  <span className="menu-desc">Le plateau geant incontournable pour regaler l'ensemble de vos invites.</span>
                </div>
              </div>

              {/* Right Column: Savory Dishes */}
              <div>
                <h3 className="menu-section-title">Shawarmas & Plats</h3>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Shawarma Box</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">15€</span>
                  </div>
                  <span className="menu-desc">2 Shawarmas genereux faits maison avec notre sauce signature secrete.</span>
                </div>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Shawarma Menu Complet</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">18€</span>
                  </div>
                  <span className="menu-desc">2 Shawarmas savoureux + portion genereuse de frites + boisson fraiche au choix.</span>
                </div>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Atassi Special Poulet</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">15€</span>
                  </div>
                  <span className="menu-desc">Plat traditionnel de riz et haricots rouges mijote aux epices, accompagne de poulet braise tendre.</span>
                </div>

                <div className="menu-item">
                  <div className="menu-header">
                    <span className="menu-title">Jolof Rice & Aloko</span>
                    <span className="menu-dots"></span>
                    <span className="menu-price">15€</span>
                  </div>
                  <span className="menu-desc">Riz parfume et epicé servi avec de bananes plantains frites bien douces.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Signature Grid Showcase */}
      <section className="section section-cream pt-24 pb-20">
        <div className="checkerboard-top"></div>
        <div className="container text-center">
          <h2 className="h2-title">Les Delices de Notre Cuisine</h2>
          <p className="subtitle">Des plats emblematiques prepares a la commande avec amour.</p>

          <div className="grid grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center delice-wrapper">
              <div className="delice-circle" style={{ position: "relative", width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", border: "5px solid #2c1a04", boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}>
                <Image src="/assets/top_pick_1.png" alt="Dokor" fill style={{ objectFit: "cover" }} />
              </div>
              <h4 className="font-display text-xl mt-4">Les Dokor</h4>
            </div>

            <div className="flex flex-col items-center delice-wrapper">
              <div className="delice-circle" style={{ position: "relative", width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", border: "5px solid #2c1a04", boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}>
                <Image src="/assets/top_pick_2.png" alt="Shawarma" fill style={{ objectFit: "cover" }} />
              </div>
              <h4 className="font-display text-xl mt-4">Le Shawarma</h4>
            </div>

            <div className="flex flex-col items-center delice-wrapper">
              <div className="delice-circle" style={{ position: "relative", width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", border: "5px solid #2c1a04", boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}>
                <Image src="/assets/top_pick_3.png" alt="Jolof Rice" fill style={{ objectFit: "cover" }} />
              </div>
              <h4 className="font-display text-xl mt-4">Jolof Rice</h4>
            </div>

            <div className="flex flex-col items-center delice-wrapper">
              <div className="delice-circle" style={{ position: "relative", width: "180px", height: "180px", borderRadius: "50%", overflow: "hidden", border: "5px solid #2c1a04", boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}>
                <Image src="/assets/top_pick_4.png" alt="Atassi" fill style={{ objectFit: "cover" }} />
              </div>
              <h4 className="font-display text-xl mt-4">Atassi Traditionnel</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Promos Section (Styled as Vintage Coupons) */}
      <section className="section section-cream py-8">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            
            <div className="promo-coupon">
              <Image src="/assets/promo_1.png" alt="Special Shawarma Box Promo" fill style={{ objectFit: "cover" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-white" style={{ background: "linear-gradient(to top, rgba(44, 26, 4, 0.9) 20%, transparent 100%)" }}>
                <span className="bg-yellow-accent text-brown-dark uppercase text-xs font-bold px-3 py-1 rounded w-fit mb-2 border border-brown-dark">
                  FORMULE DUO
                </span>
                <h3 className="font-display text-2xl mb-1 text-yellow">Double Shawarma Box</h3>
                <p className="text-sm opacity-90">Prepare minute pour deux personnes a seulement 15€</p>
              </div>
            </div>

            <div className="promo-coupon">
              <Image src="/assets/promo_2.png" alt="Jolof Feast Combo Promo" fill style={{ objectFit: "cover" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-white" style={{ background: "linear-gradient(to top, rgba(44, 26, 4, 0.9) 20%, transparent 100%)" }}>
                <span className="bg-yellow-accent text-brown-dark uppercase text-xs font-bold px-3 py-1 rounded w-fit mb-2 border border-brown-dark">
                  BEST SELLER
                </span>
                <h3 className="font-display text-2xl mb-1 text-yellow">Menu Jolof Premium</h3>
                <p className="text-sm opacity-90">Riz parfume traditionnel avec aloko doux et poulet roti</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-order Section (Styled as Vintage Guest Check) */}
      <section id="preorder" className="section reservation-bg py-24">
        <div className="checkerboard-top"></div>
        <div className="container relative z-10 flex justify-center">
          <div className="max-w-lg w-full">
            
            {/* The Guest Check */}
            <div className="guest-check">
              <div className="guest-check-header">
                <span>CHECK NO: 8092</span>
                <span>TABLE: WHATSAPP</span>
                <span>DATE: 2026</span>
              </div>
              
              <h2 className="font-display text-3xl text-center mb-1 text-green">Bon de commande</h2>
              <p className="text-center text-xs opacity-70 mb-8 uppercase tracking-wider text-brown-medium">
                Retrait a Cergy - Prevoir 24h a l'avance
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col mb-4">
                  <label className="text-xs uppercase tracking-wider font-bold text-brown-light px-3">Nom du Client</label>
                  <input 
                    type="text" 
                    className="guest-check-input"
                    placeholder="Votre nom complet" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label className="text-xs uppercase tracking-wider font-bold text-brown-light px-3">Telephone</label>
                  <input 
                    type="tel" 
                    className="guest-check-input"
                    placeholder="Votre numero de mobile" 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-wider font-bold text-brown-light px-3">Date Retrait</label>
                    <input 
                      type="date" 
                      className="guest-check-input"
                      required
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs uppercase tracking-wider font-bold text-brown-light px-3">Heure Retrait</label>
                    <input 
                      type="time" 
                      className="guest-check-input"
                      required
                      value={formData.time}
                      onChange={e => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6">
                  <label className="text-xs uppercase tracking-wider font-bold text-brown-light px-3">Votre Panier</label>
                  <textarea 
                    className="guest-check-textarea"
                    placeholder="ex: 1x Jolof Premium + 28x Dokor..." 
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="guest-check-btn">
                  Envoyer ma precommande WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Community Testimonials (Corkboard Bulletin Board Style) */}
      <section className="section section-cream pt-24 pb-20">
        <div className="checkerboard-top"></div>
        <div className="container">
          <h2 className="h2-title">Pleinement apprécié par notre communauté</h2>
          <p className="subtitle">Retours reels de nos gourmands a Cergy et Pontoise.</p>

          <div className="bulletin-board mt-12 flex flex-wrap justify-center gap-10">
            
            <div className="corkboard-sticky" style={{ '--rand': '-0.25', backgroundColor: 'var(--note-yellow)' } as React.CSSProperties}>
              <p className="mb-4">"Les beignets Dokor sont incroyables. Chauds, croustillants, pas gras. Vraiment le gout du pays. Je recommande a 100% !"</p>
              <span className="font-bold text-sm block text-right">- Amina, Cergy</span>
            </div>

            <div className="corkboard-sticky" style={{ '--rand': '0.35', backgroundColor: 'var(--note-pink)' } as React.CSSProperties}>
              <p className="mb-4">"Super service et plats delicieux. L'atassi est tout simplement parfait. Tres genereux !"</p>
              <span className="font-bold text-sm block text-right">- Marc, Pontoise</span>
            </div>

            <div className="corkboard-sticky" style={{ '--rand': '-0.15', backgroundColor: 'var(--note-blue)' } as React.CSSProperties}>
              <p className="mb-4">"Les shawarmas maison sont d'un autre niveau. La sauce signature fait toute la difference. Une pure tuerie."</p>
              <span className="font-bold text-sm block text-right">- Sarah, Paris</span>
            </div>

          </div>
        </div>
      </section>

      {/* Scrolling Marquee Bar */}
      <div className="marquee-container mt-16 relative">
        <div className="marquee-content">
          COMMANDER SUR WHATSAPP - RETRAIT CERGY PREFECTURE - SAVEURS BENINOISES AUTHENTIQUES - PRODUITS FRAIS & MAISON - 
          COMMANDER SUR WHATSAPP - RETRAIT CERGY PREFECTURE - SAVEURS BENINOISES AUTHENTIQUES - PRODUITS FRAIS & MAISON - 
        </div>
      </div>

      {/* Footer Info Cards */}
      <section className="section section-brown py-20 border-t border-cream/5">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            
            <div className="footer-card">
              <div className="flex gap-3 items-center mb-4 text-yellow">
                <MapPinIcon />
                <h4 className="font-display text-lg">Retrait des Commandes</h4>
              </div>
              <p className="text-sm opacity-85">Cergy Prefecture, 95000</p>
              <p className="text-xs opacity-60 mt-3">L'adresse exacte de retrait vous sera transmise immediatement apres validation sur WhatsApp.</p>
            </div>

            <div className="footer-card">
              <div className="flex gap-3 items-center mb-4 text-yellow">
                <PhoneIcon />
                <h4 className="font-display text-lg">Precommande Requise</h4>
              </div>
              <p className="text-sm opacity-85">WhatsApp : +33 6 00 00 00 00</p>
              <p className="text-xs opacity-60 mt-3">Pour garantir la fraicheur, prevoir 24 heures en avance pour les plats de fete.</p>
            </div>

            <div className="footer-card">
              <div className="flex gap-3 items-center mb-4 text-yellow">
                <ClockIcon />
                <h4 className="font-display text-lg">Horaires de Retrait</h4>
              </div>
              <p className="text-sm opacity-85">Semaine : a partir de 18h00</p>
              <p className="text-sm opacity-85">Week-ends : service toute la journee</p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Legal Footer */}
      <footer className="bg-[#1b1002] text-cream py-8 border-t border-cream/5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
          <p>© 2026 Yabo Cuisine. Aucun emoji n'a ete utilise sur ce site. Tous droits reserves.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-yellow">Mentions Legales</a>
            <a href="#" className="hover:text-yellow">Confidentialite</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

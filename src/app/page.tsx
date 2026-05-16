"use client";

import Image from "next/image";

// Custom inline SVGs for perfect Next.js / Turbopack integration without dependency errors
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const MessageCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const MessageSquareIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const RepeatIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m17 2 4 4-4 4"/>
    <path d="M3 11v-1a4 4 0 0 1 4-4h14"/>
    <path d="m7 22-4-4 4-4"/>
    <path d="M21 13v1a4 4 0 0 1-4 4H3"/>
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-10 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-2xl font-display text-blanc-casse" style={{ fontFamily: 'var(--font-display)' }}>
          Yabo Cuisine
        </div>
        <div className="hidden md-flex gap-8 text-sm font-medium uppercase tracking-widest text-blanc-casse">
          <a href="#accueil" className="hover:text-terre-cuite transition-colors">Accueil</a>
          <a href="#menu" className="hover:text-terre-cuite transition-colors">Menu</a>
          <a href="#histoire" className="hover:text-terre-cuite transition-colors">Notre histoire</a>
        </div>
        <a href="https://wa.me/33600000000" target="_blank" className="btn-primary flex gap-2">
          Commander <ArrowRightIcon />
        </a>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="section section-dark min-h-screen flex items-center justify-center pt-20">
        <div className="grain-overlay"></div>
        <div className="bg-circle-dec w-[600px] h-[600px] bg-terre-cuite/10 -top-20 -left-20"></div>
        
        <div className="container relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <span className="badge-pill bg-or-brule text-noir-riche">✦ Qualité · Saveur · Fait avec amour ✦</span>
          </div>
          
          <h1 className="h1-hero text-blanc-casse mb-6">
            Yabo Cuisine
          </h1>
          
          <p className="text-xl md-text-2xl text-creme-chaud/80 mb-4 max-w-2xl mx-auto italic">
            "Inspirée par l'amour de la bonne cuisine ♡"
          </p>
          
          <p className="text-lg md-text-xl text-blanc-casse/60 mb-10 max-w-3xl mx-auto">
            Dokor. Shawarma. Plats béninois. <br className="hidden md-block" />
            Faits à la main, avec amour, depuis Cergy.
          </p>
          
          <div className="flex flex-col md-flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/33600000000" target="_blank" className="btn-primary w-full md-w-auto px-10">
              Commander via WhatsApp →
            </a>
            <a href="#menu" className="btn-secondary w-full md-w-auto px-10">
              Voir le menu
            </a>
          </div>

          <div className="mt-16 relative w-full h-300 md-h-400">
            <Image 
              src="/assets/dokor_hero.png" 
              alt="Golden Dokor Beignets"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="histoire" className="section section-light">
        <div className="container">
          <div className="grid md-grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-section">Notre histoire</span>
              <h2 className="h2-section">Les petits débuts ne sont pas à négliger 🥹</h2>
              <div className="body-text text-noir-riche space-y-6">
                <p>
                  Je suis une étudiante béninoise en France, et Yabo Cuisine, c'est mon histoire.
                </p>
                <p>
                  Loin de chez moi, j'ai recréé les saveurs qui m'ont grandi — le dokor doré du matin, l'atassi parfumé, le jolof rice qui rassemble.
                </p>
                <p>
                  Pas d'usine. Pas de compromis. Juste moi, ma cuisine, et l'envie sincère de partager avec vous ce que ma culture a de plus généreux.
                </p>
              </div>
              <div className="mt-10">
                <p className="h2-section text-terre-cuite italic">"Pour vous !!!"</p>
              </div>
              <div className="mt-8 flex items-center gap-4 text-noir-riche/60">
                <HeartIcon className="text-terre-cuite" />
                <span className="font-bold">+4 600 ❤️ sur TikTok · 8 reposts · 108 commentaires</span>
              </div>
            </div>
            <div className="relative h-300 md-h-600 rounded-[24px] overflow-hidden border-2 border-noir-riche shadow-xl">
              <Image 
                src="/assets/yabo_packaging.png" 
                alt="Yabo Cuisine Packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section section-dark">
        <div className="grain-overlay"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="label-section">Ce qu'on prépare pour vous</span>
            <h2 className="h2-section text-blanc-casse">Le menu Yabo</h2>
          </div>

          <div className="grid-cols-3">
            {/* Card 1 */}
            <div className="card-light relative flex flex-col h-full">
              <div className="mb-4">
                <span className="badge-pill bg-or-brule">Sur commande</span>
              </div>
              <h3 className="h3-card mb-4">Dokor (Beignets) 🍩</h3>
              <p className="body-text text-noir-riche/70 mb-6">
                Nos beignets béninois, croustillants dehors et moelleux dedans. Sur commande uniquement — 24h à l'avance minimum.
              </p>
              <div className="mt-auto">
                <table className="w-full mb-6 border-collapse">
                  <tbody>
                    <tr className="border-b border-noir-riche/10 py-2">
                      <td className="py-2 font-medium">14 pièces</td>
                      <td className="py-2 text-right font-display text-xl">8€</td>
                    </tr>
                    <tr className="border-b border-noir-riche/10 py-2">
                      <td className="py-2 font-medium">28 pièces</td>
                      <td className="py-2 text-right font-display text-xl">14€</td>
                    </tr>
                    <tr className="border-b border-noir-riche/10 py-2">
                      <td className="py-2 font-medium">56 pièces</td>
                      <td className="py-2 text-right font-display text-xl">25€</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">100 pièces</td>
                      <td className="py-2 text-right font-display text-xl">35€</td>
                    </tr>
                  </tbody>
                </table>
                <a href="https://wa.me/33600000000" className="btn-primary w-full">Commander les Dokor →</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-light relative flex flex-col h-full">
              <div className="mb-4">
                <span className="badge-pill bg-terre-cuite text-white">Best-seller</span>
              </div>
              <h3 className="h3-card mb-4">Shawarma Maison 🌯</h3>
              <p className="body-text text-noir-riche/70 mb-6">
                Fait maison, généreux, accompagné de notre sauce signature. Une tuerie.
              </p>
              <div className="mt-auto">
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-creme-chaud/50 rounded-lg border border-noir-riche/10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">Box</span>
                      <span className="font-display text-xl">15€</span>
                    </div>
                    <p className="text-xs text-noir-riche/60">2 shawarmas + sauce</p>
                  </div>
                  <div className="p-4 bg-creme-chaud/50 rounded-lg border border-noir-riche/10">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">Menu</span>
                      <span className="font-display text-xl">18€</span>
                    </div>
                    <p className="text-xs text-noir-riche/60">2 shawarmas + frites + coca</p>
                  </div>
                </div>
                <a href="https://wa.me/33600000000" className="btn-primary w-full">Commander le Shawarma →</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-light relative flex flex-col h-full">
              <div className="mb-4">
                <span className="badge-pill bg-or-brule">Sur réservation</span>
              </div>
              <h3 className="h3-card mb-4">Plats Béninois 🍛</h3>
              <p className="body-text text-noir-riche/70 mb-6">
                Les vrais. Atassi, Jolof Rice, Akassa, Ablo, Eba. Recettes authentiques, cuisinées avec soin.
              </p>
              <div className="mt-auto">
                <ul className="text-sm space-y-2 mb-6 grid grid-cols-1 md-grid-cols-2 gap-x-4">
                  <li className="flex gap-2 items-center"><span>•</span> Atassi + Poulet/Poisson</li>
                  <li className="flex gap-2 items-center"><span>•</span> Jolof Rice + Aloko</li>
                  <li className="flex gap-2 items-center"><span>•</span> Riz Chicken Maffé</li>
                  <li className="flex gap-2 items-center"><span>•</span> Akassa Gborkpété</li>
                  <li className="flex gap-2 items-center"><span>•</span> Akassa Poisson</li>
                  <li className="flex gap-2 items-center"><span>•</span> Ablo Poulet/Poisson</li>
                </ul>
                <a href="https://wa.me/33600000000" className="btn-primary w-full">Passer une commande →</a>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 border border-blanc-casse/10 rounded-2xl bg-blanc-casse/5 text-center">
            <h4 className="font-bold mb-4">➕ Ajouter à votre commande</h4>
            <div className="flex flex-wrap justify-center gap-6 text-creme-chaud/80">
              <span>Wangachi (2 morceaux)</span>
              <span>·</span>
              <span>Aloko</span>
              <span>·</span>
              <span>Frites classiques</span>
              <span>·</span>
              <span>Frites de patate douce</span>
            </div>
          </div>
        </div>
      </section>

      {/* How To Order Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-section">Simple comme bonjour</span>
            <h2 className="h2-section">Commander en 3 étapes</h2>
          </div>

          <div className="grid md-grid-cols-3 gap-12">
            {[
              { 
                num: "1", 
                title: "Choisissez vos plats", 
                desc: "Parcourez le menu et notez ce qui vous fait envie." 
              },
              { 
                num: "2", 
                title: "Contactez-nous sur WhatsApp", 
                desc: "Envoyez votre commande au moins 24h à l'avance pour les plats sur réservation." 
              },
              { 
                num: "3", 
                title: "Récupérez votre commande", 
                desc: "À Cergy Préfecture. On vous dira exactement où au moment de confirmer." 
              }
            ].map((step, i) => (
              <div key={i} className="text-center md-text-left">
                <div className="font-display text-[80px] leading-none text-terre-cuite mb-4 opacity-20">0{step.num}</div>
                <h3 className="h3-card mb-4 -mt-10 relative z-10">{step.title}</h3>
                <p className="body-text text-noir-riche/70">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="https://wa.me/33600000000" className="btn-primary px-16 h-[60px] text-lg flex justify-center items-center gap-2">
              <MessageCircleIcon /> Envoyer un message WhatsApp →
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-noir-riche/60 font-medium">
              <div className="flex items-center gap-2"><span>📍</span> Cergy Préfecture</div>
              <div className="flex items-center gap-2"><span>🕕</span> Tous les jours dès 18h</div>
              <div className="flex items-center gap-2"><span>☀️</span> Week-end : matin au soir</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section section-dark">
        <div className="grain-overlay"></div>
        <div className="container relative z-10">
          <div className="grid md-grid-cols-2 gap-16 items-center">
            <div className="relative h-300 md-h-500 rounded-3xl overflow-hidden border border-blanc-casse/10">
              <Image 
                src="/assets/beninese_feast.png" 
                alt="Beninese Feast Table"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="label-section">Ce que les gens disent</span>
              <h2 className="h2-section text-blanc-casse">La communauté parle pour nous</h2>
              <p className="body-text text-creme-chaud/70 mb-10">
                Des milliers de personnes ont découvert Yabo Cuisine sur TikTok et Instagram. Rejoignez-nous pour voir les coulisses et les nouveaux plats.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-blanc-casse/5 rounded-2xl border border-blanc-casse/10">
                  <HeartIcon className="mx-auto mb-2 text-terre-cuite" />
                  <div className="font-display text-2xl">4 667</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Likes</div>
                </div>
                <div className="text-center p-6 bg-blanc-casse/5 rounded-2xl border border-blanc-casse/10">
                  <MessageSquareIcon className="mx-auto mb-2 text-or-brule" />
                  <div className="font-display text-2xl">108</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Comments</div>
                </div>
                <div className="text-center p-6 bg-blanc-casse/5 rounded-2xl border border-blanc-casse/10">
                  <RepeatIcon className="mx-auto mb-2 text-or-doux" />
                  <div className="font-display text-2xl">8</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Reposts</div>
                </div>
              </div>

              <a href="https://instagram.com/The_Yabo" className="btn-secondary w-full md-w-auto px-10">
                Nous suivre @The_Yabo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section section-brown py-16 border-t border-blanc-casse/5">
        <div className="container">
          <div className="grid md-grid-cols-4 gap-12">
            <div className="col-span-1 md-col-span-2">
              <div className="text-3xl font-display mb-4">Yabo Cuisine</div>
              <p className="text-creme-chaud/60 max-w-sm">
                Qualité · Saveur · Fait avec amour ♡ <br />
                Une étudiante béninoise qui partage les saveurs de son pays.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-or-brule">Infos Pratiques</h4>
              <ul className="space-y-4 text-creme-chaud/70">
                <li>📍 Cergy Préfecture</li>
                <li>🕕 Tous les jours dès 18h</li>
                <li>☀️ Week-end : matin au soir</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-or-brule">Suivez-nous</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/The_Yabo" className="p-3 bg-blanc-casse/5 rounded-full hover:bg-terre-cuite transition-colors text-blanc-casse flex justify-center items-center">
                  <InstagramIcon />
                </a>
                <a href="https://wa.me/33600000000" className="p-3 bg-blanc-casse/5 rounded-full hover:bg-terre-cuite transition-colors text-blanc-casse flex justify-center items-center">
                  <MessageCircleIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-blanc-casse/5 flex flex-col md-flex-row justify-between items-center gap-4 text-xs text-creme-chaud/40">
            <p>© 2025 Yabo Cuisine. Tous droits réservés.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-blanc-casse">Mentions Légales</a>
              <a href="#" className="hover:text-blanc-casse">Politique de Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

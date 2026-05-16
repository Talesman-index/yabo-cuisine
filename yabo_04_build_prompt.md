# Yabo Cuisine — Prompt de Building
> À coller directement dans Antigravity pour générer le site

---

## PROMPT PRINCIPAL (version complète)

```
Build a one-page website for "Yabo Cuisine", a Beninese homemade food business run by a student in Cergy, France.

---

BRAND IDENTITY
- Name: Yabo Cuisine
- Tagline: "Inspirée par l'amour de la bonne cuisine ♡"
- Narrative slogan: "Une étudiante béninoise en France qui partage les saveurs de son pays à travers une cuisine faite maison, généreuse et authentique."
- Logo: circular sticker with chef hat icon + "yabo CUISINE" + "pour vous !!"
- Language: French
- Tone: warm, proud, personal, like a friend cooking for you

---

AESTHETIC DIRECTION — AFRO-MODERN STREET FOOD PREMIUM
Inspired by Slice Town (framer) bold retro structure but adapted to an Afro aesthetic:
- Dark rich background (#0D0D0B) as primary surface — feel like a night market turned premium
- Terracotta (#C85A2F) as primary CTA and accent color
- Burnt gold (#D4942A) for highlights, icons, decorative details
- Warm cream (#F5E6CE) for card surfaces and alternating light sections
- Off-white (#FAF7F2) for text on dark backgrounds
- Hard-offset retro shadows (no blur): 0px 6px 0px -2px #0D0D0B on cards
- Subtle grain texture overlay on dark sections (SVG noise, opacity 4-6%)
- Large decorative circles in background (low opacity terracotta/gold) for depth
- Bold serif display font: Calistoga (Google Fonts) for all headlines
- Clean sans-serif: DM Sans for body, buttons, labels
- Alternating section backgrounds: dark (#0D0D0B) / warm cream (#F5E6CE)
- Product photos in rounded containers (border-radius 20px) or circular crops
- Section labels: uppercase DM Sans 11px, weight 700, letter-spacing 0.15em, color #C85A2F
- Primary CTA button: bg #C85A2F, text #FAF7F2, padding 14px 32px, border-radius 10px, shadow 0px -3px 0px 0px #7A2E0F, height 48px
- Secondary button: transparent bg, border 2px solid rgba(255,255,255,0.5), same sizing
- Cards on light sections: bg #FAF7F2, border 1px solid #0D0D0B, border-radius 16px, shadow 0px 6px 0px -2px #0D0D0B

---

SITE STRUCTURE — 6 SECTIONS

### SECTION 1 — HERO (dark background #0D0D0B)
- Full viewport height (100vh)
- Very large Calistoga headline: "Yabo Cuisine" (120–160px desktop, 64px mobile)
- Tagline below: "Inspirée par l'amour de la bonne cuisine ♡" (DM Sans 18px, cream)
- Short punch line: "Dokor. Shawarma. Plats béninois. Faits à la main, depuis Cergy."
- Two CTAs side by side: primary "Commander via WhatsApp →" + secondary "Voir le menu"
- Background: rich dark with subtle grain texture + large decorative low-opacity terracotta circle behind/around text
- Optional: floating food image (Dokor beignets) positioned asymmetrically on the right
- Small badge top or bottom: "✦ Qualité · Saveur · Fait avec amour ✦" — DM Sans uppercase, gold color

### SECTION 2 — STORY / À PROPOS (warm cream #F5E6CE)
- Section label: "NOTRE HISTOIRE"
- Headline (Calistoga 56px): "Les petits débuts ne sont pas à négliger 🥹"
- Two-column layout: left = text, right = image (Yabo packaging/logo sticker photo)
- Body text (DM Sans 17px, dark): the narrative paragraph about being a Beninese student in France, recreating the flavors of home — dokor, atassi, jolof rice — with no factory, no compromise, just sincere love of sharing
- Pull quote in large Calistoga, terracotta color: "Pour vous !!!"
- Social proof strip below: "❤️ 4 667 likes · 💬 108 commentaires · 🔁 8 reposts sur TikTok"

### SECTION 3 — MENU (dark #0D0D0B)
- Section label: "CE QU'ON PRÉPARE POUR VOUS"
- Headline (Calistoga 64px, cream): "Le menu Yabo"
- Three product cards side by side (on mobile: stacked):

  CARD 1 — Dokor (Beignets)
  - Badge pill "Sur commande" (gold bg, dark text)
  - Title: "Dokor 🍩" in Calistoga 32px
  - Description: "Beignets béninois croustillants dehors, moelleux dedans. Commande 24h à l'avance."
  - Pricing table: 14p→8€ / 28p→14€ / 56p→25€ / 100p→35€
  - CTA button: "Commander →" (terracotta)

  CARD 2 — Shawarma Maison
  - Title: "Shawarma Maison 🌯" in Calistoga 32px
  - Description: "Fait maison, généreux, avec notre sauce signature."
  - Box: 2 shawarmas + sauce → 15€
  - Menu: 2 shawarmas + frites + coca → 18€
  - CTA button: "Commander →" (terracotta)

  CARD 3 — Plats Béninois
  - Badge pill "Sur réservation" (gold)
  - Title: "Plats Béninois 🍛" in Calistoga 32px
  - Description: "Atassi, Jolof Rice, Akassa, Ablo, Eba. Recettes authentiques, cuisinées avec soin."
  - List of dishes (2-column list, small): Atassi Poulet/Poisson, Jolof Rice +options, Riz Chicken Maffé, Akassa Gborkpété, Akassa Poisson, Ablo Poulet/Poisson, Eba Poulet
  - CTA button: "Passer une commande →" (terracotta)

- Below cards: small supplements section — "Suppléments disponibles: Wangachi · Aloko · Frites · Frites de patate douce"

### SECTION 4 — COMMENT COMMANDER (warm cream #F5E6CE)
- Section label: "SIMPLE COMME BONJOUR"
- Headline (Calistoga 56px): "Commander en 3 étapes"
- Three horizontal steps with large numbered icons (Calistoga 80px, terracotta):
  1. "Choisissez vos plats" — Parcourez le menu et notez ce qui vous fait envie.
  2. "Contactez-nous sur WhatsApp" — Envoyez votre commande au moins 24h à l'avance pour les plats sur réservation.
  3. "Récupérez votre commande" — À Cergy Préfecture. On vous dit où au moment de confirmer.
- Big CTA below: "Envoyer un message WhatsApp →" (full-width on mobile, centered on desktop)
- Info strip: "📍 Cergy Préfecture · 🕕 Tous les jours dès 18h · ☀️ Week-end : du matin au soir"

### SECTION 5 — SOCIAL PROOF (dark #0D0D0B)
- Section label: "CE QUE LES GENS DISENT"
- Headline (Calistoga 56px, cream): "La communauté parle pour nous"
- Three stat cards in a row: "❤️ 4 667 likes" · "💬 108 commentaires" · "🔁 8 reposts"
- Short intro: "Des milliers de personnes ont découvert Yabo Cuisine sur TikTok et Instagram."
- CTA: "Nous suivre @The_Yabo →" (terracotta button, links to Instagram)
- Optional: embed or screenshot-style mockup of TikTok post

### SECTION 6 — FOOTER (dark #2C1810 — warm dark brown)
- Yabo Cuisine logo (text or circular sticker)
- Tagline: "Qualité · Saveur · Fait avec amour ♡"
- Three columns: Localisation (Cergy Préfecture) | Horaires (18h tous les jours, matin-soir week-end) | Commandes (WhatsApp)
- Social links: Instagram @The_Yabo · TikTok @The_Yabo
- Copyright: "© 2025 Yabo Cuisine. Tous droits réservés."

---

GLOBAL DESIGN RULES
- Font imports: Calistoga (400) + DM Sans (400, 500, 700) from Google Fonts
- Max container width: 1280px, centered
- Section vertical padding: 96–128px desktop, 56px mobile
- No blue/purple anywhere — strict terracotta, gold, cream, dark palette
- No soft drop shadows — only hard retro offset shadows
- All CTA buttons minimum height 48px, border-radius 10px
- Images: always border-radius 16–24px or circular
- Mobile: single column stacking, 16px horizontal padding, hero H1 at 64px
- Grain texture on dark sections: CSS background with SVG noise filter, opacity 5%
```

---

## PROMPT COURT (si le builder a une limite de caractères)

```
Build a French-language one-page site for "Yabo Cuisine" — a Beninese homemade food brand by a student in Cergy, France.

Style: Afro-modern street food premium. Dark rich backgrounds (#0D0D0B), terracotta CTAs (#C85A2F), burnt gold accents (#D4942A), warm cream card surfaces (#F5E6CE). Calistoga serif for all headlines (bold, large). DM Sans for body and buttons. Hard offset retro shadows (no blur). Subtle grain texture on dark sections.

6 sections:
1. HERO — Full viewport, huge "Yabo Cuisine" headline, tagline "Inspirée par l'amour de la bonne cuisine ♡", CTA "Commander via WhatsApp →"
2. STORY — Two-column: personal narrative (Beninese student sharing homemade authentic flavors), pull quote "Pour vous !!!", TikTok social proof (4667 likes)
3. MENU — 3 cards (dark bg): Dokor beignets (14pc=8€/28pc=14€/56pc=25€/100pc=35€), Shawarma Maison (Box 15€ / Menu 18€), Plats Béninois sur réservation (Atassi, Jolof Rice, Akassa, Ablo, Eba)
4. HOW TO ORDER — 3-step process, WhatsApp CTA, info: Cergy Préfecture, tous les jours 18h+
5. SOCIAL PROOF — Stats (4667❤️ 108💬 8🔁), follow CTA @The_Yabo
6. FOOTER — Logo, tagline, localisation, horaires, socials

Tone: warm, proud, personal, like a friend cooking for you. Language: French.
```

---

## NOTES D'ITÉRATION

Si le résultat initial est trop pâle ou générique :
> "Make the hero darker and more atmospheric. Increase the headline size. Add a subtle grain texture on dark sections. The terracotta CTA button should have a hard retro offset shadow, not a soft blur."

Si les cartes manquent de caractère :
> "Give the product cards a hard black border and a 6px offset shadow beneath them. Make the card titles larger in Calistoga serif. Add a gold pill badge for 'Sur commande'."

Si le style manque d'afro :
> "Add large decorative circles in the background of the hero section at low opacity (5-8%), in terracotta. Use more generous vertical spacing between sections. The overall feel should be a premium night market, warm and bold."
```

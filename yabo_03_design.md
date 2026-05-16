# Yabo Cuisine — Design System
> Adapté de Slice Town, orienté Afro-moderne chaud et premium

---

## 1. Direction artistique

**Style :** Afro-moderne street food premium
**Référence :** Slice Town (framer) — adapter la chaleur et le bold, pas l'esthétique pizzeria
**Ambiance :** Marché de nuit africain qui devient boutique premium. Chaud, dense, organique, confiant.
**Différence clé avec Slice Town :** Remplacer le gradient orange/ambre par un fond sombre (noir riche ou brun profond), avec accents or brûlé et terre cuite. Énergie nocturne vs énergie diurne.

---

## 2. Palette de couleurs

### Couleurs primaires
| Nom | Hex | Rôle |
|---|---|---|
| **Noir Riche** | `#0D0D0B` | Fond principal, sections hero |
| **Terre Cuite** | `#C85A2F` | CTA principal, accents, badges |
| **Or Brûlé** | `#D4942A` | Highlights, icônes, détails |

### Couleurs secondaires
| Nom | Hex | Rôle |
|---|---|---|
| **Crème Chaud** | `#F5E6CE` | Fonds de cartes claires, sections alternées |
| **Brun Profond** | `#2C1810` | Fonds de sections sombres alternatives |
| **Blanc Cassé** | `#FAF7F2` | Texte sur fond sombre, surfaces de carte |

### Accents
| Nom | Hex | Rôle |
|---|---|---|
| **Terracotta Vif** | `#E06030` | Hover states, éléments interactifs |
| **Or Doux** | `#F0B84A` | Éclats décoratifs, badges secondaires |
| **Brun Moyen** | `#8B4513` | Ombres colorées, dividers |

### Sémantique
| Rôle | Couleur | Hex |
|---|---|---|
| Texte principal (sur fond sombre) | Blanc cassé | `#FAF7F2` |
| Texte principal (sur fond clair) | Noir riche | `#0D0D0B` |
| Texte secondaire | Crème | `#C9A882` |
| CTA primary | Terre Cuite | `#C85A2F` |
| CTA secondary | Transparent + border blanc | — |
| Bordures | Blanc 30% opacity (sur sombre) / Noir (sur clair) | — |

---

## 3. Typographie

### Polices
| Rôle | Police | Fallback |
|---|---|---|
| **Display / Headlines** | Calistoga | Georgia, serif |
| **UI / Boutons / Body** | DM Sans | system-ui, sans-serif |

> **Import Google Fonts :**
> `Calistoga` (weight 400) + `DM Sans` (weight 400, 500, 700)

### Hiérarchie

| Niveau | Police | Taille desktop | Taille mobile | Poids |
|---|---|---|---|---|
| H1 Hero | Calistoga | 120–180px | 56–72px | 400 |
| H2 Section | Calistoga | 56–72px | 36px | 400 |
| H3 Carte | Calistoga | 32px | 24px | 400 |
| Body | DM Sans | 17px | 16px | 400 |
| Label section | DM Sans | 12px uppercase | 11px | 700 + letter-spacing 0.15em |
| CTA Bouton | DM Sans | 14px | 14px | 500 |
| Prix | Calistoga | 28px | 24px | 400 |

---

## 4. Composants

### Bouton CTA Principal
```
Background : #C85A2F (Terre Cuite)
Texte : #FAF7F2
Font : DM Sans 14px weight 500
Padding : 14px 32px
Border-radius : 10px
Border : none
Box-shadow : 0px -3px 0px 0px #7A2E0F (ombre offset retro, sombre)
Height : 48px
Hover : background #E06030, shadow maintenue
```

### Bouton Secondaire (Ghost)
```
Background : transparent
Texte : #FAF7F2
Font : DM Sans 14px weight 500
Padding : 14px 32px
Border-radius : 10px
Border : 2px solid rgba(255,255,255,0.5)
Box-shadow : none
Height : 48px
Hover : border opacity 100%, background rgba(255,255,255,0.05)
```

### Carte Produit (sur fond clair)
```
Background : #FAF7F2 ou #F5E6CE
Border : 1px solid #0D0D0B
Border-radius : 16px
Padding : 28px
Box-shadow : 0px 6px 0px -2px #0D0D0B
Hover shadow : 0px 10px 0px -2px #0D0D0B
```

### Badge / Label
```
Background : #D4942A (Or Brûlé)
Texte : #0D0D0B
Font : DM Sans 11px weight 700 uppercase
Padding : 4px 12px
Border-radius : 50px (pill)
Letter-spacing : 0.1em
```

### Label de section
```
Texte : #C85A2F
Font : DM Sans 11px weight 700 uppercase
Letter-spacing : 0.15em
Margin-bottom : 16px
```

---

## 5. Décoration & Texture (style Afro)

- **Grain overlay :** Appliquer un bruit SVG léger (opacity 0.04–0.08) sur les fonds sombres pour texture organique
- **Cercles décoratifs :** Grands cercles en arrière-plan, remplis Terre Cuite ou Or à opacity 0.05–0.1, pour profondeur
- **Points / Pattern :** Petits dots ou losanges répétés en pattern, couleur or à opacity 0.06, sur sections alternées
- **Ligne décorative :** Séparateur ondulé ou angulaire entre sections (SVG), couleur Terre Cuite
- **Images :** Toujours en `object-fit: cover`, dans des conteneurs à `border-radius: 20px` ou formes circulaires
- **Ratio photos produits :** Carré (1:1) ou légèrement portrait (4:5)

---

## 6. Ombres (style retro-print Afro)

| Niveau | Valeur | Usage |
|---|---|---|
| Subtil | `0px -2px 0px 0px #7A2E0F` | Petits boutons |
| Standard | `0px 4px 0px -2px #0D0D0B` | Cartes sur fond clair |
| Prominent | `0px 6px 0px -2px #0D0D0B` | Cartes sur hover |
| Deep | `0px 8px 0px -2px #0D0D0B` | Sections featured |

> Pas d'ombres floues. Toujours offset dur, style print/risographie.

---

## 7. Espacement

| Token | Valeur |
|---|---|
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 40px |
| XL | 64px |
| 2XL | 96px |
| 3XL | 128px |
| Hero vertical | 120–160px |

---

## 8. Layout & Grille

- **Max-width container :** 1280px
- **Grille :** 12 colonnes, gutter 20px
- **Padding horizontal desktop :** 40px
- **Padding horizontal mobile :** 16px
- **Sections alternées :** fond sombre (#0D0D0B) / fond clair (#F5E6CE) — jamais 2 sombres ou 2 clairs consécutifs

---

## 9. Border Radius

| Usage | Valeur |
|---|---|
| Boutons, cartes, inputs | 10–16px |
| Grands conteneurs | 24px |
| Pills / badges | 50px |
| Avatars / images rondes | 50% |
| Séparateurs, inputs underline | 0px |

---

## 10. À NE PAS FAIRE

- ❌ Fond blanc uni — trop froid, trop générique
- ❌ Gradient bleu/violet — cliché IA
- ❌ Inter ou Roboto en display — sans personnalité
- ❌ Ombres floues (box-shadow avec blur) — utiliser l'offset dur
- ❌ Iconographie trop "tech" — rester organique, chaleureux
- ❌ CTA vert ou bleu — romprait la cohérence Terre Cuite / Or
- ❌ Texte gris clair sur fond sombre — viser crème (#FAF7F2) pour le contraste

# Bonus Kebab — Site web (Astro + React)

Site multilingue (FR / DE / EN), ultra-léger, avec back-office PHP (galerie + menu de la semaine) pour Hostinger.

## 🚀 Commandes
```bash
npm install      # une fois
npm run dev      # développement local (http://localhost:4321) — le PHP /admin ne marche PAS ici
npm run build    # génère le site statique dans dist/
```

## 🖼️ Remplacer les images placeholder
À déposer dans `public/` (puis relancer `npm run build`) :
- **`public/logo.png`** — le vrai logo Bonus (PNG transparent de préférence).
- **`public/hero.jpg`** — la photo de l'enseigne (ou un beau visuel kebab/pizza).
- Galerie de départ : remplace les `public/gallery/1.svg … 6.svg`, ou gère tout depuis `/admin`.

## ✏️ Modifier les textes / infos
- **Coordonnées, liens, réseaux, commande** : `src/data/site.js` (un seul endroit).
- **Traductions de l'interface** : `src/i18n/ui.js`.
- **La carte** (plats / prix) : `src/data/menu.js` — actuellement en démo, à remplacer par la vraie carte.
- **Bouton GloriaFood** : quand prêt, mets l'URL dans `site.orderUrl` (et `reserveUrl`).

## 🔐 Back-office `/admin`
- URL : `https://tondomaine.lu/admin`
- Mot de passe initial : dans `public/api/config.php` → `ADMIN_PASSWORD` (actuellement `Bonuskebap9240**`).
- **Pour la production**, remplace-le par un hash bcrypt (généré sur Hostinger) :
  ```bash
  php -r "echo password_hash('TON_MOT_DE_PASSE', PASSWORD_DEFAULT);"
  ```
  Colle le résultat (commence par `$2y$...`) dans `ADMIN_PASSWORD` — le code détecte le hash automatiquement.
- Permet : ajouter/supprimer des photos de galerie + uploader/retirer la photo du menu de la semaine.
  Tout est **en temps réel** (pas de rebuild).

## 📦 Déploiement Hostinger (hPanel → File Manager)
1. `npm run build` → dossier `dist/`.
2. Upload **le contenu de `dist/`** dans `public_html/` (ou un sous-dossier — alors décommente `base` dans `astro.config.mjs`).
3. Vérifie que `data/` et `gallery/` et `menu/` sont **inscriptibles** par PHP (permissions 755/644).
4. Active le **SSL gratuit** Hostinger (HTTPS) pour `/admin`.

### ⚠️ Re-déploiement (TRÈS IMPORTANT)
Quand tu remets une nouvelle version en ligne, **n'écrase JAMAIS** ces dossiers, sinon les photos/menu ajoutés par le restaurateur sont perdus :
- `data/gallery.json` et `data/weekly-menu.json`
- `gallery/` et `menu/`

→ Upload tout SAUF ces dossiers.

## 🌍 Langues
- FR (racine `/`), DE (`/de/`), EN (`/en/`). Sélecteur de langue dans l'en-tête.

## 🍪 RGPD
Bandeau cookies (gratuit, auto-hébergé). La carte Google Maps ne se charge qu'après consentement.
Page mentions légales : `/mentions-legales` (FR), `/de/impressum`, `/en/legal` — **complète les champs `[à compléter]`** (RCS, TVA, e-mail).

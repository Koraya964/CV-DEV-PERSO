# Documentation complète du portfolio SYSTEM[JR] et thème NieraUI

---

## 1. Présentation générale

**SYSTEM[JR]** est le portfolio personnel de Julien Raynaud, conçu pour présenter ses projets web et son expertise en front-end et back-end. Le site utilise un design clair, modulable et rétro-futuriste nommé **NieraUI**.

Objectifs principaux :
- Présenter les projets front-end et back-end.
- Fournir une documentation complète sur le thème NieraUI.
- Offrir une expérience utilisateur immersive et cohérente.

---

## 2. Architecture du site

```
/portfolio
│── index.html         # Page d'accueil
│── front.html         # Projet front-end (Portfolio)
│── backend.html       # Projet back-end (BBH Ecosystem)
│── UI-UX(nieraui).html       # Documentation du thème NieraUI
│── contact.html       # Formulaire de contact
│── /assets            # Images, vidéos, icônes
│── /css               # Styles additionnels
│── /js                # Scripts JS additionnels
```

- Chaque page utilise **TailwindCSS** et **DaisyUI** via CDN.
- Police principale : **Orbitron** (Google Fonts).
- Design inspiré du rétro-futurisme et univers minimal-tech.

---

## 3. Pages principales

### 3.1 Accueil (index.html)
- Présentation succincte du portfolio.
- Liens vers projets front-end, back-end et documentation du thème.
- Boot screen interactif et effet CRT.

### 3.2 Front-end (front.html)
- Galerie d’aperçus visuels.
- Description des projets front-end.
- Stack technique : HTML5, TailwindCSS, DaisyUI, JS.
- Effets : hover-glow, fade-in, transitions de sections.

### 3.3 Back-end (backend.html)
- Projet **BBH Ecosystem** : gestionnaire de mots de passe et écosystème de sécurité.
- Sections : présentation, stack technique, galerie, liens GitHub et démo.
- Effets visuels similaires à la page front.

### 3.4 NieraUI (nieraui.html)
- Documentation du thème NieraUI.
- Sections : objectifs du thème, outils, méthodes de travail, sources & inspirations.
- Sert de modèle pour la création de nouvelles pages.

### 3.5 Contact (contact.html)
- Formulaire fonctionnel pour contacter l’auteur.
- Boutons DaisyUI et responsive design.

---

## 4. Stack technique

- **HTML5** : structure et sémantique.
- **TailwindCSS** : design utilitaire, responsive.
- **DaisyUI** : composants modulaires et thèmes.
- **JavaScript ES6+** : animations et interactions.
- **Google Fonts** : Orbitron.
- **Node.js / React / MongoDB** : back-end du projet BBH Ecosystem.
- **REST API** : sécurisation des données utilisateur.

---

## 5. Composants & styles

### 5.1 Boot Screen
- Overlay plein écran avec animation de texte (typing effect).
- Pulse bar animée.
- Transition d’opacité vers le contenu principal.

### 5.2 CRT Overlay
- Effet visuel inspiré des écrans rétro.
- Lignes horizontales semi-transparentes pour immersion.

### 5.3 Hover-glow
- Sur les images et boutons.
- Box-shadow + translation subtile.

### 5.4 Palette & typographie
- Fond : clair (#f3efdc) ou sombre (#101010 selon page).
- Texte : #1a1a1a ou #e3debc.
- Bordures & accents : #8c886f.
- Typographie : Orbitron.

### 5.5 Animations supplémentaires
- Fade-in des sections au chargement.
- Transitions de couleur sur hover.
- Glitch effect sur titres principaux.

---

## 6. Méthodes de travail

- Approche itérative : prototypage rapide et tests constants.
- Ajustement continu des couleurs, espacements, animations.
- Composants modulaires et réutilisables.
- Responsive design testé sur desktop, tablette et mobile.

---

## 7. Sources & Inspirations

- **Design système** : TailwindUI, DaisyUI.
- **Typographie** : Orbitron.
- **Couleurs** : inspirées de Nier Automata / univers minimal-tech.
- **Animations** : CSS + JS simples.
- Inspirations visuelles rétro-futuristes.

---

## 8. Guide d’utilisation / création de nouvelles pages

1. Créer un fichier `.html` dans le dossier principal.
2. Copier le template d’une page existante.
3. Mettre à jour :
   - `<title>` et header.
   - Contenu du `<main>`.
   - Galerie, liens, sections spécifiques.
4. Conserver :
   - Boot screen et typing effect.
   - CRT overlay.
   - Styles et classes Tailwind/DaisyUI.
5. Tester sur plusieurs résolutions.

---

## 9. Bonnes pratiques

- Respecter la palette de couleurs et typographie.
- Utiliser des composants modulaires pour cohérence.
- Ajouter des animations subtiles pour UX immersive.
- Préférer Tailwind/DaisyUI pour tout nouveau composant.

---

## 10. Informations complémentaires

- Les images de démonstration utilisent `placehold.co` pour les placeholders.
- Tous les boutons utilisent DaisyUI pour faciliter les thèmes et hover states.
- Compatible desktop et mobile, responsive et performant.

---

**Auteur :** Julien Raynaud  
**Année :** 2025  
**Site :** SYSTEM[JR]  
**Thème :** NieraUI


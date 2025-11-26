# Générateur de CV Dynamique

## 📌 Description du projet
Le **Générateur de CV Dynamique** est une application web interactive permettant de créer un CV complet en temps réel.  
L’utilisateur remplit un formulaire organisé par sections et visualise immédiatement son CV mis en forme grâce à une génération dynamique gérée en JavaScript.  
Une fois satisfait, il peut imprimer ou télécharger le CV final.

Ce projet a été réalisé dans le cadre du module *Développement Web* — FST Tunis (2025).

---

## 🚀 Technologies utilisées
- **HTML5** — structure de l’application  
- **CSS3** — design, animations, mise en page responsive  
- **JavaScript (DOM)** — génération dynamique du CV, interactions utilisateur

---

### ✅ Fonctionnalités Implémentées
- **📝 Formulaire complet** avec toutes les sections d'un CV professionnel
- **👀 Aperçu en temps réel** qui se met à jour instantanément
- **🔄 Duplication dynamique** des sections (formations, expériences, compétences, etc.)
- **🎨 Design responsive** adapté à tous les appareils
- **🖨️ Impression/Téléchargement** du CV au format PDF
- **✨ Animations CSS** pour une expérience utilisateur fluide
- **🎯 Navigation synchronisée** entre formulaire et aperçu

---

## 🌐 Lien vers le rendu final (GitHub Pages)
➡️ **https://rayen-ferchichii.github.io/ferchichi_rayen_generateur_de_cv_dynamique/**

---

## 📂 Lien du dépôt GitHub
➡️ **https://github.com/rayen-ferchichii/ferchichi_rayen_generateur_de_cv_dynamique**

---

## 🧠 Nouveautés Explorées

### 📚 Apprentissages Techniques
- **Manipulation avancée du DOM** avec `cloneNode()`, `querySelectorAll()`, `addEventListener()`
- **Gestion des événements** en temps réel (`input`, `change`, `click`)
- **CSS Grid et Flexbox** pour des layouts complexes et responsives
- **Animations CSS** avec `@keyframes` et transitions
- **Fonctions d'impression** natives du navigateur avec `window.print()`
- **Gestion des formulaires dynamiques** avec duplication de sections

### 🔍 Découvertes
- **`scroll-margin-top`** pour une navigation fluide entre les ancres
- **`word-wrap: break-word`** pour gérer les textes longs dans l'aperçu
- **`preventDefault()`** vs `type="button"` pour contrôler le comportement des formulaires
- **Gestion des IDs dupliqués** dans les éléments clonés
---

## 🚧 Défis Techniques et Solutions

### 🎯 Défi 1 : Gestion des Événements en Temps Réel
**Problème :** Coordonner la mise à jour instantanée de l'aperçu CV avec les interactions utilisateur sur un formulaire complexe.

**Solution :** Implémentation d'un système d'écouteurs d'événements optimisé avec une fonction centrale `changerapercu()` qui délègue aux fonctions spécialisées pour chaque section.

### 🔄 Défi 2 : Duplication Dynamique des Sections
**Problème :** Permettre à l'utilisateur d'ajouter plusieurs formations, expériences, etc., tout en conservant l'interactivité des nouveaux éléments.

**Solution :** Utilisation de `cloneNode(true)` combiné avec une réattribution intelligente des écouteurs d'événements via `evenementsformulaire()`.

### 🎨 Défi 3 : Interface Duale Responsive
**Problème :** Maintenir une expérience utilisateur fluide avec un formulaire à gauche et un aperçu CV à droite sur desktop, tout en garantissant l'empilement vertical sur mobile.

**Solution :** Layout Flexbox adaptatif avec media queries et gestion intelligente des hauteurs utilisant `max-height: 90vh`.

### 🖨️ Défi 4 : Fonctionnalité d'Export
**Problème :** Permettre l'impression/export du CV sans inclure l'interface de formulaire.

**Solution :** Remplacement temporaire du contenu de la page par le CV seul, impression, puis restauration complète de l'interface avec réinitialisation des écouteurs.

### 📱 Défi 5 : Gestion des États Complexes
**Problème :** Synchroniser parfaitement les données entre le formulaire étendu et l'aperçu CV, y compris pour les éléments dupliqués dynamiquement.

**Solution :** Parcours systématique de tous les fieldsets à chaque mise à jour, avec filtrage par type de section via le texte de la légende.

## 💡 Innovations Techniques Implémentées

### 🚀 Pattern d'Architecture Modulaire
- **Séparation des concerns** : Chaque fonction gère une section spécifique du CV
- **Réutilisabilité** : Fonctions comme `evenementsformulaire()` réutilisables après duplication
- **Maintenabilité** : Code structuré et facile à étendre

### ⚡ Optimisation des Performances
- **Événements délégués** : Écouteurs attachés une seule fois au chargement
- **Rafraîchissements ciblés** : Seules les sections modifiées sont mises à jour
- **Gestion mémoire** : Nettoyage propre des éléments dupliqués

### 🎭 Expérience Utilisateur Avancée
- **Feedback visuel immédiat** : Animations CSS sur les interactions
- **Navigation contextuelle** : Synchronisation automatique entre formulaire et aperçu via `synchronisationSimple()`
- **Validation progressive** : Indications visuelles pour les champs requis

## 📚 Apprentissages Clés

### 🔧 Développement Frontend
- **Manipulation avancée du DOM** avec `cloneNode()`, `querySelectorAll()`, `insertBefore()`
- **Gestion d'événements complexes** : `input`, `change`, `click` avec propagation contrôlée
- **CSS moderne** : Flexbox, Grid, animations `@keyframes`, `scroll-margin-top`
- **Architecture JavaScript** : Organisation modulaire et séparation des responsabilités

### 🎨 Design d'Interface
- **Design responsive** : Adaptation fluide desktop/mobile
- **UX temps réel** : Feedback immédiat des actions utilisateur
- **Accessibilité** : Labels associés, navigation clavier, contraste des couleurs

### 🔄 Gestion de Projet
- **Versionning Git** : Commits réguliers et messages descriptifs
- **Déploiement continu** : GitHub Pages pour l'hébergement
- **Documentation** : README structuré et explications techniques

- ## 🗂️ Structure du Projet
generateur-cv-dynamique/

├── index.html # Page principale avec structure HTML

├── style.css # Styles, responsive design et animations

├── java.js # Logique JavaScript et interactivité

├── README.md # Documentation du projet

## 👨‍💻 Auteur
**Rayen Ferchichi**  
Générateur de CV Dynamique — FST Tunis (2025)  
📧 Email : rayenlferchichi@gmail.com  
🔗 GitHub : https://github.com/rayen-ferchichii  

# CinéTech

CinéTech est une application web permettant d'explorer une vaste bibliothèque de films et de séries. Elle utilise l'API de **The Movie Database (TMDB)** pour afficher les tendances, les détails des œuvres et gérer une liste de favoris.

Ce projet a été réalisé dans le cadre d'un exercice de développement web axé sur JavaScript (fetch, DOM, asynchrone).

## Fonctionnalités

- **Accueil** : Affichage des films et séries populaires.
- **Recherche** : Barre de recherche dynamique.
- **Détails** : Informations complètes sur un film (résumé, note, date de sortie).
- **Favoris** : Gestion des favoris via le LocalStorage du navigateur.
- **Responsive** : Interface adaptée aux mobiles et aux écrans d'ordinateur.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

- Un navigateur web moderne.
- [Git](https://git-scm.com/) installé sur votre machine.
- Un éditeur de code (ex: VS Code).
- Une clé API gratuite de [TMDB](https://www.themoviedb.org/documentation/api).

## Installation

1. **Cloner le projet** :
   Ouvrez votre terminal et exécutez la commande suivante :
   ```bash
   git clone [https://github.com/VOTRE_NOM_UTILISATEUR/cinetheque.git](https://github.com/VOTRE_NOM_UTILISATEUR/cinetheque.git)

2. **Accéder au dossier** :
   ```bash
   cd cinetech

## Configuration

Pour des raisons de sécurité, la clé API n'est pas incluse dans le code source.

1. Allez dans le dossier `js` à la racine du projet.
2. Créez un fichier nommé `config.js`.
3. Copiez le code suivant à l'intérieur en remplaçant `VOTRE_CLE_ICI` par votre propre clé TMDB :

```javascript
const API_KEY = "VOTRE_CLE_ICI";
```

## Lancement

Ce projet ne nécessite pas de serveur Node.js complexe.

1. Ouvrez simplement le fichier `index.html` dans votre navigateur.
2. Pour une meilleure expérience (et éviter certains blocages liés à la sécurité du navigateur), utilisez l'extension **Live Server** sur VS Code.

## Déploiement

Le projet est conçu pour être hébergé gratuitement sur **GitHub Pages**.

1. Poussez (push) votre code final sur GitHub.
2. Allez dans l'onglet **Settings** (Paramètres) de votre dépôt.
3. Cliquez sur la section **Pages** dans la colonne de gauche.
4. Dans **Build and deployment**, sélectionnez la branche `main` (ou `master`) et cliquez sur **Save**.
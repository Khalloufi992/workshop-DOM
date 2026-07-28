# 🛒 Shopping Cart

## 📌 Description

Ce projet consiste à créer un panier d'achat entièrement fonctionnel en utilisant **HTML**, **CSS** et **JavaScript (DOM)**.

L'objectif est de manipuler le DOM et les événements JavaScript afin de rendre le panier interactif sans utiliser de bibliothèque ou de framework.

## 🎯 Fonctionnalités

Le panier permet de :

* ➕ Augmenter la quantité d'un article.
* ➖ Diminuer la quantité d'un article.
* 🗑️ Supprimer un article du panier.
* ❤️ Ajouter ou retirer un article des favoris en cliquant sur l'icône en forme de cœur.
* 💰 Mettre à jour automatiquement le prix total selon :

  * les quantités sélectionnées ;
  * les articles supprimés.

## 🛠️ Technologies utilisées

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

## 📂 Structure du projet

```text
shopping-cart/
│── index.html
│── style.css
│── script.js
│── README.md
```

## ⚙️ Fonctionnement

### Gestion des quantités

Les boutons **+** et **−** modifient la quantité de chaque produit. À chaque modification, le prix total est recalculé automatiquement.

### Suppression d'un produit

Le bouton **Supprimer** retire complètement le produit du panier ainsi que son coût du total.

### Articles favoris

En cliquant sur le cœur ❤️, le produit est marqué comme favori. La couleur du cœur change afin d'indiquer son état.

### Calcul du total

Le total est recalculé après chaque action :

* modification de quantité ;
* suppression d'un article.

Cela garantit que le montant affiché est toujours exact.

## 🚀 Lancer le projet

1. Télécharger ou cloner le dépôt Git.
2. Ouvrir le dossier du projet.
3. Double-cliquer sur **index.html** ou l'ouvrir avec un navigateur.

Aucune installation ni dépendance n'est nécessaire.

## 📚 Concepts JavaScript utilisés

* `querySelector()`
* `querySelectorAll()`
* `addEventListener()`
* Manipulation du DOM
* `closest()`
* Boucles (`forEach`)
* Gestion des événements (`click`)
* Manipulation des classes (`classList.toggle()`)
* Manipulation du contenu (`textContent`)
* Calcul dynamique du prix total

## 📖 Objectif pédagogique

Ce projet permet de pratiquer :

* la manipulation du DOM ;
* les événements JavaScript ;
* les fonctions ;
* les boucles ;
* la gestion d'un état dynamique ;
* le calcul automatique des données affichées.

## 👨‍💻 Auteur

**Anouar Khalloufi**

GitHub : https://github.com/Khalloufi992

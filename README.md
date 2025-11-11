# 🌍 LibreTranslate - Extension Navigateur (Manifest V3)

[![Version](https://img.shields.io/badge/Version-1.1.3-blue.svg)](https://github.com/votre-utilisateur/votre-repo)
[![Licence](https://img.shields.io/badge/License-AGPL--3.0-green.svg)](LICENSE)
[![Langue par défaut](https://img.shields.io/badge/Locale%20par%20d%C3%A9faut-Fran%C3%A7ais-blue.svg)](README.md)

---

## 🇫🇷 Français

## 📖 À propos

Cette extension pour **Chrome** et **Vivaldi** (et autres navigateurs basés sur Chromium) offre une solution de traduction rapide et **respectueuse de la vie privée**. Elle utilise l'API **LibreTranslate** pour traduire le texte sélectionné sans passer par les services des grandes entreprises technologiques.

L'extension est entièrement conforme aux exigences du **Manifest V3**.

## ✨ Fonctionnalités clés

* **Traduction rapide :** Traduit instantanément le texte sélectionné via un raccourci clavier.
* **Confidentialité :** Utilisez votre propre instance LibreTranslate (ou celle par défaut). Vos données ne sont pas tracées.
* **Langue cible :** Définie par défaut sur le **français** (`fr`).
* **Configuration facile :** Paramètres simples pour définir votre instance, votre clé API (si nécessaire) et la taille des zones de texte.

## 🚀 Installation

### Méthode 1 : Via le Chrome Web Store (à venir)

*(Si vous prévoyez de publier l'extension, laissez ce champ. Sinon, supprimez-le.)*

### Méthode 2 : Installation manuelle (développement/side-loading)

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/anyblabla/LibreTranslate.git
    ```
	>⚠️  Ou via Gitea :
    ```bash
    git clone https://gitea.blablalinux.be/blablalinux/LibreTranslate
    ```
2.  **Ouvrez votre navigateur** (Chrome, Vivaldi, etc.) et accédez à `chrome://extensions`.
3.  Activez le **mode développeur** (*Developer mode*) en haut à droite.
4.  Cliquez sur **Charger l'extension non empaquetée** (*Load unpacked*).
5.  Sélectionnez le dossier racine de l'extension (`votre-repo/`).

## ⚙️ Configuration

1.  **Accédez aux options :** Cliquez droit sur l'icône de l'extension dans votre barre d'outils et sélectionnez **Options**.
2.  **Instance LibreTranslate :** Entrez l'URL de l'instance LibreTranslate que vous souhaitez utiliser.
3.  **Clé API (Optionnel) :** N'est requise que si vous utilisez une instance privée ou un service payant. Laissez vide si vous utilisez l'instance publique par défaut.
4.  **Langues :** Définissez la Langue Cible par défaut (recommandé : `fr`).

## ⌨️ Raccourcis clavier

Le raccourci par défaut pour traduire le texte sélectionné est :

> **Alt + T**

*(Note : Si ce raccourci ne fonctionne pas, notamment sur les installations **Linux** utilisant des **paquets universels (type Flatpak)**, cela est dû à l'isolation du système qui bloque la commande. **Attention :** Malgré le changement de raccourci, il est possible que la fonction reste non opérationnelle en raison de conflits système profonds.)*

---

## 🇬🇧 English

## 📖 About

This extension for **Chrome** and **Vivaldi** (and other Chromium-based browsers) offers a fast and **privacy-friendly** translation solution. It uses the **LibreTranslate** API to translate selected text without relying on services from big tech companies.

The extension is fully compliant with **Manifest V3** requirements.

## ✨ Key features

* **Quick translation:** Instantly translates selected text via a keyboard shortcut.
* **Privacy:** Use your own LibreTranslate instance (or the default one). Your data is not tracked.
* **Target language:** Default setting is **French** (`fr`).
* **Easy configuration:** Simple settings to define your instance, API key (if needed), and text area sizes.

## 🚀 Installation

### Method 1: Via the Chrome Web Store (coming soon)

*(If you plan to publish the extension, leave this field. Otherwise, delete it.)*

### Method 2: Manual installation (development/side-loading)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/anyblabla/LibreTranslate.git
    ```
    >⚠️  Or via Gitea :
    ```bash
    git clone https://gitea.blablalinux.be/blablalinux/LibreTranslate
    ```
2.  **Open your browser** (Chrome, Vivaldi, etc.) and go to `chrome://extensions`.
3.  Enable **Developer mode** in the top right corner.
4.  Click **Load unpacked**.
5.  Select the root folder of the extension (`votre-repo/`).

## ⚙️ Configuration

1.  **Access options:** Right-click the extension icon in your toolbar and select **Options**.
2.  **LibreTranslate instance:** Enter the URL of the LibreTranslate instance you wish to use.
3.  **API Key (Optional):** Only required if you are using a private instance or a paid service. Leave blank if using the default public instance.
4.  **Languages:** Set the Default Target Language (recommended: `fr`).

## ⌨️ Keyboard shortcuts

The default shortcut to translate selected text is:

> **Alt + T**

*(Note: If this shortcut does not work, especially on **Linux** installations using **universal packages (such as Flatpak)**, this is due to system isolation blocking the command. **Warning:** Even after changing the shortcut, the function may remain non-operational due to deep system conflicts.)*

---

## 🤝 Contribution / Contribution

This project is licensed under AGPL-3.0. Contributions are welcome! Feel free to open issues or submit pull requests on **Codeberg**.

## ⚖️ Licence / License

This project is distributed under the **AGPL-3.0** license. See the [LICENSE](LICENSE) file for details.

---
*Développé par Blabla Linux / Developed by Blabla Linux*
*Basé sur le travail initial de Indogermane / Based on initial work by Indogermane*

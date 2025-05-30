import React from 'react';

const CookiesPolicy = () => {
  const handleCookieSettings = () => {
    // Fonction pour gérer les préférences de cookies
    if (typeof window !== 'undefined') {
      // Ici vous intégrerez votre solution de gestion des cookies
      alert("Ouvrir le gestionnaire de consentement des cookies");
    }
  };

  return (
    <div className="container my-5">
      <div className="p-4">
        <h1 className="text-center mb-4">Politique de Cookies</h1>
        <p className="text-muted">Dernière mise à jour : 01/01/2023</p>

        <div className="cookie-section">
          <h2>1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. 
            Il permet au site de mémoriser vos actions et préférences sur une période donnée.
          </p>
        </div>

        <div className="cookie-section">
          <h2>2. Types de cookies utilisés</h2>
          <p>Nous utilisons différents types de cookies :</p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (authentification, panier d'achat)
            </li>
            <li className="list-group-item">
              <strong>Cookies de performance :</strong> Pour analyser l'utilisation du site et améliorer nos services
            </li>
            <li className="list-group-item">
              <strong>Cookies de fonctionnalité :</strong> Pour mémoriser vos préférences (langue, paramètres)
            </li>
            <li className="list-group-item">
              <strong>Cookies marketing :</strong> Pour vous proposer des publicités ciblées
            </li>
          </ul>
        </div>

        <div className="cookie-section">
          <h2>3. Gestion des cookies</h2>
          <p>
            Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez via les paramètres de votre navigateur.
            Cependant, la désactivation des cookies essentiels peut affecter le fonctionnement du site.
          </p>
          <button 
            onClick={handleCookieSettings}
            className="btn btn-outline-primary cookie-manager-btn"
          >
            Gérer mes préférences
          </button>
        </div>

        <div className="cookie-section">
          <h2>4. Cookies tiers</h2>
          <p>
            Nous utilisons des services tiers (Google Analytics, Facebook Pixel, etc.) qui peuvent déposer leurs propres cookies.
            Nous n'avons pas accès à ces cookies et leur utilisation est régie par les politiques de ces tiers.
          </p>
        </div>

        <div className="cookie-section">
          <h2>5. Modifications de la politique</h2>
          <p>
            Nous pouvons mettre à jour cette politique occasionnellement. Nous vous invitons à la consulter régulièrement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
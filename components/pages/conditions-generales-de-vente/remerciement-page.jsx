import React from 'react';
import Head from 'next/head';

const CGV = () => {
  return (
    <>
      <div className="container my-5">
        <div className="p-4">
          <h1 className="text-center mb-4">Conditions Générales de Vente</h1>
          <p className="text-muted">Dernière mise à jour : 01/01/2023</p>

          <div className="mb-4">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre Votre Société, 
              société immatriculée au RCS de Paris sous le numéro 123 456 789, et tout acheteur de formations en ligne proposées 
              sur le site www.votresiteformations.com.
            </p>
          </div>

          <div className="mb-4">
            <h2>2. Produits</h2>
            <p>
              Nous proposons des formations en ligne dans les domaines du développement web, marketing digital et gestion de projet. 
              Chaque formation est clairement décrite sur le site (contenu, durée, niveau, prérequis).
            </p>
          </div>

          <div className="mb-4">
            <h2>3. Prix et paiement</h2>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                Les prix sont indiqués en euros toutes taxes comprises (TVA applicable selon la législation française en vigueur).
              </li>
              <li className="list-group-item">
                Paiement sécurisé par carte bancaire, PayPal ou autres moyens de paiement proposés.
              </li>
              <li className="list-group-item">
                L'accès à la formation est conditionné au paiement complet.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h2>4. Droit de rétractation</h2>
            <p>
              Conformément à l'article L.221-18 du Code de la consommation, vous disposez d'un délai de 14 jours à compter de la 
              date d'achat pour exercer votre droit de rétractation sans avoir à justifier de motifs.
            </p>
            <p>
              <span className="badge bg-warning text-dark">Exception :</span> Si vous avez commencé à consommer la formation avant la fin du délai 
              de rétractation, vous perdez ce droit.
            </p>
          </div>

          <div className="mb-4">
            <h2>5. Accès aux formations</h2>
            <p>
              Après paiement, vous recevez un lien d'accès et des identifiants personnels. L'accès est généralement valable 
              12 mois à compter de la date d'achat.
            </p>
          </div>

          <div className="mb-4">
            <h2>6. Propriété intellectuelle</h2>
            <p>
              Les contenus de formation sont protégés par le droit d'auteur. Toute reproduction, diffusion ou utilisation commerciale 
              non autorisée est strictement interdite.
            </p>
          </div>

          <div className="mb-4">
            <h2>7. Responsabilité</h2>
            <p>
              Nous nous engageons à fournir des formations de qualité mais ne garantissons pas les résultats obtenus par l'utilisateur. 
              Nous ne pourrons être tenus responsables des interruptions de service dues à des problèmes techniques.
            </p>
          </div>

          <div className="mb-4">
            <h2>8. Litiges</h2>
            <p>
              En cas de litige, une solution amiable sera recherchée prioritairement. À défaut, les tribunaux français seront compétents.
            </p>
          </div>

          <div className="mb-4">
            <h2>9. Données personnelles</h2>
            <p>
              Vos données sont traitées conformément à notre politique de confidentialité et en accord avec le RGPD.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CGV;
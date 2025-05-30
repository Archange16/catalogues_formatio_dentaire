import Link from 'next/link';

const MainMenu = () => {

    // Fonction pour envoyer un événement Pixel lors d'un clic
    const handleMenuClick = (pageName) => {
        if (typeof window !== "undefined" && window.fbq) {
            // On envoie un événement 'PageView' pour chaque lien cliqué
            window.fbq('track', 'PageView', {
                page_name: pageName,  // Le nom de la page visitée
            });
        }
    };

    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/" onClick={() => handleMenuClick('Accueil')}>Accueil</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="https://formations-dentaire.fr" onClick={() => handleMenuClick('À propos')}>⁠Formation Dentaire</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/categories/Entrepreneur" onClick={() => handleMenuClick('Formations')}>Création Entreprise</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="/Contact" onClick={() => handleMenuClick('Blog')}>Contact</Link>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;

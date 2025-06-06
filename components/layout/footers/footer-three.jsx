import Link from "next/link";
import logo from "../../../public/assets/img/logo-2.png";
import Social from "@/components/data/social";
import { useState } from 'react';
import SideBarContact from "../headers/offcanvas_cont";

const FooterThree = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Veuillez entrer un email valide.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            // Appel à l'API route Next.js pour envoyer l'email à Brevo
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Votre email a été envoyé avec succès !');
                setEmail('');

                setTimeout(() => {
                    setMessage('');
                }, 3000);
            } else {
                setMessage(`Erreur: ${data.message}`);
                setTimeout(() => {
                    setMessage('');
                }, 3000);
            }
        } catch (error) {
            setMessage('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <div className="footer__three">
            <div className="container pt-80 pb-80">
               {/*  <div className="row gy-4 justify-content-between"> */}
                
                    <div className="col-xl-12 col-md-6 col-sm-5 sm-mb-30">
                        <div className="footer__three-widget border-one">
                            <div className="footer__three-widget-solution">
                                <ul>
									<li><Link href="/">Accueil</Link></li>
									<li><Link href="https://formations-dentaire.fr/#Solutions">⁠Formation Dentaire</Link></li>
									<li><Link href="/categories/Entrepreneur">⁠Création Entreprise</Link></li>
									<li onClick={() => setSidebarOpen(true)}><Link href="">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                {/* </div> */}
            </div>
            <div className="copyright__one two">
                <div className="container">
                    <div className="row justify-content-between copyright__one-container-area">
                        <div className="col-xl-5 col-lg-6"> 
                            <div className="copyright__one-left">
                                <p>Copyright ©  
                                    <Link href="/" target="_blank"> Kelaj Formation </Link></p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="copyright__one-right">
                                <Link href="/cookiepolicy" target="_blank">POLITIQUE DE COOKIES</Link> |
                                 <Link href="/cgv" target="_blank"> Conditions générales de vente</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SideBarContact isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        </>
    );
};

export default FooterThree;
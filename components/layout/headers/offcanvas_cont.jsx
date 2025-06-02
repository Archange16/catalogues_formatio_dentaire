import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';
import React, { useState, useEffect, useRef } from 'react';
import FormArea from '@/components/pages/contacts/form';


const SideBarContact = ({ isOpen, setIsOpen }) => {
    // Référence au sidebar pour détecter les clics en dehors
    const sidebarRef = useRef(null);

    // Utilisation de useEffect pour détecter un clic en dehors du sidebar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false); // Fermer le sidebar si on clique en dehors
            }
        };

        // Ajouter l'écouteur d'événements lors du montage
        document.addEventListener('mousedown', handleClickOutside);

        // Nettoyage de l'écouteur d'événements lors du démontage
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsOpen]);

    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`} ref={sidebarRef}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
                        <i className="fal fa-times"></i>
                    </div>
                <div className="header__area-menubar-right-sidebar-popup-logo ">
                    <Link href='/'>
                        <img className='logo_one' src={logo2.src} alt="logo" />
                    </Link>
                </div>    
                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="">Pour toute question, contactez-nous, nous répondrons rapidement.</h4>
                    <FormArea />
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBarContact;

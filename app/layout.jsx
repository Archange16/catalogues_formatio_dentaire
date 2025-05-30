"use client"
import { useEffect } from 'react';
import "./globals.css";
import { Suspense } from "react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
    useEffect(() => {
        // Charger Bootstrap en mode client
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.min.js');
        }
    }, []);

    useEffect(() => {
        // Ajouter un contrôle de validation de l'ID du pixel Facebook
        if (!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) {
            console.error('Pixel ID de Facebook manquant ! Assurez-vous qu\'il est correctement défini dans .env.local');
        }
    }, []);

    return (
        <html lang="en">
            <head>
                <script
                    src="https://checkout.revolut.com/checkout.js" // Assurez-vous que ce lien est correct
                    async
                />
            </head>
            <body>
                {children}
                <ToastContainer />
                {/* Suspense est utilisé pour charger Facebook Pixel sans bloquer le rendu */}
                <Suspense fallback={null}>
                    {/* <FacebookPixelEvents /> */}
                </Suspense>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_PIXEL_ID} />
            </body>
        </html>
    );
}

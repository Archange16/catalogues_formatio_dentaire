"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import ScrollToTop from "../common/scroll/scroll-to-top";
import RemerciementPage from "./remerciement-page";
import FooterThree from "@/components/layout/footers/footer-three";

const CookiIndex = () => {
    return (
        <>
            <SEO pageTitle="Politique de Cookies" />
            <HeaderOne />
            <RemerciementPage/>
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default CookiIndex;
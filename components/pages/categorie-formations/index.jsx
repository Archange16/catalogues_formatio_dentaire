"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import WorkArea from "../home/work";
import Testimonial from "../home/testimonial";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FooterThree from "@/components/layout/footers/footer-three";
import CategoriesMain from "./categories";

const CategoriesPage = () => {
    return (
        <>
            <SEO pageTitle="Kelaj Formation" />
            <HeaderOne />
            <BreadCrumb title="Kelaj Formation" innerTitle="Kelaj Formation" />
            <CategoriesMain />
            <WorkArea />
            <Testimonial />
            <FooterThree />
            <ScrollToTop />
        </>
    );
};

export default CategoriesPage;
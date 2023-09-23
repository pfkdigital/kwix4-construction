import Services from "@/components/Services/Services";
import {NextSeo} from "next-seo";
import React from "react";

const ServicesPage = () => {
    return (
        <>
            <NextSeo
                title="Professional Building Services - Kwix4 Construction | Manchester"
                description="Discover our wide range of professional building services in Manchester including Tiling, Flooring, Plastering, Painting, Bathroom Renovations, and Kitchen Installations."
                canonical="https://www.kwix4construction.co.uk/services"
                openGraph={{
                    type: "website",
                    locale: "en_GB",
                    url: "https://www.kwix4construction.co.uk/services",
                    title: "Expert Construction Services - Kwix4 Construction | Manchester",
                    description:
                        "Explore the variety of top-quality services we offer in Manchester and the Greater Manchester areas, such as Bathroom Renovations, Kitchen Installations, Tiling, Flooring, Plastering, and Painting. We are dedicated to delivering excellence in every project.",
                    site_name: "Kwix4 Construction",
                }}
            />
            <Services theme={"light"}/>
        </>
    );
};

export default ServicesPage;

import Services from "@/components/Services/Services";
import { NextSeo } from "next-seo";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <NextSeo
        title="Services - Kwix4 Construction"
        description="Explore the range of services offered by Kwix4 Construction. From renovations to garden works, we cover it all."
        canonical="https://www.kwix4construction.co.uk/services"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://www.kwix4construction.co.uk/services",
          title: "Services - Kwix4 Construction",
          description:
            "Explore the range of services offered by Kwix4 Construction. From renovations to garden works, we cover it all.",
          site_name: "Kwix4 Construction",
        }}
      />
      <Services />
    </>
  );
};

export default Services;

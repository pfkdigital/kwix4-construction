import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import ServiceHeader from "@/components/ServiceHeader/ServiceHeader";
import { services } from "@/components/Services/data";
import { ServiceCardProps } from "@/types/service-card.types";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";

type ServicePage = {
  currentService: Omit<ServiceCardProps, "svg">;
};

const ServicesPage = ({ currentService }: ServicePage) => {
  return (
    <>
        <NextSeo
            title={`${currentService.name} in Manchester - Kwix4 Construction`}
            description={`${currentService.name} services in Manchester and the Greater Manchester areas. ${currentService.description}`}
            canonical={`https://www.kwix4construction.co.uk/services/${currentService.slug}`}
            openGraph={{
                type: "website",
                locale: "en_GB",
                url: `https://www.kwix4construction.co.uk/services/${currentService.slug}`,
                title: `${currentService.name} Services in Manchester - Kwix4 Construction`,
                description: `Offering expert ${currentService.name} in Manchester and the Greater Manchester areas. Discover our commitment to quality and customer satisfaction. ${currentService.description}`,
                site_name: "Kwix4 Construction",
            }}
        />
      <ServiceHeader
        title={currentService.name}
        description={currentService.description}
      />
      <ServiceDetails details={currentService.details} />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = services.map((sevice) => {
    return { params: { service: sevice.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { service } = context.params;

  const item = services.filter(
    (currentService) => service === currentService.slug
  );
  const currentService = item[0];
  delete (currentService as ServiceCardProps).svg;
  return {
    props: { currentService },
  };
};

export default ServicesPage;

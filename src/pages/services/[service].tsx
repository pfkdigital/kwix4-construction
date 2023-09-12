import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import ServiceHeader from "@/components/ServiceHeader/ServiceHeader";
import { services } from "@/components/Services/data";
import { ServiceCardProps } from "@/types/service-card.types";
import React, { useEffect } from "react";

type ServicePage = {
  currentService: Omit<ServiceCardProps, "svg">;
};

const ServicesPage = ({ currentService }: ServicePage) => {
  return (
    <>
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

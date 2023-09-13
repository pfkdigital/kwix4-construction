import ContactForm from "@/components/ContactForm/ContactForm";
import { NextSeo } from "next-seo";
import React from "react";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Us - Kwix4 Construction"
        description="Get in touch with Kwix4 Construction. Whether you have a query, feedback, or want to discuss a project, we're here to help."
        canonical="https://www.kwix4construction.co.uk/contact"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://www.kwix4construction.co.uk/contact",
          title: "Contact Us - Kwix4 Construction",
          description:
            "Get in touch with Kwix4 Construction. Whether you have a query, feedback, or want to discuss a project, we are here to help.",
          site_name: "Kwix4 Construction",
        }}
      />
      <ContactForm />
    </>
  );
};

export default Contact;

import ContactForm from "@/components/ContactForm/ContactForm";
import {NextSeo} from "next-seo";
import React from "react";

const Contact = () => {
    return (
        <div className="relative">
            <NextSeo
                title="Contact Us - Kwix4 Construction | Manchester"
                description="Ready to start your next project in Manchester or the Greater Manchester areas? Contact Kwix4 Construction today to discuss your needs and receive a no-obligation quote. We are here to answer any queries you have about our services."
                canonical="https://www.kwix4construction.co.uk/contact"
                openGraph={{
                    type: "website",
                    locale: "en_GB",
                    url: "https://www.kwix4construction.co.uk/contact",
                    title: "Get in Touch - Kwix4 Construction | Manchester",
                    description:
                        "Looking to transform your space in Manchester? Reach out to Kwix4 Construction for any inquiries or to discuss your project needs. We specialize in various construction services and are committed to ensuring customer satisfaction.",
                    site_name: "Kwix4 Construction",
                }}
            />
            <ContactForm/>
        </div>
    );
};

export default Contact;

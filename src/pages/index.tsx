import Header from "@/components/Header/Header";
import {Aboutus} from "@/components/Aboutus/Aboutus";
import Services from "@/components/Services/Services";
import Reviews from "@/components/Reviews/Reviews";
import {NextSeo} from "next-seo";

const Home = () => {
    return (
        <>
            <NextSeo
                title="Home - Kwix4 Construction | Building Services in Manchester"
                description="Welcome to Kwix4 Construction, your local construction and building services provider in Manchester and the Greater Manchester areas. Discover our high-quality services, read reviews, and learn more about us."
                canonical="https://www.kwix4construction.co.uk/"
                openGraph={{
                    type: "website",
                    locale: "en_GB",
                    url: "https://www.kwix4construction.co.uk/",
                    title: "Home - Kwix4 Construction | Manchester's Trusted Builders",
                    description:
                        "Specializing in superior construction services in Manchester and the Greater Manchester areas, Kwix4 Construction is your local, trusted building partner. Explore our range of services, read customer reviews, and get in touch with us.",
                    site_name: "Kwix4 Construction",
                }}
            />
            <Header/>
            <Aboutus/>
            <Services theme={"dark"}/>
            <Reviews/>
        </>
    );
};

export default Home;

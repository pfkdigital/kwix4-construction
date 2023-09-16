import Header from "@/components/Header/Header";
import { Aboutus } from "@/components/Aboutus/Aboutus";
import Services from "@/components/Services/Services";
import Reviews from "@/components/Reviews/Reviews";
import { NextSeo } from "next-seo";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Home - Kwix4 Construction"
        description="Welcome to Kwix4 Construction. Discover our services, read reviews, and learn more about us."
        canonical="https://www.kwix4construction.co.uk/"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://www.kwix4construction.co.uk/",
          title: "Home - Kwix4 Construction",
          description:
            "Welcome to Kwix4 Construction. Discover our services, read reviews, and learn more about us.",
          site_name: "Kwix4 Construction",
        }}
      />
      <Header />
      <Aboutus />
      <Services theme={"dark"}/>
      <Reviews />
    </>
  );
};

export default Home;

import Header from "@/components/Header/Header";
import { Aboutus } from "./../components/Aboutus/Aboutus";
import Services from "@/components/Services/Services";
import Reviews from "@/components/Reviews/Reviews";

const Home = () => {
  return (
    <>
      <Header />
      <Aboutus />
      <Services />
      <Reviews />
    </>
  );
};

export default Home;

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import React from "react";

interface PrimaryLayoutsProps {
  children: React.ReactNode;
}

const PrimaryLayouts: React.FC<PrimaryLayoutsProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PrimaryLayouts;

import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import React from "react";

interface PrimaryLayoutsProps {
  children: React.ReactNode;
}

const PrimaryLayouts: React.FC<PrimaryLayoutsProps> = ({ children }) => {
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PrimaryLayouts;

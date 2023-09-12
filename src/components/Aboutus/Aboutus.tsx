/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Aboutus = () => {
  return (
    <section
      className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins"
      id="about"
    >
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1523413184730-e85dbbd04aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="tiling-services-kwix4"
                className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                fill
              />
              <div className="absolute z-10 hidden w-full h-full bg-orange-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="relative">
              <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  opacity-5 md:block hidden">
                About Us
              </h1>
              <h1 className="pl-2 text-3xl font-bold border-l-8 text-gray-500 border-orange-400 md:text-5xl">
                Welcome
              </h1>
            </div>
            <p className="mt-6 mb-10 text-base leading-7 text-gray-500 ">
              Kwix4 is your go-to local construction partner, proudly serving
              our community for over 5 years. We specialize in tiling, flooring,
              plastering, painting, and turning your dream bathrooms and
              kitchens into reality. Each project we undertake showcases our
              unwavering commitment to quality craftsmanship and our deep
              understanding of our clients needs. From start to finish, rely on
              Kwix4 to ensure every detail is built just right, making your
              vision come alive.
            </p>
            <Link
              href="/services"
              className="px-4 py-3 text-gray-50 transition-all transform bg-orange-400 rounded-[80px] hover:bg-orange-500"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import bathroom1 from "@/../public/bathroom-before-1.webp";
import bathroom2 from "@/../public/bathroom-before-4.webp";
import kitchen1 from "@/../public/kitchen-tiling.webp";
import kitchen2 from "@/../public/kitchen-tiling-2.webp";
import wall1 from "@/../public/wall-works-1.webp";
import wall2 from "@/../public/wall-works-2.webp";
import garden1 from "@/../public/garden-before.webp";
import garden2 from "@/../public/garden-after.webp";
import { NextSeo } from "next-seo";

export const Portfolio = () => {
  return (
    <>
      <NextSeo
        title="Portfolio - Kwix4 Construction"
        description="Browse through our portfolio to see the transformational work done by Kwix4 Construction. From bathrooms to gardens, witness the quality of our craftsmanship."
        canonical="https://www.kwix4construction.co.uk/portfolio"
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "https://www.kwix4construction.co.uk/portfolio",
          title: "Portfolio - Kwix4 Construction",
          description:
            "Browse through our portfolio to see the transformational work done by Kwix4 Construction. From bathrooms to gardens, witness the quality of our craftsmanship.",
          site_name: "Kwix4 Construction",
        }}
      />
      <section className="flex items-center py-16 bg-gray-100 font-poppins">
        <div className="max-w-8xl p-4 mx-auto">
          <h2 className="pb-4 text-4xl font-bold text-center text-gray-800 ">
            Our Gallery
          </h2>
          <div className="mx-auto mb-16 border-b-8 border-orange-500 w-44 "></div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full px-4 mb-8 lg:w-2/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={bathroom1}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="bathroom-renovation-before-pic"
                  fill
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>

            <div className="w-full px-4 mb-8 lg:w-3/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={bathroom2}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="bathroom-renovation-after-pic"
                  fill
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>

            <div className="w-full px-4 mb-8 lg:w-3/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={kitchen1}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="kitchen-renovation-before-pic"
                  fill
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>

            <div className="w-full px-4 mb-8 lg:w-2/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={kitchen2}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="kitchen-after-pic"
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>

            <div className="w-full px-4 mb-8 lg:w-2/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={wall1}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="plastering-before"
                  fill
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>

            <div className="w-full px-4 mb-8 lg:w-3/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={wall2}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="plastering-after"
                  fill
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>
            <div className="w-full px-4 mb-8 lg:w-3/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={garden2}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="garden-after-picture"
                  fill
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>

            <div className="w-full px-4 mb-8 lg:w-2/5">
              <div className="relative overflow-hidden shadow-lg group h-[350px]">
                <Image
                  src={garden1}
                  className="group-hover:origin-center group-hover:scale-105 transition inset-0 object-cover object-center duration-500 w-full h-[350px]"
                  alt="garden-before-picture"
                  loading="eager"
                />
                <div className="absolute inset-0 z-0 "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

/* eslint-disable @next/next/no-img-element */
import { ServiceDetailsType } from "@/types/service-card.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DetailsType = {
  details: ServiceDetailsType;
};

const ServiceDetails = ({ details }: DetailsType) => {
  const renderFeatures = () => {
    return details.features.map((feature, index) => {
      return (
        <li
          className="flex items-center mb-4 text-base text-gray-600 "
          key={index}
        >
          <span className="mr-3 text-orange-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-5 h-5 bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          </span>
          {feature}
        </li>
      );
    });
  };
  return (
    <section className="flex items-center bg-stone-100 lg:h-screen font-poppins ">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-2xl font-bold text-gray-700 ">
              {details.title}
            </h2>
            <div className="flex justify-start w-32 mt-1 mb-6 overflow-hidden rounded md:mb-14">
              <div className="flex-1 h-2 bg-orange-200"></div>
              <div className="flex-1 h-2 bg-orange-400"></div>
              <div className="flex-1 h-2 bg-orange-300"></div>
            </div>
            <p className="mb-4 text-base leading-7 text-gray-500 ">
              {details.description}
            </p>
            <ul className="mb-10">{renderFeatures()}</ul>
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-100 bg-orange-500 rounded-md hover:bg-orange-600"
            >
              Contact us
            </Link>
          </div>
          <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0 h-44 md:h-96">
            <Image
              src={details.images}
              alt={`${details.title}-Kwix4`}
              className="relative z-40 object-cover w-full rounded-md md:h-96 h-44"
              fill
              quality={10}
            />
            <div className="absolute top-0 right-0 items-center justify-center hidden -mt-16 lg:inline-flex"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
